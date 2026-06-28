"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { services } from "@/lib/business";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cuidado e beleza ao teu serviço
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Serviços profissionais de cabeleireiro e estética com produtos de
            alta qualidade e técnicas modernas.
          </p>
        </motion.div>

        <div className="space-y-14">
          {services.map((section) => (
            <div key={section.category}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
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
                    className="glass-panel rounded-xl p-5 hover:bg-white/[0.06] transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">
                        {item.name}
                      </h4>
                      <span className="text-rose-400 font-bold text-sm whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#marcacoes"
            className="inline-flex items-center px-8 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-400 transition-colors text-sm"
          >
            Marcar uma Consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
}
