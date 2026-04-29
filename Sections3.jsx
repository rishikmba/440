// Sections3.jsx — featured artists, testimonial, how it works, FAQ, footer

// ─────────────────────────────────────────────────────────
// Featured artists — both layouts via tweak (rect or circle)
// ─────────────────────────────────────────────────────────
function FeaturedArtists({ layout = 'rect' }) {
  // Real photos drop in as user supplies them; everyone else gets a branded placeholder.
  const artists = [
    { name: 'Lex Bratcher',   img: 'lex-bratcher',   tag: 'R&B / Producer', blurb: 'Landed a Netflix sync placement on \u201CPop Star Academy: KATSEYE.\u201D' },
    { name: 'Lynae Vanee',    img: 'lynae-vanee',    tag: 'Spoken Word',    blurb: '\u201CSundays in the Overflow\u201D EP out now \u2014 GRAMMY Museum performer and 2026 NAACP Award winner.' },
    { name: 'Father Romar',   img: 'father-romar',   tag: 'Hip-Hop',        blurb: 'REVOLT House SXSW \u201926 performer and mainstage opener for Monaleo.' },
    { name: 'Erykah Officer', img: 'erykah-officer', tag: 'R&B',            blurb: 'Featured on REVOLT\u2019s \u201COnes to Know\u201D list of rising independent female R&B artists.' },
    { name: 'Shaolinn',       img: 'shaolinn',       tag: 'Hip-Hop',        blurb: 'Winner of REVOLT\u2019s \u201CBe Heard\u201D competition, sponsored by AT&T.' },
    { name: 'Swayvo Twain',   img: 'swayvo-twain',   tag: 'Hip-Hop',        blurb: 'ABC interview with Rosci Diaz and live performance on \u201COn The Radar.\u201D' },
  ];


  return (
    <section style={{ padding: '80px 20px' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>The Roster</div>
      <h2 className="display" style={{ fontSize: 60, lineHeight: 0.86, marginBottom: 20 }}>
        ARTISTS<br />BUILDING ON <span style={{ color: 'var(--accent)' }}>440.</span>
      </h2>
      <p className="body" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 28 }}>
        These are the artists keeping their masters, owning their careers, and doing it on their own terms.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: layout === 'rect' ? 14 : 14 }}>
        {artists.map((a, i) => layout === 'rect' ?
        <ArtistCardRect key={i} {...a} index={i} /> :
        <ArtistCardCircle key={i} {...a} />
        )}
        <ArtistCardCTA layout={layout} index={artists.length} />
      </div>
    </section>);

}

// Render artist name with last name in accent green, on a single line
function ArtistName({ name, size, marginBottom }) {
  const parts = name.trim().split(' ');
  const first = parts.length > 1 ? parts.slice(0, -1).join(' ') : null;
  const last = parts[parts.length - 1];
  return (
    <h3 className="display" style={{
      fontSize: size, lineHeight: 0.95, marginBottom,
      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
    }}>
      {first && <>{first} </>}
      <span style={{ color: 'var(--accent)' }}>{last}</span>
    </h3>);
}

function ArtistCardRect({ name, img, blurb, index }) {
  return (
    <article style={{ position: 'relative' }}>
      <div style={{
        position: 'relative', borderRadius: 18, overflow: 'hidden',
        aspectRatio: '1 / 1',
        background: 'var(--bg-deep)'
      }}>
        <img src={`assets/artists/${img}-rect.png?v=4`} alt={name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(7,0,56,0) 30%, rgba(7,0,56,0.6) 55%, rgba(7,0,56,0.96) 100%)'
        }} />
        <div style={{ position: 'absolute', top: 14, right: 16,
          fontFamily: 'var(--display)', fontSize: 28, color: 'rgba(255,255,255,0.22)', fontWeight: 700, lineHeight: 1 }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
          <ArtistName name={name} size={44} marginBottom={12} />
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', lineHeight: 1.45, margin: 0 }}>
            {blurb}
          </p>
        </div>
      </div>
    </article>);

}

function ArtistCardCircle({ name, img, blurb }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <article className="card" style={{ padding: '18px 20px', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{
          width: 86, height: 86, borderRadius: '50%',
          flexShrink: 0, padding: 2, background: 'var(--accent)'
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden',
            background: 'var(--bg-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {img ? (
              <img src={`assets/artists/${img}.png?v=5`} alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
            ) : (
              <span style={{
                fontFamily: 'var(--display)', fontWeight: 700, fontSize: 28,
                color: 'var(--accent)', letterSpacing: '0.02em'
              }}>{initials}</span>
            )}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <ArtistName name={name} size={32} marginBottom={6} />
          <p style={{
            fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.45, margin: 0,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {blurb}
          </p>
        </div>
      </div>
    </article>);

}

// "This could be you" final card — same shape as whichever layout is active
function ArtistCardCTA({ layout, index }) {
  if (layout === 'rect') {
    return (
      <article style={{ position: 'relative' }}>
        <div style={{
          position: 'relative', borderRadius: 18, overflow: 'hidden',
          aspectRatio: '1 / 1',
          background: 'var(--bg-deep)',
          border: '2px dashed rgba(0,227,135,0.45)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 20
        }}>
          <div style={{ position: 'absolute', top: 14, right: 16,
            fontFamily: 'var(--display)', fontSize: 28, color: 'rgba(0,227,135,0.35)', fontWeight: 700, lineHeight: 1 }}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <div style={{
            position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 64, height: 64, borderRadius: '50%',
            background: 'var(--accent)', color: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 8, fontSize: 11 }}>Open Spot</div>
          <h3 className="display" style={{ fontSize: 44, lineHeight: 0.9, marginBottom: 12 }}>YOU.<br /><span style={{ color: 'var(--accent)' }}>NEXT.</span></h3>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', lineHeight: 1.45, margin: '0 0 14px' }}>
            We’re always looking for the next artist to build with. Apply and find out if you’re a fit.
          </p>
          <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Apply Now
            <span className="arrow"><window.ArrowRight /></span>
          </button>
        </div>
      </article>);
  }
  // circle layout
  return (
    <article className="card" style={{
      padding: '18px 20px', position: 'relative',
      border: '2px dashed rgba(0,227,135,0.45)',
      background: 'transparent'
    }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{
          width: 86, height: 86, borderRadius: '50%',
          flexShrink: 0,
          background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--bg)'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 4, fontSize: 11 }}>Open Spot</div>
          <h3 className="display" style={{ fontSize: 32, lineHeight: 0.95, marginBottom: 6 }}>YOU. <span style={{ color: 'var(--accent)' }}>NEXT.</span></h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.45, margin: 0 }}>
            Apply to join the roster.
          </p>
        </div>
      </div>
    </article>);

}

// ─────────────────────────────────────────────────────────
// Testimonial — swipeable artist quote carousel
// ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Kllevv',
    img: 'assets/artists/kllevv.jpg',
    objectPosition: 'center 25%',
    pull: 'The 440 team has shown up for me in ways I couldn\u2019t show up for myself.',
    body: 'I\u2019ve been granted opportunities I normally wouldn\u2019t have been offered, and I can tell they want the best for me and my musical endeavors.'
  },
  {
    name: 'Gee Litt',
    img: 'assets/artists/gee-litt.jpg?v=2',
    objectPosition: 'center',
    pull: 'What stands out most is having real, direct access to actual people. You can genuinely connect with someone from REVOLT 440.',
    body: 'As an independent artist without a full team, they\u2019ve supported me with bookings, placements, promotion, and more. I\u2019m grateful to be part of the 440 Artists community.'
  },
  {
    name: 'Mike Steezy',
    img: 'assets/artists/mike-steezy-2.jpg?v=2',
    objectPosition: 'center',
    pull: 'Having a team that genuinely believes in my vision and is willing to invest time and effort into helping me grow. That kind of backing matters when you\u2019re building your career independently.',
    body: 'If you\u2019re serious about your craft and looking for a team that will actively support your development, 440 is worth considering.'
  }
];

function Testimonial() {
  const [idx, setIdx] = React.useState(0);
  const t = TESTIMONIALS[idx];
  return (
    <section style={{ padding: '80px 20px' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>Artist Stories</div>
      <h2 className="display" style={{ fontSize: 60, lineHeight: 0.86, marginBottom: 28 }}>
        IN THEIR<br /><span style={{ color: 'var(--accent)' }}>OWN WORDS.</span>
      </h2>
      <div className="card" style={{
        padding: 0, overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--hairline)'
      }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
          <img src={t.img} alt={t.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.objectPosition }} />
        </div>
        <div style={{ padding: '28px 24px 24px', position: 'relative' }}>
          <p style={{
            fontFamily: 'var(--body)', fontSize: 17, lineHeight: 1.5,
            fontWeight: 500, color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.005em', whiteSpace: 'pre-line', margin: 0
          }}>
            {t.pull + '\n\n' + t.body}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: 24, paddingTop: 22, borderTop: '1px solid var(--hairline-soft)', gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
              <div style={{
                width: 4, height: 36, background: 'var(--accent)', borderRadius: 4, flexShrink: 0
              }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--caption)', marginTop: 2 }}>440 Artist</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <button onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid var(--hairline)', background: 'transparent',
                color: 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
              }} aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)} style={{
                width: 40, height: 40, borderRadius: '50%',
                border: 'none', background: 'var(--accent)',
                color: 'var(--bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
              }} aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
            {TESTIMONIALS.map((_, i) => (
              <span key={i} style={{
                width: i === idx ? 18 : 6, height: 6, borderRadius: 999,
                background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                transition: 'all 0.2s ease'
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────
// How it works — 3 steps
// ─────────────────────────────────────────────────────────
function HowItWorks() { return null; }

// ─────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────
function FAQ() {
  const items = [
  {
    q: 'What is 440 Artists?',
    a: '440 Artists powered by REVOLT is a music distribution and artist development platform built for independent artists. Release globally while gaining access to live performances, sync placements, brand partnerships, editorial coverage, and media exposure across the REVOLT ecosystem.'
  },
  {
    q: 'What is Offscript Worldwide?',
    a: 'Offscript Worldwide is the parent creator ecosystem behind REVOLT and 440 Artists \u2014 bringing together media, creators, podcasts, digital content, and live events to amplify culture across every channel. 440 artists benefit from exposure across all of it.'
  },
  {
    q: 'What is the royalty split?',
    a: 'Artists on 440 keep 90% of all streaming royalties. See Terms & Conditions for full details.'
  },
  {
    q: 'What events do artists get access to?',
    a: 'Artists may be considered for opportunities such as:',
    bullets: [
      'Performances at REVOLT House (SXSW, Art Basel, and more)',
      'Soundcheck showcases and curated performances',
      'Industry panels and creator activations',
      'Brand partnership opportunities',
      'Media appearances across REVOLT platforms'
    ],
    footnote: 'Access is curated and opportunity-based \u2014 placements depend on timing, fit, and artist momentum.'
  },
  {
    q: 'Can my music chart on Billboard through 440?',
    a: 'Yes. Music distributed through 440 is delivered to Spotify, Apple Music, YouTube Music, TikTok, and other major DSPs \u2014 all eligible for chart reporting when streaming and sales meet the required thresholds.'
  },
  {
    q: 'How soon can I release music after I\u2019m approved?',
    a: 'You can release music 1\u20133 days after you\u2019re onboarded.'
  },
  {
    q: 'What if I need support?',
    a: 'Every artist has access to full customer support for questions or challenges, plus a library of provided resources for additional self-guided help.'
  }];

  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '70px 20px' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>FAQ</div>
      <h2 className="display" style={{ fontSize: 60, lineHeight: 0.86, marginBottom: 30 }}>
        WHAT YOU<br /><span style={{ color: 'var(--accent)' }}>NEED TO KNOW.</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) =>
        <div key={i} style={{ borderBottom: '1px solid var(--hairline-soft)' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '22px 4px', textAlign: 'left', gap: 16
          }}>
              <span style={{ fontFamily: 'var(--body)', fontSize: 22, lineHeight: 1.25, fontWeight: 600, letterSpacing: '-0.015em' }}>
                {it.q}
              </span>
              <span style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: open === i ? 'var(--accent)' : 'transparent',
              color: open === i ? 'var(--bg)' : 'var(--white)',
              border: open === i ? 'none' : '1px solid var(--hairline)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              transform: open === i ? 'rotate(45deg)' : 'rotate(0)'
            }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {open === i &&
          <div style={{ padding: '0 4px 24px' }}>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, margin: 0 }}>
                  {it.a}
                </p>
                {it.bullets && (
                  <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {it.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 12, fontSize: 16, color: 'rgba(255,255,255,0.86)', lineHeight: 1.5 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 9 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {it.footnote && (
                  <p style={{ marginTop: 14, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    {it.footnote}
                  </p>
                )}
              </div>
          }
          </div>
        )}
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────
// Final CTA + footer
// ─────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ padding: '80px 20px', position: 'relative' }}>
      <h2 className="display" style={{ fontSize: 76, lineHeight: 0.85, marginBottom: 22 }}>
        READY TO<br /><span style={{ color: 'var(--accent)' }}>OWN IT?</span>
      </h2>
      <p className="body" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 28 }}>
        Apply in 5 minutes. Approval in 48 hours.
      </p>
      <button className="btn btn-primary btn-full">
        Apply Now
        <span className="arrow"><window.ArrowRight /></span>
      </button>
      <div style={{ marginTop: 14, fontSize: 13, color: 'var(--caption)', textAlign: 'center' }}>
        $10/month · Cancel anytime · Subject to approval
      </div>
    </section>);

}

function Footer() {
  return (
    <footer style={{
      padding: '60px 20px 36px',
      borderTop: '1px solid var(--hairline-soft)',
      marginTop: 20,
      textAlign: 'center'
    }}>
      {/* Aura logo — built-in concentric ring rays */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 -20px -28px' }}>
        <img
          src="assets/logo-440-aura.svg"
          alt="440"
          style={{ width: '100%', maxWidth: 'none', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Contact us + IG */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginBottom: 22 }}>
        <a href="#" style={{ color: 'var(--white)', fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>Contact us</a>
        <a href="#" aria-label="Instagram" style={{
          width: 36, height: 36, borderRadius: 8,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--white)'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', marginBottom: 22 }}>
        © 2026 440 Artists. All rights reserved.
      </div>

      {/* Legal links — wrap nicely on mobile */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        gap: '12px 24px', fontSize: 14, fontWeight: 600
      }}>
        {['Terms of Service', 'Privacy Notice', 'California Notice at Collection', 'Privacy Preferences'].map((l) => (
          <a key={l} href="#" style={{ color: 'var(--white)', textDecoration: 'none' }}>{l}</a>
        ))}
      </div>
    </footer>);

}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: 'var(--caption)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) =>
        <a key={l} href="#" style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>{l}</a>
        )}
      </div>
    </div>);

}

Object.assign(window, { FeaturedArtists, Testimonial, HowItWorks, FAQ, FinalCTA, Footer });