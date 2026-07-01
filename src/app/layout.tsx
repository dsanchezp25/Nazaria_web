import type { Metadata, Viewport } from "next";
import { SubscribeProvider } from "@/context/SubscribeContext";
import SubscribeModal from "@/components/SubscribeModal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nazaria.app"),
  title: "Nazaria — App de Semana Santa de Sevilla",
  description:
    "Nazaria es la app gratuita para planificar tu Semana Santa en Sevilla. Consulta horarios de hermandades, crea rutas personalizadas y no te pierdas ninguna procesión.",
  keywords: [
    "Semana Santa Sevilla",
    "app cofradías",
    "recorridos hermandades",
    "horarios procesiones",
    "planificador Semana Santa",
    "nazaria app",
    "sevilla semana santa",
  ],
  icons: { icon: "/logo_nazaria.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nazaria.app" },
  openGraph: {
    title: "Nazaria — Tu app para la Semana Santa de Sevilla",
    description:
      "Planifica tu Semana Santa con Nazaria. Horarios de hermandades, rutas personalizadas y mucho más. Gratis para Android y iOS.",
    url: "https://nazaria.app",
    siteName: "Nazaria",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/logo_nazaria.png", width: 512, height: 512, alt: "Nazaria Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazaria — App de Semana Santa de Sevilla",
    description:
      "Planifica tu Semana Santa con Nazaria. Horarios de hermandades, rutas personalizadas y mucho más. Gratis.",
    images: ["/logo_nazaria.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#45148A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-on-background antialiased">
        <SubscribeProvider>
          {children}
          <SubscribeModal />
        </SubscribeProvider>
      </body>
    </html>
  );
}
