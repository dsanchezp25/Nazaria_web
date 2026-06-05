"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "¿Cuándo estará disponible Nazaria?",
    a: "Estamos ultimando los detalles para el lanzamiento. Déjanos tu email y te avisaremos en cuanto esté en Google Play.",
  },
  {
    q: "¿Es gratis la aplicación?",
    a: "Sí, Nazaria es completamente gratuita. Queremos que todo el mundo pueda disfrutar de la Semana Santa de Sevilla sin barreras.",
  },
  {
    q: "¿Funciona solo en Sevilla?",
    a: "Actualmente Nazaria está enfocada en Sevilla y sus hermandades. En el futuro exploraremos otras ciudades con tradición de Semana Santa.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: "Sí, necesitarás registrarte con tu email para guardar tus rutas personalizadas y que no se pierdan entre sesiones.",
  },
  {
    q: "¿Cómo se generan las rutas?",
    a: "Seleccionas las hermandades que quieres ver, el horario en el que vas a estar, y la zona por la que entras. Nazaria calcula la ruta óptima para que puedas verlas todas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 sm:px-8 md:px-12">
      <ScrollReveal className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-6 py-2.5 text-base font-semibold tracking-wide text-accent-gold">
          FAQ
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Preguntas frecuentes
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-white/60">
          Todo lo que necesitas saber sobre Nazaria
        </p>
      </ScrollReveal>

      <div className="mt-16 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <ScrollReveal key={i} delay={i * 60}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full rounded-2xl border border-border/30 bg-surface p-6 text-left transition-all hover:border-border/50 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-white md:text-xl">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined shrink-0 text-2xl text-accent-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base leading-relaxed text-white/60 md:text-lg">{faq.a}</p>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
