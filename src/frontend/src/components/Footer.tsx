import { ArtDecoDivider } from "./ArtDecoDivider";
import { EraBadge } from "./EraBadge";

type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "recommendations"
  | "signup"
  | "signin"
  | "inbox";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      className="relative vintage-texture"
      style={{
        backgroundColor: "oklch(0.22 0.05 250)",
        color: "oklch(0.85 0.04 75)",
      }}
    >
      {/* Art Deco top border */}
      <div className="w-full overflow-hidden">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="footer-deco"
              x="0"
              y="0"
              width="120"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              {/* Art Deco sunburst motif */}
              <line
                x1="0"
                y1="20"
                x2="120"
                y2="20"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="40"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <polygon
                points="60,8 66,20 60,32 54,20"
                fill="none"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="0.8"
                opacity="0.6"
              />
              <polygon
                points="60,14 64,20 60,26 56,20"
                fill="oklch(0.72 0.12 75)"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="40" fill="url(#footer-deco)" />
        </svg>
      </div>

      {/* Gold accent line */}
      <div
        className="h-px mx-8"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.7), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* VENICE large wordmark */}
        <div className="text-center mb-4">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(4rem, 10vw, 7rem)",
              color: "oklch(0.72 0.12 75)",
              textShadow: "0 2px 30px oklch(0.72 0.12 75 / 0.3)",
              lineHeight: 1,
            }}
          >
            VENICE
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="text-center font-body italic mb-8 tracking-wide"
          style={{ color: "oklch(0.72 0.12 75 / 0.7)", fontSize: "1.1rem" }}
        >
          Timeless Beauty · Enduring Fashion · Unforgettable Talent
        </p>

        <div className="flex justify-center mb-10">
          <ArtDecoDivider color="oklch(0.72 0.12 75 / 0.5)" size="md" />
        </div>

        {/* Three column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About VENICE */}
          <div>
            <h3
              className="font-heading text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              About VENICE
            </h3>
            <div
              className="w-12 h-px mb-4"
              style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.4)" }}
            />
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "oklch(0.75 0.04 75 / 0.75)" }}
            >
              Born from a reverence for beauty across the ages, VENICE
              celebrates the artistry, elegance, and sophistication that defined
              history's most glamorous eras. We are curators of the timeless.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <EraBadge text="Est. 1920" variant="gold" />
              <EraBadge text="Golden Age" variant="sepia" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-heading text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              The Gazette
            </h3>
            <div
              className="w-12 h-px mb-4"
              style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.4)" }}
            />
            <ul className="space-y-2">
              {(
                [
                  "home",
                  "beauty",
                  "fashion",
                  "talent",
                  "contact",
                  "recommendations",
                ] as Page[]
              ).map((page) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(page)}
                    className="font-heading text-xs tracking-[0.15em] uppercase transition-all hover:opacity-100 text-left"
                    style={{
                      color: "oklch(0.75 0.04 75 / 0.65)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color =
                        "oklch(0.72 0.12 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color =
                        "oklch(0.75 0.04 75 / 0.65)";
                    }}
                  >
                    ✦ {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="font-heading text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Follow the Edit
            </h3>
            <div
              className="w-12 h-px mb-4"
              style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.4)" }}
            />
            <ul className="space-y-2">
              {[
                {
                  label: "Instagram",
                  icon: "◈",
                  href: "https://instagram.com",
                },
                {
                  label: "Pinterest",
                  icon: "◈",
                  href: "https://pinterest.com",
                },
                { label: "Facebook", icon: "◈", href: "https://facebook.com" },
                { label: "Twitter / X", icon: "◈", href: "https://x.com" },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xs tracking-[0.15em] uppercase transition-all flex items-center gap-2"
                    style={{ color: "oklch(0.75 0.04 75 / 0.65)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.72 0.12 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.75 0.04 75 / 0.65)";
                    }}
                  >
                    <span style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}>
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.4), transparent)",
          }}
        />

        {/* Era badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <EraBadge text="MCMXX · The Flapper Era" variant="gold" />
          <EraBadge text="MCMXXX · Golden Age" variant="sepia" />
          <EraBadge text="MCMXL · Wartime Chic" variant="sepia" />
          <EraBadge text="MCML · Pin-Up Sophistication" variant="gold" />
          <EraBadge text="MCMLX · Mod Revolution" variant="sepia" />
        </div>

        {/* Copyright */}
        <p
          className="text-center font-heading text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
        >
          © MMXXVI VENICE · All Rights Reserved · Established in the Golden Age
        </p>

        <p
          className="text-center mt-3"
          style={{ color: "oklch(0.72 0.12 75 / 0.35)" }}
        >
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs italic transition-opacity hover:opacity-80"
          >
            © {year}. Built with love using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
