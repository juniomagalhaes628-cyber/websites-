import { Scissors } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center ring-1 ring-rose-500/30">
                <Scissors className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{business.name}</div>
                <div className="text-xs text-rose-400">{business.subtitle}</div>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {business.tagline}. Um salão moderno e acolhedor dedicado à tua beleza.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Horário</h4>
            <ul className="space-y-2">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-zinc-500">{h.day}</span>
                  <span className={h.time === "Encerrado" ? "text-zinc-600" : "text-zinc-400"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>{business.address}</li>
              <li>
                <a href={`tel:${business.phone}`} className="hover:text-rose-400 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-rose-400 transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>
            <a
              href="#marcacoes"
              className="inline-flex items-center mt-4 px-5 py-2 rounded-full bg-rose-500 text-white text-xs font-semibold hover:bg-rose-400 transition-colors"
            >
              Marcar Agora
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {business.name} {business.subtitle}. Todos os direitos reservados.</p>
          <p>Penafiel, Portugal</p>
        </div>
      </div>
    </footer>
  );
}
