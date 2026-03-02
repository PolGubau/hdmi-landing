/**
 * Global scroll reveal system.
 * One observer for entire app.
 */

const observer = new IntersectionObserver(
	(entries, obs) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;

			const el = entry.target as HTMLElement;

			console.debug(
				"[Reveal] Elemento visible:",
				el,
				`dirección: ${el.dataset.reveal}`,
			);

			// Pequeño delay para asegurar que el estado hidden se aplicó
			requestAnimationFrame(() => {
				el.dataset.state = "visible";
				console.debug("[Reveal] Estado cambiado a visible para:", el);
			});

			obs.unobserve(el);
		}
	},
	{
		threshold: 0.15,
		rootMargin: "0px 0px -10% 0px",
	},
);

function init() {
	const elements = document.querySelectorAll<HTMLElement>(
		"[data-reveal]:not([data-init])",
	);

	console.debug(`[Reveal] Inicializando ${elements.length} elementos`);

	elements.forEach((el) => {
		el.dataset.init = "true";

		// Forzar estado hidden primero
		el.dataset.state = "hidden";

		// Configuración desde data attributes
		const duration = el.dataset.duration;
		const delay = el.dataset.delay;
		const easing = el.dataset.easing;

		if (duration) {
			el.style.setProperty("--reveal-duration", `${duration}ms`);
		}

		if (delay) {
			el.style.setProperty("--reveal-delay", `${delay}ms`);
		}

		if (easing) {
			el.style.setProperty("--reveal-easing", easing);
		}

		// Stagger automático por parent
		const parent = el.parentElement;
		const stagger = parent?.dataset.stagger;

		if (stagger) {
			// Calcular índice dentro del parent
			const siblings = Array.from(
				parent.querySelectorAll<HTMLElement>("[data-reveal]"),
			);
			const indexInParent = siblings.indexOf(el);

			const staggerDelay = indexInParent * Number(stagger);
			const baseDelay = Number(delay || 0);

			el.style.setProperty("--reveal-delay", `${baseDelay + staggerDelay}ms`);
		}

		observer.observe(el);

		console.debug(
			"[Reveal] Observando elemento:",
			el,
			`con dirección: ${el.dataset.reveal}`,
		);
	});
}

// Ejecutar lo antes posible
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}

document.addEventListener("astro:page-load", init);
