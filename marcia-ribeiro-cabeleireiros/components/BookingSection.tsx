"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Clock, CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { business, services } from "@/lib/business";
import { blurReveal, sectionHeader, EASE_MARCIA } from "@/lib/animations";

const steps = [
  { icon: Phone, title: "Liga para nós", desc: "Contacta-nos pelo telefone ou envia uma mensagem." },
  { icon: Calendar, title: "Escolhe o dia", desc: "Indica o dia e hora que preferes." },
  { icon: Clock, title: "Chega pontualmente", desc: "Aparece no horário marcado." },
  { icon: CheckCircle, title: "Resultado garantido", desc: "Sai do salão a sentir-te incrível." },
];

const hours = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const allServices = services.flatMap((cat) => cat.items.map((item) => item.name));

export default function BookingSection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", hour: "", message: "" });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.hour) {
      setError("Por favor preenche todos os campos obrigatórios.");
      return;
    }
    const text = encodeURIComponent(
      `Olá! Gostaria de marcar uma consulta.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nServiço: ${form.service}\nData: ${form.date}\nHora: ${form.hour}${form.message ? `\nMensagem: ${form.message}` : ""}`
    );
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, "_blank");
  }

  return (
    <section id="marcacoes" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20 mb-4">
            Marcações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Marca a tua consulta
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_MARCIA }}
            className="h-0.5 w-10 bg-rose-500 origin-center mx-auto mb-4"
          />

          <p className="text-zinc-400 max-w-md mx-auto">
            Reserva o teu lugar com antecedência e garante o horário ideal para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={blurReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-panel-strong rounded-xl p-5"
              >
                <div className="w-9 h-9 rounded-full bg-rose-500/15 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-rose-400" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE_MARCIA }}
              className="sm:col-span-2 glass-panel-strong rounded-xl p-5"
            >
              <p className="text-zinc-400 text-xs leading-relaxed">
                <span className="text-white font-medium">Horário de atendimento:</span>
                <br />Terça a Sexta · 09:00 – 19:00
                <br />Sábado · 09:00 – 17:00
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_MARCIA }}
            className="glass-panel-strong rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Preenche o formulário</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Nome *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="O teu nome"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Telefone *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+351 9XX XXX XXX"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">Serviço *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-colors"
                >
                  <option value="">Seleciona um serviço</option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Data *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Hora *</label>
                  <select
                    name="hour"
                    value={form.hour}
                    onChange={handleChange}
                    className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-colors"
                  >
                    <option value="">Seleciona a hora</option>
                    {hours.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Alguma informação adicional?"
                  rows={3}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
                />
              </div>

              {error && <p className="text-rose-400 text-xs">{error}</p>}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-400 transition-colors text-sm shadow-[0_4px_24px_rgba(244,63,94,0.3)]"
              >
                <Send className="w-4 h-4" />
                Enviar via WhatsApp
              </button>

              <p className="text-zinc-600 text-xs text-center">
                Será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
