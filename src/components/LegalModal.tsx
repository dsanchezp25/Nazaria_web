"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LegalType = "privacy" | "terms";

interface LegalModalProps {
  type: LegalType;
  open: boolean;
  onClose: () => void;
}

const privacyContent = [
  {
    title: "1. Responsable del tratamiento",
    body: (
      <>
        <p>Razón social: Nazaria</p>
        <p>Correo electrónico de contacto: <a href="mailto:nazaria.app@gmail.com" className="text-accent-gold underline">nazaria.app@gmail.com</a></p>
      </>
    ),
  },
  {
    title: "2. Datos que recopilamos",
    body: (
      <>
        <p>A través del formulario de aviso de lanzamiento recopilamos:</p>
        <ul>
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
        </ul>
        <p>En la aplicación móvil, además, podremos recopilar datos de uso anonimizados para mejorar la experiencia.</p>
      </>
    ),
  },
  {
    title: "3. Finalidad del tratamiento",
    body: (
      <>
        <p>Tus datos personales serán tratados con las siguientes finalidades:</p>
        <ul>
          <li>Notificarte del lanzamiento de la aplicación Nazaria en Google Play.</li>
          <li>En la aplicación: gestionar tu cuenta de usuario, guardar tus rutas personalizadas y ofrecerte las funcionalidades de la app.</li>
          <li>Enviar comunicaciones relacionadas con el servicio (nunca spam).</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legitimación",
    body: (
      <p>La base legal para el tratamiento de tus datos es tu consentimiento explícito, otorgado al rellenar el formulario de aviso o al registrarte en la aplicación, conforme al artículo 6.1.a del Reglamento General de Protección de Datos (RGPD).</p>
    ),
  },
  {
    title: "5. Conservación de los datos",
    body: (
      <p>Conservaremos tus datos personales hasta que solicites su supresión. En el caso del formulario de aviso, los conservaremos hasta el lanzamiento de la app y durante un plazo máximo de 12 meses adicionales, salvo que solicites su baja antes.</p>
    ),
  },
  {
    title: "6. Cesión de datos a terceros",
    body: (
      <p>No cedemos tus datos personales a terceros, salvo obligación legal. Utilizamos servicios de almacenamiento seguro que cumplen con el RGPD.</p>
    ),
  },
  {
    title: "7. Derechos del usuario",
    body: (
      <>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de datos enviando un correo a <a href="mailto:nazaria.app@gmail.com" className="text-accent-gold underline">nazaria.app@gmail.com</a> indicando el derecho que deseas ejercer. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
      </>
    ),
  },
  {
    title: "8. Cookies",
    body: (
      <p>Esta landing page no utiliza cookies propias con fines de seguimiento. Next.js puede utilizar cookies técnicas necesarias para el funcionamiento del sitio.</p>
    ),
  },
  {
    title: "9. Contacto",
    body: (
      <p>Para cualquier duda sobre esta política de privacidad, puedes contactarnos en <a href="mailto:nazaria.app@gmail.com" className="text-accent-gold underline">nazaria.app@gmail.com</a>.</p>
    ),
  },
];

const termsContent = [
  {
    title: "1. Descripción del servicio",
    body: (
      <p>Nazaria es una aplicación móvil para Android que te ayuda a planificar y disfrutar de la Semana Santa de Sevilla. La aplicación ofrece funcionalidades como planificador de rutas, consulta de horarios de hermandades y directorio de hermandades.</p>
    ),
  },
  {
    title: "2. Condiciones de uso",
    body: (
      <>
        <p>Al utilizar Nazaria, te comprometes a:</p>
        <ul>
          <li>Usar la aplicación únicamente con fines personales y no comerciales.</li>
          <li>No utilizar la aplicación para actividades fraudulentas o que puedan dañar su funcionamiento.</li>
          <li>Proporcionar información veraz y mantener tus datos actualizados.</li>
          <li>No reproducir, distribuir o modificar el contenido de la aplicación sin autorización.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cuenta de usuario",
    body: (
      <p>Para utilizar ciertas funcionalidades de Nazaria es necesario crear una cuenta. Eres responsable de mantener la confidencialidad de tus credenciales y de todas las actividades que ocurran bajo tu cuenta.</p>
    ),
  },
  {
    title: "4. Propiedad intelectual",
    body: (
      <p>Todos los contenidos de la aplicación Nazaria —incluyendo textos, gráficos, logotipos, iconos, imágenes y software— son propiedad de Nazaria o de sus licenciantes y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
    ),
  },
  {
    title: "5. Limitación de responsabilidad",
    body: (
      <>
        <p>Nazaria se ofrece como herramienta orientativa. Ten en cuenta que:</p>
        <ul>
          <li>Los horarios y recorridos de las hermandades pueden sufrir modificaciones de última hora por causas meteorológicas u otros motivos ajenos a la aplicación.</li>
          <li>No garantizamos la disponibilidad ininterrumpida del servicio.</li>
          <li>Nazaria no se hace responsable de los daños derivados del uso de la información proporcionada por la app.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Enlaces a terceros",
    body: (
      <p>La aplicación puede contener enlaces a sitios web de terceros (como redes sociales de hermandades). Nazaria no se responsabiliza del contenido ni de las prácticas de privacidad de dichos sitios.</p>
    ),
  },
  {
    title: "7. Modificaciones",
    body: (
      <p>Nos reservamos el derecho a modificar estos términos de uso en cualquier momento. Los cambios serán notificados a través de la aplicación y/o por correo electrónico. El uso continuado de la aplicación tras la modificación implica la aceptación de los nuevos términos.</p>
    ),
  },
  {
    title: "8. Ley aplicable y jurisdicción",
    body: (
      <p>Estos términos se rigen por la legislación española. Para cualquier controversia derivada del uso de la aplicación, las partes se someten a los juzgados y tribunales de Sevilla, salvo que la ley aplicable disponga otra cosa.</p>
    ),
  },
  {
    title: "9. Contacto",
    body: (
      <p>Para cualquier consulta sobre estos términos, puedes escribirnos a <a href="mailto:nazaria.app@gmail.com" className="text-accent-gold underline">nazaria.app@gmail.com</a>.</p>
    ),
  },
];

export default function LegalModal({ type, open, onClose }: LegalModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  const content = type === "privacy" ? privacyContent : termsContent;
  const title = type === "privacy" ? "Política de Privacidad" : "Términos de Uso";
  const icon = type === "privacy" ? "policy" : "gavel";

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-[fade-in_0.2s_ease-out]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl bg-surface shadow-2xl border border-border/30 animate-[modal-pop_0.25s_ease-out]">
        <div className="shrink-0 flex items-center justify-between px-7 py-5 border-b border-border/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold/15">
              <span className="material-symbols-outlined text-accent-gold text-xl">{icon}</span>
            </div>
            <h3 className="font-display text-xl font-extrabold tracking-wide text-accent-gold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/40 transition-colors hover:text-white border-none cursor-pointer"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-6">
          {content.map((section, i) => (
            <div key={i}>
              <h4 className="text-base font-bold text-white mb-2">{section.title}</h4>
              <div className="text-sm leading-relaxed text-white/55 space-y-1.5 [&_p]:text-white/55 [&_p]:text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-white/55 [&_ul]:text-sm [&_li]:text-white/55 [&_li]:text-sm">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 px-7 py-4 border-t border-border/20">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-accent-gold py-3 text-base font-semibold text-primary-dark transition-opacity hover:opacity-90 border-none cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
