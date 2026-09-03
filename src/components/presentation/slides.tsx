import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
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

export type Slide = {
  id: string;
  label: string;
  Component: () => ReactNode;
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
            <Card accent={i === 3} className="min-h-[300px]">
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
        AI doesn’t remove the lifecycle — it changes how fast we move through it.
      </SlideSub>

      <div className="mt-9 flex flex-col gap-4">
        {compareRows.map((r, i) => (
          <div key={r.stage} className="grid grid-cols-[280px_1fr_60px_1fr] items-center gap-5">
            <Reveal delay={300 + i * 300}>
              <div className="flex items-center gap-4">
                <span className="text-[38px] leading-none">{r.icon}</span>
                <span className="slide-caption font-black tracking-[0.1em]">{r.stage}</span>
              </div>
            </Reveal>
            <Reveal delay={300 + i * 300} from="left">
              <div className="rounded-[20px] border border-deck-line bg-deck-panel px-7 py-4">
                <p className="slide-chrome font-bold tracking-[0.18em] text-deck-muted">
                  TRADITIONAL
                </p>
                <p className="slide-body mt-1.5">{r.trad}</p>
              </div>
            </Reveal>

            <Arrow delay={480 + i * 300} orange />
            <Reveal delay={560 + i * 300} from="right">
              <div className="rounded-[20px] border border-sky/45 bg-sky/12 px-7 py-4">
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
/* 5 — REAL TIME SCENARIO                                              */
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
      <Kicker>Think it through</Kicker>
      <SlideTitle>REAL TIME SCENARIO</SlideTitle>

      <Reveal delay={200} className="mt-10">
        <div className="rounded-[26px] border border-sky/40 bg-sky/10 px-12 py-10">
          <p className="slide-kicker text-sky">Scenario</p>
          <p className="slide-subtitle mt-4 font-semibold">
            Your college wants an application where students can report campus problems.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-4 gap-8">
        {examples.map((e, i) => (
          <Reveal key={e.label} delay={420 + i * 150} from="scale">
            <Chip icon={e.icon} label={e.label} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-10">
        <Reveal delay={950} from="left">
          <div className="flex h-full items-center gap-7 rounded-[24px] border border-deck-line bg-deck-panel px-10 py-10">
            <NumberBadge n="Q1" />
            <p className="slide-subtitle font-black">Who are the users?</p>
          </div>
        </Reveal>
        <Reveal delay={1150} from="right">
          <div className="flex h-full items-center gap-7 rounded-[24px] border border-orange/55 bg-orange/12 px-10 py-10">
            <NumberBadge n="Q2" accent />
            <p className="slide-subtitle font-black">
              What is ONE important feature this app needs?
            </p>
          </div>
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
          <Card >
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
          <Card >
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

      <BottomBanner delay={1800}>
        AI MAKES CODING FASTER. UNDERSTANDING THE PROBLEM STILL NEEDS A HUMAN.
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
          <Card>
            <NumberBadge n="01" />
            <h3 className="slide-subtitle mt-6 font-black">REAL SKILL</h3>
            <p className="slide-caption mt-2 font-bold text-sky">Not surface skill</p>
            <p className="slide-body mt-4 text-deck-muted">
              Implementing a research paper shows how AI systems actually work.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {["📄 Research paper", "🧠 Algorithm", "💻 Code", "✅ Result"].map((s) => (
                <div
                  key={s}
                  className="slide-body rounded-[16px] border border-deck-line bg-deck-panel px-6 py-3"
                >
                  {s}
                </div>
              ))}
            </div>

          </Card>
        </Reveal>

        <Reveal delay={600}>
          <Card>
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
          <Card>
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
  const flow = (items: string[], accent = false) => (
    <div className="mt-5 flex flex-col gap-2">
      {items.map((s, i) => (
        <div key={s} className="flex flex-col gap-1">
          <div
            className={cn(
              "slide-body rounded-[14px] border px-6 py-3",
              accent ? "border-orange/40 bg-deck/50" : "border-deck-line bg-deck-panel",
            )}
          >
            {s}
          </div>
          {i < items.length - 1 ? (
            <span className="slide-chrome text-center leading-none text-orange">↓</span>
          ) : null}
        </div>
      ))}
    </div>
  );

  return (
    <SlideShell journey={3}>
      <Kicker>Research → application</Kicker>
      <Reveal delay={80}>
        <h2
          className="slide-title mt-5 font-black tracking-tight"
          style={{ fontSize: "62px" }}
        >
          FROM A RESEARCH IDEA TO A WORKING APP
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-3 gap-8">
        <Reveal delay={300} from="up">
          <Card>
            <NumberBadge n="01" />
            <h3 className="slide-subtitle mt-4 font-black">THE CONCEPT</h3>
            <p className="slide-caption mt-2 font-bold text-sky">Retrieval-Augmented Generation</p>
            {flow(["📄 Your documents", "🔎 Retrieval", "🤖 AI model", "💬 Answer"])}
            <p className="slide-caption mt-5 text-deck-muted">
              RAG lets AI answer using your own documents, not only its training data.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={700} from="up">
          <Card>
            <NumberBadge n="02" />
            <h3 className="slide-subtitle mt-4 font-black">THE PROTOTYPE</h3>
            <p className="slide-caption mt-2 font-bold text-sky">PDF chat application</p>
            <div className="mt-5 flex flex-col gap-4">
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
          <Card accent>
            <NumberBadge n="03" accent />
            <h3 className="slide-subtitle mt-4 font-black">THE REAL APPLICATION</h3>
            <p className="slide-caption mt-2 font-bold text-orange">Deploy it</p>
            {flow(["💻 Prototype", "☁️ Cloud", "🤖 AI services", "👥 Real users"], true)}
          </Card>
        </Reveal>
      </div>

      <BottomBanner delay={1500}>A RESEARCH CONCEPT CAN BECOME A REAL PORTFOLIO PROJECT.</BottomBanner>
    </SlideShell>
  );
}

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
          <SlideTitle className="max-w-[1120px]">FROM YOUR LAPTOP TO THE WORLD</SlideTitle>
        </div>
        <Reveal delay={200}>
          <span className="slide-badge rounded-full border border-deck-line px-6 py-3 font-bold tracking-[0.16em] text-sky">
            AWS = CLOUD PLATFORM
          </span>
        </Reveal>
      </div>

      <div className="mt-10 flex items-stretch gap-5">
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

      <Reveal delay={2000} className="mt-10">
        <div className="mx-auto flex w-[900px] items-center gap-6 rounded-[22px] border border-dashed border-sky/45 px-9 py-6">
          <span className="text-[42px] leading-none">🖥️</span>
          <div>
            <p className="slide-caption font-black">OPTIONAL · AMAZON EC2</p>
            <p className="slide-body mt-1 text-deck-muted">
              Can run application servers when you need a full always-on machine.
            </p>
          </div>
        </div>
      </Reveal>

      <BottomBanner delay={2200}>
        LAPTOP = PROTOTYPE · DEPLOYED = SOMETHING PEOPLE CAN USE
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
            <Card accent={i % 2 === 1} className="min-h-[300px]">
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

      <Reveal delay={1350} className="mt-auto pt-10">
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
            <Card accent={i === 2}>
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

      </div>
    </SlideShell>
  );
}

/* ------------------------------------------------------------------ */
/* Deck                                                                */
/* ------------------------------------------------------------------ */
export const slides: Slide[] = [
  { id: "title", label: "Title", Component: SlideTitleSlide },
  { id: "question", label: "The Question", Component: SlideQuestion },
  { id: "compare", label: "Traditional vs AI", Component: SlideCompare },
  { id: "where-ai", label: "Where AI Helps", Component: SlideWhereAI },
  { id: "challenge", label: "Real Time Scenario", Component: SlideChallenge },
  { id: "human-ai", label: "Human + AI", Component: SlideHumanAI },
  { id: "why-research", label: "Why Research", Component: SlideWhyResearch },
  { id: "research-to-app", label: "Research → App", Component: SlideResearchToApp },
  { id: "cloud", label: "Cloud", Component: SlideCloud },
  { id: "activity", label: "Group Activity", Component: SlideActivity },
  { id: "roadmap", label: "Roadmap", Component: SlideRoadmap },
  { id: "remember", label: "3 Takeaways", Component: SlideRemember },
  { id: "questions", label: "Questions", Component: SlideQuestions },
];

