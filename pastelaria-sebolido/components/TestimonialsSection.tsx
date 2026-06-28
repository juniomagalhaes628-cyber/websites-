"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { business } from "@/lib/business";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex flex-col gap-4"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
