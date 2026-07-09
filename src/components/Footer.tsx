"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import LegalModal from "./LegalModal";
import { useSubscribe } from "@/context/SubscribeContext";

export default function Footer() {
  const { openModal } = useSubscribe();
  const [legalType, setLegalType] = useState<"privacy" | "terms" | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden bg-primary-dark px-6 py-24 sm:py-28 sm:px-8 md:px-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h4 className="font-display text-4xl font-extrabold tracking-wider text-accent-gold md:text-5xl">NAZARIA</h4>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/40">
            Tu acompañante para la Semana Santa de Sevilla. Próximamente disponible en Google Play Store.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            <button
              onClick={() => setLegalType("privacy")}
              className="group flex items-center gap-2 text-lg text-white/40 transition-colors hover:text-accent-gold border-none cursor-pointer bg-transparent"
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">description</span>
              Privacidad
            </button>
            <button
              onClick={() => setLegalType("terms")}
              className="group flex items-center gap-2 text-lg text-white/40 transition-colors hover:text-accent-gold border-none cursor-pointer bg-transparent"
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">gavel</span>
              Términos
            </button>
            <Link
              href="mailto:nazaria.app@gmail.com"
              className="group flex items-center gap-2 text-lg text-white/40 transition-colors hover:text-accent-gold"
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">mail</span>
              Contacto
            </Link>
          </div>

          <LegalModal type="privacy" open={legalType === "privacy"} onClose={() => setLegalType(null)} />
          <LegalModal type="terms" open={legalType === "terms"} onClose={() => setLegalType(null)} />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-14">
            <button
              onClick={openModal}
              className="mx-auto inline-flex h-[60px] w-full max-w-[280px] items-center justify-center gap-2 rounded-xl border-2 border-white/15 bg-white/5 text-lg font-semibold text-white shadow-card transition-all hover:border-accent-gold hover:text-accent-gold hover:shadow-card-hover cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">notifications_active</span>
              Avisadme
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="mt-18 text-base text-white/25">
            &copy; {year} Nazaria. Todos los derechos reservados.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
