"use client";

import { useState, useEffect, useCallback } from "react";

const screens = [
  {
    id: 1,
    label: "Inicio",
    content: (
      <div className="flex h-full w-full flex-col bg-[#FFFBFE]">
        <div className="flex h-[44px] shrink-0 items-center bg-[#45148A] px-4">
          <span className="font-display text-[22px] font-extrabold tracking-wider text-white">NAZARIA</span>
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-3">
          <div className="flex items-center gap-3">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-2 border-[#45148A] bg-white">
              <span className="material-symbols-outlined text-2xl text-[#45148A]">person</span>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1C1B1F]">Bienvenido</p>
              <p className="text-[11px] text-[#49454E]">Tu guía interactiva para vivir la Semana Santa</p>
            </div>
          </div>

          <p className="mt-4 text-[14px] font-bold text-[#1C1B1F]">HERMANDADES - Domingo de Ramos</p>

          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {[
              { name: "La Paz", color: "#E91E63" },
              { name: "La Hiniesta", color: "#4CAF50" },
              { name: "La Cena", color: "#FF9800" },
              { name: "El Amor", color: "#9E9E9E" },
            ].map((b, i) => (
              <div
                key={i}
                className="flex h-[130px] w-[130px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-[#E7E0EC] px-2"
              >
                <div
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                  style={{ backgroundColor: b.color + "18" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: b.color }}>church</span>
                </div>
                <span className="text-center text-[11px] font-bold leading-tight text-[#1C1B1F]">{b.name}</span>
              </div>
            ))}
          </div>

          <button className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#45148A] py-3">
            <span className="text-[14px] font-bold text-white">OBTENER RECORRIDO</span>
          </button>

          <p className="mt-4 text-[14px] font-bold text-[#1C1B1F]">ÚLTIMAS NOTICIAS</p>

          <div className="mt-2 rounded-xl bg-[#E7E0EC] p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#1C1B1F]">El Consejo · @ElConsejoSev</p>
                <p className="text-[10px] text-[#49454E]">Ver los últimos tweets sobre la Semana Santa...</p>
              </div>
              <span className="material-symbols-outlined text-[#45148A]" style={{ fontSize: 20 }}>chevron_right</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-around border-t border-[#E0DCE5] bg-white py-1.5">
          <span className="material-symbols-outlined text-[#45148A]" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>list</span>
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>person</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Días",
    content: (
      <div className="flex h-full w-full flex-col bg-[#FFFBFE]">
        <div className="flex h-[44px] shrink-0 items-center bg-[#45148A] px-4">
          <span className="font-display text-[22px] font-extrabold tracking-wider text-white">Hermandades</span>
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-3">
          {[
            { day: "Domingo de Ramos", amount: 8, date: "13 Abr", color: "#45148A" },
            { day: "Lunes Santo", amount: 7, date: "14 Abr", color: "#45148A" },
            { day: "Martes Santo", amount: 8, date: "15 Abr", color: "#45148A" },
            { day: "Miércoles Santo", amount: 7, date: "16 Abr", color: "#45148A" },
            { day: "Jueves Santo", amount: 6, date: "17 Abr", color: "#45148A" },
            { day: "La Madrugá", amount: 6, date: "17→18 Abr", color: "#5F2CA6" },
            { day: "Viernes Santo", amount: 7, date: "18 Abr", color: "#45148A" },
            { day: "Sábado Santo", amount: 5, date: "19 Abr", color: "#45148A" },
            { day: "Domingo de Resurrección", amount: 4, date: "20 Abr", color: "#45148A" },
          ].map((holyDay, i) => (
            <div
              key={i}
              className="mb-2 flex items-center justify-between rounded-xl px-4 py-2.5"
              style={{ backgroundColor: holyDay.color }}
            >
              <div>
                <p className="text-[12px] font-bold text-white leading-snug">{holyDay.day}</p>
                <p className="text-[10px] text-white/75">{holyDay.amount} hermandades</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/60">{holyDay.date}</span>
                <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>chevron_right</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center justify-around border-t border-[#E0DCE5] bg-white py-1.5">
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>home</span>
          <span className="material-symbols-outlined text-[#45148A]" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>list</span>
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>person</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Selección",
    content: (
      <div className="flex h-full w-full flex-col bg-[#FFFBFE]">
        <div className="flex h-[44px] shrink-0 items-center bg-[#45148A] px-4">
          <span className="material-symbols-outlined mr-3 text-white" style={{ fontSize: 20 }}>arrow_back</span>
          <span className="font-display text-[22px] font-extrabold tracking-wider text-white">Hermandades</span>
        </div>

        <div className="shrink-0 px-4 pt-3">
          <p className="text-[12px] font-bold text-[#1C1B1F]">Selecciona los pasos a ver</p>
          <p className="mt-0.5 text-[11px] font-medium text-[#45148A]">Día: Domingo de Ramos</p>
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-2">
          {[
            { name: "La Paz", cofradia: "Hermandad de La Paz", color: "#E91E63" },
            { name: "La Hiniesta", cofradia: "Hermandad de la Hiniesta", color: "#4CAF50" },
            { name: "La Cena", cofradia: "Hermandad de la Cena", color: "#FF9800" },
            { name: "El Amor", cofradia: "Hermandad de El Amor", color: "#9E9E9E" },
          ].map((b, i) => (
            <div key={i} className="mb-2 rounded-2xl bg-[#E7E0EC] p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: b.color + "18" }}
                >
                  <span className="material-symbols-outlined text-lg" style={{ color: b.color }}>church</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-bold text-[#1C1B1F]">{b.name}</p>
                  <p className="truncate text-[9px] text-[#49454E]">{b.cofradia}</p>
                </div>
              </div>
              <div className="my-2 h-px bg-[#45148A]/15" />
              {["Paso misterio", "Paso de palio"].map((paso, j) => (
                <div key={j} className="flex items-center gap-2 py-0.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[#45148A] bg-white">
                    {j === 0 && <div className="h-2.5 w-2.5 rounded-sm bg-[#45148A]" />}
                  </div>
                  <span className="text-[10px] text-[#1C1B1F]">{paso}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="shrink-0 px-4 pb-3 pt-1">
          <button className="flex w-full items-center justify-center rounded-xl bg-[#45148A] py-2.5">
            <span className="text-[13px] font-bold text-white">Continuar al horario</span>
          </button>
        </div>

        <div className="flex shrink-0 items-center justify-around border-t border-[#E0DCE5] bg-white py-1.5">
          <span className="material-symbols-outlined text-[#45148A]" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>list</span>
          <span className="material-symbols-outlined text-[#79747E]" style={{ fontSize: 18 }}>person</span>
        </div>
      </div>
    ),
  },
];

export default function PhoneCarousel() {
  const [active, setActive] = useState(0);
  const totalSlides = screens.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        {/* Left arrow */}
        <button
          onClick={() => setActive((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-white/20 hover:text-accent-gold border-none cursor-pointer"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        <div className="phone-frame animate-[float_5s_ease-in-out_infinite]">
          <div className="phone-screen relative">
            <div className="relative h-full w-full overflow-hidden">
              {screens.map((screen, i) => (
                <div
                  key={screen.id}
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${(i - active) * 100}%)`,
                    opacity: i === active ? 1 : 0,
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  {screen.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setActive((prev) => (prev + 1) % totalSlides)}
          className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-white/20 hover:text-accent-gold border-none cursor-pointer"
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2.5">
        {screens.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setActive(i)}
            className="cursor-pointer rounded-full border-none transition-all duration-300"
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              backgroundColor: i === active ? "#D4A017" : "rgba(255,255,255,0.2)",
            }}
            aria-label={screen.label}
          />
        ))}
      </div>
    </div>
  );
}
