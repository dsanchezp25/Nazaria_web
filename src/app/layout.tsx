import type { Metadata, Viewport } from "next";
import { SubscribeProvider } from "@/context/SubscribeContext";
import SubscribeModal from "@/components/SubscribeModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nazaria",
  description:
    "Descubre Nazaria, la app que te ayuda a planificar tu Semana Santa en Sevilla. Encuentra hermandades, crea rutas alternativas y consulta horarios en tiempo real.",
  icons: { icon: "/logo_nazaria.png" },
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
