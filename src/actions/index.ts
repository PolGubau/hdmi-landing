import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.PUBLIC_RESEND_API);

// Función para parsear User Agent
function parseUserAgent(ua: string) {
	const browser =
		ua.match(/(Chrome|Firefox|Safari|Edge|Opera|MSIE|Trident)/i)?.[0] ||
		"Unknown";
	const os = ua.match(/(Windows|Mac|Linux|Android|iOS)/i)?.[0] || "Unknown";
	const device = /Mobile|Android|iPhone|iPad/i.test(ua)
		? "Mobile"
		: /Tablet|iPad/i.test(ua)
			? "Tablet"
			: "Desktop";

	return { browser, os, device };
}

export const server = {
	sendContact: defineAction({
		accept: "form",
		input: z.object({
			name: z.string().min(1, "El nombre es obligatorio"),
			email: z.string().email("Email inválido"),
			phone: z.string().min(1, "El teléfono es obligatorio"),
			company: z.string().optional(),
			message: z.string().min(1, "El mensaje debe tener al menos 1 carácter"),
			timezone: z.string().optional(),
			utm_source: z.string().optional(),
			utm_medium: z.string().optional(),
			utm_campaign: z.string().optional(),
		}),
		handler: async (input, context) => {
			const {
				name,
				email,
				phone,
				company,
				message,
				timezone,
				utm_source,
				utm_medium,
				utm_campaign,
			} = input;

			// Obtener datos del request
			const userAgent = context.request.headers.get("user-agent") || "Unknown";
			const { browser, os, device } = parseUserAgent(userAgent);
			const language =
				context.request.headers.get("accept-language")?.split(",")[0] ||
				"Unknown";
			const referrer = context.request.headers.get("referer") || "Direct";

			// IP del cliente
			const forwarded = context.request.headers.get("x-forwarded-for");
			const realIP = context.request.headers.get("x-real-ip");
			const cfConnectingIP = context.request.headers.get("cf-connecting-ip");
			const ip =
				forwarded?.split(",")[0].trim() ||
				realIP ||
				cfConnectingIP ||
				"Unknown";

			const timestamp = new Date().toLocaleString("es-ES", {
				timeZone: "Europe/Madrid",
			});

			// Preparar datos para Google Sheets
			const sheetData = {
				timestamp,
				name,
				email,
				phone,
				company: company || "",
				message,
				ip,
				userAgent,
				browser,
				os,
				device,
				language,
				timezone: timezone || "Unknown",
				referrer,
				utmSource: utm_source || "",
				utmMedium: utm_medium || "",
				utmCampaign: utm_campaign || "",
			};

			try {
				// 1. Enviar email con Resend
				const { data: emailData, error: emailError } = await resend.emails.send(
					{
						from: "Landing <hola@doscientos.es>",
						to: ["hola@doscientos.es"],
						replyTo: email,
						subject: `Nuevo contacto: ${name}`,
						html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #2A4227; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 20px; }
                  .label { font-weight: 600; color: #50576b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
                  .value { margin-top: 5px; font-size: 16px; }
                  .metadata { background: white; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 14px; }
                  .metadata-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
                  .metadata-item:last-child { border-bottom: none; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 24px;">Nuevo Contacto desde la Web</h1>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Nombre</div>
                      <div class="value">${name}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">Email</div>
                      <div class="value"><a href="mailto:${email}">${email}</a></div>
                    </div>
                    
                    <div class="field">
                      <div class="label">Teléfono</div>
                      <div class="value"><a href="tel:${phone}">${phone}</a></div>
                    </div>
                    
                    ${
											company
												? `
                    <div class="field">
                      <div class="label">Empresa</div>
                      <div class="value">${company}</div>
                    </div>
                    `
												: ""
										}
                    
                    <div class="field">
                      <div class="label">Mensaje</div>
                      <div class="value">${message.replace(/\n/g, "<br>")}</div>
                    </div>
                    
                    <div class="metadata">
                      <div class="metadata-item">
                        <span><strong>Fecha/Hora:</strong></span>
                        <span>${timestamp}</span>
                      </div>
                      <div class="metadata-item">
                        <span><strong>IP:</strong></span>
                        <span>${ip}</span>
                      </div>
                      <div class="metadata-item">
                        <span><strong>Navegador:</strong></span>
                        <span>${browser}</span>
                      </div>
                      <div class="metadata-item">
                        <span><strong>Sistema:</strong></span>
                        <span>${os}</span>
                      </div>
                      <div class="metadata-item">
                        <span><strong>Dispositivo:</strong></span>
                        <span>${device}</span>
                      </div>
                      ${
												referrer !== "Direct"
													? `
                      <div class="metadata-item">
                        <span><strong>Referrer:</strong></span>
                        <span>${referrer}</span>
                      </div>
                      `
													: ""
											}
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
					},
				);

				if (emailError) {
					console.error("Error enviando email:", emailError);
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						// biome-ignore lint/style/useTemplate: <explanation>
						message: "Error al enviar el email: " + emailError.message,
					});
				}

				// 2. Guardar en Google Sheets
				const GOOGLE_SHEETS_URL = import.meta.env.PUBLIC_GOOGLE_SHEETS_URL;

				console.log("Google Sheets URL:", GOOGLE_SHEETS_URL);
				console.log("Datos a enviar:", sheetData);

				if (GOOGLE_SHEETS_URL) {
					try {
						const sheetResponse = await fetch(GOOGLE_SHEETS_URL, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(sheetData),
						});

						console.log("Google Sheets response status:", sheetResponse.status);
						const sheetResult = await sheetResponse.text();
						console.log("Google Sheets response:", sheetResult);
					} catch (sheetError) {
						console.error("Error guardando en Google Sheets:", sheetError);
						// No lanzar error, continuar aunque falle Google Sheets
					}
				} else {
					console.warn("GOOGLE_SHEETS_URL no está configurada");
				}

				return {
					success: true,
					message: "Mensaje enviado correctamente",
					emailId: emailData?.id,
				};
			} catch (error) {
				console.error("Error en sendContact:", error);
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: error instanceof Error ? error.message : "Error desconocido",
				});
			}
		},
	}),
};
