import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Slide data — each slide: full-bleed image + unique copy ─── */
const SLIDES = [
  {
    image: "/hero/DSC_9934.JPG",
    heading: <>Connecting<br />education with<br />opportunity</>,
    subtext: "At Trident Academy of Technology, we're focused on one goal: shaping the engineers, leaders, and innovators of tomorrow through world-class education.",
  },
  {
    image: "/hero/Innovation.png",
    heading: <>Where knowledge<br />meets<br />innovation</>,
    subtext: "Immerse yourself in Odisha's premier technical ecosystem. Rigorous academics meet world-class innovation labs to forge the leaders of tomorrow.",
  },
  {
    image: "/hero/Placement.JPG",
    heading: <>Building careers<br />that matter,<br />since 2005</>,
    subtext: "120+ recruiting companies, thousands of placed graduates, and a legacy of career-readiness. Where ambition meets real-world opportunity.",
  },
  {
    image: "/hero/gate.JPG",
    heading: <>A campus<br />designed to<br />inspire</>,
    subtext: "A corporate-styled campus in the heart of Bhubaneswar — advanced labs, vibrant student clubs, cultural festivals, and spaces that spark creativity.",
  },
  {
    image: "/hero/_MG_2404.JPG",
    heading: <>Pioneering<br />research with<br />real impact</>,
    subtext: "₹2.5 Cr DST-funded AI Research Centre, 50+ patents filed, and a culture of relentless innovation. Discover what makes Trident a research powerhouse.",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animState, setAnimState] = useState('visible');
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const transition = useCallback((nextIdx) => {
    setAnimState('exiting');
    setTimeout(() => {
      setActive(typeof nextIdx === 'function' ? nextIdx : () => nextIdx);
      setAnimState('entering');
      setTimeout(() => setAnimState('visible'), 60);
    }, 500);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === active || animState !== 'visible') return;
    transition(idx);
  }, [active, animState, transition]);

  // Auto-play
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      transition(p => (p + 1) % SLIDES.length);
    }, INTERVAL);
  }, [transition]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleNav = useCallback((idx) => {
    goTo(idx);
    startTimer();
  }, [goTo, startTimer]);

  const slide = SLIDES[active];
  const isOut = animState === 'exiting';

  /* ── Shared transition helper ── */
  const tx = (delay = 0, yOut = 20, yInit = 30) => ({
    opacity: loaded ? (isOut ? 0 : 1) : 0,
    transform: loaded
      ? (isOut ? `translateY(${yOut}px)` : 'translateY(0)')
      : `translateY(${yInit}px)`,
    transition: `opacity 600ms ease-out ${isOut ? '0ms' : `${delay}ms`}, transform 600ms ease-out ${isOut ? '0ms' : `${delay}ms`}`,
  });

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden">

      {/* ═══ Background images — crossfade + Ken Burns ═══ */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1200ms ease-in-out',
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: i === active ? 'scale(1.03)' : 'scale(1.08)',
              transition: 'transform 10s ease-out',
            }}
            loading={i < 2 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* ═══ Overlay — subtle left-heavy gradient like Strada ═══ */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.40) 40%, rgba(0,0,0,0.18) 100%)
          `,
        }}
      />

      {/* ═══ Content ═══ */}
      <div className="relative z-10 h-full flex items-center pt-36 pb-28">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-14 w-full">
          <div className="max-w-[800px]">

            {/* ── Heading — Playfair Display, large & elegant ── */}
            <h1
              className="font-serif text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                marginBottom: '1.5rem',
                ...tx(100, 24, 40),
              }}
            >
              {slide.heading}
            </h1>

            {/* ── Subtext — DM Sans, clean readable ── */}
            <p
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.72)',
                maxWidth: '540px',
                marginBottom: '2.5rem',
                ...tx(220, 16, 28),
              }}
            >
              {slide.subtext}
            </p>


          </div>
        </div>
      </div>

      {/* ═══ Bottom Navigation ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-14 pb-8">
          <div className="flex items-end justify-between">

            {/* Progress bars */}
            <div className="flex items-center gap-2.5">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleNav(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="relative rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
                  style={{
                    width: i === active ? 52 : 20,
                    height: 3,
                    background: 'rgba(255,255,255,0.2)',
                  }}
                >
                  {i === active && (
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: '#fff',
                        animation: `slideProgress ${INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
              <span
                className="ml-3 tabular-nums"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.08em',
                }}
              >
                {String(active + 1).padStart(2, '0')}
                <span style={{ color: 'rgba(255,255,255,0.15)', margin: '0 3px' }}>/</span>
                {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              {[
                { icon: <ChevronLeft size={16} strokeWidth={2} />, idx: (active - 1 + SLIDES.length) % SLIDES.length, label: 'Previous' },
                { icon: <ChevronRight size={16} strokeWidth={2} />, idx: (active + 1) % SLIDES.length, label: 'Next' },
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleNav(btn.idx)}
                  aria-label={btn.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(4px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                >
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Keyframes ═══ */}
      <style>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
