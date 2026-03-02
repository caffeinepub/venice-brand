import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

interface BrandCard {
  name: string;
  tagline: string;
  description: string;
  url: string;
  badge: string;
}

interface MovieCard {
  title: string;
  year: string;
  tagline: string;
  description: string;
  url: string;
  genre: string;
}

const beautyBrands: BrandCard[] = [
  {
    name: "Doting Beauty",
    tagline: "Tenderness in every formula",
    description:
      "A cult-favourite indie brand celebrated for its gentle, skin-loving formulas that honour sensitive skin. Doting Beauty's philosophy is care-first — products designed with devotion, never compromise.",
    url: "https://dotingbeauty.com",
    badge: "Indie Darling",
  },
  {
    name: "Boreal Beauty",
    tagline: "Born of the northern wild",
    description:
      "Inspired by the pristine boreal forests of the north, this brand harnesses clean, plant-derived ingredients to craft skincare that feels as pure and vast as the wilderness itself.",
    url: "https://borealbeauty.com",
    badge: "Clean Beauty",
  },
  {
    name: "Rare Beauty",
    tagline: "Selena Gomez · Beauty without boundaries",
    description:
      "Founded by Selena Gomez on a philosophy of embracing imperfection, Rare Beauty offers soft-focus complexion products and the now-legendary Soft Pinch liquid blush that swept the beauty world off its feet.",
    url: "https://rarebeauty.com",
    badge: "Celebrity Icon",
  },
  {
    name: "Charlotte Tilbury",
    tagline: "Magic in every brushstroke",
    description:
      "Charlotte Tilbury is the maestro of red-carpet glamour. Her Hollywood Flawless Filter and Pillow Talk collection have become modern classics — the art of timeless, luminous beauty distilled into a compact.",
    url: "https://charlottetilbury.com",
    badge: "Red Carpet",
  },
  {
    name: "Tower 28 Beauty",
    tagline: "Where clean meets colour",
    description:
      "Tower 28 was born for sensitive skin without sacrificing vibrancy. With their groundbreaking SOS spray and buildable blushlight sticks, this brand proved clean beauty could be truly joyful.",
    url: "https://tower28beauty.com",
    badge: "Sensitive Skin",
  },
  {
    name: "Ilia Beauty",
    tagline: "Skincare meets high-performance colour",
    description:
      "Ilia blurs the line between skincare and makeup — each formula nourishes while it adorns. Their True Skin Serum Foundation and Super Serum Skin Tint have become essentials on every beauty editor's vanity.",
    url: "https://iliabeauty.com",
    badge: "Skin First",
  },
  {
    name: "Saie Beauty",
    tagline: "Clean beauty for real life",
    description:
      "Saie makes clean, sustainable beauty feel approachable and aspirational at once. Their Glowy Super Gel and Dew Blush compacts deliver that effortless lit-from-within look the modern beauty muse craves.",
    url: "https://saiebeauty.com",
    badge: "Sustainable",
  },
  {
    name: "Fenty Beauty",
    tagline: "Beauty for all",
    description:
      "Rihanna's Fenty Beauty rewrote the industry's rules with 40 foundation shades at launch, making inclusivity the new standard. Boldly pigmented, impeccably formulated, and unapologetically for everyone.",
    url: "https://fentybeauty.com",
    badge: "Iconic",
  },
];

const movies: MovieCard[] = [
  {
    title: "Legally Blonde",
    year: "2001",
    tagline: "She's armed and dangerous — with a law degree.",
    description:
      "Reese Witherspoon is Elle Woods, a fashion-forward sorority queen who enrolls at Harvard Law School to win back her ex — and ends up winning so much more. A breezy, brilliant comedy about never letting anyone underestimate you.",
    url: "https://www.justwatch.com/us/movie/legally-blonde",
    genre: "Cult Comedy",
  },
  {
    title: "Mean Girls",
    year: "2004",
    tagline: "Welcome to the jungle — Northshore High edition.",
    description:
      "Lindsay Lohan navigates the razor-sharp social hierarchy of an American high school in Tina Fey's sharply written comedy. The Plastics, the Burn Book, and 'You can't sit with us' — a cultural institution.",
    url: "https://www.justwatch.com/us/movie/mean-girls",
    genre: "Cultural Classic",
  },
  {
    title: "Gentlemen Prefer Blondes",
    year: "1953",
    tagline: "Diamonds are a girl's best friend.",
    description:
      "Marilyn Monroe and Jane Russell light up the silver screen as two showgirls hunting for love, diamonds, and adventure in Paris. Monroe's 'Diamonds Are a Girl's Best Friend' number remains one of cinema's most iconic performances.",
    url: "https://www.justwatch.com/us/movie/gentlemen-prefer-blondes",
    genre: "Golden Era",
  },
];

export function RecommendationsPage() {
  return (
    <main
      className="min-h-screen vintage-texture"
      style={{ backgroundColor: "oklch(0.97 0.015 75)" }}
    >
      {/* Page Header */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.35 0.12 15) 0%, oklch(0.28 0.10 15) 100%)",
        }}
      >
        {/* Decorative corner SVG */}
        <svg
          className="absolute top-4 left-4 opacity-30"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          aria-hidden="true"
        >
          <path
            d="M4,4 L40,4 M4,4 L4,40 M4,4 L20,20"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="4"
            fill="none"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="0.8"
          />
          <path
            d="M36,4 L36,14 M4,36 L14,36"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
        <svg
          className="absolute top-4 right-4 opacity-30"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          aria-hidden="true"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            d="M4,4 L40,4 M4,4 L4,40 M4,4 L20,20"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="4"
            fill="none"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="0.8"
          />
          <path
            d="M36,4 L36,14 M4,36 L14,36"
            stroke="oklch(0.72 0.12 75)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>

        {/* Masthead label */}
        <p
          className="font-heading text-[0.6rem] tracking-[0.35em] uppercase mb-6"
          style={{ color: "oklch(0.72 0.12 75 / 0.65)" }}
        >
          The VENICE Edit &nbsp;·&nbsp; Curated Recommendations
        </p>

        {/* Title */}
        <h1
          className="font-display mb-4"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            color: "oklch(0.72 0.12 75)",
            textShadow: "0 2px 40px oklch(0.72 0.12 75 / 0.35)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          Recommendations
        </h1>

        {/* Decorative rule */}
        <div className="flex justify-center my-6">
          <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.6)" size="md" />
        </div>

        <p
          className="font-body italic max-w-xl mx-auto text-lg leading-relaxed"
          style={{ color: "oklch(0.85 0.05 75 / 0.8)" }}
        >
          Handpicked by the editors of VENICE — the beauty houses we adore and
          the films that define our aesthetic.
        </p>

        {/* Bottom flourish */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div
            className="h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.5))",
            }}
          />
          <span
            className="text-xs"
            style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
          >
            ✦
          </span>
          <div
            className="h-px w-24"
            style={{
              background:
                "linear-gradient(270deg, transparent, oklch(0.72 0.12 75 / 0.5))",
            }}
          />
        </div>
      </section>

      {/* ── Beauty Brands ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p
              className="font-heading text-[0.6rem] tracking-[0.35em] uppercase mb-3"
              style={{ color: "oklch(0.55 0.09 15)" }}
            >
              The Beauty Cabinet
            </p>
            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                color: "oklch(0.30 0.08 15)",
                lineHeight: 1.1,
              }}
            >
              Beauty Brands
              <br />
              <span
                className="font-body italic"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  color: "oklch(0.55 0.09 15 / 0.8)",
                }}
              >
                We Love &amp; Trust
              </span>
            </h2>
            <div className="flex justify-center mt-6">
              <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.7)" size="sm" />
            </div>
          </div>

          {/* Brand grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beautyBrands.map((brand) => (
              <article
                key={brand.name}
                className="group relative flex flex-col"
                style={{
                  background: "oklch(0.99 0.005 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  boxShadow: "0 2px 20px oklch(0.72 0.12 75 / 0.06)",
                }}
              >
                {/* Ornate corner accents */}
                <div
                  className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M2,2 L10,2 M2,2 L2,10"
                      stroke="oklch(0.72 0.12 75)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="2"
                      cy="2"
                      r="1.5"
                      fill="oklch(0.72 0.12 75)"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div
                  className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
                  aria-hidden="true"
                  style={{ transform: "scaleX(-1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M2,2 L10,2 M2,2 L2,10"
                      stroke="oklch(0.72 0.12 75)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="2"
                      cy="2"
                      r="1.5"
                      fill="oklch(0.72 0.12 75)"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none"
                  aria-hidden="true"
                  style={{ transform: "scaleY(-1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M2,2 L10,2 M2,2 L2,10"
                      stroke="oklch(0.72 0.12 75)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="2"
                      cy="2"
                      r="1.5"
                      fill="oklch(0.72 0.12 75)"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
                  aria-hidden="true"
                  style={{ transform: "scale(-1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M2,2 L10,2 M2,2 L2,10"
                      stroke="oklch(0.72 0.12 75)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="2"
                      cy="2"
                      r="1.5"
                      fill="oklch(0.72 0.12 75)"
                      opacity="0.7"
                    />
                  </svg>
                </div>

                {/* Gold top band */}
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.7), transparent)",
                  }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="mb-3">
                    <EraBadge text={brand.badge} variant="gold" />
                  </div>

                  {/* Brand name */}
                  <h3
                    className="font-display mb-1"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                      color: "oklch(0.25 0.08 15)",
                      lineHeight: 1.2,
                    }}
                  >
                    {brand.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="font-body italic text-[0.75rem] mb-3"
                    style={{ color: "oklch(0.55 0.09 15 / 0.75)" }}
                  >
                    {brand.tagline}
                  </p>

                  {/* Thin rule */}
                  <div
                    className="h-px w-10 mb-4"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.5)" }}
                  />

                  {/* Description */}
                  <p
                    className="font-body text-sm leading-relaxed flex-1"
                    style={{ color: "oklch(0.38 0.05 15 / 0.85)" }}
                  >
                    {brand.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-5">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-heading text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-200 group-hover:opacity-100"
                      style={{
                        color: "oklch(0.45 0.12 15)",
                        textDecoration: "none",
                        paddingBottom: "2px",
                        borderBottom: "1px solid oklch(0.72 0.12 75 / 0.5)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.35 0.12 15)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderBottomColor = "oklch(0.72 0.12 75)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.45 0.12 15)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderBottomColor = "oklch(0.72 0.12 75 / 0.5)";
                      }}
                    >
                      Visit Boutique{" "}
                      <span aria-hidden="true" style={{ fontSize: "0.9em" }}>
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed gold divider */}
      <div
        className="h-px mx-8"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.5), transparent)",
        }}
      />

      {/* ── Cinema Section ── */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.97 0.015 75) 0%, oklch(0.94 0.02 60) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p
              className="font-heading text-[0.6rem] tracking-[0.35em] uppercase mb-3"
              style={{ color: "oklch(0.55 0.09 15)" }}
            >
              The Silver Screen
            </p>
            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                color: "oklch(0.22 0.06 250)",
                lineHeight: 1.1,
              }}
            >
              Must-Watch
              <br />
              <span
                className="font-body italic"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  color: "oklch(0.40 0.08 250 / 0.8)",
                }}
              >
                Films for the VENICE Woman
              </span>
            </h2>
            <div className="flex justify-center mt-6">
              <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.7)" size="sm" />
            </div>
          </div>

          {/* Movie cards — horizontal layout */}
          <div className="flex flex-col gap-8">
            {movies.map((movie, index) => (
              <article
                key={movie.title}
                className="relative"
                style={{
                  background: "oklch(0.22 0.05 250)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.25)",
                  boxShadow:
                    "0 8px 40px oklch(0.15 0.05 250 / 0.4), 0 2px 8px oklch(0.15 0.05 250 / 0.2)",
                }}
              >
                {/* Film grain overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-5"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
                    backgroundSize: "150px 150px",
                  }}
                />

                {/* Reel number decoration */}
                <div
                  className="absolute top-4 right-6 font-display opacity-10 select-none pointer-events-none"
                  aria-hidden="true"
                  style={{
                    fontSize: "5rem",
                    color: "oklch(0.72 0.12 75)",
                    lineHeight: 1,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  {/* Left — title block */}
                  <div className="flex-shrink-0 md:w-64">
                    {/* Genre badge */}
                    <div className="mb-4">
                      <EraBadge text={movie.genre} variant="sepia" />
                    </div>

                    <h3
                      className="font-display mb-1"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2rem)",
                        color: "oklch(0.72 0.12 75)",
                        lineHeight: 1.15,
                        textShadow: "0 1px 12px oklch(0.72 0.12 75 / 0.3)",
                      }}
                    >
                      {movie.title}
                    </h3>

                    <p
                      className="font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-3"
                      style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                    >
                      {movie.year}
                    </p>

                    {/* Thin gold rule */}
                    <div
                      className="h-px w-10 mb-4"
                      style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.5)" }}
                    />

                    {/* Tagline */}
                    <p
                      className="font-body italic text-sm leading-snug"
                      style={{ color: "oklch(0.80 0.06 75 / 0.75)" }}
                    >
                      "{movie.tagline}"
                    </p>
                  </div>

                  {/* Vertical divider — desktop */}
                  <div
                    className="hidden md:block w-px self-stretch flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                    aria-hidden="true"
                  />

                  {/* Right — description + link */}
                  <div className="flex-1 flex flex-col justify-between gap-6">
                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: "oklch(0.82 0.04 75 / 0.8)" }}
                    >
                      {movie.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <a
                        href={movie.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-heading text-[0.7rem] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-200"
                        style={{
                          background: "oklch(0.72 0.12 75 / 0.1)",
                          color: "oklch(0.72 0.12 75)",
                          border: "1px solid oklch(0.72 0.12 75 / 0.4)",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.background = "oklch(0.72 0.12 75 / 0.18)";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderColor = "oklch(0.72 0.12 75 / 0.7)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.background = "oklch(0.72 0.12 75 / 0.1)";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderColor = "oklch(0.72 0.12 75 / 0.4)";
                        }}
                      >
                        Find Where to Watch{" "}
                        <span aria-hidden="true" style={{ fontSize: "0.9em" }}>
                          →
                        </span>
                      </a>

                      {/* Decorative film strip dots */}
                      <div
                        className="hidden md:flex items-center gap-1.5 opacity-30"
                        aria-hidden="true"
                      >
                        {["a", "b", "c", "d", "e"].map((dot) => (
                          <div
                            key={dot}
                            className="w-1.5 h-2.5 rounded-sm"
                            style={{
                              backgroundColor: "oklch(0.72 0.12 75)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom flourish */}
      <section
        className="py-12 text-center"
        style={{ backgroundColor: "oklch(0.97 0.015 75)" }}
      >
        <div className="flex justify-center mb-4">
          <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.4)" size="sm" />
        </div>
        <p
          className="font-body italic text-sm"
          style={{ color: "oklch(0.55 0.09 15 / 0.6)" }}
        >
          Curated with love by the editors of VENICE &nbsp;·&nbsp; Est. MCMXX
        </p>
      </section>
    </main>
  );
}
