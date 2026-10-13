import Countdown from "./Countdown";

export default function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-rose-950" />
      <div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-rose-500/25 blur-3xl" />

      <span className="mb-6 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
        Férias 2026 · Europa
      </span>

      <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-7xl md:text-8xl">
        Nossa aventura
        <span className="block italic text-transparent bg-gradient-to-r from-amber-200 via-rose-300 to-indigo-300 bg-clip-text">pela Europa</span>
      </h1>

      <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
        Londres, Paris, Bruxelas, Brugge e Lisboa — juntos, rumo a memórias inesquecíveis.
      </p>

      <div className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Decolagem em</p>
        <Countdown />
        <p className="mt-6 text-sm text-slate-400">✈️ Curitiba · 19 de novembro de 2026 · 20h55</p>
      </div>

      <a
        href="#roteiro"
        className="mt-14 rounded-full bg-amber-300 px-7 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-200"
      >
        Ver o roteiro
      </a>
    </header>
  );
}
