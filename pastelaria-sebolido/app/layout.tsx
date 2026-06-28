import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pastelariasebolido.pt"),
  title: "Padaria & Pastelaria Sebolido — Penafiel",
  description:
    "Padaria e pastelaria artesanal em Penafiel. Pão fresco diário, pastéis, bolos e muito mais, feitos com ingredientes de qualidade e receitas tradicionais.",
  keywords: [
    "padaria",
    "pastelaria",
    "Penafiel",
    "Sebolido",
    "pão fresco",
    "pastéis",
    "bolos",
  ],
  openGraph: {
    title: "Padaria & Pastelaria Sebolido — Penafiel",
    description: "Feito com amor, desde o amanhecer.",
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
