import ScrollReveal from "./ScrollReveal";

const steps = [
  { step: "01", title: "Descarga", desc: "Gratis en Google Play Store para Android" },
  { step: "02", title: "Explora", desc: "Todas las hermandades de Sevilla al alcance de tu mano" },
  { step: "03", title: "Planifica", desc: "Crea rutas inteligentes para ver varias hermandades" },
  { step: "04", title: "Disfruta", desc: "Vive la Semana Santa con todo bajo control" },
];

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-surface px-8 py-32 md:px-16">
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

      <div className="mx-auto mt-24 grid max-w-4xl gap-10 md:grid-cols-4">
        {steps.map((item, i) => (
          <ScrollReveal key={item.step} direction="scale" delay={i * 120}>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-gold text-2xl font-bold text-primary-dark shadow-md transition-all duration-500 hover:scale-110 hover:rounded-full">
                {item.step}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-lg text-white/60">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
