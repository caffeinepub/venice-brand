import { isVerifiedEmail } from "../hooks/useAuth";

interface VerifiedBadgeProps {
  email: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function VerifiedBadge({
  email,
  size = "md",
  showLabel = false,
}: VerifiedBadgeProps) {
  if (!isVerifiedEmail(email)) return null;

  const sizes = {
    sm: { badge: 14, star: "0.55rem", gap: "0.2rem" },
    md: { badge: 18, star: "0.7rem", gap: "0.3rem" },
    lg: { badge: 24, star: "0.9rem", gap: "0.4rem" },
  };
  const s = sizes[size];

  return (
    <span
      className="verified-badge"
      title="Verified VENICE Account"
      aria-label="Verified account"
      style={{ gap: s.gap, display: "inline-flex", alignItems: "center" }}
    >
      {/* Outer glow badge circle */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: s.badge,
          height: s.badge,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, oklch(0.65 0.22 25), oklch(0.45 0.22 20))",
          color: "oklch(0.97 0.01 30)",
          fontSize: `${s.badge * 0.6}px`,
          fontWeight: 900,
          flexShrink: 0,
          position: "relative",
        }}
        aria-hidden="true"
      >
        ✓
      </span>

      {/* Sparkle stars around */}
      <span
        className="star"
        aria-hidden="true"
        style={{
          fontSize: s.star,
          color: "oklch(0.55 0.22 25)",
          lineHeight: 1,
          marginLeft: "-2px",
        }}
      >
        ✦
      </span>
      <span
        className="star"
        aria-hidden="true"
        style={{
          fontSize: `calc(${s.star} * 0.7)`,
          color: "oklch(0.60 0.20 30)",
          lineHeight: 1,
          marginLeft: "-3px",
          marginRight: "-2px",
        }}
      >
        ✦
      </span>

      {showLabel && (
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "oklch(0.55 0.22 25)",
            fontWeight: 700,
          }}
        >
          Verified
        </span>
      )}
    </span>
  );
}
