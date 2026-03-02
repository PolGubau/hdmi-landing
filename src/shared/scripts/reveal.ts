/**
 * Global scroll reveal system.
 * One observer for entire app.
 */

const observer = new IntersectionObserver(
	(entries, obs) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;

			const el = entry.target as HTMLElement;
			el.dataset.state = "visible";
			obs.unobserve(el);
		}
	},
	{
		threshold: 0.15,
		rootMargin: "0px 0px -10% 0px",
	},
);

function init() {
	document
		.querySelectorAll<HTMLElement>("[data-reveal]:not([data-init])")
		.forEach((el, index) => {
			el.dataset.init = "true";
			el.dataset.state = "hidden";

			// stagger automático por parent
			const parent = el.parentElement;
			const stagger = parent?.dataset.stagger;

			if (stagger) {
				el.style.setProperty("--delay", `${index * Number(stagger)}ms`);
			}

			observer.observe(el);
		});
}

document.addEventListener("astro:page-load", init);
document.addEventListener("DOMContentLoaded", init);