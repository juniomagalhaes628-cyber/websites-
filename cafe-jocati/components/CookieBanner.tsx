"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center">
      <div className="glass-panel rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl w-full shadow-2xl">
        <p className="text-zinc-300 text-sm text-center sm:text-left flex-1">
          Usamos cookies para melhorar a tua experiência no nosso site.
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-6 py-2 rounded-full bg-amber-500 text-black text-sm font-semibold hover:bg-amber-400 transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
