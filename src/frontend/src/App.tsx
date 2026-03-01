import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { BeautyPage } from "./pages/BeautyPage";
import { ContactPage } from "./pages/ContactPage";
import { FashionPage } from "./pages/FashionPage";
import { HomePage } from "./pages/HomePage";
import { TalentPage } from "./pages/TalentPage";

type Page = "home" | "beauty" | "fashion" | "talent" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setIsAnimating(false);

    // Trigger re-render with new page, then animate in
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });

    // Small delay to ensure new page renders, then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });
  };

  // Animate in on first render
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });
  }, []);

  const renderPage = () => {
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
