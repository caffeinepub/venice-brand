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
    category: "FASHION",
    categoryVariant: "burgundy",
    headline: "Vogue's Most Daring Fall Runways: Fashion's New Fearlessness",
    body: "The fall 2024 runways delivered a thunderous rebuttal to minimalism — maximalism has returned, and it arrived draped in feathers, sequins, and silhouettes so dramatic they commanded silence before applause. Balenciaga sent models down the runway in sweeping hourglass coats sculpted to near-architectural perfection, while Valentino doubled down on the couture rose motif across gowns that swallowed the light whole. Bottega Veneta's collection favored a quieter boldness: oversized leather trenches in colors that had no name — somewhere between slate, storm, and desire. Designers across Paris and Milan agreed on one thing this season: subtlety is a missed opportunity. Statement-making color, whether in vivid jade or bruised violet, anchored the most talked-about looks from Fendi to Saint Laurent. What these runways declared, unanimously, is that fashion in 2024 belongs to those who dress without apology.",
  },
  {
    category: "MAKEUP",
    categoryVariant: "sepia",
    headline: "The No-Makeup Makeup Revolution: Hollywood's Quiet Rebellion",
    body: "Across Netflix's most-streamed dramas, a new kind of beauty is being written into the script — the luminous, barely-there look that whispers confidence instead of announcing it. Zendaya, whose Euphoria character sparked an entire era of graphic liner and glitter, pivoted dramatically this season toward skin-first beauty: a dewy, sun-kissed canvas sealed with a single swipe of sheer balm gloss. Sydney Sweeney, appearing at premiere after premiere with skin that seems lit from within, credits a strict double-cleanse and hyaluronic acid routine followed by the lightest possible tinted moisturizer. The technique relies on perfecting the base rather than correcting it — skin prep is now the real makeup. Product architects like Westman Atelier and Merit have built entire lines around this philosophy, with skin serums that function as foundation and pigment sticks that blur category lines entirely. Hollywood's most influential faces are telling us the same thing: the best makeup looks like none at all.",
    isBreaking: true,
  },
  {
    category: "TALENT — PLAYBOY",
    categoryVariant: "burgundy",
    headline: "Playboy's New Era: The Playmates Redefining Modern Beauty",
    body: "Playboy's long-anticipated rebrand has arrived not as a whisper but as a fully articulated manifesto, and the Playmates leading this era are among the most fashion-forward, entrepreneurially driven talents the brand has ever featured. Today's Playmates are building beauty brands, launching podcasts, and partnering with sustainable fashion houses — their Playboy association is one note in a richly orchestrated career, not the whole song. The June cover star launched a skincare line focused on barrier repair the same month her centerfold ran; her philosophy, she told VENICE, is that beauty is something you protect, not perform. The brand's visual identity has evolved accordingly: warmer lighting, editorial-grade beauty direction, and a deliberate celebration of diverse skin tones, body types, and ages that signals a genuine repositioning. Former Playmates like Holly Madison and Jenny McCarthy pioneered the celebrity-to-media-maven pipeline, and today's talents are moving even faster — leveraging social media, co-creating with beauty houses, and becoming beauty authorities in their own right. Playboy, in 2024, is as much a beauty and fashion platform as it ever was a lifestyle one.",
  },
  {
    category: "TALENT — NETFLIX",
    categoryVariant: "gold",
    headline: "Netflix's Leading Ladies: The Faces Shaping Beauty Standards",
    body: "When Jenna Ortega appeared on the Wednesday press tour with razor-sharp blunt-cut fringe and a wardrobe composed entirely of blacks and muted grays, beauty search trends shifted within hours — a testament to how completely Netflix stars now drive the beauty conversation. Ana de Armas, whose turn in the streaming giant's Blonde prompted global conversation about Marilyn Monroe's makeup iconography, became the face of Lancôme within the same quarter, and her warm bronzed look in every red carpet appearance since has been recreated millions of times across TikTok and YouTube tutorials. Anya Taylor-Joy, the most photographed woman on Netflix's roster, has single-handedly revived the deep plum lip and the sharp, drawn-on beauty mark — looks lifted directly from her character Beth Harmon in The Queen's Gambit and reinterpreted for 2024. These women are not simply promoting their projects; they are actively authoring beauty trends, collaborating with brands, and building beauty empires that will long outlast any single streaming season. Netflix has become, inadvertently, one of the most powerful beauty and fashion platforms in the world.",
  },
  {
    category: "TALENT — PRIME VIDEO",
    categoryVariant: "sepia",
    headline: "Prime Video's Rising Stars: Beauty Icons of the Streaming Age",
    body: "Prime Video's expanding roster of original programming has produced a quietly remarkable generation of beauty icons, each approaching their aesthetic with a distinctiveness that sets them apart from the broader streaming landscape. The cast of Daisy Jones & The Six, Prime's acclaimed 1970s rock drama, sparked a full-scale revival of the decade's beauty codes: sun-warmed skin, feathered hair, mascara applied with intention and left to smudge slightly, and lips in earthy roses and terracottas that recall the spirit of a Laurel Canyon summer. Phoebe Dynevor, who parlayed her Bridgerton fame into a Prime Video career, brings a Regency-meets-modern sensibility to beauty — her signature is a refined, glasslike complexion offset by one bold element, whether that's an unexpected eye shade or a lip in deep berry. The network's Citadel cast has introduced an entirely different language: sleek, high-contrast beauty with architectural liner and defined brows that read as international espionage chic. What Prime Video's stars share, regardless of genre, is a commitment to beauty that feels authored — not assembled by committee, but genuinely expressive of who they are.",
    isBreaking: true,
  },
  {
    category: "FASHION",
    categoryVariant: "burgundy",
    headline: "The It-Bag is Back: Arm Candy Rules the Red Carpet",
    body: "After a brief period of fashion asceticism — the quiet luxury era in which the handbag was expected to whisper rather than speak — the statement bag has returned to the red carpet with absolute authority. At this season's fashion weeks, the arm candy in the front row was as scrutinized as the runway itself: Bottega Veneta's Andiamo in cognac crocodile-embossed leather appeared on no fewer than twelve influential guests at Milan alone. Netflix premiere carpets have become particularly fertile ground for the bag moment — stars arriving to Stranger Things screenings and Bridgerton launch events carrying Chanel's new oval clutch in ivory satin, or the Valentino Garavani Rockstud satchel in a celadon green that immediately sold out in all three sizes. Sydney Sweeney's partnership with Miu Miu placed the brand's micro top-handle bag in the hands of the most photographed woman at every major premiere this quarter. On Prime Video's red carpets, Prada's Re-Nylon messenger has been the quiet choice of actresses who understand that the most considered bag choice is one that almost doesn't look chosen at all. The It-bag is not back in the sense that it ever truly left — it's back in the sense that fashion has given itself permission to love it again, loudly and publicly.",
  },
];

export function BeautyNewsPage() {
  const todaysDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
            Daily Dispatches from Fashion, Beauty &amp; Talent
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
            Vol. MMXXIV &nbsp;·&nbsp; The VENICE News Desk &nbsp;·&nbsp; Fashion
            · Makeup · Talent
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
              2 Fresh Dispatches Today
            </span>
          </div>
        </div>
      </div>

      {/* ── ARTICLES GRID ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, i) => (
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
                {article.body}
              </p>

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
          ))}
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
            fashion capitals, the streaming universe, and the beauty counters
            that define the zeitgeist.
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
