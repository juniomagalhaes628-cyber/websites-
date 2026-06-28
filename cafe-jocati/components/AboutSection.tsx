"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Heart, Users } from "lucide-react";
import { business } from "@/lib/business";

const values = [
  { icon: Coffee, label: "Qualidade", desc: "Café de grão selecionado e ingredientes frescos todos os dias." },
  { icon: Heart, label: "Tradição", desc: "Receitas caseiras transmitidas de geração em geração." },
  { icon: Users, label: "Comunidade", desc: "O ponto de encontro das gentes de Duas Igrejas há muitos anos." },
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
                alt="Interior do Café Jocati"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-5 shadow-amber hidden md:block">
              <p className="text-3xl font-bold text-amber-400">4.8★</p>
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20 mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Um café com história em Duas Igrejas
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {business.description}
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Desde cedo até à hora de almoço, o Café Jocati acolhe quem
                precisa de uma pausa, de uma refeição quente ou simplesmente de
                conversa. A nossa cozinha usa ingredientes locais e receitas
                tradicionais que fazem a diferença.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-panel rounded-xl p-4">
                  <Icon className="w-5 h-5 text-amber-400 mb-2" />
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
