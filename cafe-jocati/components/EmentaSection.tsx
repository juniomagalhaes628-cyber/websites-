"use client";

import { motion } from "framer-motion";
import { menu } from "@/lib/business";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EmentaSection() {
  return (
    <section id="ementa" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20 mb-4">
            Ementa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sabores do dia a dia
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Do café da manhã ao almoço completo — sempre fresco, sempre com
            sabor a casa.
          </p>
        </motion.div>

        <div className="space-y-14">
          {menu.map((section, si) => (
            <div key={section.category}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {section.category}
                </h3>
                <div className="flex-1 h-px bg-white/8" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                      <h4 className="font-semibold text-white text-sm">
                        {item.name}
                      </h4>
                      <span className="text-amber-400 font-bold text-sm whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

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
