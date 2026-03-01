import { useCallback, useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

type Department = "fashion" | "beauty" | "talent";

interface DepartmentConfig {
  key: Department;
  seal: string;
  label: string;
  domain: string;
  tagline: string;
  icon: string;
}

const DEPARTMENTS: DepartmentConfig[] = [
  {
    key: "fashion",
    seal: "VF",
    label: "FASHION",
    domain: "VENICEfashion.com",
    tagline: "Curators of style across the ages",
    icon: "✦",
  },
  {
    key: "beauty",
    seal: "VB",
    label: "BEAUTY",
    domain: "VENICEbeauty.com",
    tagline: "Timeless beauty — from every era",
    icon: "✦",
  },
  {
    key: "talent",
    seal: "VT",
    label: "TALENT",
    domain: "VENICEtalent.com",
    tagline: "Old Hollywood's finest traditions",
    icon: "✦",
  },
];

export function ContactPage() {
  const [selectedDept, setSelectedDept] = useState<Department>("fashion");
  const [handle, setHandle] = useState("");
  const [copied, setCopied] = useState(false);

  const activeDept = DEPARTMENTS.find((d) => d.key === selectedDept)!;
  const hasHandle = handle.trim().length > 0;
  const composedEmail = hasHandle
    ? `${handle.trim()}@${activeDept.domain}`
    : null;
  const previewEmail = composedEmail ?? `yourname@${activeDept.domain}`;

  const handleCopy = useCallback(async () => {
    if (!composedEmail) return;
    try {
      await navigator.clipboard.writeText(composedEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = composedEmail;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [composedEmail]);

  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ────────────────────────────────────────── */}
      <header
        className="relative py-16 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        {/* Decorative border */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
          aria-hidden="true"
        />

        {/* Corner ornaments */}
        <span
          className="absolute text-lg pointer-events-none"
          style={{
            top: "1.5rem",
            left: "1.5rem",
            color: "oklch(0.72 0.12 75 / 0.4)",
          }}
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="absolute text-lg pointer-events-none"
          style={{
            top: "1.5rem",
            right: "1.5rem",
            color: "oklch(0.72 0.12 75 / 0.4)",
          }}
          aria-hidden="true"
        >
          ✦
        </span>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <EraBadge
            text="Your VENICE Identity"
            variant="gold"
            className="mb-4"
          />
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              color: "oklch(0.35 0.12 15)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            CREATE YOUR
            <br />
            VENICE EMAIL
          </h1>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75)"
            size="md"
            className="my-6"
          />
          <p
            className="font-body italic"
            style={{
              fontSize: "1.1rem",
              color: "oklch(0.5 0.04 60)",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Choose your department, enter your name or handle, and claim your
            personal VENICE address — share it so admirers may write to you
            directly.
          </p>
        </div>
      </header>

      {/* ── EMAIL CREATOR ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        {/* Step 1: Department selector */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <EraBadge
              text="Step I — Choose Your Department"
              variant="burgundy"
              className="mb-3"
            />
            <p
              className="font-body italic text-sm mt-2"
              style={{ color: "oklch(0.5 0.04 60)" }}
            >
              Which house of VENICE speaks to your spirit?
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            aria-label="Select department"
          >
            {DEPARTMENTS.map((dept) => {
              const isActive = selectedDept === dept.key;
              return (
                <button
                  key={dept.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedDept(dept.key)}
                  className="relative p-6 text-center transition-all duration-300 focus-visible:outline-none"
                  style={{
                    backgroundColor: isActive
                      ? "oklch(0.91 0.03 78)"
                      : "oklch(0.94 0.025 80)",
                    border: isActive
                      ? "2px solid oklch(0.72 0.12 75)"
                      : "1px solid oklch(0.72 0.12 75 / 0.3)",
                    boxShadow: isActive
                      ? "0 8px 32px oklch(0.18 0.03 50 / 0.15), 0 0 0 1px oklch(0.72 0.12 75 / 0.4), inset 0 0 24px oklch(0.72 0.12 75 / 0.06)"
                      : "none",
                    transform: isActive ? "translateY(-4px)" : "translateY(0)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.72 0.12 75 / 0.7)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.72 0.12 75 / 0.3)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                    }
                  }}
                >
                  {/* Active indicator top line */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Inner decorative border */}
                  <div
                    className="absolute inset-2 pointer-events-none"
                    style={{
                      border: `1px solid oklch(0.72 0.12 75 / ${isActive ? "0.3" : "0.1"})`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Wax seal */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="wax-seal"
                      style={{
                        width: "70px",
                        height: "70px",
                        fontSize: "0.9rem",
                        boxShadow: isActive
                          ? "0 4px 16px oklch(0.18 0.03 50 / 0.5), inset 0 1px 2px oklch(0.72 0.12 75 / 0.3)"
                          : "0 2px 8px oklch(0.18 0.03 50 / 0.3), inset 0 1px 2px oklch(0.72 0.12 75 / 0.15)",
                      }}
                    >
                      {dept.seal}
                    </div>
                  </div>

                  {/* Department name */}
                  <h3
                    className="font-heading text-xs tracking-[0.25em] uppercase mb-2"
                    style={{
                      color: isActive
                        ? "oklch(0.35 0.12 15)"
                        : "oklch(0.45 0.06 45)",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {dept.label}
                  </h3>

                  <div
                    className="h-px w-full mb-3"
                    style={{
                      background: `linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / ${isActive ? "0.5" : "0.25"}), transparent)`,
                    }}
                  />

                  {/* Domain */}
                  <p
                    className="font-heading text-[0.6rem] tracking-wide mb-2"
                    style={{
                      color: isActive
                        ? "oklch(0.72 0.12 75)"
                        : "oklch(0.6 0.05 65)",
                    }}
                  >
                    @{dept.domain}
                  </p>

                  {/* Tagline */}
                  <p
                    className="font-body italic text-[0.75rem] leading-snug"
                    style={{ color: "oklch(0.55 0.04 60)" }}
                  >
                    {dept.tagline}
                  </p>

                  {/* Selected checkmark */}
                  {isActive && (
                    <div
                      className="absolute top-3 right-3 flex items-center justify-center rounded-full"
                      style={{
                        width: "18px",
                        height: "18px",
                        backgroundColor: "oklch(0.72 0.12 75)",
                        color: "oklch(0.97 0.02 85)",
                        fontSize: "0.6rem",
                        fontWeight: 900,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <ArtDecoDivider
          color="oklch(0.72 0.12 75)"
          size="sm"
          className="mb-12"
        />

        {/* Step 2: Handle input */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <EraBadge
              text="Step II — Your Name or Handle"
              variant="gold"
              className="mb-3"
            />
            <p
              className="font-body italic text-sm mt-2"
              style={{ color: "oklch(0.5 0.04 60)" }}
            >
              How shall the world address you?
            </p>
          </div>

          <div
            className="max-w-lg mx-auto relative p-8"
            style={{
              backgroundColor: "oklch(0.94 0.025 80)",
              border: "1px solid oklch(0.72 0.12 75 / 0.35)",
            }}
          >
            {/* Inner border */}
            <div
              className="absolute inset-2 pointer-events-none"
              style={{ border: "1px solid oklch(0.72 0.12 75 / 0.15)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <label
                htmlFor="handle-input"
                className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-3 text-center"
                style={{ color: "oklch(0.5 0.04 60)" }}
              >
                Your Name or Handle
              </label>

              <div className="relative">
                {/* @ prefix hint */}
                <span
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-heading text-sm pointer-events-none select-none"
                  style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
                  aria-hidden="true"
                >
                  ✦
                </span>
                <input
                  id="handle-input"
                  type="text"
                  autoComplete="username"
                  value={handle}
                  onChange={(e) => {
                    // Strip disallowed characters for an email local part
                    const cleaned = e.target.value.replace(
                      /[^a-zA-Z0-9._\-+]/g,
                      "",
                    );
                    setHandle(cleaned);
                  }}
                  className="w-full pl-10 pr-4 py-3 font-body text-base text-center outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 85)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.25 0.05 45)",
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                  }}
                  placeholder="e.g. jane, yourname"
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                    (e.target as HTMLElement).style.boxShadow =
                      "0 0 0 2px oklch(0.72 0.12 75 / 0.15)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.35)";
                    (e.target as HTMLElement).style.boxShadow = "none";
                  }}
                  aria-label="Enter your name or handle for your VENICE email address"
                />
              </div>

              <p
                className="font-body italic text-[0.7rem] text-center mt-3"
                style={{ color: "oklch(0.65 0.04 60)" }}
              >
                Letters, numbers, hyphens, underscores, and periods only
              </p>
            </div>
          </div>
        </div>

        <ArtDecoDivider
          color="oklch(0.72 0.12 75)"
          size="sm"
          className="mb-12"
        />

        {/* Step 3: Preview & Copy */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <EraBadge
              text="Step III — Your VENICE Address"
              variant="burgundy"
              className="mb-3"
            />
            <p
              className="font-body italic text-sm mt-2"
              style={{ color: "oklch(0.5 0.04 60)" }}
            >
              {hasHandle
                ? "Your personalised address is ready — share it with the world."
                : "Fill in your handle above to compose your address."}
            </p>
          </div>

          {/* Email preview box */}
          <div
            className="max-w-2xl mx-auto relative corner-ornament"
            style={{
              backgroundColor: hasHandle
                ? "oklch(0.35 0.12 15)"
                : "oklch(0.88 0.04 70)",
              border: hasHandle
                ? "2px solid oklch(0.72 0.12 75 / 0.7)"
                : "1px solid oklch(0.72 0.12 75 / 0.2)",
              padding: "3rem 2.5rem",
              transition: "all 0.4s ease",
              boxShadow: hasHandle
                ? "0 12px 48px oklch(0.18 0.03 50 / 0.25), 0 0 0 1px oklch(0.72 0.12 75 / 0.2)"
                : "none",
            }}
            aria-label="Email address preview"
            aria-live="polite"
          >
            {/* Inner decorative border */}
            <div
              className="absolute inset-3 pointer-events-none"
              style={{
                border: `1px solid ${hasHandle ? "oklch(0.72 0.12 75 / 0.3)" : "oklch(0.72 0.12 75 / 0.12)"}`,
              }}
              aria-hidden="true"
            />

            {/* Postal stamp badge */}
            <div className="flex justify-center mb-6">
              <div
                className="flex items-center gap-2 px-4 py-1"
                style={{
                  border: `1px solid ${hasHandle ? "oklch(0.72 0.12 75 / 0.4)" : "oklch(0.72 0.12 75 / 0.2)"}`,
                  backgroundColor: hasHandle
                    ? "oklch(0.72 0.12 75 / 0.12)"
                    : "oklch(0.72 0.12 75 / 0.05)",
                }}
              >
                <span
                  className="font-heading text-[0.5rem] tracking-[0.25em] uppercase"
                  style={{
                    color: hasHandle
                      ? "oklch(0.72 0.12 75)"
                      : "oklch(0.72 0.12 75 / 0.4)",
                  }}
                >
                  VENICE ✦ {activeDept.label}
                </span>
              </div>
            </div>

            {/* The email address itself */}
            <div className="text-center relative z-10">
              <p
                className="font-heading tracking-wide break-all"
                style={{
                  fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
                  color: hasHandle
                    ? "oklch(0.72 0.12 75)"
                    : "oklch(0.6 0.04 60 / 0.5)",
                  lineHeight: 1.4,
                  fontStyle: hasHandle ? "normal" : "italic",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.03em",
                  wordBreak: "break-all",
                }}
                aria-label={
                  hasHandle
                    ? `Your email address: ${previewEmail}`
                    : "Email preview — enter your handle above"
                }
              >
                {hasHandle ? (
                  <>
                    <span
                      style={{
                        color: "oklch(0.85 0.06 78)",
                        fontWeight: 700,
                      }}
                    >
                      {handle.trim()}
                    </span>
                    <span
                      style={{
                        color: "oklch(0.72 0.12 75 / 0.7)",
                        fontWeight: 400,
                      }}
                    >
                      @{activeDept.domain}
                    </span>
                  </>
                ) : (
                  previewEmail
                )}
              </p>

              {hasHandle && (
                <div
                  className="mt-4 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.5), transparent)",
                  }}
                  aria-hidden="true"
                />
              )}

              {hasHandle && (
                <p
                  className="font-body italic text-xs mt-3"
                  style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
                >
                  Share this address so people may write to you at VENICE
                  {activeDept.label.charAt(0) +
                    activeDept.label.slice(1).toLowerCase()}
                </p>
              )}
            </div>
          </div>

          {/* Copy button */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!hasHandle}
              className="relative font-heading text-xs tracking-[0.25em] uppercase px-14 py-5 transition-all duration-200 focus-visible:outline-none"
              style={{
                backgroundColor: hasHandle
                  ? copied
                    ? "oklch(0.45 0.14 145)"
                    : "oklch(0.35 0.12 15)"
                  : "oklch(0.88 0.04 70)",
                color: hasHandle
                  ? "oklch(0.72 0.12 75)"
                  : "oklch(0.6 0.04 60 / 0.4)",
                border: hasHandle
                  ? copied
                    ? "1px solid oklch(0.55 0.14 145 / 0.7)"
                    : "1px solid oklch(0.72 0.12 75 / 0.5)"
                  : "1px solid oklch(0.72 0.12 75 / 0.15)",
                cursor: hasHandle ? "pointer" : "not-allowed",
                fontWeight: 700,
                letterSpacing: "0.2em",
                transition: "all 0.25s ease",
                boxShadow:
                  hasHandle && !copied
                    ? "0 4px 16px oklch(0.18 0.03 50 / 0.2)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                if (hasHandle && !copied) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "oklch(0.45 0.12 15)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.72 0.12 75)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (hasHandle && !copied) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "oklch(0.35 0.12 15)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.72 0.12 75 / 0.5)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }
              }}
              aria-label={
                hasHandle
                  ? copied
                    ? "Email address copied to clipboard"
                    : `Copy ${previewEmail} to clipboard`
                  : "Enter a handle to enable copy"
              }
            >
              {copied ? "✦ Copied! ✦" : "Copy Address ✦"}
            </button>
          </div>

          {/* Instructional note */}
          <div
            className="max-w-lg mx-auto mt-10 p-6 text-center"
            style={{
              backgroundColor: "oklch(0.91 0.03 78)",
              border: "1px solid oklch(0.72 0.12 75 / 0.3)",
            }}
          >
            <p
              className="font-body italic"
              style={{
                color: "oklch(0.5 0.04 60)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              Your VENICE address is yours to share — give it to friends,
              collaborators, and admirers so they may reach you directly. Simply
              copy it and display it wherever you wish.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
