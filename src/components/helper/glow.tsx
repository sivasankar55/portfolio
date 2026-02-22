// ...existing code...
"use client";

import React, { useEffect } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  identifier: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(
      `.glow-container-${identifier}`
    ) as HTMLElement | null;
    const CARDS = Array.from(
      document.querySelectorAll(`.glow-card-${identifier}`)
    ) as HTMLElement[];

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: PointerEvent) => {
      const x = event?.clientX ?? 0;
      const y = event?.clientY ?? 0;

      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          x > CARD_BOUNDS.left - CONFIG.proximity &&
          x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          y > CARD_BOUNDS.top - CONFIG.proximity &&
          y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", String(CONFIG.opacity));
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(y - CARD_CENTER[1], x - CARD_CENTER[0]) * 180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", String(ANGLE + 90));
      }
    };

    // Attach listener on body so it tracks everywhere
    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      if (!CONTAINER) return;
      CONTAINER.style.setProperty("--gap", String(CONFIG.gap));
      CONTAINER.style.setProperty("--blur", String(CONFIG.blur));
      CONTAINER.style.setProperty("--spread", String(CONFIG.spread));
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();

    // initial update to set defaults (use a center point)
    UPDATE(new PointerEvent("pointermove", { bubbles: true, clientX: 0, clientY: 0 }));

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
// ...existing code...