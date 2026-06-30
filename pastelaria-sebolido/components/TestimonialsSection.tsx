"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { business } from "@/lib/business";
import { Card3D } from "@/components/Card3D";
import { springPop, heroSpring } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-zinc-950">
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
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que dizem os nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">{business.rating}</span>
            <span className="text-zinc-500 text-sm">({business.reviews} avaliações)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {business.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={springPop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card3D className="glass-panel-strong rounded-2xl p-6 flex flex-col gap-4 relative" strength={6}>
                <span className="absolute top-4 right-5 text-7xl leading-none text-yellow-500/10 font-serif select-none pointer-events-none">
                  &ldquo;
                </span>
                <div className="flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/30 flex items-center justify-center text-yellow-400 text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <span className="text-white text-sm font-medium">{t.name}</span>
                  </div>
                  <span className="text-zinc-600 text-xs">{t.date}</span>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
