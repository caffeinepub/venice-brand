import { useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";
import { VerifiedBadge } from "../components/VerifiedBadge";
import { useAuth } from "../hooks/useAuth";

type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "signup"
  | "signin"
  | "inbox";

interface SignUpPageProps {
  onNavigate: (page: Page) => void;
}

export function SignUpPage({ onNavigate }: SignUpPageProps) {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter an email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = signup(email.trim(), password);
      setLoading(false);
      if (result.success) {
        onNavigate("inbox");
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    }, 400);
  };

  return (
    <main
      className="pt-[160px] pb-20"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ── */}
      <header
        className="relative py-14 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
          aria-hidden="true"
        />
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

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <EraBadge
            text="Create Your Account"
            variant="gold"
            className="mb-4"
          />
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "oklch(0.35 0.12 15)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            JOIN THE
            <br />
            VENICE CIRCLE
          </h1>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75)"
            size="md"
            className="my-6"
          />
          <p
            className="font-body italic"
            style={{
              fontSize: "1.05rem",
              color: "oklch(0.5 0.04 60)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Create your account to receive correspondence from admirers and
            collaborators across the VENICE universe.
          </p>
        </div>
      </header>

      {/* ── FORM ── */}
      <section className="max-w-lg mx-auto px-6 py-14">
        <form onSubmit={handleSubmit} noValidate>
          <div
            className="relative p-10"
            style={{
              backgroundColor: "oklch(0.94 0.025 80)",
              border: "1px solid oklch(0.72 0.12 75 / 0.4)",
            }}
          >
            {/* Inner decorative border */}
            <div
              className="absolute inset-3 pointer-events-none"
              style={{ border: "1px solid oklch(0.72 0.12 75 / 0.15)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.45 0.06 45)" }}
                >
                  Email Address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 85)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.25 0.05 45)",
                    fontSize: "1rem",
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75)";
                    e.target.style.boxShadow =
                      "0 0 0 2px oklch(0.72 0.12 75 / 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75 / 0.35)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.45 0.06 45)" }}
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 85)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.25 0.05 45)",
                    fontSize: "1rem",
                  }}
                  placeholder="At least 6 characters"
                  onFocus={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75)";
                    e.target.style.boxShadow =
                      "0 0 0 2px oklch(0.72 0.12 75 / 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75 / 0.35)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="signup-confirm"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.45 0.06 45)" }}
                >
                  Confirm Password
                </label>
                <input
                  id="signup-confirm"
                  type="password"
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 85)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.25 0.05 45)",
                    fontSize: "1rem",
                  }}
                  placeholder="Repeat your password"
                  onFocus={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75)";
                    e.target.style.boxShadow =
                      "0 0 0 2px oklch(0.72 0.12 75 / 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "oklch(0.72 0.12 75 / 0.35)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  className="px-4 py-3 font-body text-sm"
                  style={{
                    backgroundColor: "oklch(0.96 0.03 25 / 0.3)",
                    border: "1px solid oklch(0.55 0.22 25 / 0.4)",
                    color: "oklch(0.45 0.18 20)",
                  }}
                  role="alert"
                >
                  ✦ {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full font-heading text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-200 focus-visible:outline-none"
                style={{
                  backgroundColor: "oklch(0.35 0.12 15)",
                  color: "oklch(0.72 0.12 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  cursor: loading ? "wait" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  boxShadow: "0 4px 16px oklch(0.18 0.03 50 / 0.2)",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "oklch(0.45 0.12 15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "oklch(0.35 0.12 15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.5)";
                  }
                }}
              >
                {loading ? "Creating Account…" : "Create Account ✦"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-2">
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.25)" }}
                />
                <span
                  className="font-heading text-[0.6rem] tracking-widest uppercase"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  or
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.25)" }}
                />
              </div>

              {/* Sign in link */}
              <p
                className="text-center font-body italic text-sm"
                style={{ color: "oklch(0.5 0.04 60)" }}
              >
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => onNavigate("signin")}
                  className="underline transition-opacity hover:opacity-70"
                  style={{
                    color: "oklch(0.45 0.12 15)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textUnderlineOffset: "3px",
                    fontStyle: "italic",
                  }}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </form>

        {/* Verified note */}
        <div
          className="mt-8 p-5 text-center"
          style={{
            backgroundColor: "oklch(0.91 0.03 78)",
            border: "1px solid oklch(0.72 0.12 75 / 0.3)",
          }}
        >
          <p
            className="font-body italic text-sm"
            style={{ color: "oklch(0.5 0.04 60)" }}
          >
            Special verified status is awarded to official VENICE accounts.{" "}
            <span className="inline-flex items-center gap-1">
              KeegantheCEO@VENICEtalent.com
              <VerifiedBadge
                email="KeegantheCEO@VENICEtalent.com"
                size="sm"
                showLabel
              />
            </span>{" "}
            is the only verified member.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-6 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
