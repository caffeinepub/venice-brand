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
    category: "SKINCARE",
    headline: "The Cold Cream Ritual: A Hollywood Secret Revived",
    era: "circa 1930",
    excerpt:
      "Long before micellar water graced our shelves, the silver screen's most radiant stars swore by cold cream — an emollient marvel rooted in ancient apothecary wisdom.",
    fullExcerpt:
      "The technique is deceptively simple: massage a generous amount of cold cream into the skin in upward circular motions, then remove with a warm flannel cloth. The result is a complexion of extraordinary clarity — stripped of the day's grime without disturbing the skin's delicate moisture barrier. Actresses from Joan Crawford to Grace Kelly credited the ritual with their luminous, camera-ready skin.",
  },
  {
    category: "SKINCARE",
    headline: "Rose Water & Glycerin: The Victorian Complexion Formula",
    era: "circa 1880",
    excerpt:
      "Before serums and essences, Victorian beauties maintained their celebrated porcelain complexions with a preparation so elegant in its simplicity that it has endured for over a century.",
    fullExcerpt:
      "Mix equal parts pure rose water and glycerin in a clean glass bottle, shake gently, and apply to freshly cleansed skin with a cotton pad. The glycerin draws moisture into the skin while the rose water soothes and refines. Ladies of the Victorian era applied this formula morning and evening, and pharmacists still stock the ingredients today — a testament to enduring efficacy.",
  },
  {
    category: "HAIR",
    headline: "Pin Curls & Permanence: Setting Hair Like a 1940s Starlet",
    era: "circa 1944",
    excerpt:
      "The perfectly coiffed waves of Hollywood's wartime actresses were not accidents of nature — they were the product of a meticulous, methodical pin curl ritual that any woman can master.",
    fullExcerpt:
      "Begin with damp, freshly washed hair. Working in one-inch sections, wind each section around two fingers, slide your fingers out, and secure with a pin curl clip flat to the skull. Sleep with a silk scarf to protect the set. In the morning, gently release each curl and brush through with a natural bristle brush in long, sweeping strokes. The result: waves of remarkable definition and lasting hold.",
  },
  {
    category: "HAIR",
    headline: "The Art of the Chignon: From Audrey to the Modern Muse",
    era: "circa 1957",
    excerpt:
      "No hairstyle speaks more eloquently of feminine grace and self-possession than the chignon — that simple, masterful gathering of hair that transforms any woman into an icon.",
    fullExcerpt:
      "The secret lies not in complexity but in intention. Brush hair smooth at the nape, twist into a low knot, and secure with a minimum of pins. The effortlessness is studied — every stray strand placed with deliberate nonchalance. Audrey Hepburn's collaborator Alexandre de Paris understood that the chignon's power was in what it withheld: it suggested, rather than declared.",
  },
  {
    category: "WELLNESS",
    headline:
      "Beauty Sleep: What the Studio System Prescribed for Radiant Skin",
    era: "circa 1938",
    excerpt:
      "The Hollywood studio system, for all its excesses, understood one fundamental truth that modern science has since confirmed: nothing restores and regenerates the complexion like deep, uninterrupted sleep.",
    fullExcerpt:
      "Studio physicians prescribed a regimen of eight to nine hours on a silk pillowcase, with a nightcap of warm milk and honey to ensure restfulness. They recommended retiring with a lightly applied facial oil — jojoba or rose hip were favoured — to support the skin's nocturnal repair processes. The ritual of retiring beautifully was as important as any product.",
  },
  {
    category: "TIMELESS LOOKS",
    headline: "The Red Lip: A Century of Power and Grace",
    era: "circa 1920–present",
    excerpt:
      "From the silent film vamps of the 1920s to the victory roll heroines of the 1940s, the red lip has been beauty's most enduring and eloquent statement — simultaneously bold and timeless.",
    fullExcerpt:
      "The application is a ceremony unto itself. Begin with a lip liner in a close-matching tone, tracing just outside the natural lip line to create a defined, lasting edge. Fill with a rich, pigment-dense red — blue-reds for cool complexions, brick-reds for warm. Blot, reapply, blot once more. The finished effect should appear effortless — the paradox of the perfectly made-up face.",
  },
  {
    category: "TIMELESS LOOKS",
    headline: "Cat Eye Mastery: From the Silver Screen to the Street",
    era: "circa 1960",
    excerpt:
      "The winged eyeliner — precise, dramatic, unmistakable — is perhaps the most technically demanding and rewarding technique in the classical beauty repertoire.",
    fullExcerpt:
      "Using a fine-tipped liner brush and a pot of black kohl, begin from the inner corner and draw along the lash line in short, feathered strokes. At the outer corner, extend the line and flick upward in a clean wing, guided by the angle of your lower lash line as a compass. The wing's length and angle are a matter of personal idiom — longer for drama, shorter for daytime refinement. Brigitte Bardot extended hers nearly to her temples.",
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
            VENICE shares beauty wisdom, history, and timeless techniques. We
            are not a shop. We do not sell products. We celebrate the art of
            beauty across the ages — from Victorian apothecaries to Hollywood
            dressing rooms, from wartime ingenuity to the glamour of the golden
            screen.
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
