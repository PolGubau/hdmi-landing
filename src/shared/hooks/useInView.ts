import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

/**
 * Detects when an element enters viewport using IntersectionObserver.
 */
export function useInView<T extends HTMLElement>({
	threshold = 0.2,
	rootMargin = "0px",
	once = true,
}: UseInViewOptions = {}) {
	const ref = useRef<T | null>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					if (once) observer.disconnect();
				} else if (!once) {
					setIsInView(false);
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [threshold, rootMargin, once]);

	return { ref, isInView };
}
