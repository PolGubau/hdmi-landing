import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(
	async ({ url, request, redirect }, next) => {
		const host = url.hostname.toLowerCase();

		// Debug: ver qué hostname estamos recibiendo
		console.log("🔍 Middleware - hostname:", host);
		console.log("🔍 Middleware - full URL:", url.href);

		// Solo redirigir en producción (no en localhost ni desarrollo)
		const isLocalhost =
			host === "localhost" ||
			host === "127.0.0.1" ||
			host.startsWith("192.168.") ||
			host.includes("localhost");

		console.log("🔍 Middleware - isLocalhost:", isLocalhost);

		// Salir temprano si es localhost
		if (isLocalhost) {
			console.log("✅ Es localhost, no redirigiendo");
			return next();
		}

		console.log("⚠️ NO es localhost, aplicando redirecciones");

		// Solo en producción: redirigir www y http
		const forwardedProto = request.headers.get("x-forwarded-proto");
		const protocol = (
			forwardedProto ?? url.protocol.replace(":", "")
		).toLowerCase();

		const shouldRedirectToCanonical =
			host === "www.doscientos.es" || protocol === "http";

		if (shouldRedirectToCanonical) {
			const targetUrl = new URL(
				`${url.pathname}${url.search}`,
				"https://doscientos.es",
			);
			return redirect(targetUrl.toString(), 301);
		}

		return next();
	},
);
