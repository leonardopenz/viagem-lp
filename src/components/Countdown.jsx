import { DEPARTURE_DATE } from "../data/trip";
import { useCountdown } from "../hooks/useCountdown";

const pad = (value) => String(value).padStart(2, "0");

function TimeBox({ value, label }) {
  return (
    <div className="flex min-w-[4.5rem] flex-col items-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-md sm:min-w-[6.5rem] sm:px-5 sm:py-6">
      <span className="font-display text-4xl font-extrabold tabular-nums text-white sm:text-6xl">
        {value}
      </span>
      <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isOver } = useCountdown(DEPARTURE_DATE);

  if (isOver) {
    return (
      <p className="font-display text-3xl font-extrabold text-amber-300 sm:text-5xl">
        Boa viagem! ✈️ A aventura começou!
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-5" aria-live="polite">
      <TimeBox value={days} label={days === 1 ? "dia" : "dias"} />
      <TimeBox value={pad(hours)} label="horas" />
      <TimeBox value={pad(minutes)} label="min" />
      <TimeBox value={pad(seconds)} label="seg" />
    </div>
  );
}
