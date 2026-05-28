"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { useSubscribe } from "@/context/SubscribeContext";

export default function Footer() {
  const { openModal } = useSubscribe();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden bg-primary-dark px-8 py-28 md:px-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h4 className="font-display text-4xl font-extrabold tracking-wider text-accent-gold md:text-5xl">NAZARIA</h4>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/40">
            Tu acompañante para la Semana Santa de Sevilla. Próximamente disponible en Google Play Store.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-14 flex items-center justify-center gap-12">
            {[
              { label: "Privacidad", icon: "description" },
              { label: "Términos", icon: "gavel" },
              { label: "Contacto", icon: "mail" },
            ].map((link) => (
              <Link
                key={link.label}
                href="#"
                className="group flex items-center gap-2 text-lg text-white/40 transition-colors hover:text-accent-gold"
              >
                <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}
          </div>
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
            &copy; {year} Nazaria. Todos los derechos reservados. Hecho en Sevilla.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
