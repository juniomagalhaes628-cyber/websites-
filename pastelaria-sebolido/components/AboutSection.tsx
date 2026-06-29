"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Leaf, Heart } from "lucide-react";
import { business } from "@/lib/business";
import { Card3D } from "@/components/Card3D";
import { imageBounce, springPop } from "@/lib/animations";

const values = [
  { icon: Flame, label: "Forno Artesanal", desc: "Pão cozido no forno tradicional, todos os dias desde as 6h." },
  { icon: Leaf, label: "Ingredientes Frescos", desc: "Matérias-primas selecionadas de fornecedores locais de confiança." },
  { icon: Heart, label: "Receitas de Família", desc: "Tradição que se mantém viva há décadas em Penafiel." },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with bounce entry */}
          <motion.div
            variants={imageBounce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative perspective-800"
          >
            <Card3D className="relative" strength={5}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                <Image
                  src={business.aboutImage}
                  alt="Forno da Padaria Sebolido"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel-strong rounded-2xl p-5 hidden md:block">
                <p className="text-3xl font-bold text-yellow-400">4.7★</p>
                <p className="text-xs text-zinc-400 mt-0.5">{business.reviews} avaliações</p>
              </div>
            </Card3D>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 180, damping: 20 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20 mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A padaria que acorda Penafiel todos os dias
              </h2>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 180, damping: 18 }}
                className="h-0.5 w-16 bg-yellow-400 origin-left mb-4"
              />

              <p className="text-zinc-400 leading-relaxed">{business.description}</p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Abrimos as portas antes do amanhecer para que o teu dia comece
                com o aroma inconfundível do pão quente. A nossa equipa trabalha
                com dedicação para que cada produto seja uma experiência de
                sabor autêntico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={springPop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card3D className="glass-panel-strong rounded-xl p-5" strength={8}>
                    <Icon className="w-5 h-5 text-yellow-400 mb-3" />
                    <h4 className="font-semibold text-white text-sm mb-1">{label}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
