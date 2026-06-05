"use client";

import { useState } from "react";
import Link from "next/link";
import { useSubscribe } from "@/context/SubscribeContext";

export default function Navbar() {
  const { openModal } = useSubscribe();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-primary-light/30 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src="/logo_nazaria.png" alt="Nazaria" className="h-9 w-9 md:h-12 md:w-12" />
          <span className="font-display text-xl font-extrabold tracking-wider text-accent-gold sm:text-2xl md:text-3xl">
            NAZARIA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="#features"
            className="text-lg font-medium text-white/75 transition-colors hover:text-accent-gold"
          >
            Funcionalidades
          </Link>
          <Link
            href="#zonas"
            className="text-lg font-medium text-white/75 transition-colors hover:text-accent-gold"
          >
            Zonas
          </Link>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-lg font-semibold text-primary-dark transition-colors hover:bg-accent-gold/80 border-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">notifications_active</span>
            Avisadme
          </button>
        </div>

        {/* Mobile: hamburger + notification bell */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={openModal}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold text-primary-dark transition-colors hover:bg-accent-gold/80 border-none cursor-pointer"
            aria-label="Avisadme"
          >
            <span className="material-symbols-outlined text-xl">notifications_active</span>
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/75 transition-colors hover:text-accent-gold border-none cursor-pointer"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[280px] bg-surface animate-[fade-in_0.2s_ease-out,slide-in-right_0.25s_ease-out] shadow-2xl">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/20">
              <span className="font-display text-lg font-extrabold tracking-wider text-accent-gold">NAZARIA</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/60 transition-colors hover:text-white border-none cursor-pointer"
                aria-label="Cerrar menú"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-3 pt-4">
              <a
                href="#features"
                onClick={(e) => handleLinkClick(e, "#features")}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-accent-gold"
              >
                <span className="material-symbols-outlined text-xl">bolt</span>
                Funcionalidades
              </a>
              <a
                href="#zonas"
                onClick={(e) => handleLinkClick(e, "#zonas")}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-accent-gold"
              >
                <span className="material-symbols-outlined text-xl">explore</span>
                Zonas
              </a>
              <button
                onClick={() => { setMenuOpen(false); openModal(); }}
                className="mt-3 flex items-center gap-3 rounded-xl bg-accent-gold px-4 py-3.5 text-lg font-semibold text-primary-dark transition-colors hover:bg-accent-gold/80 border-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">notifications_active</span>
                Avisadme
              </button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
