"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/business";

export default function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O nosso trabalho fala por si
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Transformações reais, clientes felizes. Veja alguns dos nossos resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden rounded-xl ${
                i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs font-medium">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
