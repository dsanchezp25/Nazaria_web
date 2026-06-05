"use client";

import { useEffect, useState, useCallback } from "react";

interface GeoCofradia {
  dia: string;
  day_id: string;
  nombre_corto: string;
  cofradia_id: string;
  pasos: number;
  color: string;
}

const DIAS = [
  { id: "domingo-de-ramos", label: "Domingo de Ramos" },
  { id: "lunes-santo", label: "Lunes Santo" },
  { id: "martes-santo", label: "Martes Santo" },
  { id: "miercoles-santo", label: "Miércoles Santo" },
  { id: "jueves-santo", label: "Jueves Santo" },
  { id: "madrugada", label: "Madrugá" },
  { id: "viernes-santo", label: "Viernes Santo" },
  { id: "sabado-santo", label: "Sábado Santo" },
  { id: "domingo-de-resurreccion", label: "Resurrección" },
];

const DAY_BG: Record<string, string> = {
  "domingo-de-ramos": "#E91E63",
  "lunes-santo": "#9C27B0",
  "martes-santo": "#3F51B5",
  "miercoles-santo": "#2196F3",
  "jueves-santo": "#00ACC1",
  madrugada: "#4CAF50",
  "viernes-santo": "#FF9800",
  "sabado-santo": "#795548",
  "domingo-de-resurreccion": "#607D8B",
};

export default function MapaCofradias() {
  const [cofradias, setCofradias] = useState<GeoCofradia[]>([]);
  const [openDay, setOpenDay] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/cofradias_geo.json")
      .then((r) => r.json())
      .then(setCofradias);
  }, []);

  const toggleDay = useCallback((dayId: string) => {
    setOpenDay((prev) => (prev === dayId ? null : dayId));
  }, []);

  const hermandadesDelDia = openDay
    ? cofradias.filter((c) => c.day_id === openDay)
    : [];

  return (
    <section id="zonas" className="mx-auto max-w-3xl px-4 py-24 sm:py-32 sm:px-8 md:px-16">
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-6 py-2.5 text-base font-semibold tracking-wide text-accent-gold">
          RECORRIDOS
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Semana Santa, día a día
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-white/60 md:text-2xl">
          Consulta las hermandades que procesionan cada día
        </p>
      </div>

      <div className="mt-12 space-y-2">
        {DIAS.map((dia) => {
          const isOpen = openDay === dia.id;
          const bgColor = DAY_BG[dia.id] || "#888";
          const count = cofradias.filter((c) => c.day_id === dia.id).length;

          return (
            <div key={dia.id} className="overflow-hidden rounded-2xl border border-border/20 bg-surface/50">
              <button
                onClick={() => toggleDay(dia.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5 border-none cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: isOpen ? bgColor : "transparent", border: `2px solid ${bgColor}` }}
                  />
                  <span className={`text-lg font-bold transition-colors ${isOpen ? "text-white" : "text-white/60"}`}>
                    {dia.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/30">{count} hermandades</span>
                  <span
                    className={`material-symbols-outlined text-xl text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 px-6 pb-5">
                    {hermandadesDelDia.map((c) => (
                      <div key={c.cofradia_id} className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: c.color }}
                        />
                        <span className="flex-1 text-base text-white/70">{c.nombre_corto}</span>
                        <span className="text-sm text-white/30">{c.pasos} paso{c.pasos > 1 ? "s" : ""}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
