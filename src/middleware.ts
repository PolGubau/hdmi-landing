import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ url, redirect }, next) => {
	const host = url.hostname.toLowerCase();

	const isLocalhost =
		host === "localhost" ||
		host === "127.0.0.1" ||
		host.startsWith("192.168.") ||
		host.includes("localhost");

	if (isLocalhost) return next();

	// Skip redirect for Astro Actions — redirecting a cross-origin POST causes CORS errors
	if (url.pathname.startsWith("/_actions/")) return next();

	const shouldRedirectToCanonical = host === "www.doscientos.es";

	if (shouldRedirectToCanonical) {
		const targetUrl = new URL(
			`${url.pathname}${url.search}`,
			"https://doscientos.es",
		);
		return redirect(targetUrl.toString(), 301);
	}

	return next();
});

