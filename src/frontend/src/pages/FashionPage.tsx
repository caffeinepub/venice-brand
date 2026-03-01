import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

interface Look {
  name: string;
  description: string;
}

interface EraSection {
  era: string;
  eraLabel: string;
  title: string;
  subtitle: string;
  philosophy: string;
  details: string;
  looks: Look[];
  gradient: string;
}

const eraSections: EraSection[] = [
  {
    era: "1920s",
    eraLabel: "Circa 1920",
    title: "The Flapper Era",
    subtitle: "Liberation Through Silhouette",
    philosophy:
      "The 1920s represented the most radical rupture in fashion history. In a single decade, the corset was abandoned, the hemline rose, and the feminine silhouette was redrawn entirely. The flapper — that singular icon of post-war liberation — wore her fashion as a manifesto.",
    details:
      "Key elements: dropped waistlines, straight chemise shapes, beaded and fringed embellishments, silk charmeuse, velvet, and the ubiquitous cloche hat worn low over the brow. Colors ranged from ivory and champagne to deep midnight and black — often adorned with intricate beadwork that caught the light of jazz clubs.",
    looks: [
      {
        name: "The Beaded Charmeuse Slip",
        description:
          "A bias-cut charmeuse dress in champagne, its entire surface encrusted with glass beads in a geometric Art Deco pattern. Paired with a long strand of graduated pearls and a silk velvet headband.",
      },
      {
        name: "The Velvet Cloche Ensemble",
        description:
          "A deep emerald velvet afternoon dress with handkerchief hem and a matching cloche hat in silk velvet. Long kidskin gloves and a black beaded evening bag complete the composition.",
      },
      {
        name: "The Art Deco Column",
        description:
          "A column of ivory silk with inset panels of geometric black and gold embroidery. The back draped low in a daring V to the waist — scandalous and breathtaking in equal measure.",
      },
    ],
    gradient:
      "linear-gradient(145deg, oklch(0.65 0.06 65 / 0.15) 0%, oklch(0.91 0.03 78) 100%)",
  },
  {
    era: "1940s",
    eraLabel: "Circa 1940",
    title: "The Wartime Silhouette",
    subtitle: "Utility Elevated to Art",
    philosophy:
      "War rationed fabric but not ingenuity. The 1940s woman dressed with a kind of heroic pragmatism — her clothes were structured, her shoulders squared, her hemlines raised by necessity. And yet within these constraints, a new aesthetic emerged that was arguably the most sophisticated in the century.",
    details:
      "The silhouette was decisive: padded shoulders creating a strong, architectural line, nipped waist, A-line or pencil skirt. Fabrics were wool gabardine, worsted, and crepe — durable, beautiful, and able to hold a press. Every seam was purposeful. Every button earned its place.",
    looks: [
      {
        name: "The Wool Gabardine Suit",
        description:
          "A impeccably tailored suit in slate-grey wool gabardine. Notched lapels, three buttons, a slightly flared skirt to the knee. Worn with silk stockings, a felt hat, and white gloves — the absolute expression of wartime elegance.",
      },
      {
        name: "The Victory Roll Afternoon Dress",
        description:
          "A rayon crepe day dress in burgundy with polka dots, a sweetheart neckline, and puffed shoulders. Named for the victory rolls worn in the hair above: pin-curled and pompadoured to patriotic perfection.",
      },
      {
        name: "The Utility Trench",
        description:
          "A double-breasted wool trench coat in camel, broad-shouldered and belted at the waist. Functional, powerful, timeless — still the most copied silhouette in fashion history.",
      },
    ],
    gradient:
      "linear-gradient(145deg, oklch(0.28 0.06 250 / 0.12) 0%, oklch(0.91 0.03 78) 100%)",
  },
  {
    era: "1960s",
    eraLabel: "Circa 1960",
    title: "The Mod Revolution",
    subtitle: "Geometry as Fashion Manifesto",
    philosophy:
      "The 1960s didn't just change fashion — they dismantled the architecture of how women dressed and rebuilt it from mathematical first principles. Mary Quant in London and André Courrèges in Paris simultaneously arrived at the same revelation: fashion could be graphic, geometric, youthful, and thoroughly modern.",
    details:
      "The silhouette was radical in its simplicity: A-line or shift dresses, often with geometric cutouts or contrasting panels. Hemlines climbed to mid-thigh — the miniskirt — and fabrics were increasingly synthetic: PVC, vinyl, coated cotton. Colors were bold: stark white, jet black, primary red, and the mod palette of orange and yellow.",
    looks: [
      {
        name: "The Geometric Shift Dress",
        description:
          "A sleeveless shift dress in stark white wool, with a graphic black rectangular panel across the front. Worn with white go-go boots to the knee and a fringed bob — the complete mod statement.",
      },
      {
        name: "The Space Age Suit",
        description:
          "A courrèges-inspired suit in white with silver geometric trim. The jacket ending at the waist, the skirt stopping at the thigh. Paired with silver ankle boots — fashion as science fiction, realized.",
      },
      {
        name: "The Op Art Maxi",
        description:
          "A floor-length dress in bold black-and-white Op Art print, the geometric pattern creating a dizzying optical illusion. With a simple pillbox hat and no jewellery — the print was everything.",
      },
    ],
    gradient:
      "linear-gradient(145deg, oklch(0.35 0.12 15 / 0.12) 0%, oklch(0.91 0.03 78) 100%)",
  },
];

const fashionRules = [
  "Invest in silhouette before you invest in anything else. A perfect line will outlast any trend.",
  "Quality of fabric is felt before it is seen. Touch everything before you buy it.",
  "One extraordinary accessory is worth ten mediocre ones. Learn to edit ruthlessly.",
  "Dress for the person you intend to become, not the one you were this morning.",
  "Elegance is not the absence of decoration — it is the presence of intention.",
];

export function FashionPage() {
  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ────────────────────────────────────────── */}
      <header
        className="relative py-16 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.22 0.05 250)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <EraBadge
                text="Fashion Heritage"
                variant="gold"
                className="mb-4"
              />
              <h1
                className="font-serif mb-4"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  color: "oklch(0.72 0.12 75)",
                  lineHeight: 1.05,
                  fontWeight: 900,
                }}
              >
                THE FASHION CHRONICLE
              </h1>
              <ArtDecoDivider
                color="oklch(0.72 0.12 75 / 0.6)"
                size="sm"
                className="mb-4"
              />
              <p
                className="font-body italic"
                style={{
                  fontSize: "1.15rem",
                  color: "oklch(0.75 0.04 75 / 0.8)",
                  lineHeight: 1.6,
                }}
              >
                A curated journey through fashion's most extraordinary chapters
                — from the liberation of the 1920s to the geometry of the 1960s
              </p>
            </div>

            <div
              className="relative overflow-hidden"
              style={{
                height: "320px",
                border: "2px solid oklch(0.72 0.12 75 / 0.3)",
              }}
            >
              <img
                src="/assets/generated/venice-fashion-editorial.dim_1000x700.jpg"
                alt="VENICE Fashion editorial"
                className="w-full h-full object-cover sepia-hover"
                style={{ filter: "sepia(0.15) contrast(1.05)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.22 0.05 250), transparent)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── FASHION EDITOR'S LETTER ──────────────────────────── */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "oklch(0.35 0.12 15)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.5)"
            size="md"
            className="mb-8"
          />
          <blockquote>
            <p
              className="font-serif italic mb-6"
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                color: "oklch(0.88 0.03 75)",
                lineHeight: 1.6,
              }}
            >
              "Fashion is not merely what one wears — it is the visible language
              of who one has chosen to become. Every silhouette is a sentence,
              every hem a punctuation mark, every accessory an eloquent aside."
            </p>
            <footer>
              <cite
                className="font-heading text-xs tracking-[0.25em] uppercase not-italic"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                — The VENICE Fashion Editors
              </cite>
            </footer>
          </blockquote>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.5)"
            size="md"
            className="mt-8"
          />
        </div>
      </section>

      {/* ── ERA LOOKBOOK SECTIONS ────────────────────────────── */}
      {eraSections.map((era, eraIndex) => (
        <section
          key={era.era}
          className="py-16 px-6 vintage-texture"
          style={{
            backgroundColor:
              eraIndex % 2 === 0
                ? "oklch(0.94 0.025 80)"
                : "oklch(0.97 0.02 85)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div
              className="relative p-8 mb-10"
              style={{ background: era.gradient }}
            >
              <div
                className="absolute inset-0"
                style={{
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  margin: "8px",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <EraBadge text={era.eraLabel} variant="gold" />
                  <span
                    className="font-heading text-xs tracking-[0.2em] uppercase"
                    style={{ color: "oklch(0.5 0.04 60)" }}
                  >
                    Fashion History · VENICE Edit
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2
                      className="font-serif mb-1"
                      style={{
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        color: "oklch(0.35 0.12 15)",
                        fontWeight: 900,
                      }}
                    >
                      {era.title}
                    </h2>
                    <p
                      className="font-body italic mb-4"
                      style={{
                        fontSize: "1.1rem",
                        color: "oklch(0.5 0.04 60)",
                      }}
                    >
                      {era.subtitle}
                    </p>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1rem", color: "oklch(0.4 0.04 55)" }}
                    >
                      {era.philosophy}
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        fontSize: "0.95rem",
                        color: "oklch(0.45 0.04 55)",
                      }}
                    >
                      {era.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Look cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {era.looks.map((look, lookIndex) => (
                <article key={look.name} className="ornate-card p-6">
                  {/* Look number */}
                  <div
                    className="font-display text-5xl opacity-15 mb-3 leading-none"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                    aria-hidden="true"
                  >
                    {lookIndex + 1}
                  </div>

                  <h3
                    className="font-serif mb-3"
                    style={{
                      fontSize: "1.05rem",
                      color: "oklch(0.25 0.06 30)",
                      lineHeight: 1.3,
                      fontWeight: 700,
                    }}
                  >
                    {look.name}
                  </h3>
                  <div
                    className="w-8 h-px mb-3"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.5)" }}
                  />
                  <p
                    className="font-body italic text-sm leading-relaxed"
                    style={{ color: "oklch(0.5 0.04 60)" }}
                  >
                    {look.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ArtDecoDivider
                color={
                  eraIndex % 2 === 0
                    ? "oklch(0.72 0.12 75)"
                    : "oklch(0.72 0.12 75 / 0.6)"
                }
                size="md"
              />
            </div>
          </div>
        </section>
      ))}

      {/* ── FASHION RULES ───────────────────────────────────── */}
      <section
        className="py-16 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <EraBadge
              text="Timeless Principles"
              variant="burgundy"
              className="mb-4"
            />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "oklch(0.35 0.12 15)",
              }}
            >
              The VENICE Fashion Rules
            </h2>
          </div>

          <ol className="space-y-6">
            {fashionRules.map((rule, i) => (
              <li
                key={rule.slice(0, 30)}
                className="flex items-start gap-5 p-5"
                style={{
                  borderBottom:
                    i < fashionRules.length - 1
                      ? "1px solid oklch(0.72 0.12 75 / 0.2)"
                      : "none",
                }}
              >
                <span
                  className="font-display text-3xl leading-none shrink-0 mt-1"
                  style={{ color: "oklch(0.72 0.12 75 / 0.4)" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p
                  className="font-serif italic"
                  style={{
                    fontSize: "1.15rem",
                    color: "oklch(0.35 0.12 15)",
                    lineHeight: 1.5,
                  }}
                >
                  {rule}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
