interface ArtDecoDividerProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "vertical";
  className?: string;
}

export function ArtDecoDivider({
  color = "oklch(0.72 0.12 75)",
  size = "md",
  variant = "horizontal",
  className = "",
}: ArtDecoDividerProps) {
  const heights = { sm: 20, md: 28, lg: 36 };
  const widths = { sm: 300, md: 500, lg: 700 };
  const h = heights[size];
  const w = variant === "vertical" ? h : widths[size];

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div
          style={{ width: 1, height: 60, backgroundColor: color, opacity: 0.5 }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            transform: "rotate(45deg)",
            backgroundColor: color,
            margin: "4px 0",
          }}
        />
        <div
          style={{ width: 1, height: 60, backgroundColor: color, opacity: 0.5 }}
        />
      </div>
    );
  }

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`max-w-full ${className}`}
      aria-hidden="true"
    >
      {/* Left line */}
      <line
        x1="0"
        y1={h / 2}
        x2={w / 2 - 80}
        y2={h / 2}
        stroke={color}
        strokeWidth="0.75"
        opacity="0.7"
      />
      {/* Left small diamond */}
      <polygon
        points={`${w / 2 - 76},${h / 2} ${w / 2 - 68},${h / 2 - 6} ${w / 2 - 60},${h / 2} ${w / 2 - 68},${h / 2 + 6}`}
        fill={color}
        opacity="0.5"
      />
      {/* Left medium diamond */}
      <polygon
        points={`${w / 2 - 44},${h / 2} ${w / 2 - 32},${h / 2 - 10} ${w / 2 - 20},${h / 2} ${w / 2 - 32},${h / 2 + 10}`}
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Center large diamond */}
      <polygon
        points={`${w / 2},${h / 2 - h * 0.4} ${w / 2 + h * 0.4},${h / 2} ${w / 2},${h / 2 + h * 0.4} ${w / 2 - h * 0.4},${h / 2}`}
        fill={color}
        opacity="0.9"
      />
      {/* Center inner diamond */}
      <polygon
        points={`${w / 2},${h / 2 - h * 0.18} ${w / 2 + h * 0.18},${h / 2} ${w / 2},${h / 2 + h * 0.18} ${w / 2 - h * 0.18},${h / 2}`}
        fill="oklch(0.97 0.02 85)"
        opacity="0.8"
      />
      {/* Right medium diamond */}
      <polygon
        points={`${w / 2 + 20},${h / 2} ${w / 2 + 32},${h / 2 - 10} ${w / 2 + 44},${h / 2} ${w / 2 + 32},${h / 2 + 10}`}
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Right small diamond */}
      <polygon
        points={`${w / 2 + 60},${h / 2} ${w / 2 + 68},${h / 2 - 6} ${w / 2 + 76},${h / 2} ${w / 2 + 68},${h / 2 + 6}`}
        fill={color}
        opacity="0.5"
      />
      {/* Right line */}
      <line
        x1={w / 2 + 80}
        y1={h / 2}
        x2={w}
        y2={h / 2}
        stroke={color}
        strokeWidth="0.75"
        opacity="0.7"
      />
      {/* Top/bottom accent lines */}
      <line
        x1={w / 2 - 120}
        y1={h / 2 - 4}
        x2={w / 2 + 120}
        y2={h / 2 - 4}
        stroke={color}
        strokeWidth="0.4"
        opacity="0.35"
      />
      <line
        x1={w / 2 - 120}
        y1={h / 2 + 4}
        x2={w / 2 + 120}
        y2={h / 2 + 4}
        stroke={color}
        strokeWidth="0.4"
        opacity="0.35"
      />
    </svg>
  );
}
