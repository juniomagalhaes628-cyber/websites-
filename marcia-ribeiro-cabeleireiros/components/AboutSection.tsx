"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import { Card3D } from "@/components/Card3D";
import { imageRevealRight, pageTurn, sectionHeader, EASE_MARCIA } from "@/lib/animations";

const values = [
  { icon: Award, label: "Experiência", desc: "Anos de prática com técnicas modernas e formação contínua." },
  { icon: Heart, label: "Dedicação", desc: "Cada cliente recebe atenção personalizada e carinhosa." },
  { icon: Sparkles, label: "Qualidade", desc: "Produtos profissionais das melhores marcas do mercado." },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_MARCIA }}
            className="relative order-2 lg:order-1 flex flex-col gap-8"
          >
            <div>
              <motion.span
                variants={sectionHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4"
              >
                Sobre Nós
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A paixão pela beleza é o que nos move
              </h2>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_MARCIA }}
                className="h-0.5 w-16 bg-rose-500 origin-left mb-4"
              />

              <p className="text-zinc-400 leading-relaxed">{business.description}</p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                No salão Márcia Ribeiro, cada visita é uma experiência pensada
                ao detalhe. Desde a escolha da cor certa até ao tratamento que
                o teu cabelo precisa, cuidamos de ti com todo o profissionalismo
                que mereces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 perspective-800">
              {values.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={pageTurn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card3D className="glass-panel-strong rounded-xl p-5" strength={8}>
                    <Icon className="w-5 h-5 text-rose-400 mb-3" />
                    <h4 className="font-semibold text-white text-sm mb-1">{label}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with 3D entry */}
          <motion.div
            variants={imageRevealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 perspective-800"
          >
            <Card3D className="relative" strength={5}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                <Image
                  src={business.aboutImage}
                  alt="Salão Márcia Ribeiro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel-strong rounded-2xl p-5 hidden md:block">
                <p className="text-3xl font-bold text-rose-400">4.9★</p>
                <p className="text-xs text-zinc-400 mt-0.5">{business.reviews} avaliações</p>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
