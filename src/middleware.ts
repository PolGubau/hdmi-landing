import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(
	async ({ url, request, redirect }, next) => {
		const host = url.hostname.toLowerCase();
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
