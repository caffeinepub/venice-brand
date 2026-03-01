import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { VerifiedBadge } from "./VerifiedBadge";

type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "signup"
  | "signin"
  | "inbox";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const mainNavLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Beauty", page: "beauty" },
  { label: "Fashion", page: "fashion" },
  { label: "Talent", page: "talent" },
  { label: "Contact", page: "contact" },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUserEmail, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    logout();
    handleNav("home");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.35 0.12 15)" }}
    >
      {/* Gold top rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)",
        }}
      />

      {/* Masthead line */}
      <div
        className="text-center py-1.5 px-4"
        style={{
          borderBottom: "1px solid oklch(0.72 0.12 75 / 0.25)",
          color: "oklch(0.72 0.12 75 / 0.65)",
        }}
      >
        <p
          className="font-heading text-[0.55rem] tracking-[0.25em] uppercase"
          style={{ fontStyle: "italic" }}
        >
          Est. MCMXX &nbsp;·&nbsp; The VENICE Gazette &nbsp;·&nbsp; Curators of
          Timeless Elegance
        </p>
      </div>

      {/* VENICE wordmark */}
      <div className="text-center py-2 px-4">
        <button
          onClick={() => handleNav("home")}
          className="font-display transition-opacity hover:opacity-80"
          style={{
            color: "oklch(0.72 0.12 75)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            textShadow: "0 2px 20px oklch(0.72 0.12 75 / 0.4)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          type="button"
          aria-label="VENICE — Go to Home"
        >
          VENICE
        </button>
      </div>

      {/* Nav links — desktop */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <div
          className="masthead-rules text-center px-4"
          style={{ borderColor: "oklch(0.72 0.12 75 / 0.5)" }}
        >
          <div className="flex items-center justify-center gap-0">
            {/* Main page links */}
            <ul className="flex items-center gap-0">
              {mainNavLinks.map((link, i) => (
                <li key={link.page} className="flex items-center">
                  {i > 0 && (
                    <span
                      className="mx-3 font-heading text-[0.6rem]"
                      style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                    >
                      ·
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleNav(link.page)}
                    className={`font-heading text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-200 hover:opacity-100 px-1 py-1 ${
                      currentPage === link.page ? "opacity-100" : "opacity-70"
                    }`}
                    style={{
                      color:
                        currentPage === link.page
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration:
                        currentPage === link.page ? "underline" : "none",
                      textUnderlineOffset: "4px",
                      textDecorationColor: "oklch(0.72 0.12 75 / 0.6)",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Auth section */}
            <div className="flex items-center ml-6">
              <span
                className="mx-3 font-heading text-[0.6rem]"
                style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
              >
                ·
              </span>

              {isLoggedIn && currentUserEmail ? (
                <>
                  {/* Inbox link */}
                  <button
                    type="button"
                    onClick={() => handleNav("inbox")}
                    className={`font-heading text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-200 hover:opacity-100 px-1 py-1 ${
                      currentPage === "inbox" ? "opacity-100" : "opacity-70"
                    }`}
                    style={{
                      color:
                        currentPage === "inbox"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration:
                        currentPage === "inbox" ? "underline" : "none",
                      textUnderlineOffset: "4px",
                      textDecorationColor: "oklch(0.72 0.12 75 / 0.6)",
                    }}
                  >
                    Inbox
                  </button>

                  <span
                    className="mx-3 font-heading text-[0.6rem]"
                    style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                  >
                    ·
                  </span>

                  {/* User email */}
                  <span
                    className="font-heading text-[0.65rem] tracking-wide flex items-center gap-1"
                    style={{ color: "oklch(0.75 0.06 75)" }}
                    title={currentUserEmail}
                  >
                    <span
                      className="max-w-[140px] truncate block"
                      style={{ maxWidth: "140px" }}
                    >
                      {currentUserEmail}
                    </span>
                    <VerifiedBadge email={currentUserEmail} size="sm" />
                  </span>

                  <span
                    className="mx-3 font-heading text-[0.6rem]"
                    style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                  >
                    ·
                  </span>

                  {/* Sign out */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="font-heading text-[0.65rem] tracking-[0.18em] uppercase transition-all opacity-70 hover:opacity-100 px-1 py-1"
                    style={{
                      color: "oklch(0.80 0.08 25)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  {/* Sign in */}
                  <button
                    type="button"
                    onClick={() => handleNav("signin")}
                    className={`font-heading text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-200 hover:opacity-100 px-1 py-1 ${
                      currentPage === "signin" ? "opacity-100" : "opacity-70"
                    }`}
                    style={{
                      color:
                        currentPage === "signin"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration:
                        currentPage === "signin" ? "underline" : "none",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    Sign In
                  </button>

                  <span
                    className="mx-3 font-heading text-[0.6rem]"
                    style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
                  >
                    ·
                  </span>

                  {/* Sign up */}
                  <button
                    type="button"
                    onClick={() => handleNav("signup")}
                    className={`font-heading text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-200 hover:opacity-100 px-1 py-1 ${
                      currentPage === "signup" ? "opacity-100" : "opacity-70"
                    }`}
                    style={{
                      color:
                        currentPage === "signup"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration:
                        currentPage === "signup" ? "underline" : "none",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center justify-end px-4 py-2">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            color: "oklch(0.72 0.12 75)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "oklch(0.72 0.12 75 / 0.3)",
            backgroundColor: "oklch(0.30 0.11 15)",
          }}
        >
          <ul className="flex flex-col py-2">
            {mainNavLinks.map((link) => (
              <li key={link.page}>
                <button
                  type="button"
                  onClick={() => handleNav(link.page)}
                  className="w-full text-center py-3 font-heading text-sm tracking-[0.2em] uppercase transition-all"
                  style={{
                    color:
                      currentPage === link.page
                        ? "oklch(0.72 0.12 75)"
                        : "oklch(0.85 0.04 75)",
                    background:
                      currentPage === link.page
                        ? "oklch(0.72 0.12 75 / 0.08)"
                        : "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}

            {/* Mobile auth links */}
            <li>
              <div
                className="h-px mx-6 my-2"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.2)" }}
                aria-hidden="true"
              />
            </li>

            {isLoggedIn && currentUserEmail ? (
              <>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav("inbox")}
                    className="w-full text-center py-3 font-heading text-sm tracking-[0.2em] uppercase transition-all"
                    style={{
                      color:
                        currentPage === "inbox"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background:
                        currentPage === "inbox"
                          ? "oklch(0.72 0.12 75 / 0.08)"
                          : "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Inbox
                  </button>
                </li>
                <li>
                  <div className="text-center py-2 px-4">
                    <span
                      className="font-heading text-[0.6rem] tracking-wide flex items-center justify-center gap-1.5"
                      style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}
                    >
                      <span className="truncate max-w-[180px]">
                        {currentUserEmail}
                      </span>
                      <VerifiedBadge email={currentUserEmail} size="sm" />
                    </span>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-center py-3 font-heading text-sm tracking-[0.2em] uppercase transition-all"
                    style={{
                      color: "oklch(0.75 0.12 25)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav("signin")}
                    className="w-full text-center py-3 font-heading text-sm tracking-[0.2em] uppercase transition-all"
                    style={{
                      color:
                        currentPage === "signin"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background:
                        currentPage === "signin"
                          ? "oklch(0.72 0.12 75 / 0.08)"
                          : "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav("signup")}
                    className="w-full text-center py-3 font-heading text-sm tracking-[0.2em] uppercase transition-all"
                    style={{
                      color:
                        currentPage === "signup"
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.85 0.04 75)",
                      background:
                        currentPage === "signup"
                          ? "oklch(0.72 0.12 75 / 0.08)"
                          : "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Gold bottom rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.6), transparent)",
        }}
      />
    </header>
  );
}
