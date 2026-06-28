"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Star, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={business.heroImage}
          alt="Márcia Ribeiro Cabeleireiro & Estética"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/90" />
        <div className="absolute inset-0 bg-radial-dark" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-rose-400 ring-1 ring-rose-500/30">
            <MapPin className="w-3 h-3" />
            Salão de Beleza · Penafiel
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight">
            Beleza com cuidado,{" "}
            <span className="text-rose-400 rose-glow">em Penafiel</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Cortes, colorações, tratamentos e estética num salão moderno e
            acolhedor. A Márcia Ribeiro cuida de ti com profissionalismo e
            dedicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#marcacoes"
              className="px-8 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-400 transition-colors text-sm"
            >
              Marcar Agora
            </a>
            <a
              href="#servicos"
              className="px-8 py-3 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors text-sm ring-1 ring-white/20"
            >
              Ver Serviços
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span className="text-white font-medium">{business.rating}</span>
              <span>({business.reviews} avaliações)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-rose-400" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{business.address}</span>
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
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
