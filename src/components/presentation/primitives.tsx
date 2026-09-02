import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const JOURNEY = [
  { icon: "💡", label: "IDEA" },
  { icon: "🤖", label: "AI" },
  { icon: "📄", label: "RESEARCH" },
  { icon: "💻", label: "BUILD" },
  { icon: "☁️", label: "CLOUD" },
  { icon: "🚀", label: "PRODUCT" },
  { icon: "🎯", label: "PORTFOLIO" },
];

/** Fade / slide reveal with a sequencing delay in ms. */
export function Reveal({
  delay = 0,
  from = "up",
  className,
  children,
}: {
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
  className?: string;
  children: ReactNode;
}) {
  const anim =
    from === "left"
      ? "rv-left"
      : from === "right"
        ? "rv-right"
        : from === "scale"
          ? "rv-scale"
          : "rv-up";
  return (
    <div className={cn("rv", anim, className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SlideShell({
  children,
  className,
  dark = true,
  journey,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  journey?: number;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden px-[110px] pb-[120px] pt-[74px]",
        dark ? "bg-deck text-deck-foreground" : "bg-white text-navy",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 deck-grid" />
      <div className="pointer-events-none absolute -left-[240px] -top-[260px] h-[720px] w-[720px] rounded-full bg-sky/12 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[300px] right-[-200px] h-[720px] w-[720px] rounded-full bg-orange/10 blur-[130px]" />
      <div className="relative flex h-full w-full flex-col">{children}</div>
      {journey === undefined ? null : <JourneyRail active={journey} />}
    </div>
  );
}

export function Kicker({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <span className="slide-kicker inline-flex items-center gap-4 text-sky">
        <span className="h-[3px] w-[54px] bg-orange" />
        {children}
      </span>
    </Reveal>
  );
}

export function SlideTitle({
  children,
  delay = 80,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay}>
      <h2 className={cn("slide-title mt-5 font-black tracking-tight", className)}>{children}</h2>
    </Reveal>
  );
}

export function SlideSub({ children, delay = 160 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <p className="slide-body-lg mt-4 max-w-[1700px] text-deck-muted">{children}</p>
    </Reveal>
  );
}

export function Card({
  children,
  className,
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-full rounded-[28px] border p-10 backdrop-blur-sm",
        accent
          ? "border-orange/55 bg-orange/10"
          : "border-deck-line bg-deck-panel shadow-[0_24px_60px_-30px_rgba(3,12,28,0.9)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NumberBadge({ n, accent = false }: { n: string; accent?: boolean }) {
  return (
    <span
      className={cn(
        "slide-badge inline-flex items-center rounded-full px-5 py-2 font-bold tracking-widest",
        accent ? "bg-orange text-navy" : "bg-sky/18 text-sky",
      )}
    >
      {n}
    </span>
  );
}

export function Arrow({ delay = 0, orange = false }: { delay?: number; orange?: boolean }) {
  return (
    <Reveal delay={delay} from="scale" className="flex items-center">
      <span
        className={cn(
          "slide-body-lg font-black",
          orange ? "text-orange arrow-pulse" : "text-sky/70",
        )}
      >
        →
      </span>
    </Reveal>
  );
}

export function Chip({
  icon,
  label,
  sub,
  accent = false,
  className,
}: {
  icon: string;
  label: string;
  sub?: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-w-[190px] flex-col items-center gap-3 rounded-[24px] border px-7 py-6 text-center",
        accent ? "border-orange/60 bg-orange/12" : "border-deck-line bg-deck-panel",
        className,
      )}
    >
      <span className="text-[52px] leading-none">{icon}</span>
      <span className="slide-caption font-bold tracking-wide">{label}</span>
      {sub ? <span className="slide-chrome text-deck-muted">{sub}</span> : null}
    </div>
  );
}

export function BottomBanner({
  children,
  delay = 0,
  accent = true,
}: {
  children: ReactNode;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <Reveal delay={delay} className="mt-auto pt-7">
      <div
        className={cn(
          "slide-body-lg rounded-[22px] px-12 py-5 text-center font-black tracking-[0.06em]",
          accent ? "bg-orange text-navy" : "border border-deck-line bg-deck-panel text-sky",
        )}
      >
        {children}
      </div>
    </Reveal>
  );
}

/** Persistent story-thread indicator shown on every slide. */
export function JourneyRail({ active }: { active: number }) {
  return (
    <div className="absolute bottom-[34px] left-[110px] right-[110px] flex items-center gap-4">
      {JOURNEY.map((s, i) => (
        <div key={s.label} className="flex flex-1 items-center gap-4">
          <div
            className={cn(
              "flex items-center gap-2 transition-opacity",
              i === active ? "opacity-100" : "opacity-35",
            )}
          >
            <span className="text-[22px] leading-none">{s.icon}</span>
            <span
              className={cn(
                "slide-chrome font-bold tracking-[0.14em]",
                i === active ? "text-orange" : "text-deck-muted",
              )}
            >
              {s.label}
            </span>
          </div>
          {i < JOURNEY.length - 1 ? (
            <span
              className={cn("h-[2px] flex-1", i < active ? "bg-orange/70" : "bg-deck-line")}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
