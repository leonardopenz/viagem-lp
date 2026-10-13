import { itinerary } from "../data/trip";

const badgeStyles = {
  partida: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  conexão: "bg-slate-400/15 text-slate-300 border-slate-400/30",
  destino: "bg-amber-300/15 text-amber-200 border-amber-300/30",
  retorno: "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

export default function Itinerary() {
  return (
    <section id="roteiro" className="mx-auto max-w-3xl px-4 py-24">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
          O roteiro
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
          Parada por parada
        </h2>
      </div>

      <ol className="relative border-l-2 border-dashed border-white/15 pl-8 sm:pl-10">
        {itinerary.map((stop, index) => (
          <li key={`${stop.city}-${index}`} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[3.2rem] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-xl sm:-left-[3.7rem]">
              {stop.flag}
            </span>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold text-white">{stop.city}</h3>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ${badgeStyles[stop.type]}`}
                >
                  {stop.type}
                </span>
              </div>
              <p className="text-sm text-slate-400">{stop.country}</p>
              <p className="mt-2 text-slate-300">{stop.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
