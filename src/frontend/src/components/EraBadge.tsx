interface EraBadgeProps {
  text: string;
  variant?: "gold" | "burgundy" | "navy" | "sepia";
  className?: string;
}

export function EraBadge({
  text,
  variant = "gold",
  className = "",
}: EraBadgeProps) {
  const variantStyles: Record<string, string> = {
    gold: "border-[oklch(0.72_0.12_75/0.7)] text-[oklch(0.72_0.12_75)] bg-[oklch(0.72_0.12_75/0.08)]",
    burgundy:
      "border-[oklch(0.35_0.12_15/0.5)] text-[oklch(0.60_0.10_15)] bg-[oklch(0.35_0.12_15/0.08)]",
    navy: "border-[oklch(0.22_0.05_250/0.5)] text-[oklch(0.55_0.06_250)] bg-[oklch(0.22_0.05_250/0.08)]",
    sepia:
      "border-[oklch(0.65_0.06_65/0.5)] text-[oklch(0.50_0.06_65)] bg-[oklch(0.65_0.06_65/0.08)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-0.5 border font-heading text-[0.6rem] tracking-[0.18em] uppercase ${variantStyles[variant]} ${className}`}
    >
      <span className="opacity-60">✦</span>
      {text}
      <span className="opacity-60">✦</span>
    </span>
  );
}
