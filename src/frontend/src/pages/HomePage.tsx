import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

type Page = "home" | "beauty" | "fashion" | "talent" | "contact";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const featureCards = [
  {
    page: "beauty" as Page,
    category: "Beauty",
    tagline: "The Beauty Edit",
    description:
      "Timeless rituals, golden age secrets, and the wisdom of generations — distilled for the modern woman of discernment.",
    era: "Since 1920",
    gradient:
      "linear-gradient(160deg, oklch(0.78 0.07 20) 0%, oklch(0.55 0.10 15) 100%)",
    accentColor: "oklch(0.72 0.12 75)",
  },
  {
    page: "fashion" as Page,
    category: "Fashion",
    tagline: "The Fashion Chronicle",
    description:
      "From flapper beads to mod geometry — a curated journey through fashion's most extraordinary chapters.",
    era: "Circa 1920–1969",
    gradient:
      "linear-gradient(160deg, oklch(0.28 0.06 250) 0%, oklch(0.18 0.04 250) 100%)",
    accentColor: "oklch(0.72 0.12 75)",
  },
  {
    page: "talent" as Page,
    category: "Talent",
    tagline: "VENICE Talent",
    description:
      "We discover, celebrate, and elevate the extraordinary — actors, models, singers, and creative directors who define an era.",
    era: "Est. 1930",
    gradient:
      "linear-gradient(160deg, oklch(0.42 0.08 15) 0%, oklch(0.25 0.07 15) 100%)",
    accentColor: "oklch(0.72 0.12 75)",
  },
];

const editorialArticles = [
  {
    category: "Beauty",
    headline: "The Cold Cream Ritual: Hollywood's Best-Kept Secret",
    excerpt:
      "Long before micellar water graced the shelves, golden age starlets relied on a ritual as old as the silver screen itself.",
    date: "The Beauty Editors",
  },
  {
    category: "Fashion",
    headline: "The Return of the Structured Shoulder",
    excerpt:
      "1940s wartime utility meets contemporary power dressing — the silhouette that defined an era rises again.",
    date: "The Fashion Chronicle",
  },
  {
    category: "Talent",
    headline: "Isabella Renée: The Voice of a New Golden Age",
    excerpt:
      "Our featured talent speaks on discipline, artistry, and finding one's timeless self on stage and screen.",
    date: "The Talent Editors",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center vintage-texture"
        style={{
          minHeight: "100vh",
          paddingTop: "160px",
          background: `
            linear-gradient(to bottom, oklch(0.15 0.04 15 / 0.85) 0%, oklch(0.10 0.03 15 / 0.92) 100%),
            url('/assets/generated/venice-hero-deco.dim_1200x800.jpg') center/cover no-repeat
          `,
        }}
      >
        {/* Art Deco geometric overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                oklch(0.72 0.12 75 / 0.03) 0px,
                oklch(0.72 0.12 75 / 0.03) 1px,
                transparent 1px,
                transparent 40px
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Era badge */}
          <div className="flex justify-center mb-6">
            <EraBadge text="Est. 1920 · The Golden Age" variant="gold" />
          </div>

          {/* VENICE logo */}
          <h1
            className="font-display mb-4"
            style={{
              fontSize: "clamp(5rem, 15vw, 11rem)",
              lineHeight: 0.9,
              color: "oklch(0.72 0.12 75)",
              textShadow:
                "0 0 60px oklch(0.72 0.12 75 / 0.4), 0 4px 40px oklch(0.18 0.03 50 / 0.8)",
              letterSpacing: "0.02em",
            }}
          >
            VENICE
          </h1>

          {/* Art Deco divider */}
          <div className="flex justify-center my-6">
            <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.7)" size="md" />
          </div>

          {/* Tagline */}
          <p
            className="font-body italic mb-8 tracking-wide"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              color: "oklch(0.88 0.03 75)",
              letterSpacing: "0.05em",
            }}
          >
            Timeless Beauty &nbsp;·&nbsp; Enduring Fashion &nbsp;·&nbsp;
            Unforgettable Talent
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {[
              { label: "Explore Beauty", page: "beauty" as Page },
              { label: "View Fashion", page: "fashion" as Page },
              { label: "Discover Talent", page: "talent" as Page },
            ].map((btn) => (
              <button
                type="button"
                key={btn.page}
                onClick={() => onNavigate(btn.page)}
                className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
                style={{
                  border: "1px solid oklch(0.72 0.12 75 / 0.6)",
                  color: "oklch(0.88 0.03 75)",
                  background: "oklch(0.72 0.12 75 / 0.08)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.72 0.12 75 / 0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.72 0.12 75)";
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.72 0.12 75 / 0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.72 0.12 75 / 0.6)";
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.88 0.03 75)";
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span
              className="font-heading text-[0.55rem] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
            >
              Scroll
            </span>
            <svg
              width="20"
              height="32"
              viewBox="0 0 20 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="30"
                rx="9"
                stroke="oklch(0.72 0.12 75 / 0.5)"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="9" r="3" fill="oklch(0.72 0.12 75 / 0.6)" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────────── */}
      <section
        className="relative py-20 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        {/* Era stamp */}
        <div
          className="absolute top-6 right-8 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="font-heading text-[0.6rem] tracking-[0.2em] uppercase text-center"
            style={{
              border: "2px solid oklch(0.35 0.12 15)",
              padding: "8px 12px",
              transform: "rotate(8deg)",
              color: "oklch(0.35 0.12 15)",
            }}
          >
            <div>SINCE THE</div>
            <div style={{ fontSize: "1.2rem" }}>GOLDEN AGE</div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Pull quote */}
            <div className="text-center md:text-left">
              <div
                className="font-heading text-7xl leading-none mb-2"
                style={{ color: "oklch(0.72 0.12 75 / 0.3)" }}
                aria-hidden="true"
              >
                "
              </div>
              <blockquote
                className="font-serif italic"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "oklch(0.35 0.12 15)",
                  lineHeight: 1.4,
                }}
              >
                Beauty is not a season. It is a state of grace that belongs to
                every era, every woman, and every age.
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="h-px flex-1 max-w-16"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.5)" }}
                />
                <cite
                  className="font-heading text-xs tracking-[0.15em] uppercase not-italic"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  The VENICE Edit
                </cite>
              </div>
            </div>

            {/* Editorial paragraph */}
            <div>
              <EraBadge
                text="Our Mission"
                variant="burgundy"
                className="mb-4"
              />
              <h2
                className="font-serif mb-4"
                style={{ fontSize: "1.6rem", color: "oklch(0.35 0.12 15)" }}
              >
                Where Every Era Finds Its Voice
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: "1.1rem", color: "oklch(0.4 0.04 55)" }}
              >
                VENICE was born from a singular conviction: that the beauty,
                elegance, and artistry of history's most extraordinary eras
                should not be forgotten, but celebrated, studied, and carried
                forward.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "1.1rem", color: "oklch(0.4 0.04 55)" }}
              >
                We are curators — of beauty wisdom, fashion heritage, and
                extraordinary talent. From Art Deco glamour to mod revolution,
                from Hollywood's golden age to the pin-up sophistication of the
                1950s, VENICE honours them all.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ───────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <EraBadge text="The VENICE World" variant="gold" className="mb-4" />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(0.35 0.12 15)",
              }}
            >
              Explore Our Universe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <button
                type="button"
                key={card.page}
                className="ornate-card relative overflow-hidden cursor-pointer group text-left w-full"
                style={{ minHeight: "420px", display: "block" }}
                onClick={() => onNavigate(card.page)}
                aria-label={`Explore ${card.category}`}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: card.gradient }}
                />

                {/* Art Deco pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      ${card.accentColor} 0px,
                      ${card.accentColor} 1px,
                      transparent 1px,
                      transparent 30px
                    )`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <EraBadge
                    text={card.era}
                    variant="gold"
                    className="mb-auto"
                  />

                  <div className="mt-auto">
                    <p
                      className="font-heading text-xs tracking-[0.25em] uppercase mb-2"
                      style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}
                    >
                      {card.category}
                    </p>
                    <h3
                      className="font-display mb-4"
                      style={{
                        fontSize: "2.5rem",
                        color: "oklch(0.72 0.12 75)",
                        textShadow: "0 2px 12px oklch(0.18 0.03 50 / 0.5)",
                        lineHeight: 1.1,
                      }}
                    >
                      {card.tagline}
                    </h3>
                    <p
                      className="font-body italic mb-6"
                      style={{
                        color: "oklch(0.88 0.03 75 / 0.8)",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {card.description}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(card.page);
                      }}
                      className="font-heading text-xs tracking-[0.2em] uppercase px-6 py-2.5 transition-all"
                      style={{
                        border: "1px solid oklch(0.72 0.12 75 / 0.6)",
                        color: "oklch(0.72 0.12 75)",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(0.72 0.12 75 / 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }}
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ────────────────────────────────────── */}
      <section
        className="relative py-20 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.35 0.12 15)" }}
      >
        {/* Background Art Deco lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                oklch(0.72 0.12 75) 0px,
                oklch(0.72 0.12 75) 1px,
                transparent 1px,
                transparent 60px
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.6)"
            size="lg"
            className="mb-10"
          />

          <blockquote>
            <p
              className="font-serif italic mb-6"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                color: "oklch(0.91 0.03 78)",
                lineHeight: 1.5,
              }}
            >
              "Where every era finds its elegance, and every woman discovers her
              timeless self."
            </p>
            <footer>
              <cite
                className="font-heading text-xs tracking-[0.25em] uppercase not-italic"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                — The VENICE Edit
              </cite>
            </footer>
          </blockquote>

          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.6)"
            size="lg"
            className="mt-10"
          />
        </div>
      </section>

      {/* ── LATEST FROM THE EDIT ────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "oklch(0.94 0.025 80)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <EraBadge text="The Latest" variant="gold" className="mb-4" />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "oklch(0.35 0.12 15)",
              }}
            >
              Latest from The Edit
            </h2>
            <div className="flex justify-center mt-4">
              <ArtDecoDivider color="oklch(0.72 0.12 75)" size="sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialArticles.map((article, i) => (
              <article
                key={article.headline}
                className="ornate-card p-6 cursor-pointer"
              >
                {/* Sepia image placeholder */}
                <div
                  className="w-full mb-5"
                  style={{
                    height: "180px",
                    background: `linear-gradient(
                      ${
                        i === 0
                          ? "135deg, oklch(0.78 0.07 20) 0%, oklch(0.55 0.08 25) 100%"
                          : i === 1
                            ? "135deg, oklch(0.28 0.06 250) 0%, oklch(0.40 0.07 220) 100%"
                            : "135deg, oklch(0.40 0.09 15) 0%, oklch(0.28 0.08 10) 100%"
                      }
                    )`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ opacity: 0.2 }}
                  >
                    <span
                      className="font-display"
                      style={{ fontSize: "3rem", color: "oklch(0.72 0.12 75)" }}
                    >
                      VENICE
                    </span>
                  </div>
                </div>

                <EraBadge
                  text={article.category}
                  variant={i === 0 ? "burgundy" : i === 1 ? "navy" : "gold"}
                  className="mb-3"
                />

                <h3
                  className="font-serif mb-3"
                  style={{
                    fontSize: "1.15rem",
                    color: "oklch(0.25 0.06 30)",
                    lineHeight: 1.4,
                  }}
                >
                  {article.headline}
                </h3>

                <p
                  className="font-body italic text-sm mb-4 leading-relaxed"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="font-heading text-[0.6rem] tracking-[0.15em] uppercase"
                    style={{ color: "oklch(0.5 0.04 60 / 0.7)" }}
                  >
                    {article.date}
                  </span>
                  <span
                    className="font-heading text-[0.65rem] tracking-[0.15em] uppercase"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  >
                    Read →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
