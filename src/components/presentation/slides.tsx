import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CountdownTimer } from "./CountdownTimer";
import {
  Arrow,
  BottomBanner,
  Card,
  Chip,
  Kicker,
  NumberBadge,
  Reveal,
  SlideShell,
  SlideSub,
  SlideTitle,
} from "./primitives";

export type SpeakerNotes = {
  talking: string[];
  interaction: string;
  example: string;
  key: string;
  transition: string;
};

export type Slide = {
  id: string;
  label: string;
  Component: () => ReactNode;
  notes: SpeakerNotes;
};

/* ------------------------------------------------------------------ */
/* 1 — TITLE                                                           */
/* ------------------------------------------------------------------ */
const journeyRow = [
  { icon: "💡", label: "IDEA" },
  { icon: "🤖", label: "AI" },
  { icon: "📄", label: "RESEARCH" },
  { icon: "💻", label: "BUILD" },
  { icon: "☁️", label: "CLOUD" },
  { icon: "🚀", label: "PRODUCT" },
];

function SlideTitleSlide() {
  return (
    <SlideShell className="justify-center">
      <div className="flex flex-1 flex-col justify-center">
        <Kicker>Final-year session · 30 minutes</Kicker>
        <Reveal delay={120}>
          <h1 className="slide-title-lg mt-8 max-w-[1500px] font-black">
            FROM IDEA TO <span className="text-sky">DEPLOYED AI</span> PRODUCT
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="slide-body-lg mt-8 max-w-[1180px] text-deck-muted">
            How AI, research, and the cloud can turn a college project into a real-world product.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <p className="slide-subtitle mt-10 font-black tracking-[0.14em] text-orange">
            BUILD · REPRODUCE · DEPLOY
          </p>
        </Reveal>

        <div className="mt-14 flex items-center gap-5">
          {journeyRow.map((s, i) => (
            <div key={s.label} className="flex items-center gap-5">
              <Reveal delay={520 + i * 160} from="scale">
                <Chip icon={s.icon} label={s.label} accent={i === journeyRow.length - 1} />
              </Reveal>
              {i < journeyRow.length - 1 ? <Arrow delay={600 + i * 160} orange /> : null}
            </div>
          ))}
          <Reveal delay={1500} from="scale" className="ml-4">
            <span className="float-slow text-[86px] leading-none">🚀</span>
          </Reveal>
        </div>

        <Reveal delay={1600} className="mt-14">
          <div className="flex items-end gap-14">
            <div>
              <p className="slide-kicker text-sky">Presented by</p>
              <div className="mt-4 flex gap-10">
                <div className="w-[420px] border-b-2 border-deck-line pb-3">
                  <span className="slide-body text-deck-muted">Presenter 1</span>
                </div>
                <div className="w-[420px] border-b-2 border-deck-line pb-3">
                  <span className="slide-body text-deck-muted">Presenter 2</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — THE QUESTION                                                    */
/* ------------------------------------------------------------------ */
const questionCards = [
  {
    n: "01",
    icon: "🤖",
    title: "BUILD IT",
    sub: "AI Across the Development Lifecycle",
    body: "AI can assist with requirements, coding, testing, debugging and deployment.",
  },
  {
    n: "02",
    icon: "📄",
    title: "REPRODUCE IT",
    sub: "Why Research Papers Matter",
    body: "Don't just consume AI. Understand how AI ideas actually work.",
  },
  {
    n: "03",
    icon: "☁️",
    title: "DEPLOY IT",
    sub: "Take It to the Cloud",
    body: "Move from: My Laptop → Real Users.",
  },
  {
    n: "04",
    icon: "🎯",
    title: "YOUR TURN",
    sub: "Interactive Challenges",
    body: "You will design your own AI-powered application today.",
  },
];

function SlideQuestion() {
  return (
    <SlideShell journey={0}>
      <Kicker>Where we start</Kicker>
      <SlideTitle>YOU HAVE AN APP IDEA. WHAT HAPPENS NEXT?</SlideTitle>
      <Reveal delay={180}>
        <p className="slide-subtitle mt-8 max-w-[1560px] font-semibold text-sky">
          “You have an app idea today. How do you turn it into something people can actually use?”
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-4 gap-7">
        {questionCards.map((c, i) => (
          <Reveal key={c.n} delay={420 + i * 260} from="up">
            <Card accent={i === 3} className="min-h-[330px]">
              <div className="flex items-center justify-between">
                <NumberBadge n={c.n} accent={i === 3} />
                <span className="text-[54px] leading-none">{c.icon}</span>
              </div>
              <h3 className="slide-subtitle mt-7 font-black">{c.title}</h3>
              <p className="slide-caption mt-3 font-bold text-sky">{c.sub}</p>
              <p className="slide-body mt-5 text-deck-muted">{c.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <BottomBanner delay={1500}>BUILD → REPRODUCE → DEPLOY</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — TRADITIONAL VS AI-ASSISTED                                      */
/* ------------------------------------------------------------------ */
const compareRows = [
  {
    stage: "REQUIREMENTS",
    icon: "📝",
    trad: "You list features alone.",
    ai: "AI helps identify missing requirements and edge cases.",
  },
  {
    stage: "CODING",
    icon: "💻",
    trad: "You write every line manually.",
    ai: "AI helps draft code — you review and own it.",
  },
  {
    stage: "TESTING",
    icon: "🧪",
    trad: "You manually think of test cases.",
    ai: "AI suggests cases you may have missed.",
  },
  {
    stage: "DEPLOYMENT",
    icon: "🚀",
    trad: "Create configurations from scratch.",
    ai: "AI explains and assists with CI/CD and configuration.",
  },
];

function SlideCompare() {
  return (
    <SlideShell journey={1}>
      <Kicker>Traditional vs AI-assisted</Kicker>
      <SlideTitle>SAME LIFECYCLE. NEW TEAMMATE.</SlideTitle>
      <SlideSub>
        AI does not remove the software development lifecycle. It changes how efficiently we move
        through each stage.
      </SlideSub>

      <div className="mt-10 flex flex-col gap-5">
        {compareRows.map((r, i) => (
          <div key={r.stage} className="grid grid-cols-[300px_1fr_70px_1fr] items-center gap-6">
            <Reveal delay={300 + i * 300}>
              <div className="flex items-center gap-4">
                <span className="text-[42px] leading-none">{r.icon}</span>
                <span className="slide-caption font-black tracking-[0.1em]">{r.stage}</span>
              </div>
            </Reveal>
            <Reveal delay={300 + i * 300} from="left">
              <div className="rounded-[20px] border border-deck-line bg-deck-panel px-8 py-6">
                <p className="slide-chrome font-bold tracking-[0.18em] text-deck-muted">
                  TRADITIONAL
                </p>
                <p className="slide-body mt-2">{r.trad}</p>
              </div>
            </Reveal>
            <Arrow delay={480 + i * 300} orange />
            <Reveal delay={560 + i * 300} from="right">
              <div className="rounded-[20px] border border-sky/45 bg-sky/12 px-8 py-6">
                <p className="slide-chrome font-bold tracking-[0.18em] text-sky">AI-ASSISTED</p>
                <p className="slide-body mt-2">{r.ai}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <BottomBanner delay={1800}>AI IS A TEAMMATE — NOT A REPLACEMENT FOR UNDERSTANDING.</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — WHERE AI CAN HELP                                               */
/* ------------------------------------------------------------------ */
const lifecycle = [
  { icon: "💡", stage: "IDEA", ai: "Generate requirements" },
  { icon: "📝", stage: "DESIGN", ai: "Suggest architecture" },
  { icon: "👨‍💻", stage: "CODE", ai: "Generate / explain code" },
  { icon: "🧪", stage: "TEST", ai: "Create test cases" },
  { icon: "🐛", stage: "DEBUG", ai: "Explain errors" },
  { icon: "🚀", stage: "DEPLOY", ai: "Assist CI/CD" },
  { icon: "📊", stage: "MONITOR", ai: "Analyze logs" },
];

function SlideWhereAI() {
  return (
    <SlideShell journey={1}>
      <Kicker>The lifecycle</Kicker>
      <SlideTitle>WHERE AI CAN RIDE ALONG</SlideTitle>

      <div className="relative mt-16">
        <div className="relative mb-8 h-[96px]">
          <div className="ai-travel absolute top-0 flex h-[96px] w-[96px] items-center justify-center rounded-full border border-orange/60 bg-orange/15">
            <span className="text-[46px] leading-none">🤖</span>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-[132px] h-[3px] bg-gradient-to-r from-sky/10 via-sky/60 to-orange/70" />
        <div className="relative grid grid-cols-7 gap-4">
          {lifecycle.map((s, i) => (
            <Reveal key={s.stage} delay={250 + i * 200} from="scale">
              <div
                className={cn(
                  "flex h-full flex-col items-center gap-3 rounded-[24px] border px-4 py-7 text-center",
                  i === lifecycle.length - 1
                    ? "border-orange/55 bg-orange/12"
                    : "border-deck-line bg-deck-panel",
                )}
              >
                <span className="text-[52px] leading-none">{s.icon}</span>
                <span className="slide-caption font-black tracking-[0.08em]">{s.stage}</span>
                <span className="slide-chrome text-sky">{s.ai}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={1750} className="mt-14">
        <p className="slide-subtitle text-center font-black tracking-[0.05em] text-sky">
          SAME DEVELOPMENT STAGES. AI SIMPLY HELPS YOU MOVE FASTER.
        </p>
      </Reveal>

      <Reveal delay={1950} className="mt-auto pt-8">
        <div className="flex items-center gap-6 rounded-[22px] border-2 border-orange/70 bg-orange/12 px-10 py-7">
          <span className="text-[54px] leading-none">⚠️</span>
          <p className="slide-body-lg font-bold">
            Never deploy or submit AI-generated code you do not understand.
          </p>
        </div>
      </Reveal>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — 60-SECOND CHALLENGE                                             */
/* ------------------------------------------------------------------ */
function SlideChallenge() {
  const examples = [
    { icon: "💡", label: "Broken lights" },
    { icon: "💧", label: "Water leaks" },
    { icon: "📶", label: "Wi-Fi issues" },
    { icon: "🏫", label: "Classroom problems" },
  ];
  return (
    <SlideShell journey={0}>
      <Kicker>Interactive challenge</Kicker>
      <SlideTitle>60-SECOND CHALLENGE</SlideTitle>

      <div className="mt-10 grid grid-cols-[1fr_460px] items-start gap-16">
        <div>
          <Reveal delay={200}>
            <div className="rounded-[24px] border border-sky/40 bg-sky/10 px-10 py-8">
              <p className="slide-kicker text-sky">Scenario</p>
              <p className="slide-body-lg mt-3 font-semibold">
                Your college wants an application where students can report campus problems.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-4 gap-5">
            {examples.map((e, i) => (
              <Reveal key={e.label} delay={420 + i * 150} from="scale">
                <Chip icon={e.icon} label={e.label} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <Reveal delay={1050} from="left">
              <div className="flex items-center gap-6 rounded-[22px] border border-deck-line bg-deck-panel px-9 py-7">
                <NumberBadge n="Q1" />
                <p className="slide-subtitle font-black">Who are the users?</p>
              </div>
            </Reveal>
            <Reveal delay={1250} from="left">
              <div className="flex items-center gap-6 rounded-[22px] border border-orange/55 bg-orange/12 px-9 py-7">
                <NumberBadge n="Q2" accent />
                <p className="slide-subtitle font-black">
                  What is ONE important feature this app needs?
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1450}>
            <p className="slide-body mt-8 text-deck-muted">
              Shout your answers out — no wrong answers, no reveal. This is your design thinking,
              not a quiz.
            </p>
          </Reveal>
        </div>

        <Reveal delay={500} from="scale">
          <CountdownTimer seconds={60} />
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — HUMAN + AI                                                      */
/* ------------------------------------------------------------------ */
function SlideHumanAI() {
  return (
    <SlideShell journey={1}>
      <Kicker>Human + AI</Kicker>
      <SlideTitle>NOT AI VS DEVELOPER. AI + DEVELOPER.</SlideTitle>

      <div className="mt-12 grid grid-cols-[1fr_340px_1fr] items-center gap-8">
        <div className="merge-left">
          <Card className="min-h-[470px]">
            <span className="text-[62px] leading-none">👨‍💻</span>
            <h3 className="slide-subtitle mt-5 font-black">DEVELOPER / HUMAN</h3>
            <p className="slide-caption mt-6 font-bold tracking-[0.14em] text-sky">UNDERSTANDS</p>
            <p className="slide-body mt-2 text-deck-muted">
              The real problem · the users · business requirements · important decisions · risks
            </p>
            <p className="slide-caption mt-6 font-bold tracking-[0.14em] text-sky">OWNS</p>
            <p className="slide-body mt-2 text-deck-muted">
              Validation · quality · security · the final outcome
            </p>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Reveal delay={1200} from="scale">
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full border-2 border-orange/70 bg-orange/14">
              <span className="slide-subtitle font-black text-orange">HUMAN</span>
              <span className="slide-title font-black leading-none text-orange">+</span>
              <span className="slide-subtitle font-black text-orange">AI</span>
            </div>
          </Reveal>
          <Reveal delay={1500} from="scale">
            <p className="slide-body-lg text-center font-black">🚀 FASTER + BETTER DEVELOPMENT</p>
          </Reveal>
        </div>

        <div className="merge-right">
          <Card className="min-h-[470px]">
            <span className="text-[62px] leading-none">🤖</span>
            <h3 className="slide-subtitle mt-5 font-black">AI</h3>
            <p className="slide-caption mt-6 font-bold tracking-[0.14em] text-sky">HELPS</p>
            <p className="slide-body mt-2 text-deck-muted">
              Generate ideas · suggest solutions · write and explain code · generate tests · debug ·
              automate repetitive work
            </p>
            <p className="slide-caption mt-6 font-bold tracking-[0.14em] text-sky">DOES NOT DO</p>
            <p className="slide-body mt-2 text-deck-muted">
              Decide what is actually worth building
            </p>
          </Card>
        </div>
      </div>

      <BottomBanner delay={1800} accent={false}>
        AI may make coding faster, but understanding the problem still requires a human.
      </BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 7 — WHY REPRODUCE RESEARCH PAPERS                                   */
/* ------------------------------------------------------------------ */
function SlideWhyResearch() {
  return (
    <SlideShell journey={2}>
      <Kicker>Research papers</Kicker>
      <SlideTitle>EVERYONE CAN USE AI. FEW CAN REBUILD WHAT POWERS IT.</SlideTitle>

      <div className="mt-12 grid grid-cols-3 gap-8">
        <Reveal delay={300}>
          <Card className="min-h-[520px]">
            <NumberBadge n="01" />
            <h3 className="slide-subtitle mt-6 font-black">REAL SKILL</h3>
            <p className="slide-caption mt-2 font-bold text-sky">Not surface skill</p>
            <p className="slide-body mt-5 text-deck-muted">
              Reading and implementing a research paper helps you understand how AI systems
              actually work.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {["📄 Research paper", "🧠 Algorithm", "💻 Code", "✅ Result"].map((s) => (
                <div
                  key={s}
                  className="slide-body rounded-[16px] border border-deck-line bg-deck-panel px-6 py-4"
                >
                  {s}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={600}>
          <Card className="min-h-[520px]">
            <NumberBadge n="02" />
            <h3 className="slide-subtitle mt-6 font-black">STAND OUT</h3>
            <p className="slide-caption mt-2 font-bold text-sky">Differentiate yourself</p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="rounded-[18px] border border-deck-line px-7 py-6 opacity-55">
                <p className="slide-chrome tracking-[0.16em] text-deck-muted">SOUNDS LIKE</p>
                <p className="slide-body-lg mt-2 line-through">“I used ChatGPT.”</p>
              </div>
              <div className="rounded-[18px] border-2 border-orange/70 bg-orange/12 px-7 py-6">
                <p className="slide-chrome tracking-[0.16em] text-orange">SOUNDS LIKE</p>
                <p className="slide-body-lg mt-2 font-bold">
                  “I implemented an idea from a research paper.”
                </p>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={900}>
          <Card className="min-h-[520px]">
            <NumberBadge n="03" />
            <h3 className="slide-subtitle mt-6 font-black">START SMALL</h3>
            <p className="slide-caption mt-2 font-bold text-sky">
              You don't need to rebuild everything
            </p>
            <p className="slide-body mt-5 text-deck-muted">
              Reproduction is not always easy — so scope it down until it is doable.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                "1 · Choose one idea",
                "2 · Build a small prototype",
                "3 · Understand the result",
              ].map((s) => (
                <div
                  key={s}
                  className="slide-body rounded-[16px] border border-sky/35 bg-sky/10 px-6 py-4"
                >
                  {s}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>

      <BottomBanner delay={1250}>READ → IMPLEMENT → UNDERSTAND → IMPROVE</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 8 — RESEARCH → WORKING APP                                          */
/* ------------------------------------------------------------------ */
function SlideResearchToApp() {
  return (
    <SlideShell journey={3}>
      <Kicker>Research → application</Kicker>
      <SlideTitle>FROM A RESEARCH IDEA TO A WORKING APP</SlideTitle>

      <div className="mt-12 grid grid-cols-3 gap-8">
        <Reveal delay={300} from="up">
          <Card className="min-h-[540px]">
            <NumberBadge n="01" />
            <h3 className="slide-subtitle mt-6 font-black">THE CONCEPT</h3>
            <p className="slide-caption mt-2 font-bold text-sky">Retrieval-Augmented Generation</p>
            <div className="mt-7 flex flex-col gap-3">
              {["📄 Your documents", "🔎 Retrieval", "🤖 AI model", "💬 Answer"].map((s, i) => (
                <div key={s} className="flex flex-col gap-3">
                  <div className="slide-body rounded-[16px] border border-deck-line bg-deck-panel px-6 py-4">
                    {s}
                  </div>
                  {i < 3 ? <span className="slide-caption text-center text-orange">↓</span> : null}
                </div>
              ))}
            </div>
            <p className="slide-caption mt-7 text-deck-muted">
              RAG lets AI answer using your own documents instead of only its training data.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={700} from="up">
          <Card className="min-h-[540px]">
            <NumberBadge n="02" />
            <h3 className="slide-subtitle mt-6 font-black">THE PROTOTYPE</h3>
            <p className="slide-caption mt-2 font-bold text-sky">PDF chat application</p>
            <div className="mt-7 flex flex-col gap-4">
              {[
                "User uploads a PDF",
                "System processes the document",
                "User asks a question",
                "AI retrieves relevant information",
                "AI gives a grounded answer",
              ].map((s, i) => (
                <div key={s} className="flex items-start gap-4">
                  <span className="slide-badge mt-1 rounded-full bg-sky/18 px-4 py-1 font-bold text-sky">
                    {i + 1}
                  </span>
                  <p className="slide-body text-deck-muted">{s}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={1100} from="up">
          <Card accent className="min-h-[540px]">
            <NumberBadge n="03" accent />
            <h3 className="slide-subtitle mt-6 font-black">THE REAL APPLICATION</h3>
            <p className="slide-caption mt-2 font-bold text-orange">Deploy it</p>
            <div className="mt-7 flex flex-col gap-3">
              {["💻 Prototype", "☁️ Cloud", "🤖 AI services", "👥 Real users"].map((s, i) => (
                <div key={s} className="flex flex-col gap-3">
                  <div className="slide-body rounded-[16px] border border-orange/40 bg-deck/50 px-6 py-4">
                    {s}
                  </div>
                  {i < 3 ? <span className="slide-caption text-center text-orange">↓</span> : null}
                </div>
              ))}
            </div>
            <p className="slide-caption mt-7 text-deck-muted">
              Same idea — now something a stranger can open and use.
            </p>
          </Card>
        </Reveal>
      </div>

      <BottomBanner delay={1500}>A RESEARCH CONCEPT CAN BECOME A REAL PORTFOLIO PROJECT.</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 9 — CLOUD                                                           */
/* ------------------------------------------------------------------ */
const cloudNodes = [
  { icon: "👤", label: "USER", desc: "Opens the app" },
  { icon: "🌐", label: "API GATEWAY", desc: "Receives the request" },
  { icon: "⚙️", label: "AWS LAMBDA", desc: "Runs business logic" },
  { icon: "🤖", label: "AMAZON BEDROCK", desc: "Access to AI models" },
  { icon: "🗄️", label: "S3 STORAGE", desc: "Stores documents & output" },
];

function SlideCloud() {
  return (
    <SlideShell journey={4}>
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Cloud deployment</Kicker>
          <SlideTitle>FROM YOUR LAPTOP TO THE WORLD</SlideTitle>
        </div>
        <Reveal delay={200}>
          <span className="slide-badge rounded-full border border-deck-line px-6 py-3 font-bold tracking-[0.16em] text-sky">
            AWS = CLOUD PLATFORM
          </span>
        </Reveal>
      </div>

      <div className="mt-14 flex items-stretch gap-5">
        {cloudNodes.map((n, i) => (
          <div key={n.label} className="flex flex-1 items-center gap-5">
            <Reveal delay={350 + i * 320} from="scale" className="flex-1">
              <div
                className={cn(
                  "flex h-full flex-col items-center gap-3 rounded-[26px] border px-5 py-8 text-center",
                  i === cloudNodes.length - 1
                    ? "border-orange/55 bg-orange/12"
                    : "border-deck-line bg-deck-panel",
                )}
              >
                <span className="text-[58px] leading-none">{n.icon}</span>
                <span className="slide-caption font-black tracking-[0.06em]">{n.label}</span>
                <span className="slide-chrome text-sky">{n.desc}</span>
              </div>
            </Reveal>
            {i < cloudNodes.length - 1 ? <Arrow delay={500 + i * 320} orange /> : null}
          </div>
        ))}
      </div>

      <Reveal delay={2000} className="mt-8">
        <div className="mx-auto flex w-[860px] items-center gap-6 rounded-[22px] border border-dashed border-sky/45 px-9 py-6">
          <span className="text-[46px] leading-none">🖥️</span>
          <div>
            <p className="slide-caption font-black">OPTIONAL · AMAZON EC2</p>
            <p className="slide-body text-deck-muted">
              Can run application servers when you need a full always-on machine.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={2200} className="mt-10">
        <div className="flex items-center justify-center gap-8">
          <Chip icon="💻" label="LAPTOP" />
          <Arrow orange />
          <Chip icon="☁️" label="CLOUD" />
          <Arrow orange />
          <Chip icon="👥" label="REAL USERS" accent />
        </div>
      </Reveal>

      <BottomBanner delay={2400} accent={false}>
        A project running only on your laptop is a prototype. A deployed project becomes something
        people can actually use.
      </BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — GROUP ACTIVITY                                                 */
/* ------------------------------------------------------------------ */
const activityBoxes = [
  { n: "01", icon: "👥", title: "WHO?", q: "Who is the user?" },
  { n: "02", icon: "🤖", title: "AI?", q: "Where can AI help?" },
  { n: "03", icon: "🗄️", title: "DATA?", q: "What data or database is required?" },
  { n: "04", icon: "☁️", title: "CLOUD?", q: "How would you deploy it?" },
];

function SlideActivity() {
  return (
    <SlideShell journey={3}>
      <Kicker>Group activity</Kicker>
      <SlideTitle>BUILD YOUR APP IN 5 MINUTES</SlideTitle>
      <SlideSub>Work in pairs. One idea per pair — rough is fine.</SlideSub>

      <div className="mt-12 grid grid-cols-4 gap-7">
        {activityBoxes.map((b, i) => (
          <Reveal key={b.n} delay={300 + i * 240} from="scale">
            <Card accent={i % 2 === 1} className="min-h-[340px]">
              <div className="flex items-center justify-between">
                <NumberBadge n={b.n} accent={i % 2 === 1} />
                <span className="text-[56px] leading-none">{b.icon}</span>
              </div>
              <h3 className="slide-title mt-7 font-black">{b.title}</h3>
              <p className="slide-body mt-4 text-deck-muted">{b.q}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={1350} className="mt-12">
        <div className="flex items-center justify-center gap-7">
          <Chip icon="👥" label="PAIR" />
          <Arrow orange />
          <Chip icon="💡" label="IDEA" />
          <Arrow orange />
          <Chip icon="🤖" label="AI" />
          <Arrow orange />
          <Chip icon="☁️" label="CLOUD" accent />
        </div>
      </Reveal>

      <BottomBanner delay={1550}>SHARE · 2–3 GROUPS EXPLAIN THEIR IDEA</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 11 — ROADMAP                                                        */
/* ------------------------------------------------------------------ */
const roadmap = [
  { icon: "💡", label: "IDEA" },
  { icon: "🤖", label: "AI-ASSISTED REQUIREMENTS" },
  { icon: "🏗️", label: "ARCHITECTURE" },
  { icon: "💻", label: "BUILD" },
  { icon: "🧪", label: "TEST" },
  { icon: "🚀", label: "DEPLOY" },
  { icon: "🎤", label: "DEMO" },
];

function SlideRoadmap() {
  return (
    <SlideShell journey={6}>
      <Kicker>Final-year project</Kicker>
      <SlideTitle>YOUR FINAL-YEAR PROJECT, REIMAGINED</SlideTitle>

      <Reveal delay={220} className="mt-9">
        <div className="flex items-center gap-6 rounded-[22px] border border-deck-line px-9 py-6 opacity-60">
          <span className="slide-chrome font-bold tracking-[0.18em] text-deck-muted">
            OLD APPROACH
          </span>
          <p className="slide-subtitle font-black line-through decoration-orange decoration-[5px]">
            Idea → Code → Demo → Submit
          </p>
        </div>
      </Reveal>

      <Reveal delay={520} className="mt-10">
        <p className="slide-kicker text-sky">Industry-style approach</p>
      </Reveal>

      <div className="mt-6 grid grid-cols-7 gap-4">
        {roadmap.map((r, i) => (
          <Reveal key={r.label} delay={700 + i * 200} from="up">
            <div
              className={cn(
                "flex h-full flex-col items-center gap-3 rounded-[24px] border px-4 py-7 text-center",
                i === roadmap.length - 1
                  ? "border-orange/60 bg-orange/12"
                  : "border-deck-line bg-deck-panel",
              )}
            >
              <span className="text-[48px] leading-none">{r.icon}</span>
              <span className="slide-chrome font-black tracking-[0.08em]">{r.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={2150} className="mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {["GitHub", "Documentation", "Testing", "Cloud", "AI", "Research"].map((t) => (
            <span
              key={t}
              className="slide-caption rounded-full border border-sky/40 bg-sky/10 px-7 py-3 font-bold text-sky"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={2350} className="mt-10">
        <p className="slide-subtitle text-center font-black">
          Don't just build a project and submit it.{" "}
          <span className="text-orange">UNDERSTAND IT. TEST IT. DEPLOY IT. SHOW IT.</span>
        </p>
      </Reveal>

      <BottomBanner delay={2550} accent={false}>
        That is what turns a college submission into a portfolio project.
      </BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 12 — THREE THINGS                                                   */
/* ------------------------------------------------------------------ */
const remember = [
  {
    n: "01",
    title: "AI CHANGES HOW, NOT WHAT",
    body: "The software development lifecycle remains the same. AI helps us move through it faster.",
  },
  {
    n: "02",
    title: "REPRODUCE, DON'T JUST CONSUME",
    body: "Don't only use AI tools. Try implementing ideas from research papers and understand how they work.",
  },
  {
    n: "03",
    title: "THE CLOUD MAKES IT REAL",
    body: "A deployed application is more valuable for your portfolio than a project that lives only on your laptop.",
  },
];

function SlideRemember() {
  return (
    <SlideShell journey={6}>
      <Kicker>Takeaways</Kicker>
      <SlideTitle>3 THINGS TO REMEMBER</SlideTitle>

      <div className="mt-14 grid grid-cols-3 gap-9">
        {remember.map((r, i) => (
          <Reveal key={r.n} delay={400 + i * 400} from="up">
            <Card accent={i === 2} className="min-h-[460px]">
              <span className="block text-[130px] font-black leading-none text-orange/70">
                {r.n}
              </span>
              <h3 className="slide-subtitle mt-6 font-black">{r.title}</h3>
              <p className="slide-body-lg mt-6 text-deck-muted">{r.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <BottomBanner delay={1700}>BUILD · REPRODUCE · DEPLOY</BottomBanner>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* 13 — QUESTIONS                                                      */
/* ------------------------------------------------------------------ */
function SlideQuestions() {
  return (
    <SlideShell className="items-center justify-center text-center">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Reveal from="scale">
          <div className="flex items-center justify-center gap-10 text-[76px] leading-none">
            <span className="float-slow">🤖</span>
            <span className="float-slow" style={{ animationDelay: "0.6s" }}>
              ☁️
            </span>
            <span className="float-slow" style={{ animationDelay: "1.2s" }}>
              🚀
            </span>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <h2 className="slide-title-lg mt-12 font-black">QUESTIONS?</h2>
        </Reveal>
        <Reveal delay={450}>
          <p className="slide-subtitle mt-6 text-deck-muted">Thank you.</p>
        </Reveal>
        <Reveal delay={650}>
          <p className="slide-title mt-10 font-black tracking-[0.1em] text-orange">
            BUILD · REPRODUCE · DEPLOY
          </p>
        </Reveal>
        <Reveal delay={850}>
          <p className="slide-body-lg mt-10 text-deck-muted">
            Now go build, reproduce, and deploy something amazing.
          </p>
        </Reveal>

        <Reveal delay={1050} className="mt-16 w-full">
          <div className="mx-auto grid w-[1240px] grid-cols-2 gap-10 text-left">
            {["Presenter 1", "Presenter 2"].map((p) => (
              <div key={p} className="rounded-[22px] border border-deck-line bg-deck-panel px-9 py-7">
                <p className="slide-kicker text-sky">{p}</p>
                <p className="slide-body mt-3 text-deck-muted">Name</p>
                <p className="slide-caption mt-4 text-deck-muted">GitHub · LinkedIn</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* Deck                                                                */
/* ------------------------------------------------------------------ */
export const slides: Slide[] = [
  {
    id: "title",
    label: "Title",
    Component: SlideTitleSlide,
    notes: {
      talking: [
        "Open warm and simple: today is not a lecture about tools, it's about a journey.",
        "Say the six steps out loud as they appear: idea, AI, research, build, cloud, product.",
        "Introduce both presenters and the 30-minute plan: two short activities included.",
      ],
      interaction: "Quick show of hands — who already has a final-year project idea?",
      example: "Every app on your phone started as somebody's rough idea on paper.",
      key: "Build · Reproduce · Deploy is the whole session in three words.",
      transition: "So let's start where every project starts — with a question.",
    },
  },
  {
    id: "question",
    label: "The Question",
    Component: SlideQuestion,
    notes: {
      talking: [
        "Ask the big question and let it hang for a few seconds before revealing cards.",
        "Walk the four cards: build it, reproduce it, deploy it, your turn.",
        "Flag early that two slides are activities so they stay awake.",
      ],
      interaction: "Ask: what is the first thing you'd do after having an idea?",
      example: "An app to book the college badminton court — idea is easy, the rest is the work.",
      key: "An idea only becomes a product by going through a process.",
      transition: "That process has a name — the software development lifecycle.",
    },
  },
  {
    id: "compare",
    label: "Traditional vs AI",
    Component: SlideCompare,
    notes: {
      talking: [
        "Stress that the stages did not change; only the speed inside each stage changed.",
        "Read one row at a time, traditional first, then the AI-assisted version.",
        "Be honest: AI output still needs a human review at every stage.",
      ],
      interaction: "Ask which stage they personally find hardest today.",
      example: "You forgot 'what if the user has no internet?' — AI often surfaces that edge case.",
      key: "AI is a teammate, not a replacement for understanding.",
      transition: "Let's see exactly where in the lifecycle that teammate can help.",
    },
  },
  {
    id: "where-ai",
    label: "Where AI Helps",
    Component: SlideWhereAI,
    notes: {
      talking: [
        "Point at the moving AI icon: it rides along the lifecycle, it doesn't replace it.",
        "Give one concrete assist per stage, keeping each to a sentence.",
        "Land the warning slowly — it protects them in vivas and in interviews.",
      ],
      interaction: "Ask: has AI ever given you code that looked right but didn't work?",
      example: "Paste a stack trace, ask AI to explain it — then you still fix it yourself.",
      key: "Same stages, faster movement — never deploy code you can't explain.",
      transition: "Time to try it yourself. 60 seconds on the clock.",
    },
  },
  {
    id: "challenge",
    label: "60-Second Challenge",
    Component: SlideChallenge,
    notes: {
      talking: [
        "Read the scenario, start the on-screen timer, then stay quiet and let them think.",
        "Collect shouted answers; write two or three on the board if available.",
        "Do not give a model answer — the point is that requirements come from people.",
      ],
      interaction: "Who are the users? What is ONE important feature?",
      example: "Students report, staff resolve, admin sees a dashboard — three user types already.",
      key: "Requirements thinking is human work, and it comes first.",
      transition: "Notice how much of that came from you, not from AI.",
    },
  },
  {
    id: "human-ai",
    label: "Human + AI",
    Component: SlideHumanAI,
    notes: {
      talking: [
        "Contrast ownership versus assistance — the human signs off on the outcome.",
        "As the cards merge, say it plainly: AI + human is modern development.",
        "Mention security and quality remain the developer's responsibility.",
      ],
      interaction: "Ask: who is responsible if AI-written code leaks user data?",
      example: "AI can draft a login form; only you know your college's privacy rules.",
      key: "AI speeds up coding; understanding the problem stays human.",
      transition: "But using AI is one thing — understanding how AI works is another.",
    },
  },
  {
    id: "why-research",
    label: "Why Research",
    Component: SlideWhyResearch,
    notes: {
      talking: [
        "Explain a research paper is just an idea plus evidence, written formally.",
        "Compare the two interview sentences and let the contrast do the work.",
        "Be realistic: reproduction is sometimes hard, so start with one small piece.",
      ],
      interaction: "Ask if anyone has ever opened a research paper — and what stopped them.",
      example: "Reimplement just the retrieval step of a paper, not the whole system.",
      key: "Reproducing an idea proves depth that tool usage cannot.",
      transition: "Let's take one real research idea and turn it into an app.",
    },
  },
  {
    id: "research-to-app",
    label: "Research → App",
    Component: SlideResearchToApp,
    notes: {
      talking: [
        "Explain RAG in one line: give the AI your documents so answers are grounded.",
        "Walk the PDF-chat prototype flow step by step; it is a weekend-sized project.",
        "Third card is the jump most students skip: actually deploying it.",
      ],
      interaction: "Ask what document they'd want to chat with — syllabus, notes, manuals?",
      example: "Upload the college exam rulebook and ask 'how many backlogs are allowed?'.",
      key: "One research concept can become a genuine portfolio project.",
      transition: "So how do we get it off your laptop? To the cloud.",
    },
  },
  {
    id: "cloud",
    label: "Cloud",
    Component: SlideCloud,
    notes: {
      talking: [
        "Build the architecture one box at a time and name each box's single job.",
        "Say cloud does not automatically make a project production-ready — you still design it.",
        "Mention EC2 only as an option when you need a full server.",
      ],
      interaction: "Ask: how would a friend in another city use your project right now?",
      example: "A public URL you can paste in a resume beats a localhost screenshot.",
      key: "Deployment is what turns a prototype into something usable.",
      transition: "Now design your own — five minutes, in pairs.",
    },
  },
  {
    id: "activity",
    label: "Group Activity",
    Component: SlideActivity,
    notes: {
      talking: [
        "Keep the energy high; move around the room while pairs work.",
        "Push them to answer all four boxes, even roughly.",
        "Pick two or three pairs to present in 30 seconds each.",
      ],
      interaction: "Who, where AI helps, what data, how you'd deploy — answer all four.",
      example: "Attendance app: users students+faculty, AI summarises trends, DB for records, cloud for access.",
      key: "You can sketch an industry-style plan in five minutes.",
      transition: "That plan is basically your final-year project roadmap.",
    },
  },
  {
    id: "roadmap",
    label: "Roadmap",
    Component: SlideRoadmap,
    notes: {
      talking: [
        "Cross out the old four-step habit visually and say why it undersells their work.",
        "Walk the seven-step roadmap and point at the supporting practices around it.",
        "Emphasise GitHub history and documentation as proof of process.",
      ],
      interaction: "Ask which of the seven steps their current project is missing.",
      example: "Same project, plus tests, plus a live link, plus a README — a different league.",
      key: "Understand it, test it, deploy it, show it.",
      transition: "If you remember nothing else, remember these three things.",
    },
  },
  {
    id: "remember",
    label: "3 Takeaways",
    Component: SlideRemember,
    notes: {
      talking: [
        "Slow down — one card, one sentence, one pause.",
        "Repeat the three-word spine: build, reproduce, deploy.",
        "Invite them to write these three lines in their notes.",
      ],
      interaction: "Ask each student to say which of the three they'll act on this month.",
      example: "This week: deploy any existing project, even a tiny one.",
      key: "AI changes how, research builds depth, cloud makes it real.",
      transition: "That's the session — let's take your questions.",
    },
  },
  {
    id: "questions",
    label: "Questions",
    Component: SlideQuestions,
    notes: {
      talking: [
        "Thank the audience and the department, keep the slide on screen for Q&A.",
        "Offer to share the deck link, GitHub, and LinkedIn.",
        "If questions are slow, seed one: 'ask me which project to deploy first'.",
      ],
      interaction: "Open floor — invite one question from each row.",
      example: "Common question: which cloud should a beginner start with, and why.",
      key: "Go build, reproduce, and deploy something real.",
      transition: "Close by repeating: build · reproduce · deploy.",
    },
  },
];
