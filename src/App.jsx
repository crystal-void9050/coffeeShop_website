import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  ShieldCheck,
  Menu,
  X,
  Upload,
  Coffee,
  Zap,
  Droplets,
  Thermometer,
  Wind,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

const SERVICES = [
  {
    icon: Coffee,
    title: "Pour-Over Coffee",
    text: "Single-origin beans, brewed to order with a gooseneck kettle and precise pour.",
  },
  {
    icon: Zap,
    title: "Espresso Bar",
    text: "Double shots, flat whites, and piccolos — dialed in fresh every morning.",
  },
  {
    icon: Droplets,
    title: "Batch Brew",
    text: "Our signature house blend, turned twice daily for peak freshness.",
  },
  {
    icon: Thermometer,
    title: "Cold Brew",
    text: "24-hour steep, smooth and low-acid — over ice or neat.",
  },
  {
    icon: Wind,
    title: "Cupping & Tasting",
    text: "Monthly bean flights — taste the difference origin makes.",
  },
  {
    icon: Coffee,
    title: "Retail Beans",
    text: "Take our roast home — 250g and 1kg bags, ground on request.",
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-primary/10"
            : "bg-transparent"
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Coffee className="h-5 w-5 text-white" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span
              className={`font-display font-bold tracking-tight text-lg ${
                scrolled ? "text-ink" : "text-white"
              } transition-colors`}
            >
              Branzac
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled
                    ? "text-ink/70 hover:text-primary"
                    : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Visit Us
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Branzac</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-divider/40"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Visit Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line-1", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".hero-line-2", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      })
      gsap.from(".hero-cta, .hero-meta", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2080?auto=format&fit=crop&w=2400&q=80"
          alt="Fresh coffee beans close-up"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-accent/60 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-white/30 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[65%] right-[18%] h-2 w-2 rounded-full bg-primary/50 animate-float" style={{ animationDelay: "2.2s" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">Coffee worth</span>
            <span className="hero-line-2 block font-serif italic font-medium text-accent text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2" style={{ lineHeight: "0.92" }}>savoring.</span>
          </h1>
          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            Single-origin beans. Pour-over precision. An espresso bar dialed in every morning.
            <br />
            Branzac — roasted in-house, served with intention.
          </p>
          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40">
              Find Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="tel:+4512345678" className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full">
              <Phone className="h-4 w-4" />
              +1 234 567 890
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Bean Shuffle
---------------------------------------------------------------- */
function BeanShuffle() {
  const items = [
    { tag: "Single-Origin", label: "Ethiopia Yirgacheffe — floral, citrus", temp: "Light" },
    { tag: "House Blend", label: "Branzac Signature — chocolate, nutty", temp: "Medium" },
    { tag: "Dark Roast", label: "Sumatra Mandheling — earthy, bold", temp: "Dark" },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.temp}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{
                    background: idx < 24 - offset * 6 ? "#1C3D2A" : "#E2DDD4",
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Coffee Rain (signature animation)
---------------------------------------------------------------- */
function CoffeeRain() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(7)

  const statuses = [
    { text: "Dialing in the grinder · 18g target", label: " Brewing", tone: "primary" },
    { text: "First pour · bloom phase 30s", label: " Blooming", tone: "primary" },
    { text: "Fresh cup ready · single-origin", label: " Ready", tone: "emerald" },
    { text: "Cupping flight · 4 beans tasting", label: " Tasting", tone: "accent" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === " Ready") {
          setCount((c) => c + 1)
        }
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const drops = [
    { left: "15%", delay: "0.0s", dur: "2.6s", size: 14 },
    { left: "25%", delay: "1.3s", dur: "3.0s", size: 12 },
    { left: "38%", delay: "0.6s", dur: "2.8s", size: 15 },
    { left: "50%", delay: "1.8s", dur: "2.4s", size: 13 },
    { left: "62%", delay: "0.9s", dur: "3.1s", size: 14 },
    { left: "74%", delay: "2.0s", dur: "2.7s", size: 12 },
    { left: "85%", delay: "0.4s", dur: "2.9s", size: 14 },
  ]

  const ripples = [
    { left: "22%", delay: "0.2s" },
    { left: "48%", delay: "1.0s" },
    { left: "76%", delay: "1.8s" },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === "emerald"
      ? "text-emerald-600"
      : status.tone === "accent"
        ? "text-accent-dark"
        : "text-primary-dark"
  const toneDot =
    status.tone === "emerald"
      ? "bg-emerald-500"
      : status.tone === "accent"
        ? "bg-accent"
        : "bg-primary"

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{
        background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 70%, #E8D5C4 100%)",
      }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <svg className="h-3.5 w-3.5 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm3 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            Barista Station
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, "0")}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
            cups today
          </span>
        </div>
      </div>

      {/* Coffee dripper source */}
      <svg
        className="absolute left-3 right-3 top-9 h-5"
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
      >
        <path d="M60 10 L140 4 L260 4 L340 10 L340 16 L60 16 Z" fill="#1C3D2A" fillOpacity="0.2" />
        <rect x="0" y="9" width="400" height="2" fill="#B87333" fillOpacity="0.5" />
        <path d="M140 4 L260 4 L270 8 L130 8 Z" fill="#B87333" fillOpacity="0.3" />
        <rect x="60" y="3" width="280" height="2" rx="1" fill="#1C3D2A" fillOpacity="0.4" />
      </svg>

      {/* Coffee bean drops */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.4)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: "drop-shadow(0 1px 2px rgba(184,115,51,0.3))",
              transform: "translateX(-50%)",
            }}
            viewBox="0 0 20 28"
          >
            <defs>
              <linearGradient id={`coffee-drop-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4A87C" />
                <stop offset="50%" stopColor="#B87333" />
                <stop offset="100%" stopColor="#8F5A26" />
              </linearGradient>
            </defs>
            <ellipse cx="10" cy="14" rx="7" ry="10" fill={`url(#coffee-drop-${i})`} />
            <path d="M10 4 Q12 14 10 24" stroke="#8F5A26" strokeOpacity="0.6" strokeWidth="0.8" fill="none" />
            <ellipse cx="8" cy="10" rx="2" ry="2.5" fill="white" fillOpacity="0.4" />
          </svg>
        ))}
      </div>

      {/* Wooden counter surface */}
      <svg
        className="absolute bottom-9 left-3 right-3 h-3"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
      >
        <path d="M 0,6 Q 12.5,2 25,6 T 50,6 T 75,6 T 100,6 T 125,6 T 150,6 T 175,6 T 200,6" fill="none" stroke="#8F5A26" strokeOpacity="0.4" strokeWidth="1.2" />
        <path d="M 0,8 Q 12.5,5 25,8 T 50,8 T 75,8 T 100,8 T 125,8 T 150,8 T 175,8 T 200,8" fill="none" stroke="#B87333" strokeOpacity="0.25" strokeWidth="0.8" />
        {[10, 35, 60, 85, 110, 135, 160, 185].map((x) => (
          <line key={x} x1={x} y1="2" x2={x} y2="10" stroke="#8F5A26" strokeOpacity="0.15" strokeWidth="0.6" />
        ))}
      </svg>

      {/* Steam wisp ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent/40"
            style={{
              left: r.left,
              width: "4px",
              height: "4px",
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === "accent" && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: "rain-fadein 0.35s ease-out" }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Brew Scheduler
---------------------------------------------------------------- */
function BrewScheduler() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const [step, setStep] = useState(0)
  const activeDay = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2: return { x: 60 + activeDay * 48, y: 60, opacity: 1 }
      case 3: return { x: 60 + activeDay * 48, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">This Week</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">Reservation</span>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
                : "bg-background text-ink"
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 1}</span>
          </div>
        ))}
      </div>
      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? "bg-accent text-white scale-[1.02] shadow-md shadow-accent/30"
            : "bg-divider/40 text-muted"
        }`}
      >
        {step >= 3 ? "✓ Table reserved for 3" : "Pick a day"}
      </button>
      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? "scale(0.85)" : "scale(1)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#1C3D2A" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      })
      gsap.from(".feature-heading > *", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 95%", once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: "01 / The Beans",
      heading: "Single-Origin & Blends",
      sub: "From farm to cup",
      text: "We source directly from growers we trust — Ethiopia, Colombia, Sumatra. Every bean is roasted in-house and dialed in for the brew method you choose.",
      Component: BeanShuffle,
    },
    {
      eyebrow: "02 / The Brew",
      heading: "Pour-Over & Espresso",
      sub: "Precision in every cup",
      text: "Whether it's a slow pour-over or a double ristretto, our baristas treat each order as a craft. Grinders are calibrated, timers are watched, and no cup leaves untouched.",
      Component: CoffeeRain,
    },
    {
      eyebrow: "03 / The Space",
      heading: "Reservations & Tasting",
      sub: "Book a seat, book a flight",
      text: "Cupping sessions every weekend — four beans, a flight of brews, and a conversation about what you're tasting. Reserve a table for morning coffee or an afternoon flight.",
      Component: BrewScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ What we do
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three pillars.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">
              One standard.
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>
              <card.Component />
              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                  {card.heading}
                </h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">
                  {card.sub}
                </p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(target)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: "01",
      title: "Roasting",
      target: 12,
      suffix: "+",
      label: "bean origins",
      desc: "We rotate through 12+ single origins each year — always something new, always something worth tasting.",
    },
    {
      n: "02",
      title: "In-House",
      target: 100,
      suffix: "%",
      label: "roasted here",
      desc: "Every bean Branzac serves is roasted in our shop. No middlemen, no stale supermarket bags — just fresh roast, grounded and brewed the same day.",
    },
    {
      n: "03",
      title: "Open",
      target: 7,
      suffix: "/7",
      label: "days a week",
      desc: "Morning rush, afternoon flight, evening wind-down — we're here seven days, because good coffee doesn't keep office hours.",
    },
  ]

  return (
    <section id="approach" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">
              ╱ Three numbers
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              What we believe in.
              <span className="block font-serif italic font-medium text-primary-dark">In numbers.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Not marketing — just the numbers that define how we work every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
              className={`relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>
              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">
                {p.label}
              </p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">
                {p.desc}
              </p>
              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>
              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">
                {p.n}.branzac
              </span>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — sticky stack
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card")
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=100",
            endTrigger: cards[cards.length - 1],
            end: "top top+=120",
            scrub: 1,
          },
          scale: 0.92,
          filter: "blur(6px) saturate(0.7)",
          opacity: 0.5,
          ease: "none",
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: "01",
      title: "Taste the Difference",
      tagline: "Four beans, one table.",
      text: "Book a cupping session and taste four single origins side by side. Our barista walks you through what to look for — floral, citrus, chocolate, earth. You leave knowing what you like.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2080?auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee beans close-up",
      meta: "Step 1 / Tasting",
    },
    {
      num: "02",
      title: "Pick Your Brew",
      tagline: "Pour-over or espresso.",
      text: "Tell us your beans, your method, your preference — light and tea-like, or bold and syrupy. We dial in the grind, set the temperature, and pour with intention. You taste the result.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee being poured",
      meta: "Step 2 / Brewing",
    },
    {
      num: "03",
      title: "Take It Home",
      tagline: "Fresh roast, bagged the same day.",
      text: "Love a bean? Take the bag home. 250g or 1kg, whole or ground to your brew method. We'll note the roast date and the brew recommendation on the label.",
      image: "https://images.unsplash.com/photo-1559056199-56adf4cba2a2?auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee bag and cup",
      meta: "Step 3 / Retail",
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
          ╱ How it works
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">No shortcuts.</span>
        </h2>
      </div>
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    {step.meta}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                    Branzac Protocol
                  </span>
                </div>
                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">
                    {step.tagline}
                  </p>
                </div>
                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                  {step.text}
                </p>
              </div>
              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                    Step {step.num}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Branzac
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   ServicesGrid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-tile", {
        scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              ╱ Full menu
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Everything we serve,
              <span className="block font-serif italic font-medium text-accent">in one place.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            From a single pour-over to a bag of beans to take home — all brewed or roasted here.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-accent group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 text-white">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: "SCA Certified Baristas",
      text: "Our team holds Specialty Coffee Association certifications — trained in extraction, sensory evaluation, and sustainable sourcing.",
    },
    {
      Icon: Award,
      title: "Direct-Trade Partner",
      text: "We buy directly from growers we trust, paying above Fair Trade price. Better beans, better livelihoods, better cup.",
    },
    {
      Icon: Clock,
      title: "Roasted In-House, Daily",
      text: "Every batch is roasted in our shop — never outsourced, never stale. You get the roast date on the bag and the aroma in the cup.",
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ Why Branzac
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than a coffee shop.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Find Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   ContactForm
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState("idle")
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
              ╱ Visit Us
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Come say
              <span className="block font-serif italic font-medium text-primary-dark">hello.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Fill in your details and we'll get back to you — or just walk in. We're open seven days, and the door is always open for a good cup.
            </p>
            <div className="mt-10 space-y-4">
              <a href="tel:+4512345678" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Call us</span>
                  <span className="font-display font-semibold text-ink text-lg">+1 234 567 890</span>
                </span>
              </a>
              <a href="mailto:hello@branzac.com" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Email us</span>
                  <span className="font-display font-semibold text-ink text-lg">hello@branzac.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Find us</span>
                  <span className="font-display font-semibold text-ink text-lg">123 Brew Street, Coffee District</span>
                </span>
              </div>
            </div>
            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Your details</p>
              <p className="text-sm text-muted leading-relaxed">
                We only use your information to reply to your message. No marketing, no sharing — just a good cup and a quick reply.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== "sent" ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Postcode" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
                  </div>
                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">Your message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for — a cupping session, a bag of beans, a table for two..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>
                  <div
                    ref={dropRef}
                    onDragOver={(e) => { e.preventDefault(); dropRef.current?.classList.add("!border-primary", "!bg-primary/5") }}
                    onDragLeave={() => { dropRef.current?.classList.remove("!border-primary", "!bg-primary/5") }}
                    onDrop={(e) => { e.preventDefault(); dropRef.current?.classList.remove("!border-primary", "!bg-primary/5"); handleFiles(e.dataTransfer.files) }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach photos or notes</p>
                      <p className="text-xs text-muted mt-1">Click or drop files here (max 5)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + "..." : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We'll get back to you soon. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === "sending" ? "Sending..." : "Send message"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thanks — we'll be in touch.</h3>
                  <p className="text-muted max-w-md mx-auto">We'll reply to your message soon. In the meantime — come by for a cup.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = "text", required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Coffee worth
            <span className="font-serif italic font-medium text-accent block">savoring.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Branzac — single-origin coffee, roasted in-house and poured with intention. Open seven days.
            </p>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Find Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Coffee className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg text-white">Branzac</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Specialty coffee shop — single-origin beans, pour-over, espresso bar, and cupping sessions. Roasted in-house, served with intention.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-6">Est. 2024</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">What we do</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-accent transition text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Visit</p>
            <ul className="space-y-2.5">
              <li><a href="#approach" className="text-white/65 hover:text-accent transition text-sm">Our Approach</a></li>
              <li><a href="#process" className="text-white/65 hover:text-accent transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-accent transition text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Get in touch</p>
            <ul className="space-y-2.5">
              <li><a href="tel:+4512345678" className="text-white/65 hover:text-accent transition text-sm">+1 234 567 890</a></li>
              <li><a href="mailto:hello@branzac.com" className="text-white/65 hover:text-accent transition text-sm">hello@branzac.com</a></li>
              <li className="text-white/65 text-sm">123 Brew Street</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Open 7 days · Fresh roast daily
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <a href="/privacy" className="hover:text-accent transition">Privacy</a>
            <a href="/terms" className="hover:text-accent transition">Terms</a>
            <span>© 2024 Branzac</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
