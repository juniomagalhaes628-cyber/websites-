"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";
import { business } from "@/lib/business";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={business.heroImage}
          alt="Café Jocati"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-radial-dark" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-amber-400 ring-1 ring-amber-500/30">
            <MapPin className="w-3 h-3" />
            Duas Igrejas, Penafiel
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight">
            O sabor de sempre,{" "}
            <span className="text-amber-400 amber-glow">em Duas Igrejas</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Pequenos-almoços, almoços do dia e petiscos num ambiente acolhedor.
            O Café Jocati é o ponto de encontro da nossa comunidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#ementa"
              className="px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors text-sm"
            >
              Ver Ementa
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors text-sm ring-1 ring-white/20"
            >
              Como Chegar
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white font-medium">{business.rating}</span>
              <span>({business.reviews} avaliações)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Aberto agora · Fecha às 20:00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Av. Central de Duas Igrejas, Penafiel</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
