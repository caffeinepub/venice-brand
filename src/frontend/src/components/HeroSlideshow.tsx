import { useCallback, useEffect, useRef, useState } from "react";

interface Slide {
  src: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/assets/generated/slideshow-marilyn-style.dim_1400x900.jpg",
    caption: "Marilyn Monroe · 1950s",
  },
  {
    src: "/assets/generated/slideshow-audrey-style.dim_1400x900.jpg",
    caption: "Audrey Hepburn · 1950s",
  },
  {
    src: "/assets/generated/slideshow-grace-style.dim_1400x900.jpg",
    caption: "Grace Kelly · 1950s",
  },
  {
    src: "/assets/generated/slideshow-madonna-style.dim_1400x900.jpg",
    caption: "Madonna · 1980s",
  },
  {
    src: "/assets/generated/slideshow-cyndi-style.dim_1400x900.jpg",
    caption: "Cyndi Lauper · 1980s",
  },
];

interface HeroSlideshowProps {
  className?: string;
}

export function HeroSlideshow({ className = "" }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === activeIndex) return;
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      setTransitioning(true);
    },
    [activeIndex, transitioning],
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % slides.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goNext();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext]);

  // Reset interval on manual navigation
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goNext();
    }, 5000);
  }, [goNext]);

  const handlePrev = () => {
    goPrev();
    resetInterval();
  };

  const handleNext = () => {
    goNext();
    resetInterval();
  };

  const handleDot = (i: number) => {
    goTo(i);
    resetInterval();
  };

  return (
    <div
      className={`${className}`}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      aria-label="Icon slideshow"
    >
      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === activeIndex;
        const isPrev = i === prevIndex;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${slide.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              opacity: isActive ? 1 : 0,
              transition:
                isActive || isPrev ? "opacity 1s ease-in-out" : "none",
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
            onTransitionEnd={() => {
              if (isActive) {
                setTransitioning(false);
                setPrevIndex(null);
              }
            }}
          />
        );
      })}

      {/* Left arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "1.25rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "oklch(0.15 0.04 15 / 0.55)",
          border: "1px solid oklch(0.72 0.12 75 / 0.5)",
          color: "oklch(0.72 0.12 75)",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(4px)",
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "oklch(0.72 0.12 75 / 0.25)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "oklch(0.72 0.12 75)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "oklch(0.15 0.04 15 / 0.55)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "oklch(0.72 0.12 75 / 0.5)";
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "1.25rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "oklch(0.15 0.04 15 / 0.55)",
          border: "1px solid oklch(0.72 0.12 75 / 0.5)",
          color: "oklch(0.72 0.12 75)",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(4px)",
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "oklch(0.72 0.12 75 / 0.25)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "oklch(0.72 0.12 75)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "oklch(0.15 0.04 15 / 0.55)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "oklch(0.72 0.12 75 / 0.5)";
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: "5rem",
          left: "1.5rem",
          zIndex: 20,
          background: "oklch(0.12 0.04 15 / 0.75)",
          border: "1px solid oklch(0.72 0.12 75 / 0.3)",
          padding: "0.35rem 0.85rem",
          backdropFilter: "blur(6px)",
          borderRadius: "2px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "oklch(0.72 0.12 75)",
          }}
        >
          {slides[activeIndex].caption}
        </span>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to slide ${i + 1}: ${slides[i].caption}`}
            onClick={() => handleDot(i)}
            style={{
              width: i === activeIndex ? "1.5rem" : "0.45rem",
              height: "0.45rem",
              borderRadius: "9999px",
              border: "none",
              background:
                i === activeIndex
                  ? "oklch(0.72 0.12 75)"
                  : "oklch(0.88 0.03 75 / 0.45)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
