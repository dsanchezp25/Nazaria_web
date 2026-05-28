"use client";

import dynamic from "next/dynamic";

const ZonasClient = dynamic(() => import("./Zonas"), {
  ssr: false,
  loading: () => (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-4 py-1.5 text-xs font-semibold text-accent-gold">
          ZONAS
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Sevilla, zona a zona</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Cada barrio, sus hermandades. Explora el mapa.
        </p>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <div className="h-[420px] w-full max-w-[580px] animate-pulse rounded-2xl bg-surface" />
      </div>
    </section>
  ),
});

export default function ZonasWrapper() {
  return <ZonasClient />;
}
