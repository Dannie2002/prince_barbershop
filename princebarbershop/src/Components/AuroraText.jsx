import React, { memo } from "react";

export const AuroraText = memo(({ children, className = "", colors, speed = 1 }) => {
  const gradientColors = colors || ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"];
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${gradientColors.join(", ")}, ${gradientColors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
});