"use client";

import { motion } from "framer-motion";
import { Cake, Gift, Coffee } from "lucide-react";
import { business } from "@/lib/business";
import { Card3D } from "@/components/Card3D";
import { springPop, heroSpring } from "@/lib/animations";

const encomendas = [
  {
    icon: Cake,
    title: "Bolo de Aniversário",
    desc: "Personalizado ao teu gosto — sabor, decoração e tamanho à escolha. Encomende com pelo menos 48h de antecedência.",
    cta: "Encomendar bolo",
  },
  {
    icon: Gift,
    title: "Bolo de Casamento",
    desc: "Bolos para o dia mais especial da tua vida. Reunimos contigo para criar o bolo dos teus sonhos.",
    cta: "Pedir orçamento",
  },
  {
    icon: Coffee,
    title: "Mesa Doce & Buffet",
    desc: "Pastéis, bolos e doces variados para festas e eventos. Adaptamos ao número de convidados e temática.",
    cta: "Saber mais",
  },
];

export default function EncomendasSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          custom={0}
          variants={heroSpring}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20 mb-4">
            Encomendas Especiais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Feito à tua medida
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 180, damping: 18 }}
            className="h-0.5 w-10 bg-yellow-400 origin-center mx-auto mb-4"
          />

          <p className="text-zinc-400 max-w-md mx-auto">
            Bolos e doces personalizados para os momentos que não se esquecem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {encomendas.map(({ icon: Icon, title, desc, cta }, i) => {
            const message = encodeURIComponent(`Olá! Gostaria de fazer uma encomenda: ${title}.`);
            const href = `https://wa.me/${business.whatsapp}?text=${message}`;

            return (
              <motion.div
                key={title}
                custom={i}
                variants={springPop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card3D className="glass-panel-strong rounded-2xl p-7 flex flex-col gap-5 h-full" strength={7}>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 flex items-center justify-center ring-1 ring-yellow-500/20">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-bold text-white text-lg">{title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    {cta}
                  </a>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
