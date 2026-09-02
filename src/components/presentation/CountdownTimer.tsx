import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CountdownTimer({ seconds = 60 }: { seconds?: number }) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          setRunning(false);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const pct = left / seconds;
  const R = 132;
  const C = 2 * Math.PI * R;
  const done = left === 0;

  return (
    <div className="flex flex-col items-center gap-7">
      <div className="relative h-[320px] w-[320px]">
        <svg viewBox="0 0 320 320" className="h-full w-full -rotate-90">
          <circle cx="160" cy="160" r={R} fill="none" strokeWidth="18" className="stroke-deck-line" />
          <circle
            cx="160"
            cy="160"
            r={R}
            fill="none"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - pct)}
            className={cn(
              "transition-[stroke-dashoffset] duration-1000 ease-linear",
              left <= 10 ? "stroke-orange" : "stroke-sky",
            )}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={cn(
              "text-[104px] font-black leading-none tabular-nums",
              left <= 10 ? "text-orange" : "text-deck-foreground",
            )}
          >
            {String(left).padStart(2, "0")}
          </span>
          <span className="slide-kicker mt-2 text-deck-muted">
            {done ? "time's up" : running ? "counting" : "seconds"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            if (done) setLeft(seconds);
            setRunning((r) => !r);
          }}
          className="slide-caption rounded-full bg-orange px-9 py-4 font-bold text-navy transition-transform hover:scale-105"
        >
          {running ? "Pause" : done ? "Restart" : left === seconds ? "Start timer" : "Resume"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setLeft(seconds);
          }}
          className="slide-caption rounded-full border border-deck-line px-9 py-4 font-bold text-deck-muted transition-colors hover:text-deck-foreground"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
