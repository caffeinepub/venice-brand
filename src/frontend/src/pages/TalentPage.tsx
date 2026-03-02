import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "signup"
  | "signin"
  | "inbox";

interface TalentPageProps {
  onNavigate: (page: Page) => void;
}

interface TalentProfile {
  name: string;
  disciplines: string[];
  bio: string;
  starLevel: string;
  starVariant: "gold" | "burgundy" | "navy" | "sepia";
  initials: string;
  gradient: string;
}

const talentRoster: TalentProfile[] = [
  {
    name: "Marilyn Monroe",
    disciplines: ["Film", "Singer", "Icon"],
    bio: "The most photographed woman of the twentieth century, Marilyn Monroe was not merely beautiful — she was a complete performance artist who understood light, camera, and audience in ways that went far beyond acting. From Gentlemen Prefer Blondes to Some Like It Hot, she created a screen presence that has never been replicated and never will be.",
    starLevel: "Eternal Star",
    starVariant: "gold",
    initials: "MM",
    gradient:
      "linear-gradient(135deg, oklch(0.78 0.07 20) 0%, oklch(0.55 0.10 15) 100%)",
  },
  {
    name: "Whitney Houston",
    disciplines: ["R&B", "Pop", "Gospel"],
    bio: "Whitney Houston possessed what music critics called 'the Voice' — an instrument of such range, purity, and emotional power that it redefined what popular singing could be. Her 1985 debut, I Will Always Love You, and the landmark album Whitney elevated R&B to a global phenomenon. She remains the most awarded female artist of all time.",
    starLevel: "The Voice",
    starVariant: "burgundy",
    initials: "WH",
    gradient:
      "linear-gradient(135deg, oklch(0.40 0.09 15) 0%, oklch(0.28 0.07 10) 100%)",
  },
  {
    name: "Tina Turner",
    disciplines: ["Rock", "R&B", "Stage Performer"],
    bio: "Tina Turner staged one of the greatest comebacks in music history, releasing Private Dancer in 1984 at the age of 44 and proving that raw talent combined with indomitable will could conquer any stage in the world. Her electrifying performances — legs, voice, and energy all at full volume — made her the definitive live entertainer of the 1980s.",
    starLevel: "Queen of Rock",
    starVariant: "sepia",
    initials: "TT",
    gradient:
      "linear-gradient(135deg, oklch(0.28 0.06 250) 0%, oklch(0.38 0.08 230) 100%)",
  },
  {
    name: "Madonna",
    disciplines: ["Pop", "Dance", "Reinvention"],
    bio: "Madonna did not simply have a career — she orchestrated a sustained cultural conversation that spanned decades. From Holiday in 1983 to Like a Prayer in 1989, she challenged pop music's limits at every turn, becoming not only a recording artist but a visual director, a fashion force, and a permanent fixture in the definition of what a female performer could be.",
    starLevel: "The Material Girl",
    starVariant: "navy",
    initials: "MA",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.06 65) 0%, oklch(0.45 0.05 70) 100%)",
  },
  {
    name: "Cyndi Lauper",
    disciplines: ["New Wave", "Pop", "Songwriter"],
    bio: "Cyndi Lauper arrived in 1983 with Girls Just Want to Have Fun and an aesthetic that was entirely her own — thrift-store maximalism, exuberant colour, and an unmistakably joyful presence that made her one of the 1980s' most beloved and distinctive voices. Behind the theatrics was a serious songwriter whose work tackled freedom, identity, and the right to simply be yourself.",
    starLevel: "True Colors Star",
    starVariant: "gold",
    initials: "CL",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.10 75) 0%, oklch(0.35 0.08 70) 100%)",
  },
  {
    name: "Diana Ross",
    disciplines: ["Soul", "Pop", "Film"],
    bio: "From her years fronting The Supremes through her commanding solo career, Diana Ross set the template for the modern diva — a performer whose elegance, vocal power, and sheer star quality crossed every genre and generation. Her film role in Lady Sings the Blues earned an Academy Award nomination and proved that her talent extended far beyond the stage.",
    starLevel: "Supreme Star",
    starVariant: "burgundy",
    initials: "DR",
    gradient:
      "linear-gradient(135deg, oklch(0.35 0.12 15) 0%, oklch(0.22 0.08 20) 100%)",
  },
];

export function TalentPage({ onNavigate }: TalentPageProps) {
  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── SPOTLIGHT HEADER ────────────────────────────────── */}
      <header
        className="relative py-16 px-6 overflow-hidden vintage-texture"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, oklch(0.55 0.10 75 / 0.25) 0%, oklch(0.22 0.05 250) 60%),
            url('/assets/generated/venice-talent-showcase.dim_900x600.jpg') center/cover no-repeat
          `,
        }}
      >
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(0.15 0.04 250 / 0.82)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <EraBadge
            text="1950s Hollywood · 1980s Icons"
            variant="gold"
            className="mb-6"
          />

          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "oklch(0.72 0.12 75)",
              lineHeight: 1,
              fontWeight: 900,
              textShadow: "0 4px 30px oklch(0.72 0.12 75 / 0.3)",
            }}
          >
            VENICE TALENT
          </h1>

          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.6)"
            size="md"
            className="my-6"
          />

          <p
            className="font-body italic"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "oklch(0.88 0.03 75 / 0.9)",
              lineHeight: 1.6,
            }}
          >
            Marilyn Monroe &nbsp;·&nbsp; Whitney Houston &nbsp;·&nbsp; Tina
            Turner &nbsp;·&nbsp; Madonna &nbsp;·&nbsp; The Icons Who Changed
            Everything
          </p>
        </div>
      </header>

      {/* ── FEATURED TALENT ─────────────────────────────────── */}
      <section
        className="py-12 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.94 0.025 80)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <EraBadge text="The Eternal Spotlight" variant="gold" />
          </div>

          <div
            className="relative p-8 md:p-10 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.12 15) 0%, oklch(0.25 0.08 20) 100%)",
              border: "2px solid oklch(0.72 0.12 75 / 0.4)",
            }}
          >
            {/* Corner ornaments */}
            <div
              className="absolute top-4 left-4 text-2xl opacity-30"
              style={{ color: "oklch(0.72 0.12 75)" }}
              aria-hidden="true"
            >
              ✦
            </div>
            <div
              className="absolute top-4 right-4 text-2xl opacity-30"
              style={{ color: "oklch(0.72 0.12 75)" }}
              aria-hidden="true"
            >
              ✦
            </div>
            <div
              className="absolute bottom-4 left-4 text-2xl opacity-30"
              style={{ color: "oklch(0.72 0.12 75)" }}
              aria-hidden="true"
            >
              ✦
            </div>
            <div
              className="absolute bottom-4 right-4 text-2xl opacity-30"
              style={{ color: "oklch(0.72 0.12 75)" }}
              aria-hidden="true"
            >
              ✦
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Spotlight frame */}
              <div className="relative">
                <div
                  className="w-full flex items-center justify-center"
                  style={{
                    height: "280px",
                    background:
                      "radial-gradient(ellipse at 50% 40%, oklch(0.78 0.07 20 / 0.4) 0%, oklch(0.28 0.08 15) 100%)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="font-display text-6xl mb-2"
                      style={{ color: "oklch(0.72 0.12 75 / 0.4)" }}
                    >
                      MM
                    </div>
                    <div
                      className="font-heading text-xs tracking-[0.25em] uppercase"
                      style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                    >
                      Icon of All Time
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 20%, oklch(0.72 0.12 75 / 0.1) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p
                  className="font-heading text-xs tracking-[0.25em] uppercase mb-2"
                  style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
                >
                  Featured Talent
                </p>
                <h2
                  className="font-serif mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "oklch(0.91 0.03 78)",
                    fontWeight: 700,
                  }}
                >
                  Marilyn Monroe
                </h2>
                <p
                  className="font-body italic mb-4"
                  style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.05rem" }}
                >
                  Film · Singer · The Eternal Icon
                </p>
                <ArtDecoDivider
                  color="oklch(0.72 0.12 75 / 0.4)"
                  size="sm"
                  className="mb-4"
                />
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: "oklch(0.80 0.03 75 / 0.85)",
                    fontSize: "1rem",
                  }}
                >
                  Born Norma Jeane Mortenson in 1926, Marilyn Monroe became the
                  most recognized woman of the twentieth century — not simply
                  for her beauty, but for her genius at inhabiting a screen
                  persona of luminous warmth. Her comedic timing was flawless,
                  her singing voice unexpectedly expressive, and her
                  understanding of the camera unrivalled.
                </p>
                <p
                  className="font-body italic mt-4"
                  style={{
                    color: "oklch(0.72 0.12 75 / 0.8)",
                    fontSize: "0.95rem",
                  }}
                >
                  "She had this quality — you just couldn't take your eyes off
                  her. On or off the set, she was utterly, completely alive." —
                  Billy Wilder, Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TALENT ROSTER ───────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <EraBadge text="The Roster" variant="gold" className="mb-4" />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "oklch(0.35 0.12 15)",
              }}
            >
              The Icons We Celebrate
            </h2>
            <div className="flex justify-center mt-4">
              <ArtDecoDivider color="oklch(0.72 0.12 75)" size="sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talentRoster.map((talent) => (
              <article
                key={talent.name}
                className="ornate-card overflow-hidden"
              >
                {/* Gradient header */}
                <div
                  className="relative p-6"
                  style={{ background: talent.gradient, minHeight: "120px" }}
                >
                  {/* Corner ornaments */}
                  <div
                    className="absolute top-3 left-3 text-sm opacity-40"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                  <div
                    className="absolute top-3 right-3 text-sm opacity-40"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                  <div
                    className="absolute bottom-3 left-3 text-sm opacity-40"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                  <div
                    className="absolute bottom-3 right-3 text-sm opacity-40"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                    aria-hidden="true"
                  >
                    ✦
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Initials avatar */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 35%, oklch(0.72 0.12 75 / 0.3), oklch(0.18 0.03 50 / 0.4))",
                        border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                      }}
                    >
                      <span
                        className="font-heading text-sm tracking-wider"
                        style={{ color: "oklch(0.72 0.12 75)" }}
                      >
                        {talent.initials}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: "1.3rem",
                          color: "oklch(0.91 0.03 78)",
                          fontWeight: 700,
                        }}
                      >
                        {talent.name}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {talent.disciplines.map((disc) => (
                          <span
                            key={disc}
                            className="font-heading text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5"
                            style={{
                              backgroundColor: "oklch(0.72 0.12 75 / 0.15)",
                              color: "oklch(0.72 0.12 75)",
                              border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                            }}
                          >
                            {disc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className="font-body italic text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.45 0.04 55)" }}
                  >
                    {talent.bio}
                  </p>

                  <div className="flex items-center justify-between">
                    <EraBadge
                      text={talent.starLevel}
                      variant={talent.starVariant}
                    />
                    <button
                      type="button"
                      className="font-heading text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2 transition-all"
                      style={{
                        border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                        color: "oklch(0.35 0.12 15)",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(0.72 0.12 75 / 0.1)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(0.72 0.12 75)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(0.72 0.12 75 / 0.5)";
                      }}
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN CASTING ────────────────────────────────────── */}
      <section
        className="py-16 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.35 0.12 15)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="relative p-8 md:p-12 text-center"
            style={{
              border: "2px solid oklch(0.72 0.12 75 / 0.4)",
            }}
          >
            {/* Double inner border */}
            <div
              className="absolute inset-3 pointer-events-none"
              style={{ border: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p
                className="font-heading text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
              >
                Open Submissions
              </p>
              <h2
                className="font-serif mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  color: "oklch(0.72 0.12 75)",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                }}
              >
                NOW SEEKING EXTRAORDINARY TALENT
              </h2>

              <ArtDecoDivider
                color="oklch(0.72 0.12 75 / 0.5)"
                size="md"
                className="mb-8"
              />

              <p
                className="font-body italic mb-6"
                style={{
                  color: "oklch(0.85 0.03 75 / 0.8)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                VENICE Talent accepts submissions from artists who embody the
                rare combination of technical mastery, distinctive presence, and
                an understanding that true artistry transcends fashion and
                endures through time.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                  "Actors",
                  "Models",
                  "Singers",
                  "Dancers",
                  "Voiceover Artists",
                  "Creative Directors",
                ].map((discipline) => (
                  <div
                    key={discipline}
                    className="py-2 px-3"
                    style={{
                      border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                      backgroundColor: "oklch(0.72 0.12 75 / 0.05)",
                    }}
                  >
                    <span
                      className="font-heading text-[0.7rem] tracking-[0.2em] uppercase"
                      style={{ color: "oklch(0.72 0.12 75 / 0.8)" }}
                    >
                      ✦ {discipline}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="font-body italic mb-8 text-sm"
                style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
              >
                Submissions by portfolio and showreel only. VENICE accepts
                artists of all backgrounds and disciplines who demonstrate
                exceptional artistry and professional commitment.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="font-heading text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.18 0.03 50)",
                  border: "1px solid oklch(0.72 0.12 75)",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "oklch(0.80 0.11 78)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "oklch(0.72 0.12 75)";
                }}
              >
                Submit Your Portfolio →
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
