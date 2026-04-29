// Sections.jsx — top-of-page sections (nav, hero, marquee, DSPs, value props)
// All components attached to window for cross-file scope.

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8"/>
  </svg>
);

const PlayIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
);

// ─────────────────────────────────────────────────────────
// Top status & nav
// ─────────────────────────────────────────────────────────
function TopNav() {
  return (
    <nav style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 18px',
      background: 'linear-gradient(180deg, #070038 10.53%, rgba(7,0,56,0) 100%)',
      borderBottom: 'none',
      pointerEvents: 'none',
    }}>
      <img src="assets/logo-440-header.svg" alt="440" style={{ height: 44, width: 'auto', pointerEvents: 'auto' }} />
      <button aria-label="Menu" style={{
        width: 40, height: 40, display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'transparent', border: 'none', color: '#fff',
        pointerEvents: 'auto', cursor: 'pointer', padding: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      </button>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────
// Hero — variant A: poetic statement (default)
// ─────────────────────────────────────────────────────────
function Hero() {
  const h = {
    eyebrow: 'POWERED BY REVOLT',
    title: null, // rendered as JSX below
    subtitle: '440 is a music distributor for independent artists. Real humans, real placements, real reach.',
    cta: 'Apply Now',
  };

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Looping background video — fills upper portion, text sits below */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        overflow: 'hidden',
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        >
          <source src="https://d3bfvpwvj4qqsk.cloudfront.net/static/media/440-MUSIC-DISTRO_WEBSITE-LOOP_021225_15_NO-LOGO_1x1.2bbfe8dbf798dca8846b.mp4" type="video/mp4" />
        </video>
        {/* Bottom fade so text below blends seamlessly */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '70%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(7,0,56,0.7) 55%, var(--bg) 95%)',
          pointerEvents: 'none',
        }} />
      </div>

      <div style={{ padding: '0 20px 64px', marginTop: -130, position: 'relative', zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: 20, color: 'var(--accent)' }}>{h.eyebrow}</div>
        <h1 className="display" style={{
          fontSize: 76,
          color: 'white',
          marginBottom: 24,
          letterSpacing: '-0.02em',
        }}>
          YOUR MUSIC.<br/>YOUR MASTERS.<br/><span style={{ color: 'var(--accent)' }}>YOUR MOVE.</span>
        </h1>
        <p className="body-lg" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.82)', maxWidth: 340 }}>
          {h.subtitle}
        </p>
        <button className="btn btn-primary btn-full">
          {h.cta}
          <span className="arrow"><ArrowRight /></span>
        </button>

        <div style={{ display: 'flex', gap: 24, marginTop: 36 }}>
          <Stat n="250+" l="DSPs worldwide"/>
          <Stat n="90/10" l="Royalty split"/>
          <Stat n="48hr" l="Avg. release"/>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div style={{ flex: 1 }}>
      <div className="display" style={{ fontSize: 30, color: 'var(--accent)', lineHeight: 0.9 }}>{n}</div>
      <div style={{ fontSize: 12, color: 'var(--caption)', marginTop: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{l}</div>
    </div>
  );
}

function RingBackdrop() {
  return (
    <div aria-hidden style={{
      position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)',
      width: 900, height: 900, pointerEvents: 'none',
      maskImage: 'radial-gradient(circle at center, black 30%, transparent 65%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 65%)',
    }}>
      {Array.from({ length: 7 }).map((_, i) => {
        const size = 200 + i * 110;
        return (
          <div key={i} style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: size, height: size, borderRadius: '50%',
            border: `1px solid rgba(0,227,135,${0.32 - i * 0.035})`,
          }} />
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Trust marquee — "as heard on" / network refs
// ─────────────────────────────────────────────────────────
function TrustMarquee() {
  const logos = [
    { src: 'assets/dsp-spotify.svg', alt: 'Spotify' },
    { src: 'assets/dsp-apple-music.svg', alt: 'Apple Music' },
    { src: 'assets/dsp-tiktok.svg', alt: 'TikTok' },
    { src: 'assets/dsp-youtube.svg', alt: 'YouTube' },
  ];
  return (
    <div style={{
      borderTop: '1px solid var(--hairline-soft)',
      borderBottom: '1px solid var(--hairline-soft)',
      padding: '24px 0',
      overflow: 'hidden',
      position: 'relative',
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 56, whiteSpace: 'nowrap',
        animation: 'marquee 28s linear infinite',
        width: 'max-content',
      }}>
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{ height: 26, width: 'auto', flexShrink: 0, opacity: 0.95 }}
          />
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// DSP strip — "your music, everywhere"
// ─────────────────────────────────────────────────────────
function DSPStrip() {
  const dsps = ['Spotify', 'Apple Music', 'TikTok', 'YouTube Music', 'Amazon', 'Tidal', 'SoundCloud', 'Deezer', 'Pandora', 'Audiomack'];
  return (
    <section style={{ padding: '80px 20px' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>Distribution</div>
      <h2 className="display" style={{ fontSize: 60, marginBottom: 20, lineHeight: 0.86 }}>
        EVERYWHERE<br/><span style={{ color: 'var(--accent)' }}>YOUR FANS LISTEN.</span>
      </h2>
      <p className="body" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 28 }}>
        One upload. 250+ stores and streaming services worldwide, in 1 to 3 days.
      </p>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 10,
      }}>
        {dsps.map((d) => (
          <div key={d} style={{
            border: '1px solid var(--hairline-soft)',
            borderRadius: 12, padding: '14px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 17, letterSpacing: '0.01em' }}>{d}</span>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 8px rgba(0,227,135,0.6)' }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, fontSize: 14, color: 'var(--caption)' }}>
        + 240 more
      </div>
    </section>
  );
}

Object.assign(window, { TopNav, Hero, TrustMarquee, DSPStrip, ArrowRight, ArrowUpRight, PlayIcon, RingBackdrop });
