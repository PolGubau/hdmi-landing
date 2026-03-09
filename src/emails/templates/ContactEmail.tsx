/**
 * ContactEmail - Template profesional para emails de contacto
 * Compatible con React Email / Resend
 */

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
  phone,
  company,
}: ContactEmailProps) => {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo contacto - doscientos</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                doscientos
              </h1>
              <p style="margin: 8px 0 0; color: #a0a0a0; font-size: 14px;">
                Nuevo mensaje de contacto
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 24px; color: #333333; font-size: 16px; line-height: 1.6;">
                Hola equipo,
              </p>
              
              <p style="margin: 0 0 32px; color: #333333; font-size: 16px; line-height: 1.6;">
                Has recibido un nuevo mensaje de contacto desde la web:
              </p>

              <!-- Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</strong>
                          <p style="margin: 4px 0 0; color: #000000; font-size: 16px; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                          <p style="margin: 4px 0 0;">
                            <a href="mailto:${email}" style="color: #000000; font-size: 16px; text-decoration: none; font-weight: 600;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      ${phone
      ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</strong>
                          <p style="margin: 4px 0 0;">
                            <a href="tel:${phone}" style="color: #000000; font-size: 16px; text-decoration: none; font-weight: 600;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                      `
      : ""
    }
                      ${company
      ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Empresa</strong>
                          <p style="margin: 4px 0 0; color: #000000; font-size: 16px; font-weight: 600;">${company}</p>
                        </td>
                      </tr>
                      `
      : ""
    }
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="background-color: #ffffff; border-left: 4px solid #000000; padding: 20px; margin-bottom: 32px;">
                <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 12px;">Mensaje</strong>
                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${email}" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">
                      Responder a ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 8px; color: #666666; font-size: 13px;">
                Este email fue enviado desde el formulario de contacto de
              </p>
              <p style="margin: 0; color: #000000; font-size: 14px; font-weight: 600;">
                doscientos.es
              </p>
              <p style="margin: 16px 0 0; color: #999999; font-size: 12px;">
                ${new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export default ContactEmail;

