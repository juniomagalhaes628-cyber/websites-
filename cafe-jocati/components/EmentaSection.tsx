"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { menu } from "@/lib/business";
import { fadeUp3D, sectionHeader } from "@/lib/animations";

const itemVariants = {
  hidden: { opacity: 0, rotateX: 20, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, rotateX: 0, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function EmentaSection() {
  const [active, setActive] = useState(menu[0].category);
  const section = menu.find((s) => s.category === active)!;

  return (
    <section id="ementa" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20 mb-4">
            Ementa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sabores do dia a dia
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Do café da manhã ao almoço completo — sempre fresco, sempre com sabor a casa.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menu.map((s) => (
            <button
              key={s.category}
              onClick={() => setActive(s.category)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === s.category
                  ? "bg-amber-500 text-black"
                  : "glass-panel text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{s.icon}</span>
              {s.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-800"
          >
            {section.items.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel-strong rounded-xl p-5 hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <span className="text-amber-400 font-bold text-sm whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-xs mt-10"
        >
          Preços com IVA incluído. Ementa sujeita a alterações sazonais.
        </motion.p>
      </div>
    </section>
  );
}
