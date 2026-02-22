// ...existing code...
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

/** Single card props */
export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

/** Container props */
export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  glowRadius?: number; // rem
  glowOpacity?: number;
  animationDuration?: number; // ms
  gap?: string;
  maxWidth?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  responsive?: boolean;
  customTheme?: Record<string, string | number>;
}

/** Single card component */
export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "#3b82f6",
  hoverEffect = true,
  style,
}) => {
  return (
    <div
      className={cn(
        "relative flex-1 min-w-[14rem] p-6 rounded-2xl",
        "transition-all duration-300 ease-out",
        className
      )}
      style={{
        ...(style ?? {}),
        // expose glow color to CSS if consumer wants to use it
        ["--glow-color" as any]: glowColor,
      } as React.CSSProperties}
    >
      {/* subtle glow overlay */}
      <div
        className="pointer-events-none absolute -inset-0.5 rounded-2xl blur-md opacity-40"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, rgba(255,255,255,0.08))`,
        }}
        aria-hidden
      />
      <div className="relative rounded-2xl">{children}</div>
    </div>
  );
};

/** Cards container with optional glow overlay that follows mouse */
export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  className,
  enableGlow = true,
  glowRadius = 25,
  glowOpacity = 1,
  animationDuration = 400,
  gap = "2.5rem",
  maxWidth = "50rem",
  padding = "1rem 0.5rem",
  backgroundColor,
  borderRadius = "0.5rem",
  responsive = true,
  customTheme,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty("--x", `${x}px`);
      overlay.style.setProperty("--y", `${y}px`);
      overlay.style.setProperty("--opacity", `${glowOpacity}`);
      setShowOverlay(true);
    };

    const handleMouseLeave = () => {
      overlay.style.setProperty("--opacity", "0");
      setShowOverlay(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle = {
    ["--gap" as any]: gap,
    ["--max-width" as any]: maxWidth,
    ["--padding" as any]: padding,
    ["--border-radius" as any]: borderRadius,
    ["--animation-duration" as any]: `${animationDuration}ms`,
    ["--glow-radius" as any]: `${glowRadius}rem`,
    ["--glow-opacity" as any]: glowOpacity,
    backgroundColor: backgroundColor || undefined,
    ...customTheme,
  } as React.CSSProperties;

  return (
    <div className={cn("relative w-full", className)} style={containerStyle}>
      <div
        ref={containerRef}
        className={cn("relative max-w-[var(--max-width)] mx-auto", "px-6 py-2")}
        style={{ padding: "var(--padding)" }}
      >
        <div
          className={cn(
            "flex items-center justify-center flex-wrap gap-[var(--gap)]",
            responsive && "flex-col sm:flex-row"
          )}
        >
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            aria-hidden
            className={cn(
              "absolute inset-0 pointer-events-none select-none",
              "opacity-0 transition-all duration-[var(--animation-duration)] ease-out"
            )}
            style={{
              WebkitMask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              mask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              opacity: showOverlay ? "var(--opacity)" : "0",
            }}
          >
            <div
              className={cn(
                "flex items-center justify-center flex-wrap gap-[var(--gap)] max-w-[var(--max-width)] mx-auto",
                responsive && "flex-col sm:flex-row"
              )}
              style={{ padding: "var(--padding)" }}
            >
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && (child.type as any) === GlowingCard) {
                  const cardGlowColor = (child.props as any).glowColor || "#3b82f6";
                  return React.cloneElement(child as React.ReactElement<any>, {
                    className: cn(
                      (child.props as any).className,
                      "bg-opacity-15 dark:bg-opacity-15",
                      "border-opacity-100 dark:border-opacity-100"
                    ),
                    style: {
                      ...(child.props as any).style,
                      backgroundColor: `${cardGlowColor}15`,
                      borderColor: cardGlowColor,
                      boxShadow: `0 0 0 1px inset ${cardGlowColor}`,
                    },
                  });
                }
                return child;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlowingCards;
