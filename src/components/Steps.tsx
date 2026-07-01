import ScrollReveal from "./ScrollReveal";

const steps = [
  { step: "01", icon: "download", title: "Descarga", desc: "Gratis en Google Play Store para Android" },
  { step: "02", icon: "search", title: "Explora", desc: "Todas las hermandades de Sevilla al alcance de tu mano" },
  { step: "03", icon: "route", title: "Planifica", desc: "Crea rutas inteligentes para ver varias hermandades" },
  { step: "04", icon: "celebration", title: "Disfruta", desc: "Vive la Semana Santa con todo bajo control" },
];

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-24 sm:py-32 sm:px-8 md:px-16">
      <ScrollReveal className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-6 py-2.5 text-base font-semibold tracking-wide text-accent-gold">
          CÓMO FUNCIONA
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Empieza en menos de 2 minutos
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-xl text-white/60 md:text-2xl">
          Cuatro pasos y estarás listo para disfrutar de la Semana Santa como nunca
        </p>
      </ScrollReveal>

      <div className="relative mx-auto mt-24 grid max-w-6xl gap-12 md:grid-cols-4">
        {steps.map((item, i) => (
          <ScrollReveal key={item.step} direction="scale" delay={i * 150}>
            <div className="group relative flex flex-col items-center text-center">
              {i < 3 && (
                <div className="absolute left-[calc(50%+50px)] top-10 hidden h-[2px] w-[calc(100%-100px)] bg-gradient-to-r from-accent-gold/15 to-transparent md:block">
                  <div className="h-full w-0 bg-accent-gold transition-all duration-700 group-hover:w-full" />
                </div>
              )}

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-gold text-2xl font-bold text-primary-dark shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rounded-full group-hover:shadow-lg group-hover:shadow-accent-gold/20">
                {item.step}
              </div>

              <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent-gold/15 group-hover:shadow-lg">
                <span className="material-symbols-outlined text-4xl text-accent-gold">{item.icon}</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-lg text-white/60">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
