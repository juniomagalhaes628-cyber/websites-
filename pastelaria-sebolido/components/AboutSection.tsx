"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Leaf, Heart } from "lucide-react";
import { business } from "@/lib/business";

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
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={business.aboutImage}
                alt="Forno da Padaria Sebolido"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-5 shadow-yellow hidden md:block">
              <p className="text-3xl font-bold text-yellow-400">4.7★</p>
              <p className="text-xs text-zinc-400 mt-0.5">{business.reviews} avaliações</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20 mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A padaria que acorda Penafiel todos os dias
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {business.description}
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Abrimos as portas antes do amanhecer para que o teu dia comece
                com o aroma inconfundível do pão quente. A nossa equipa trabalha
                com dedicação para que cada produto seja uma experiência de
                sabor autêntico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-panel rounded-xl p-4">
                  <Icon className="w-5 h-5 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm mb-1">{label}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
