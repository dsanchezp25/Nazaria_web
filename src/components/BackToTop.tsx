"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-[fade-in_0.3s_ease-out] border-none cursor-pointer"
      aria-label="Volver arriba"
    >
      <span className="material-symbols-outlined text-xl text-primary-dark">arrow_upward</span>
    </button>
  );
}
