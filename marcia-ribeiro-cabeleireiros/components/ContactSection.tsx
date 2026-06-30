"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { business } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encontra-nos em Penafiel
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Estamos à tua espera no coração de Penafiel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Morada</h4>
                <p className="text-zinc-400 text-sm">{business.address}</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Telefone</h4>
                <a href={`tel:${business.phone}`} className="text-zinc-400 text-sm hover:text-rose-400 transition-colors">
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a href={`mailto:${business.email}`} className="text-zinc-400 text-sm hover:text-rose-400 transition-colors">
                  {business.email}
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Horário</h4>
                <ul className="space-y-1">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-8 text-sm">
                      <span className="text-zinc-500">{h.day}</span>
                      <span className={`font-medium ${h.time === "Encerrado" ? "text-zinc-600" : "text-zinc-300"}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl overflow-hidden min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0!2d-8.28!3d41.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEyJzAwLjAiTiA4wrAxNicwMC4wIlc!5e0!3m2!1spt!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Márcia Ribeiro Cabeleireiros"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
