import Link from "next/link";
import { Scissors } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center ring-1 ring-rose-500/30 mx-auto mb-6">
          <Scissors className="w-8 h-8 text-rose-400" />
        </div>
        <h1 className="text-6xl font-bold text-rose-400 mb-4">404</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Esta página não existe. Talvez precises de uma nova direção?
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-400 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
