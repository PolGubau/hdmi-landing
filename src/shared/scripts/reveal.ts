/**
 * Global scroll reveal system.
 * One observer for entire app.
 */

// Map para observers con diferentes thresholds
const observers = new Map<string, IntersectionObserver>();

function getObserver(threshold: number, rootMargin: string) {
	const key = `${threshold}-${rootMargin}`;

	if (!observers.has(key)) {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;

					const el = entry.target as HTMLElement;

					// Pequeño delay para asegurar que el estado hidden se aplicó
					requestAnimationFrame(() => {
						el.dataset.state = "visible";

						// Dispatch custom event para callbacks
						el.dispatchEvent(
							new CustomEvent("reveal", {
								detail: { direction: el.dataset.reveal },
							}),
						);
					});

					obs.unobserve(el);
				}
			},
			{
				threshold,
				rootMargin,
			},
		);

		observers.set(key, observer);
	}

	return observers.get(key)!;
}

function init() {
	const elements = document.querySelectorAll<HTMLElement>(
		"[data-reveal]:not([data-init])",
	);

	for (const el of elements) {
		el.dataset.init = "true";

		// Forzar estado hidden primero
		el.dataset.state = "hidden";

		// Configuración desde data attributes
		const duration = el.dataset.duration;
		const delay = el.dataset.delay;
		const easing = el.dataset.easing;
		const distance = el.dataset.distance;

		if (duration) {
			el.style.setProperty("--reveal-duration", `${duration}ms`);
		}

		if (delay) {
			el.style.setProperty("--reveal-delay", `${delay}ms`);
		}

		if (easing) {
			el.style.setProperty("--reveal-easing", easing);
		}

		if (distance) {
			const distanceMap: Record<string, string> = {
				small: "16px",
				medium: "32px",
				large: "64px",
			};
			el.style.setProperty(
				"--reveal-distance",
				distanceMap[distance] || `${distance}px`,
			);
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

		// Threshold y rootMargin personalizables
		const threshold = Number(el.dataset.threshold || 0.15);
		const rootMargin = el.dataset.rootMargin || "0px 0px -10% 0px";

		const observer = getObserver(threshold, rootMargin);
		observer.observe(el);
	}
}

// Ejecutar lo antes posible
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}

document.addEventListener("astro:page-load", init);
