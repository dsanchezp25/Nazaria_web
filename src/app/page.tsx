import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Nazaria",
      url: "https://nazaria.app",
      logo: "https://nazaria.app/logo_nazaria.png",
      description:
        "App gratuita para planificar la Semana Santa de Sevilla. Horarios de hermandades, rutas personalizadas y guía interactiva de procesiones.",
      sameAs: ["https://play.google.com/store/apps/details?id=com.nazaria.app"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Nazaria",
      url: "https://nazaria.app",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, iOS",
      description:
        "Planifica tu Semana Santa en Sevilla con horarios de hermandades en tiempo real, rutas personalizadas y directorio completo de cofradías.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuándo estará disponible Nazaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estamos ultimando los detalles para el lanzamiento. Déjanos tu email y te avisaremos en cuanto esté en Google Play.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es gratis la aplicación Nazaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, Nazaria es completamente gratuita. Queremos que todo el mundo pueda disfrutar de la Semana Santa de Sevilla sin barreras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Funciona Nazaria solo en Sevilla?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Actualmente Nazaria está enfocada en Sevilla y sus hermandades. En el futuro exploraremos otras ciudades con tradición de Semana Santa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito crear una cuenta en Nazaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, necesitarás registrarte con tu email para guardar tus rutas personalizadas y que no se pierdan entre sesiones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se generan las rutas en Nazaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seleccionas las hermandades que quieres ver, el horario en el que vas a estar, y la zona por la que entras. Nazaria calcula la ruta óptima para que puedas verlas todas.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
