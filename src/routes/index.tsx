import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { slides } from "@/components/presentation/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "From Idea to Deployed AI Product — Build · Reproduce · Deploy" },
      {
        name: "description",
        content:
          "A 13-slide presentation on how AI, research papers, and cloud deployment turn a college project into a real-world AI product.",
      },
      { property: "og:title", content: "From Idea to Deployed AI Product" },
      {
        property: "og:description",
        content:
          "Build · Reproduce · Deploy — turning a college project into an industry-style, deployed AI product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presentation,
});

function Presentation() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<number | null>(null);
  const total = slides.length;
  const current = slides[index]!;

  const go = useCallback(
    (dir: number) => setIndex((i) => Math.min(total - 1, Math.max(0, i + dir))),
    [total],
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /INPUT|TEXTAREA/.test(target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
      else if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.key.toLowerCase() === "n") setNotesOpen((v) => !v);
      else if (e.key === "Escape") setNotesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, toggleFullscreen, total]);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const wake = () => {
      setIdle(false);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setIdle(true), 2600);
    };
    wake();
    window.addEventListener("mousemove", wake);
    window.addEventListener("keydown", wake);
    return () => {
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("keydown", wake);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    document.title = `${index + 1}/${total} — ${current.label} · From Idea to Deployed AI Product`;
  }, [index, total, current.label]);

  const subtle = idle && fullscreen;
  const Current = current.Component;

  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden bg-deck text-deck-foreground">
      {/* progress bar */}
      <div className="absolute left-0 top-0 z-30 h-[5px] w-full bg-white/10">
        <div
          className="h-full bg-orange transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="relative flex-1">
        <div key={current.id} className="h-full w-full">
          <ScaledSlide>
            <Current />
          </ScaledSlide>
        </div>
      </div>

      {/* controls */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-6 left-0 right-0 z-30 flex justify-center transition-opacity duration-500",
          subtle ? "opacity-15 hover:opacity-100" : "opacity-100",
        )}
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/15 bg-black/45 px-4 py-2.5 backdrop-blur-md">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 disabled:opacity-30"
          >
            ← Prev
          </button>
          <span className="min-w-[74px] text-center text-sm font-bold tabular-nums text-white">
            {index + 1} / {total}
          </span>
          <button
            onClick={() => go(1)}
            disabled={index === total - 1}
            aria-label="Next slide"
            className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-navy transition-transform hover:scale-105 disabled:opacity-30"
          >
            Next →
          </button>
          <span className="mx-1 h-6 w-px bg-white/15" />
          <button
            onClick={() => setNotesOpen((v) => !v)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10",
              notesOpen ? "text-orange" : "text-white/80",
            )}
          >
            Notes (N)
          </button>
          <button
            onClick={toggleFullscreen}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
          >
            {fullscreen ? "Exit (F)" : "Present (F)"}
          </button>
        </div>
      </div>

      {/* slide dots */}
      <div
        className={cn(
          "absolute right-7 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2.5 transition-opacity duration-500",
          subtle ? "opacity-0" : "opacity-100",
        )}
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            title={`${i + 1}. ${s.label}`}
            aria-label={`Go to slide ${i + 1}: ${s.label}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "h-7 w-2.5 bg-orange" : "w-2.5 bg-white/25 hover:bg-white/60",
            )}
          />
        ))}
      </div>

      {/* speaker notes */}
      <aside
        className={cn(
          "absolute bottom-0 left-0 right-0 z-40 max-h-[52vh] overflow-y-auto border-t border-white/15 bg-[#071427]/97 px-8 py-6 backdrop-blur-md transition-transform duration-300",
          notesOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-sky">
              Speaker notes · Slide {index + 1} — {current.label}
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/70 hover:text-white"
              >
                Print notes
              </button>
              <button
                onClick={() => setNotesOpen(false)}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                Talking points
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80">
                {current.notes.talking.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <NoteBlock label="Interaction" text={current.notes.interaction} />
              <NoteBlock label="Example" text={current.notes.example} />
            </div>
            <div className="space-y-4">
              <NoteBlock label="Key message" text={current.notes.key} accent />
              <NoteBlock label="Transition" text={current.notes.transition} />
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

function NoteBlock({
  label,
  text,
  accent = false,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3",
        accent ? "border-orange/50 bg-orange/10" : "border-white/12 bg-white/5",
      )}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-white/85">{text}</p>
    </div>
  );
}
