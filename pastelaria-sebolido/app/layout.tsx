import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
