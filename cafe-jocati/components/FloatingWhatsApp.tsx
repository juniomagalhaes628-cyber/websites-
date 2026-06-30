"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { business } from "@/lib/business";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 400));

  const message = encodeURIComponent("Olá! Gostaria de fazer uma encomenda takeaway.");
  const href = `https://wa.me/${business.whatsapp}?text=${message}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp-fab"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Falar connosco no WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 8, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="glass-panel-strong text-white text-xs font-medium px-3 py-2 rounded-xl shadow-xl whitespace-nowrap"
              >
                Falar connosco
              </motion.span>
            )}
          </AnimatePresence>

          <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_8px_32px_rgba(34,197,94,0.4)]">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.845L.057 23.535a.75.75 0 00.916.916l5.69-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.514-5.192-1.408l-.372-.218-3.857 1.001 1.001-3.857-.218-.372A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
