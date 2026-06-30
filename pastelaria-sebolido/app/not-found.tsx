import Link from "next/link";
import { Wheat } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center ring-1 ring-yellow-500/30 mx-auto mb-6">
          <Wheat className="w-8 h-8 text-yellow-400" />
        </div>
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Esta página não existe. Mas temos pão fresco à espera de ti!
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
