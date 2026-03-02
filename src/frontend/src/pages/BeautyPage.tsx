import { useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

type Category = "ALL" | "SKINCARE" | "HAIR" | "WELLNESS" | "TIMELESS LOOKS";

interface Article {
  category: Exclude<Category, "ALL">;
  headline: string;
  era: string;
  excerpt: string;
  fullExcerpt: string;
}

const articles: Article[] = [
  {
    category: "TIMELESS LOOKS",
    headline: "Marilyn Monroe's Luminous Glow: The Art of the Platinum Blonde",
    era: "circa 1953",
    excerpt:
      "Marilyn Monroe's signature luminosity was no accident — it was a carefully studied marriage of platinum hair, porcelain foundation, and a beauty philosophy that treated radiance as a full-body art form.",
    fullExcerpt:
      "Monroe worked closely with makeup artist Allan 'Whitey' Snyder, whose genius lay in amplifying rather than masking. A heavy white highlighter dusted the brow bone, a pinch of Vaseline on the eyelids gave glasslike shine, and her lips were lined slightly over the natural edge in a soft, pillowed shape. 'Beauty is something from within,' she once said — but the technique was flawlessly precise.",
  },
  {
    category: "TIMELESS LOOKS",
    headline: "Marilyn's Red Lip: The Most Photographed Mouth in History",
    era: "circa 1950–1962",
    excerpt:
      "The red-orange lip Marilyn Monroe wore in Some Like It Hot and Gentlemen Prefer Blondes became one of the most imitated beauty signatures the world has ever known.",
    fullExcerpt:
      "Her lip formula was a blend of two shades layered for dimension — typically a blue-toned red over a nude liner that extended fractionally beyond her natural lip line. The upper lip was painted with the classic cupid's bow exaggerated, while the lower lip was slightly fuller, creating that irresistible softness. The key was blotting between layers to achieve depth that lasted under studio lighting.",
  },
  {
    category: "SKINCARE",
    headline: "Whitney Houston's Radiant Skin: The 1980s Backstage Secret",
    era: "circa 1985",
    excerpt:
      "Whitney Houston's skin glowed with a warmth and luminosity that stopped audiences cold — a rich, hydrated complexion she maintained through years of demanding touring and performance.",
    fullExcerpt:
      "Whitney's beauty team attributed her glow to diligent moisture-locking: a rich shea-based balm applied generously over warm, damp skin after every performance. She never skipped SPF during daytime, and her signature technique was pressing — never rubbing — product into the skin to preserve its natural elasticity. The 1980s were an era of bold colour, but great skin was always the canvas.",
  },
  {
    category: "HAIR",
    headline: "The Big Hair Revolution: Power Curls of the 1980s",
    era: "circa 1983–1989",
    excerpt:
      "From Whitney Houston to Tina Turner, the 1980s produced the most unapologetically magnificent hair the music world had ever seen — voluminous, proud, and unmistakably powerful.",
    fullExcerpt:
      "The look required a diffuser on high heat, generous amounts of mousse worked through damp sections from root to tip, then head-flipping to build maximum lift at the crown. Tina Turner's wild electric mane was achieved with teasing, heat, and a finishing mist of high-shine spray. Whitney's soft, rounded curls were set on jumbo rollers, dried under a hood, then gently separated with the fingers — never a comb. Volume was the vocabulary of power.",
  },
  {
    category: "TIMELESS LOOKS",
    headline: "Madonna's Iconic Brow: The 1980s Defined Face",
    era: "circa 1984",
    excerpt:
      "In the mid-1980s, Madonna reclaimed the thick, defined brow in all its natural glory — a direct rejection of the pencil-thin arches of the previous decade and a blueprint for every strong brow that followed.",
    fullExcerpt:
      "The technique was bold and deliberate: brows brushed upward and outward, filled with short hair-like strokes using a dark pencil, then set with a clear brow gel. The result was a face that read confident and untouchable — whether in a music video or on a magazine cover. Madonna understood that strong features photographed as strength of character, and beauty editors the world over took note.",
  },
  {
    category: "SKINCARE",
    headline: "The Cold Cream Ritual: A Hollywood Secret From Monroe to Now",
    era: "circa 1930–present",
    excerpt:
      "Long before micellar water graced our shelves, the silver screen's most radiant stars — Marilyn Monroe among them — swore by cold cream as the foundation of their nightly cleanse.",
    fullExcerpt:
      "Monroe famously applied cold cream generously at the end of every shoot day, massaging in upward circles and removing with a warm flannel. The emollient formula stripped makeup without stripping moisture, leaving the complexion soft and ready for the studio's brutal morning call times. The technique remains unchanged and unmatched — a ritual endorsed by generations of luminous women.",
  },
  {
    category: "WELLNESS",
    headline: "Tina Turner's Ageless Energy: Movement as Beauty Practice",
    era: "circa 1984",
    excerpt:
      "At a time when beauty rituals centered on products and powders, Tina Turner proved that the most transformative beauty practice was movement — and she performed it at full intensity every night on stage.",
    fullExcerpt:
      "Tina's approach to wellness was rooted in Buddhist practice and high-intensity performance. She credited her luminous skin and extraordinary stamina to consistent movement, adequate hydration before and after shows, and a focused mental discipline that quieted stress. Her legs — the most famous in rock and roll — were maintained not by any machine but by the sheer physical demands of three-hour shows, five nights a week.",
  },
  {
    category: "HAIR",
    headline: "Pin Curls & Platinum: Marilyn Monroe's Curl-Setting Ritual",
    era: "circa 1953",
    excerpt:
      "The soft, luminous platinum waves that defined Marilyn Monroe's screen image were not natural — they were the result of a painstaking overnight pin curl ritual performed before every major shoot.",
    fullExcerpt:
      "Her hair was bleached to that specific shade described as 'champagne white' — not platinum, not yellow, but a warm, almost candlelit tone. Then each section was wound tightly, pinned flat, and covered in a silk scarf overnight. In the morning, Whitey Snyder or Kenneth Battelle would release each curl and style with a wide-tooth pick, never a brush, to maintain separation and bounce. The effect was effortless. The process was anything but.",
  },
];

export function BeautyPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const categories: Category[] = [
    "ALL",
    "SKINCARE",
    "HAIR",
    "WELLNESS",
    "TIMELESS LOOKS",
  ];

  const filteredArticles =
    activeCategory === "ALL"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ────────────────────────────────────────── */}
      <header
        className="relative py-16 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.94 0.025 80)" }}
      >
        {/* Decorative corner lines */}
        <div
          className="absolute inset-4 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <title>Decorative corner borders</title>
            <line
              x1="0"
              y1="0"
              x2="15"
              y2="0"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="15"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="0"
              x2="85"
              y2="0"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="15"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="100"
              x2="15"
              y2="100"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="0"
              y1="100"
              x2="0"
              y2="85"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="100"
              x2="85"
              y2="100"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="85"
              stroke="oklch(0.72 0.12 75 / 0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <EraBadge
                text="Beauty Intelligence"
                variant="burgundy"
                className="mb-4"
              />
              <h1
                className="font-serif mb-4"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 5rem)",
                  color: "oklch(0.35 0.12 15)",
                  lineHeight: 1.05,
                  fontWeight: 900,
                }}
              >
                THE BEAUTY EDIT
              </h1>
              <ArtDecoDivider
                color="oklch(0.72 0.12 75)"
                size="sm"
                className="mb-4"
              />
              <p
                className="font-body italic"
                style={{
                  fontSize: "1.15rem",
                  color: "oklch(0.5 0.04 60)",
                  lineHeight: 1.6,
                }}
              >
                Wisdom for the Discerning Woman · Curated Beauty Intelligence
              </p>
              <p
                className="font-heading text-xs tracking-[0.2em] uppercase mt-3"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                Not Products, But Knowledge
              </p>
            </div>

            <div
              className="relative overflow-hidden"
              style={{
                height: "300px",
                border: "2px solid oklch(0.72 0.12 75 / 0.4)",
                padding: "6px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                  margin: "6px",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/generated/venice-beauty-hero.dim_800x600.jpg"
                alt="VENICE Beauty editorial"
                className="w-full h-full object-cover sepia-hover"
                style={{ filter: "sepia(0.2) contrast(1.05)" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── EDITORIAL NOTE ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div
          className="p-6 border-l-4 relative"
          style={{
            backgroundColor: "oklch(0.91 0.03 78)",
            borderLeftColor: "oklch(0.72 0.12 75)",
          }}
        >
          <div
            className="absolute top-4 right-4 font-display text-2xl opacity-30"
            style={{ color: "oklch(0.72 0.12 75)" }}
            aria-hidden="true"
          >
            ✦
          </div>
          <p
            className="font-heading text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            A Note from the Beauty Editors
          </p>
          <p
            className="font-body italic"
            style={{
              color: "oklch(0.35 0.12 15)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            VENICE celebrates the beauty icons who defined their eras — from
            Marilyn Monroe's luminous Hollywood glow to the bold, electric power
            looks of 1980s icons like Whitney Houston, Tina Turner, and Madonna.
            We share their wisdom, their techniques, and the secrets behind the
            most unforgettable faces in history.
          </p>
        </div>
      </div>

      {/* ── CATEGORY FILTER ─────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-heading text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 transition-all"
              style={{
                border: `1px solid ${activeCategory === cat ? "oklch(0.72 0.12 75)" : "oklch(0.72 0.12 75 / 0.3)"}`,
                color:
                  activeCategory === cat
                    ? "oklch(0.97 0.01 85)"
                    : "oklch(0.5 0.04 60)",
                background:
                  activeCategory === cat
                    ? "oklch(0.72 0.12 75)"
                    : "transparent",
                cursor: "pointer",
                fontWeight: activeCategory === cat ? 700 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── ARTICLES GRID ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, i) => (
            <article key={article.headline} className="ornate-card p-7">
              {/* Top accent */}
              <div
                className="h-px w-full mb-5"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)",
                }}
              />

              <div className="flex items-start justify-between mb-3 gap-3">
                <EraBadge text={article.category} variant="sepia" />
                <span
                  className="font-heading text-[0.6rem] tracking-[0.15em] italic"
                  style={{ color: "oklch(0.5 0.04 60 / 0.7)" }}
                >
                  {article.era}
                </span>
              </div>

              <h2
                className="font-serif mb-3"
                style={{
                  fontSize: "1.25rem",
                  color: "oklch(0.25 0.06 30)",
                  lineHeight: 1.35,
                  fontWeight: 700,
                }}
              >
                {article.headline}
              </h2>

              <p
                className="font-body italic mb-3 leading-relaxed"
                style={{ fontSize: "1rem", color: "oklch(0.45 0.04 55)" }}
              >
                {article.excerpt}
              </p>

              {expandedArticle === i && (
                <p
                  className="font-body mb-3 leading-relaxed"
                  style={{ fontSize: "1rem", color: "oklch(0.45 0.04 55)" }}
                >
                  {article.fullExcerpt}
                </p>
              )}

              <div
                className="h-px w-full my-4"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.2)" }}
              />

              <div className="flex items-center justify-between">
                <span
                  className="font-heading text-[0.6rem] tracking-[0.15em] uppercase italic"
                  style={{ color: "oklch(0.5 0.04 60 / 0.7)" }}
                >
                  By the VENICE Beauty Editors
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedArticle(expandedArticle === i ? null : i)
                  }
                  className="font-heading text-[0.65rem] tracking-[0.15em] uppercase transition-all"
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {expandedArticle === i ? "Close ↑" : "Read More →"}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p
              className="font-body italic"
              style={{ color: "oklch(0.5 0.04 60)" }}
            >
              No articles in this category yet. Please check back soon.
            </p>
          </div>
        )}
      </section>

      {/* ── FOOTER DIVIDER ──────────────────────────────────── */}
      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
