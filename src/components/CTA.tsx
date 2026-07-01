"use client";

import ScrollReveal from "./ScrollReveal";
import { useSubscribe } from "@/context/SubscribeContext";

export default function CTA() {
  const { openModal } = useSubscribe();

  return (
    <section id="download" className="bg-surface px-6 py-24 sm:py-28 sm:px-8 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-extrabold tracking-wide text-accent-gold md:text-5xl lg:text-6xl">
            Próximamente en Android y iOS
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
            <div className="mt-2 flex items-center gap-5 text-white/25">
              <span className="inline-flex items-center gap-1.5 text-sm">
                <span className="material-symbols-outlined text-base">android</span>
                Google Play
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm">
                <span className="material-symbols-outlined text-base">ios</span>
                App Store
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
