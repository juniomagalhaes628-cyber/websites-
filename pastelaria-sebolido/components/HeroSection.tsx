"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";
import { useRef } from "react";
import { business } from "@/lib/business";
import { heroSpring } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg, scale: 1.15 }}>
        <Image
          src={business.heroImage}
          alt="Padaria & Pastelaria Sebolido"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-radial-dark" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <div className="flex flex-col items-center gap-6">
          {/* Badge — spring bounce */}
          <motion.span
            custom={0}
            variants={heroSpring}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-strong text-xs font-medium text-yellow-400 ring-1 ring-yellow-500/30"
          >
            <MapPin className="w-3 h-3" />
            Padaria Artesanal · Penafiel
          </motion.span>

          {/* Title — spring bounce */}
          <motion.h1
            custom={1}
            variants={heroSpring}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight"
          >
            Feito com amor,{" "}
            <span className="text-yellow-400 yellow-glow">desde o amanhecer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={heroSpring}
            initial="hidden"
            animate="visible"
            className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Pão fresco saído do forno, pastéis artesanais e bolos de tradição.
            A Pastelaria Sebolido é onde o dia começa bem em Penafiel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={heroSpring}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <a
              href="#produtos"
              className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all hover:scale-105 text-sm shadow-[0_4px_24px_rgba(250,204,21,0.3)]"
            >
              Ver Produtos
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 rounded-full glass-panel-strong text-white font-medium hover:bg-white/10 transition-colors text-sm ring-1 ring-white/20"
            >
              Como Chegar
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={heroSpring}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-400"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">{business.rating}</span>
              <span>({business.reviews} avaliações)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>Abre às 06:30 · 7 dias por semana</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Sebolido, Penafiel</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-yellow-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
