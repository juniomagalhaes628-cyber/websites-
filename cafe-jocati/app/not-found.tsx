import Link from "next/link";
import { Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center ring-1 ring-amber-500/30 mx-auto mb-6">
          <Coffee className="w-8 h-8 text-amber-400" />
        </div>
        <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Esta página não existe. Talvez tenhas passado pela casa errada?
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
