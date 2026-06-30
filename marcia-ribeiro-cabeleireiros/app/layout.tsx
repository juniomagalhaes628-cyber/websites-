import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marciaribeirocabeleireiros.pt"),
  title: "Márcia Ribeiro — Cabeleireiro & Estética | Penafiel",
  description:
    "Salão de cabeleireiro e estética em Penafiel. Cortes, colorações, tratamentos capilares, manicure, pedicure e muito mais. Marque já a sua consulta.",
  keywords: [
    "cabeleireiro",
    "Penafiel",
    "estética",
    "salão beleza",
    "Márcia Ribeiro",
    "coloração",
    "manicure",
  ],
  openGraph: {
    title: "Márcia Ribeiro — Cabeleireiro & Estética | Penafiel",
    description: "Beleza com cuidado, em Penafiel.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="dark">
      <body className={inter.className}>
        <JsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
