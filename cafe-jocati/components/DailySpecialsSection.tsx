"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import { specials } from "@/lib/business";

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export default function DailySpecialsSection() {
  const today = days[new Date().getDay() - 1] ?? null;

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20 mb-4">
            <UtensilsCrossed className="w-3 h-3" />
            Prato do Dia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ementa semanal
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Todos os dias um prato diferente, sempre com sopa, pão e bebida incluída.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {specials.map((s, i) => {
            const isToday = s.day === today;
            return (
              <motion.div
                key={s.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative rounded-2xl p-5 flex flex-col gap-3 ${
                  isToday
                    ? "bg-amber-500/10 ring-1 ring-amber-500/40"
                    : "glass-panel"
                }`}
              >
                {isToday && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-500 text-black text-xs font-bold">
                    Hoje
                  </span>
                )}
                <span className={`text-xs font-semibold uppercase tracking-wider ${isToday ? "text-amber-400" : "text-zinc-500"}`}>
                  {s.day}
                </span>
                <h4 className="font-bold text-white text-sm leading-snug">{s.dish}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                <span className={`text-base font-bold ${isToday ? "text-amber-400" : "text-amber-500"}`}>
                  {s.price}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-xs mt-8"
        >
          Prato do dia inclui sopa, pão e bebida. Sujeito a disponibilidade.
        </motion.p>
      </div>
    </section>
  );
}
