"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/lib/business";

export default function TeamSection() {
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Equipa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A nossa equipa
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Profissionais apaixonadas pela beleza, ao teu serviço.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center gap-4 max-w-[220px]"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-rose-500/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white text-base">{member.name}</h4>
                <p className="text-rose-400 text-xs font-medium mb-2">{member.role}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
