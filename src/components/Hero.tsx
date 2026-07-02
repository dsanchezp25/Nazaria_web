"use client";

import Link from "next/link";
import PhoneCarousel from "./PhoneCarousel";
import ScrollReveal from "./ScrollReveal";
import { useSubscribe } from "@/context/SubscribeContext";

export default function Hero() {
  const { openModal } = useSubscribe();

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-background px-4 py-16 sm:px-6 md:flex-row md:gap-24 md:px-16 lg:gap-36 xl:gap-44">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 h-[800px] w-[800px] rounded-full bg-primary-light/30 blur-3xl"
          style={{ animation: "pulse-dot 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-40 right-0 h-[700px] w-[700px] rounded-full bg-primary-dark/40 blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite" }}
        />
      </div>

      <ScrollReveal direction="left" className="z-10 mt-8 md:order-1 order-2 lg:scale-110">
        <PhoneCarousel />
      </ScrollReveal>

      <ScrollReveal
        direction="right"
        delay={200}
        className="z-10 mt-14 flex max-w-3xl flex-col items-center text-center order-1 md:order-2 md:items-start md:text-left"
      >
        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full bg-primary-light/40 px-5 py-2 backdrop-blur-sm sm:px-6 sm:py-2.5">
          <span
            className="h-3 w-3 rounded-full bg-accent-gold"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          <span className="text-base font-semibold tracking-wide text-accent-gold">NUEVA APP · PRÓXIMAMENTE</span>
        </div>

        <img
          src="/logo_nazaria.png"
          alt="Nazaria Logo"
          className="my-4 h-28 w-28 md:h-32 md:w-32"
        />

        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-wide text-accent-gold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          NAZARIA
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-white/85 sm:text-2xl lg:text-3xl">
          La app inteligente para la Semana Santa de Sevilla.{" "}
          <strong className="text-accent-gold">Encuentra</strong> procesiones,{" "}
          <strong className="text-accent-gold">planifica</strong> rutas alternativas y{" "}
          <strong className="text-accent-gold">vive</strong> cada momento sin perderte nada.
        </p>

        <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row">
          <button
            onClick={openModal}
            className="btn-shimmer inline-flex h-[68px] w-full items-center justify-center gap-3 rounded-xl px-12 text-lg font-semibold tracking-wide text-primary-dark transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto border-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">notifications_active</span>
            Avisadme cuando esté lista
          </button>
          <Link
            href="#features"
            className="inline-flex h-[68px] w-full items-center justify-center rounded-xl border-2 border-white/25 px-12 text-lg font-semibold tracking-wide text-white transition-all hover:border-accent-gold hover:text-accent-gold sm:w-auto"
          >
            Descubrir más
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-white/50 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-accent-gold">android</span>
            <span className="text-base font-medium sm:text-lg">Google Play</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-accent-gold">ios</span>
            <span className="text-base font-medium sm:text-lg">App Store</span>
          </div>
          <span className="hidden sm:inline text-base text-white/25">·</span>
          <span className="text-base text-white/25 sm:text-lg">Próximamente</span>
        </div>
      </ScrollReveal>

      <div
        className="absolute -bottom-1 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        style={{ animation: "float 2.5s ease-in-out infinite" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-base text-white/40">Desliza para descubrir</span>
          <span className="material-symbols-outlined text-white/25">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}
