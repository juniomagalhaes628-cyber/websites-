"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { products } from "@/lib/business";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function ProductsSection() {
  const [active, setActive] = useState(products[0].category);
  const section = products.find((s) => s.category === active)!;

  return (
    <section id="produtos" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20 mb-4">
            Os Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Feito diariamente com tradição
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Cada produto é preparado com cuidado, ingredientes frescos e receitas que passam de geração em geração.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {products.map((s) => (
            <button
              key={s.category}
              onClick={() => setActive(s.category)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === s.category
                  ? "bg-yellow-400 text-black"
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
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {section.items.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel rounded-xl p-5 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <span className="text-yellow-400 font-bold text-sm whitespace-nowrap ml-4">
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
          Preços com IVA incluído. Disponibilidade sujeita ao stock diário.
        </motion.p>
      </div>
    </section>
  );
}
