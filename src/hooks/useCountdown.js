import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const diff = Math.max(target.getTime() - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: diff === 0,
  };
}

export function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      const next = getTimeLeft(target);
      setTimeLeft(next);
      if (next.isOver) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}
