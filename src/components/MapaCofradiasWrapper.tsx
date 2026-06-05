"use client";

import dynamic from "next/dynamic";

const MapaCofradiasClient = dynamic(() => import("./MapaCofradias"), {
  ssr: false,
  loading: () => (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-8 md:px-16">
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-4 py-1.5 text-xs font-semibold text-accent-gold">
          RECORRIDOS
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Semana Santa, día a día</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Selecciona un día y explora los recorridos de las hermandades en el mapa
        </p>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <div className="h-[420px] w-full max-w-[760px] animate-pulse rounded-2xl bg-surface" />
      </div>
    </section>
  ),
});

export default function MapaCofradiasWrapper() {
  return <MapaCofradiasClient />;
}
