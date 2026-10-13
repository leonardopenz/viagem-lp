import { highlights } from "../data/trip";

export default function Highlights() {
  return (
    <section className="bg-slate-900/60 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Pontos altos
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            O que não podemos perder
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              <figure className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                <figcaption className="absolute bottom-2 right-3 text-[0.6rem] text-white/60">
                  Foto:{" "}
                  <a
                    href={item.credit.source}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-white"
                  >
                    {item.credit.author}
                  </a>{" "}
                  · {item.credit.license}
                </figcaption>
              </figure>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  {item.location}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
