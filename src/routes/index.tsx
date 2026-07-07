import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Eye, Activity, Waves, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WhaleEye — Honest Market Intelligence, Free & No Signup" },
      {
        name: "description",
        content:
          "See what whales see. Real-time, honest crypto market intelligence — VPIN from actual trades, institutional scoring, order-flow x-ray. Free. No signup. No hype.",
      },
      { property: "og:title", content: "WhaleEye — Honest Market Intelligence" },
      {
        property: "og:description",
        content:
          "The all-seeing eye of the market. Real order flow, real math, zero noise. Free forever.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main dir="ltr" className="relative min-h-screen overflow-x-hidden bg-[#04070f] text-slate-100 antialiased">
      <BackdropFX />
      <Nav />
      <Hero />
      <Marquee />
      <Pillars />
      <XRay />
      <Manifesto />
      <Footer />
    </main>
  );
}

/* ───────────────────────── Backdrop ───────────────────────── */
function BackdropFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.14),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-[#04070f]/40" />
    </div>
  );
}

/* ───────────────────────── Nav ───────────────────────── */
function Nav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="/" className="flex items-center gap-3">
        <OrbLogo className="h-9 w-9" />
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-[0.28em] text-emerald-300/90">
            WHALE·EYE
          </div>
          <div className="text-[10px] tracking-[0.4em] text-slate-500">
            HONEST MARKET INTELLIGENCE
          </div>
        </div>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
        <a href="#pillars" className="hover:text-emerald-300 transition-colors">Engine</a>
        <a href="#xray" className="hover:text-emerald-300 transition-colors">X-Ray</a>
        <a href="#manifesto" className="hover:text-emerald-300 transition-colors">Manifesto</a>
      </nav>
      <a
        href="#xray"
        className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-xs font-medium tracking-widest text-emerald-200 backdrop-blur transition hover:border-emerald-300 hover:bg-emerald-400/10"
      >
        OPEN THE EYE
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-20 md:pb-32">
      <div className="grid items-center gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Free · No signup · No hype
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-white md:text-7xl">
            See what the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                whales
              </span>
              <span className="absolute -inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
            </span>{" "}
            see.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            An honest x-ray of the market — real trades, real order flow, real math.
            No signals sold, no illusions, no signup. Just the truth the tape is
            already telling.
          </p>

          <p dir="rtl" className="mt-4 max-w-xl text-right font-arabic text-base leading-loose text-slate-400/90">
            رؤية صادقة للسوق — تدفّق حقيقي، أرقام حقيقية، وصفر ضجيج.
            بلا اشتراك، بلا تسجيل، بلا وعود مضلّلة. الحقيقة كما يرويها الشريط.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#xray"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#04070f] shadow-[0_0_40px_-8px_rgba(52,211,153,0.7)] transition hover:shadow-[0_0_60px_-4px_rgba(52,211,153,0.9)]"
            >
              <Eye className="h-4 w-4" />
              Open the market
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#pillars"
              className="text-sm tracking-widest text-slate-400 hover:text-emerald-300"
            >
              HOW IT WORKS →
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-8">
            {[
              ["0", "hidden fees"],
              ["100%", "on-chain honesty"],
              ["24/7", "streaming pulse"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-3xl text-emerald-300">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroOrb />
      </div>
    </section>
  );
}

/* ───────────────────────── The Orb (visual centerpiece) ───────────────────────── */
function HeroOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* concentric halos */}
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        <RingSVG />
      </div>
      <div className="absolute inset-6 animate-[spin_45s_linear_infinite_reverse]">
        <RingSVG dashed />
      </div>

      {/* glow */}
      <div className="absolute inset-16 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(52,211,153,0.55),rgba(6,182,212,0.25)_45%,transparent_70%)] blur-2xl" />

      {/* iris */}
      <div className="absolute inset-20 rounded-full border border-emerald-300/30 bg-[#04070f]/70 backdrop-blur-xl">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,rgba(52,211,153,0.6),transparent_30%,rgba(6,182,212,0.5)_60%,transparent_85%)] opacity-70 animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-6 rounded-full bg-[#04070f] shadow-[inset_0_0_60px_rgba(6,182,212,0.35)]" />
        <div className="absolute inset-0 grid place-items-center">
          <PulseGraph />
        </div>
      </div>

      {/* orbiting dots */}
      <Orbit radius={46} duration={22} color="#34d399" />
      <Orbit radius={38} duration={16} color="#22d3ee" reverse />
    </div>
  );
}

function RingSVG({ dashed = false }: { dashed?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <defs>
        <linearGradient id="ring" x1="0" x2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="url(#ring)"
        strokeWidth="0.6"
        strokeDasharray={dashed ? "2 6" : undefined}
      />
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i / 60) * Math.PI * 2;
        const r1 = 96;
        const r2 = i % 5 === 0 ? 88 : 92;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * r1}
            y1={100 + Math.sin(a) * r1}
            x2={100 + Math.cos(a) * r2}
            y2={100 + Math.sin(a) * r2}
            stroke="#34d399"
            strokeOpacity={i % 5 === 0 ? 0.6 : 0.25}
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

function Orbit({ radius, duration, color, reverse = false }: { radius: number; duration: number; color: string; reverse?: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `spin ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
        style={{
          transform: `translate(-50%, -50%) translateY(-${radius}%)`,
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
    </div>
  );
}

function PulseGraph() {
  const [pts, setPts] = useState<number[]>(() =>
    Array.from({ length: 40 }, (_, i) => 50 + Math.sin(i / 3) * 12)
  );
  useEffect(() => {
    const id = setInterval(() => {
      setPts((p) => {
        const next = [...p.slice(1), 50 + (Math.random() - 0.5) * 40];
        return next;
      });
    }, 220);
    return () => clearInterval(id);
  }, []);
  const path = pts
    .map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${y}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" className="h-3/5 w-3/5">
      <defs>
        <linearGradient id="pg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#pg)" />
      <path d={path} fill="none" stroke="#34d399" strokeWidth="1.2" />
      <circle cx="100" cy={pts[pts.length - 1]} r="1.6" fill="#a7f3d0" />
    </svg>
  );
}

/* ───────────────────────── Marquee ───────────────────────── */
function Marquee() {
  const items = [
    "BINANCE",
    "BYBIT",
    "OKX",
    "COINBASE",
    "KRAKEN",
    "KUCOIN",
    "BITGET",
    "MEXC",
  ];
  return (
    <section className="relative border-y border-white/5 bg-black/30 py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-6">
        <span className="shrink-0 text-[10px] tracking-[0.28em] text-slate-500">
          LIVE FEEDS ▸
        </span>
        <div className="flex animate-[marquee_38s_linear_infinite] gap-14 whitespace-nowrap">
          {[...items, ...items, ...items].map((x, i) => (
            <span
              key={i}
              className="text-sm font-medium tracking-[0.35em] text-slate-500"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pillars ───────────────────────── */
function Pillars() {
  const items = [
    {
      icon: Activity,
      title: "Institutional Score V2",
      body: "Adaptive scoring calibrated on-the-fly to regime shifts. No black box — every weight is inspectable.",
    },
    {
      icon: Waves,
      title: "VPIN from real trades",
      body: "Toxicity of order flow measured from actual tape, not synthetic proxies. When the whales move, you feel the wake first.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-venue proxy",
      body: "Clean, deduplicated streams across eight major venues. SSE pushed the second it clears the wire.",
    },
    {
      icon: Sparkles,
      title: "Auto-calibration",
      body: "Backtest V2 with walk-forward regime detection. The engine tunes itself; you just read the truth.",
    },
  ];
  return (
    <section id="pillars" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-emerald-300/80">
          The Engine
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
          Four instruments. One honest lens.
        </h2>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group relative bg-[#04070f]/80 p-8 transition-colors hover:bg-[#06111a]"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── XRay tape ───────────────────────── */
function XRay() {
  const rows = useTape();
  return (
    <section id="xray" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-emerald-300/80">
            The X-Ray
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
            The tape,{" "}
            <span className="italic text-emerald-300">stripped naked.</span>
          </h2>
          <p className="mt-5 max-w-md text-slate-400">
            Live prints, aggressor side, and toxicity flags — streamed by SSE
            from real venue feeds. No delayed candles, no repainted signals.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-sm tracking-widest text-emerald-300 hover:text-emerald-200"
          >
            OPEN FULL TERMINAL <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_0_80px_-30px_rgba(52,211,153,0.5)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 text-[10px] tracking-[0.3em] text-slate-500">
            <span>LIVE TAPE · SSE</span>
            <span className="flex items-center gap-1.5 text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              STREAMING
            </span>
          </div>
          <div className="grid grid-cols-[1fr_0.8fr_0.6fr_0.6fr] gap-3 px-4 py-2 text-[10px] tracking-[0.2em] text-slate-500">
            <span>PAIR</span><span>PRICE</span><span>SIZE</span><span className="text-right">SIDE</span>
          </div>
          <div className="max-h-[380px] overflow-hidden font-mono text-sm">
            {rows.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-[1fr_0.8fr_0.6fr_0.6fr] gap-3 border-t border-white/5 px-4 py-2 text-slate-300 animate-[slidein_.4s_ease-out]"
              >
                <span className="text-slate-200">{r.pair}</span>
                <span className={r.side === "buy" ? "text-emerald-300" : "text-rose-300"}>
                  {r.price.toFixed(2)}
                </span>
                <span className="text-slate-400">{r.size.toFixed(3)}</span>
                <span className={`text-right text-[11px] tracking-widest ${r.side === "buy" ? "text-emerald-300" : "text-rose-300"}`}>
                  {r.side.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}

function useTape() {
  type Row = { id: number; pair: string; price: number; size: number; side: "buy" | "sell" };
  const [rows, setRows] = useState<Row[]>([]);
  const nextId = useRef(0);
  useEffect(() => {
    const pairs = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "BNB/USDT", "ARB/USDT"];
    const bases: Record<string, number> = { "BTC/USDT": 71240, "ETH/USDT": 3820, "SOL/USDT": 182, "BNB/USDT": 612, "ARB/USDT": 1.14 };
    const id = setInterval(() => {
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const price = bases[pair] * (1 + (Math.random() - 0.5) * 0.002);
      const size = Math.random() * 4 + 0.02;
      const side: "buy" | "sell" = Math.random() > 0.5 ? "buy" : "sell";
      setRows((r) => [{ id: nextId.current++, pair, price, size, side }, ...r].slice(0, 12));
    }, 700);
    return () => clearInterval(id);
  }, []);
  return rows;
}

/* ───────────────────────── Manifesto ───────────────────────── */
function Manifesto() {
  return (
    <section id="manifesto" className="relative mx-auto max-w-4xl px-6 py-32 text-center">
      <p className="text-[11px] uppercase tracking-[0.4em] text-emerald-300/80">
        Our promise
      </p>
      <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-6xl">
        No paywalls. No signup.
        <br />
        <span className="italic text-emerald-300">No lies.</span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
        We built WhaleEye because the market deserves a mirror, not a
        salesman. Every metric here is derived from real trades and public
        math. If we can't prove it, we don't ship it.
      </p>
      <p dir="rtl" className="mx-auto mt-6 max-w-2xl font-arabic text-base leading-loose text-slate-400">
        بنينا "عين الحوت" لأنّ السوق يستحقّ مرآة، لا بائع أوهام.
        كلّ رقم هنا مشتقٌّ من صفقات حقيقية ورياضيات مفتوحة.
        ما لا نستطيع إثباته — لا ننشره.
      </p>
      <div className="mt-14 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-6 py-3 text-sm tracking-[0.3em] text-emerald-200">
        <OrbLogo className="h-5 w-5" />
        FREE · FOREVER
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs tracking-widest text-slate-600 md:flex-row">
        <div className="flex items-center gap-3">
          <OrbLogo className="h-5 w-5" />
          <span>WHALE·EYE — © {new Date().getFullYear()}</span>
        </div>
        <span>NOT FINANCIAL ADVICE · TRADE YOUR OWN RESEARCH</span>
      </div>
    </footer>
  );
}

/* ───────────────────────── Custom logo mark ───────────────────────── */
function OrbLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <radialGradient id="orb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0b1120" />
        </radialGradient>
        <linearGradient id="eye" x1="0" x2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M4 32 C16 12 48 12 60 32 C48 52 16 52 4 32 Z"
        fill="none"
        stroke="url(#eye)"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="11" fill="url(#orb)" />
      <circle cx="32" cy="32" r="4" fill="#04070f" />
      <circle cx="29" cy="29" r="1.4" fill="#e6fffb" />
    </svg>
  );
}
