"use client";

import Link from "next/link";
import { useSubscribe } from "@/context/SubscribeContext";

export default function Navbar() {
  const { openModal } = useSubscribe();

  return (
    <nav className="sticky top-0 z-50 border-b border-primary-light/30 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo_nazaria.png" alt="Nazaria" className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-display text-2xl font-extrabold tracking-wider text-accent-gold md:text-3xl">
            NAZARIA
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop text links */}
          <Link
            href="#features"
            className="hidden text-lg font-medium text-white/75 transition-colors hover:text-accent-gold md:inline"
          >
            Funcionalidades
          </Link>

          {/* Mobile: solo icono de Funcionalidades */}
          <Link
            href="#features"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-accent-gold hover:text-primary-dark md:hidden"
            aria-label="Funcionalidades"
          >
            <span className="material-symbols-outlined text-xl">apps</span>
          </Link>

          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2.5 text-base font-semibold text-primary-dark transition-colors hover:bg-accent-gold/80 border-none cursor-pointer md:px-6 md:py-3 md:text-lg"
          >
            <span className="material-symbols-outlined text-xl">notifications_active</span>
            <span className="hidden md:inline">Avisadme</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
