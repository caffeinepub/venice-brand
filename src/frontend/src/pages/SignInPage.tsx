import { useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";
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

interface SignInPageProps {
  onNavigate: (page: Page) => void;
}

export function SignInPage({ onNavigate }: SignInPageProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = login(email.trim(), password);
      setLoading(false);
      if (result.success) {
        onNavigate("inbox");
      } else {
        setError(result.error ?? "Sign in failed. Please try again.");
      }
    }, 350);
  };

  return (
    <main
      className="pt-[160px] pb-20"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ── */}
      <header
        className="relative py-14 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.35 0.12 15)" }}
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
            color: "oklch(0.72 0.12 75 / 0.5)",
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
            color: "oklch(0.72 0.12 75 / 0.5)",
          }}
          aria-hidden="true"
        >
          ✦
        </span>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <EraBadge text="Member Access" variant="gold" className="mb-4" />
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "oklch(0.72 0.12 75)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            WELCOME
            <br />
            BACK
          </h1>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75 / 0.7)"
            size="md"
            className="my-6"
          />
          <p
            className="font-body italic"
            style={{
              fontSize: "1.05rem",
              color: "oklch(0.75 0.04 75 / 0.8)",
              lineHeight: 1.7,
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            Sign in to access your VENICE inbox and read your correspondence.
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
                  htmlFor="signin-email"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.45 0.06 45)" }}
                >
                  Email Address
                </label>
                <input
                  id="signin-email"
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
                  htmlFor="signin-password"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.45 0.06 45)" }}
                >
                  Password
                </label>
                <input
                  id="signin-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 85)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.25 0.05 45)",
                    fontSize: "1rem",
                  }}
                  placeholder="Your password"
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
                {loading ? "Signing In…" : "Sign In ✦"}
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

              {/* Sign up link */}
              <p
                className="text-center font-body italic text-sm"
                style={{ color: "oklch(0.5 0.04 60)" }}
              >
                New to VENICE?{" "}
                <button
                  type="button"
                  onClick={() => onNavigate("signup")}
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
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </form>
      </section>

      <div className="flex justify-center py-6 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
