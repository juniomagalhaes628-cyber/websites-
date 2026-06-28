import { Coffee } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center ring-1 ring-amber-500/30">
                <Coffee className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-semibold text-white">{business.name}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {business.tagline}. Um espaço de convívio e sabor no coração de
              Duas Igrejas, Penafiel.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Horário</h4>
            <ul className="space-y-2">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-zinc-500">{h.day}</span>
                  <span className="text-zinc-400">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>{business.address}</li>
              <li>
                <a href={`tel:${business.phone}`} className="hover:text-amber-400 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-amber-400 transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <p>Penafiel, Portugal</p>
        </div>
      </div>
    </footer>
  );
}
