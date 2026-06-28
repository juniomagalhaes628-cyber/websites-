"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Clock, CheckCircle } from "lucide-react";
import { business } from "@/lib/business";

const steps = [
  { icon: Phone, title: "Liga para nós", desc: "Contacta-nos pelo telefone ou envia uma mensagem." },
  { icon: Calendar, title: "Escolhe o dia", desc: "Indica o dia e hora que preferes. Confirmamos disponibilidade." },
  { icon: Clock, title: "Chega pontualmente", desc: "Aparece no horário marcado e deixa-te tratar." },
  { icon: CheckCircle, title: "Resultado garantido", desc: "Sai do salão a sentir-te incrível." },
];

export default function BookingSection() {
  return (
    <section id="marcacoes" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Marcações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Marca a tua consulta
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Reserva o teu lugar com antecedência e garante o horário ideal para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel rounded-xl p-5"
              >
                <div className="w-9 h-9 rounded-full bg-rose-500/15 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-rose-400" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Faz a tua marcação</h3>
              <p className="text-zinc-400 text-sm">
                Liga-nos ou envia uma mensagem e confirmamos o teu agendamento em minutos.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-sm font-semibold">Ligar agora</div>
                  <div className="text-xs text-rose-100">{business.phone}</div>
                </div>
              </a>

              <div className="glass-panel rounded-xl p-4">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  <span className="text-white font-medium">Horário de atendimento:</span>
                  <br />
                  Terça a Sexta · 09:00 – 19:00
                  <br />
                  Sábado · 09:00 – 17:00
                </p>
              </div>

              <p className="text-zinc-600 text-xs text-center">
                As marcações por telefone são confirmadas em menos de 2 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
