"use client";

import ScrollReveal from "./ScrollReveal";
import { useSubscribe } from "@/context/SubscribeContext";

export default function CTA() {
  const { openModal } = useSubscribe();

  return (
    <section id="download" className="bg-surface px-8 py-28 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-extrabold tracking-wide text-accent-gold md:text-5xl lg:text-6xl">
            Próximamente en Android
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-2xl text-white/70 md:text-3xl">
            Sé el primero en saberlo. Nazaria llegará pronto para acompañarte en la Semana Santa de Sevilla.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-16 flex flex-col items-center gap-5">
            <button
              onClick={openModal}
              className="btn-shimmer inline-flex h-[80px] w-full max-w-[380px] items-center justify-center gap-3 rounded-xl text-2xl font-semibold text-primary-dark transition-all hover:brightness-110 border-none cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl">notifications_active</span>
              Avisadme cuando esté lista
            </button>
            <p className="text-lg text-white/40">
              Sin spam. Solo te avisamos del lanzamiento.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
