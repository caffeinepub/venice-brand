import { useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

interface NewsArticle {
  category: string;
  categoryVariant: "burgundy" | "sepia" | "gold" | "navy";
  headline: string;
  body: string;
  isBreaking?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    category: "BEAUTY",
    categoryVariant: "burgundy",
    headline:
      "Charlotte Tilbury's Pillow Talk Expands: The Cult Lip Shade Gets a Full Collection",
    body: "Charlotte Tilbury's Pillow Talk — the nude-pink lip shade that launched a thousand searches and sparked a permanent waitlist — has officially expanded into a full beauty collection for 2024. The franchise now spans lip liners, blushes, eyeshadow palettes, highlighters, and a new Pillow Talk Dreams bronzing palette that has already sold out in four countries. The original Pillow Talk Matte Revolution Lipstick, once described as 'the most universally flattering shade ever created,' inspired the line's signature warm rose-brown palette used across every new product. Tilbury, speaking at the London launch, called the collection 'the wardrobe of a woman who glows from the inside out.' Beauty editors from Vogue UK to WWD have singled out the Pillow Talk Blush Wand as a breakout hit — a tinted gel-cream blush that builds from sheer flush to full bloom in seconds. The collection marks one of the most commercially successful franchise expansions in prestige beauty history.",
    isBreaking: false,
  },
  {
    category: "PLAYBOY",
    categoryVariant: "burgundy",
    headline:
      "Playboy's 2024 Centerfold Revival: The Brand's Biggest Comeback Issue",
    body: "Playboy officially returned the print centerfold in 2024 after a controversial years-long absence, and the revival issue became one of the brand's highest-selling editions in over a decade. The decision reversed a 2015 choice to remove explicit nudity — itself reversed in 2017 — and signaled the brand's commitment to reclaiming its identity as a bold, body-positive cultural publication. The cover star, a social media personality with over 4 million followers, worked with Playboy's creative team on every aspect of the shoot, from lighting direction to final retouching approvals, in what the brand called 'the most collaborative centerfold process in our history.' The issue also features a long-form interview with a sitting congresswoman on media censorship, a fashion editorial shot in Palm Springs, and a beauty roundtable with three current Playmates discussing their skincare rituals and the pressure to look 'effortlessly perfect.' The revival marks a new chapter for Playboy as it navigates the intersection of legacy media and creator-economy culture.",
    isBreaking: true,
  },
  {
    category: "SKINCARE",
    categoryVariant: "sepia",
    headline:
      "Barrier Repair is 2024's Dominant Skincare Trend — And It's Not Going Anywhere",
    body: "After years of aggressive exfoliation, acids at every step, and retinol stacked on retinol, the skincare world has arrived at a collective moment of repair — and barrier restoration is the dominant trend of 2024 with no sign of slowing. Skincare brands from La Roche-Posay to luxury maison Augustinus Bader have reported record-breaking sales of ceramide-heavy, fragrance-free moisturizers designed to rebuild the skin's lipid barrier after years of over-treatment. Dermatologists across TikTok and Instagram have been unified in their messaging: strip your routine back, moisturize generously, wear SPF daily, and give your skin time to recover. The trend has also reshaped product development — Drunk Elephant, Paula's Choice, and newer brands like Byoma and LANEIGE have all launched barrier-focused hero products in 2024 that immediately entered bestseller lists. The movement reflects a broader cultural shift toward skin health over skin perfection, with consumers increasingly choosing the dewy, nourished look of a well-cared-for complexion over heavy foundation coverage.",
    isBreaking: false,
  },
  {
    category: "PLAYBOY",
    categoryVariant: "burgundy",
    headline: "Playmate of the Year 2024: Who She Is and What She's Building",
    body: "The 2024 Playmate of the Year has been announced, and she arrives with a business portfolio that would make any entrepreneur envious: a beauty brand in development, a fitness app with 200,000 waitlist sign-ups, and a documentary series in production at a major streaming platform. Her selection by Playboy's editorial board was, according to the publication, driven as much by her entrepreneurial ambition as her physical presence — a reflection of the brand's evolving definition of what a Playmate represents in 2024. In her Playboy interview, she discussed the double standard she faces as a public figure who is simultaneously taken seriously in business rooms and dismissed in others — a tension she says she navigates by 'showing up so prepared that no one can question what I know.' Her beauty routine, detailed across six pages of the feature, is built around skin hydration, minimal makeup, and the belief that confidence is the most important product you can apply. Previous Playmates of the Year, including Holly Madison and Kendra Wilkinson, have used the title as a launch pad for media careers, and the 2024 honoree is already in conversations with two major networks about a reality series.",
    isBreaking: false,
  },
  {
    category: "HAIR",
    categoryVariant: "gold",
    headline:
      "The Sleek Bun is 2024's Most-Requested Salon Style — Why It's Not Going Away",
    body: "The sleek, low bun — smooth, architectural, no flyaway permitted — has overtaken the effortless 'undone' styles that dominated the previous three years and become 2024's most-requested salon appointment across the United States and Europe. Colorists and stylists from New York's most-booked salons to London's blow-dry bars report that clients are arriving with reference images of Hailey Bieber, Rosie Huntington-Whiteley, and Zendaya's recent red carpet looks — all featuring the pulled-back, skin-tight bun applied with gel, serum, and the kind of precision that disguises effort entirely. The look has driven a resurgence in edge-control gels, hair-slicking serums, and boar-bristle brushes — tools that had been gathering dust through the 'textured and tousled' era but are now flying off shelves. Salon appointment demand for blowouts and professional sleek styling has risen 30 percent year-over-year, according to StyleSeat data, with the bun cited as the primary driver. What makes it endure, stylists say, is its rare ability to read as both ultra-casual and entirely formal depending on accessories and garment — a versatility that suits women across industries and occasions.",
    isBreaking: false,
  },
  {
    category: "PLAYBOY × FASHION",
    categoryVariant: "sepia",
    headline:
      "Playboy Collaborates with High Fashion for Its Most Editorial Season Yet",
    body: "Playboy's fashion editorial output for 2024 has entered genuinely high-fashion territory, with collaborations and creative direction that place the brand in conversation with publications like i-D, AnOther, and CR Fashion Book. The brand's fall fashion spread, shot by a photographer whose work has appeared in Vogue Italia and System Magazine, featured styling by a former Saint Laurent collaborator — a pairing that produced images described by fashion critics as 'the most visually sophisticated work Playboy has produced in thirty years.' The editorial featured clothing from Acne Studios, Coperni, and Y-Project alongside the kind of conceptual body painting that made early Playboy a legitimate art publication before the concept was forgotten. Commercially, the brand has partnered with a vintage-inspired swimwear label and a Los Angeles streetwear house for capsule collections that sold through in under 72 hours. For Playboy, the pivot toward high-fashion collaboration is both a creative statement and a market strategy: repositioning the brand with younger, style-conscious audiences who engage with fashion as art, culture, and identity — not just clothing.",
    isBreaking: true,
  },
];

const PREVIEW_LENGTH = 200;

export function BeautyNewsPage() {
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(
    new Set(),
  );

  const toggleArticle = (i: number) => {
    setExpandedArticles((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const todaysDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const breakingCount = newsArticles.filter((a) => a.isBreaking).length;

  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ──────────────────────────────────────── */}
      <header
        className="relative py-14 px-6 overflow-hidden vintage-texture"
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

        <div className="max-w-5xl mx-auto text-center">
          {/* Today's Edition badge */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="h-px flex-1 max-w-[120px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.12 75))",
              }}
            />
            <span
              className="font-heading text-[0.6rem] tracking-[0.3em] uppercase px-4 py-1.5"
              style={{
                border: "1px solid oklch(0.35 0.12 15 / 0.6)",
                color: "oklch(0.97 0.01 85)",
                backgroundColor: "oklch(0.35 0.12 15)",
                letterSpacing: "0.28em",
              }}
            >
              ✦ Today's Edition ✦
            </span>
            <div
              className="h-px flex-1 max-w-[120px]"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)",
              }}
            />
          </div>

          <h1
            className="font-serif mb-3"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "oklch(0.35 0.12 15)",
              lineHeight: 1.0,
              fontWeight: 900,
              letterSpacing: "0.04em",
            }}
          >
            BEAUTY NEWS
          </h1>

          <ArtDecoDivider
            color="oklch(0.72 0.12 75)"
            size="sm"
            className="mx-auto mb-4"
          />

          <p
            className="font-heading text-[0.75rem] tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.5 0.06 50)" }}
          >
            Daily Dispatches from Beauty, Skincare &amp; Playboy
          </p>

          <p
            className="font-heading text-[0.65rem] tracking-[0.2em] italic"
            style={{ color: "oklch(0.65 0.08 65)" }}
          >
            {todaysDate}
          </p>
        </div>
      </header>

      {/* ── EDITORIAL NOTE STRIP ──────────────────────────── */}
      <div
        className="py-4 px-6"
        style={{
          backgroundColor: "oklch(0.35 0.12 15)",
          borderTop: "1px solid oklch(0.72 0.12 75 / 0.3)",
          borderBottom: "1px solid oklch(0.72 0.12 75 / 0.3)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-heading text-[0.62rem] tracking-[0.22em] uppercase text-center sm:text-left"
            style={{ color: "oklch(0.72 0.12 75 / 0.8)" }}
          >
            Vol. MMXXIV &nbsp;·&nbsp; The VENICE News Desk &nbsp;·&nbsp; Beauty
            · Skincare · Playboy · Hair
          </p>
          <div className="flex items-center gap-3">
            <span
              className="font-heading text-[0.55rem] tracking-[0.18em] uppercase px-3 py-1"
              style={{
                color: "oklch(0.35 0.12 15)",
                backgroundColor: "oklch(0.72 0.12 75)",
                fontWeight: 700,
              }}
            >
              ✦ Breaking
            </span>
            <span
              className="font-heading text-[0.55rem] tracking-[0.18em] uppercase"
              style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}
            >
              {breakingCount} Fresh Dispatch{breakingCount !== 1 ? "es" : ""}{" "}
              Today
            </span>
          </div>
        </div>
      </div>

      {/* ── ARTICLES GRID ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, i) => {
            const isExpanded = expandedArticles.has(i);
            const isLong = article.body.length > PREVIEW_LENGTH;
            const displayBody =
              isExpanded || !isLong
                ? article.body
                : `${article.body.slice(0, PREVIEW_LENGTH)}...`;

            return (
              <article
                key={article.headline}
                className="ornate-card p-7 flex flex-col"
              >
                {/* Top gold rule */}
                <div
                  className="h-px w-full mb-5"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)",
                  }}
                />

                {/* Category + Breaking badge row */}
                <div className="flex items-start justify-between mb-4 gap-2 flex-wrap">
                  <EraBadge
                    text={article.category}
                    variant={article.categoryVariant}
                  />
                  {article.isBreaking && (
                    <span
                      className="font-heading text-[0.55rem] tracking-[0.2em] uppercase px-2.5 py-1 animate-pulse"
                      style={{
                        backgroundColor: "oklch(0.35 0.12 15)",
                        color: "oklch(0.97 0.01 85)",
                        fontWeight: 700,
                      }}
                    >
                      ◆ Breaking
                    </span>
                  )}
                </div>

                {/* Headline */}
                <h2
                  className="font-serif mb-4"
                  style={{
                    fontSize: "1.2rem",
                    color: "oklch(0.25 0.06 30)",
                    lineHeight: 1.35,
                    fontWeight: 700,
                  }}
                >
                  {article.headline}
                </h2>

                {/* Gold divider mini */}
                <div
                  className="h-px w-16 mb-4"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.5)" }}
                />

                {/* Body paragraph */}
                <p
                  className="font-body leading-relaxed flex-1"
                  style={{
                    fontSize: "0.97rem",
                    color: "oklch(0.38 0.04 45)",
                    lineHeight: 1.8,
                  }}
                >
                  {displayBody}
                </p>

                {/* Read More / Read Less button */}
                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggleArticle(i)}
                    className="font-heading text-[0.62rem] tracking-[0.2em] uppercase mt-3 cursor-pointer self-start"
                    style={{
                      color: "oklch(0.35 0.12 15)",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid oklch(0.72 0.12 75)",
                      padding: "0 0 2px 0",
                    }}
                  >
                    {isExpanded ? "Read Less ▲" : "Read More ▼"}
                  </button>
                )}

                {/* Bottom rule + byline */}
                <div
                  className="h-px w-full mt-5 mb-4"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.2)" }}
                />

                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-heading text-[0.58rem] tracking-[0.18em] uppercase italic"
                    style={{ color: "oklch(0.55 0.04 55 / 0.8)" }}
                  >
                    By the VENICE News Desk
                  </span>
                  <span
                    className="font-heading text-[0.55rem] tracking-[0.14em] uppercase"
                    style={{ color: "oklch(0.65 0.08 65 / 0.7)" }}
                  >
                    {i + 1} / {newsArticles.length}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── SUBSCRIBE STRIP ──────────────────────────────────── */}
      <div
        className="py-10 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <EraBadge
            text="Daily Dispatches"
            variant="burgundy"
            className="mb-4"
          />
          <h3
            className="font-serif mb-3"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              color: "oklch(0.35 0.12 15)",
              fontWeight: 700,
            }}
          >
            Fresh Beauty News, Every Day
          </h3>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75)"
            size="sm"
            className="mx-auto mb-4"
          />
          <p
            className="font-body italic"
            style={{
              fontSize: "1rem",
              color: "oklch(0.45 0.04 55)",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            VENICE brings you six curated editorial dispatches daily — from the
            beauty counters, the Playboy archives, and the skincare science that
            defines the zeitgeist.
          </p>
        </div>
      </div>

      {/* ── FOOTER DIVIDER ──────────────────────────────────── */}
      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
