import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "map",
    title: "Planificador de rutas",
    description:
      "Crea rutas personalizadas para ver múltiples hermandades en un mismo día, optimizando tiempos y distancias.",
  },
  {
    icon: "schedule",
    title: "Horarios en tiempo real",
    description:
      "Consulta horarios de salida, paso por Carrera Oficial y recogida con información actualizada al instante.",
  },
  {
    icon: "church",
    title: "Directorio completo",
    description:
      "Accede a información detallada de todas las hermandades: historia, imágenes, recorridos y mucho más.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:px-8 md:px-16">
      <ScrollReveal className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-6 py-2.5 text-base font-semibold tracking-wide text-accent-gold">
          FUNCIONALIDADES
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Todo lo que necesitas en una app
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-xl text-white/60 md:text-2xl">
          Diseñada para que vivas la Semana Santa sin complicaciones
        </p>
      </ScrollReveal>

      <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} direction="scale" delay={i * 100}>
            <div className="group relative overflow-hidden rounded-3xl bg-surface p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg sm:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-gold/5 transition-all duration-500 group-hover:scale-[3]" />
              <div className="relative z-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-gold/10 transition-all duration-500 group-hover:rounded-full group-hover:bg-accent-gold sm:h-24 sm:w-24">
                  <span className="material-symbols-outlined text-5xl text-accent-gold transition-colors duration-300 group-hover:text-primary-dark">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white md:text-3xl">{feature.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-white/60 md:text-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
