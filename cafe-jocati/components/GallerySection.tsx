"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/business";
import { Card3D } from "@/components/Card3D";
import { fadeUp3D, sectionHeader, EASE_JOCATI } from "@/lib/animations";

export default function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20 mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O nosso espaço
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_JOCATI }}
            className="h-0.5 w-10 bg-amber-500 origin-center mx-auto mb-4"
          />

          <p className="text-zinc-400 max-w-md mx-auto">
            Um ambiente acolhedor onde te sentirás sempre em casa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 perspective-800">
          {gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              custom={i}
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"}`}
            >
              <Card3D
                className="relative w-full h-full overflow-hidden rounded-xl"
                strength={4}
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
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
