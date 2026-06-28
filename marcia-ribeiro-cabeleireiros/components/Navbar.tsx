"use client";

import { motion } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";
import { business } from "@/lib/business";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Marcações", href: "#marcacoes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center ring-1 ring-rose-500/30 group-hover:bg-rose-500/30 transition-colors">
            <Scissors className="w-4 h-4 text-rose-400" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-white text-sm tracking-tight">
              {business.name}
            </span>
            <span className="text-xs text-rose-400">{business.subtitle}</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 hover:text-rose-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#marcacoes"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-rose-500 text-white hover:bg-rose-400 transition-colors"
        >
          Marcar Agora
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/8 px-4 pb-4"
        >
          <ul className="flex flex-col gap-3 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-400 hover:text-rose-400 transition-colors block py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#marcacoes"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-rose-500 text-white hover:bg-rose-400 transition-colors mt-2"
              >
                Marcar Agora
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
