import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { Testimonial } from "~/app/sections/testimonials/Testimonials.astro";

import { TestimonialCard } from "./TestimonialCard";

import { cn, toCssLength } from "~/lib/utils";

export interface LogoLoopProps {
  testimonials: Testimonial[];

  speed?: number;

  direction?: "left" | "right";

  width?: number | string;

  logoHeight?: number;

  gap?: number;

  pauseOnHover?: boolean;

  fadeOut?: boolean;

  fadeOutColor?: string;

  scaleOnHover?: boolean;

  ariaLabel?: string;

  className?: string;

  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,

  MIN_COPIES: 2,

  COPY_HEADROOM: 2,
} as const;

const useResizeObserver = (
  callback: () => void,

  elements: Array<React.RefObject<Element | null>>,

  dependencies: React.DependencyList,
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();

      window.addEventListener("resize", handleResize);

      callback();

      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;

      const observer = new ResizeObserver(callback);

      observer.observe(ref.current);

      return observer;
    });

    callback();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,

  targetVelocity: number,

  seqWidth: number,

  isHovered: boolean,

  pauseOnHover: boolean,
) => {
  const rafRef = useRef<number | null>(null);

  const lastTimestampRef = useRef<number | null>(null);

  const offsetRef = useRef(0);

  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seqWidth > 0) {
      offsetRef.current =
        ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;

      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = "translate3d(0, 0, 0)";

      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime =
        Math.max(0, timestamp - lastTimestampRef.current) / 1000;

      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);

      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;

        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;

        offsetRef.current = nextOffset;

        const translateX = -offsetRef.current;

        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);

        rafRef.current = null;
      }

      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const TestimonialLoop = React.memo<LogoLoopProps>(
  ({
    testimonials,

    speed = 60,

    direction = "left",

    width = "100%",

    logoHeight = 500,

    gap = 32,

    pauseOnHover = true,

    fadeOut = true,

    scaleOnHover = true,

    ariaLabel = "Partner testimonials",

    className,

    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const trackRef = useRef<HTMLDivElement>(null);

    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);

    const [copyCount, setCopyCount] = useState<number>(
      ANIMATION_CONFIG.MIN_COPIES,
    );

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);

      const directionMultiplier = direction === "left" ? 1 : -1;

      const speedMultiplier = speed < 0 ? -1 : 1;

      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;

      const sequenceWidth =
        seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));

        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) +
          ANIMATION_CONFIG.COPY_HEADROOM;

        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(
      updateDimensions,

      [containerRef, seqRef],

      [testimonials, gap, logoHeight],
    );

    useAnimationLoop(
      trackRef,

      targetVelocity,

      seqWidth,

      isHovered,

      pauseOnHover,
    );

    const cssVariables = useMemo(
      () =>
        ({
          "--logoloop-gap": `${gap}px`,

          "--logoloop-logoHeight": `${logoHeight}px`,
        }) as React.CSSProperties,

      [gap, logoHeight],
    );

    const rootClasses = useMemo(
      () =>
        cn(
          "relative overflow-x-hidden group",

          "[--logoloop-gap:32px]",

          "[--logoloop-logoHeight:28px]",

          className,
        ),

      [scaleOnHover, className],
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback(
      (item: Testimonial, key: React.Key) => {
        // oxlint-disable-next-line no-unused-vars

        const content = (
          <TestimonialCard testimonial={item} height={logoHeight} />
        );

        return (
          <li
            className={cn(
              "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",

              scaleOnHover && "overflow-visible group/item",
            )}
            key={key}
            role="listitem"
          >
            {content}
          </li>
        );
      },

      [scaleOnHover],
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="flex items-center pb-14"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {testimonials.map((item, itemIndex) =>
              renderLogoItem(item, `${copyIndex}-${itemIndex}`),
            )}
          </ul>
        )),

      [copyCount, testimonials, renderLogoItem],
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: toCssLength(width) ?? "100%",

        ...cssVariables,

        ...style,
      }),

      [width, cssVariables, style],
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 z-[1]",

                "w-[clamp(24px,8%,120px)]",

                "bg-gradient-to-r from-background",
              )}
            />
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 z-[1]",

                "w-[clamp(24px,8%,120px)]",

                "bg-gradient-to-l from-background",
              )}
            />
          </>
        )}

        <div
          className={cn(
            "flex w-max will-change-transform select-none",

            "motion-reduce:transform-none",
          )}
          ref={trackRef}
        >
          {logoLists}
        </div>
      </div>
    );
  },
);

export default TestimonialLoop;
