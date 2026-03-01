import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { useAuth } from "./hooks/useAuth";
import { BeautyPage } from "./pages/BeautyPage";
import { ContactPage } from "./pages/ContactPage";
import { FashionPage } from "./pages/FashionPage";
import { HomePage } from "./pages/HomePage";
import { InboxPage } from "./pages/InboxPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { TalentPage } from "./pages/TalentPage";

export type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "signup"
  | "signin"
  | "inbox";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isAnimating, setIsAnimating] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setIsAnimating(false);

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });
  }, []);

  const renderPage = () => {
    // Redirect already-signed-in users away from auth pages
    if ((currentPage === "signin" || currentPage === "signup") && isLoggedIn) {
      return <InboxPage onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "beauty":
        return <BeautyPage />;
      case "fashion":
        return <FashionPage />;
      case "talent":
        return <TalentPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      case "signup":
        return <SignUpPage onNavigate={handleNavigate} />;
      case "signin":
        return <SignInPage onNavigate={handleNavigate} />;
      case "inbox":
        return <InboxPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <div
        key={currentPage}
        style={{
          flex: 1,
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
        }}
      >
        {renderPage()}
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
