import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cafejocati.pt"),
  title: "Café Jocati — Duas Igrejas, Penafiel",
  description:
    "O seu café de confiança em Duas Igrejas, Penafiel. Pequeno-almoço, almoços do dia, sandes e petiscos num ambiente acolhedor.",
  keywords: ["café", "Penafiel", "Duas Igrejas", "restaurante", "almoço", "café jocati"],
  openGraph: {
    title: "Café Jocati — Duas Igrejas, Penafiel",
    description: "O sabor de sempre, em Duas Igrejas.",
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
