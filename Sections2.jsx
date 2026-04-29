// Sections2.jsx — middle of page (offer, comparison, REVOLT, artists)

// ─────────────────────────────────────────────────────────
// What you get — 4 cards, all matching the hero "250+ DSPs" treatment
// ─────────────────────────────────────────────────────────
function WhatYouGetHeader() {
  return (
    <>
      <h2 className="display" style={{
        fontSize: 56, lineHeight: 0.86, marginBottom: 14, textAlign: 'center',
      }}>
        $10/MONTH.<br/><span style={{ color: 'var(--accent)' }}>THAT'S IT.</span>
      </h2>
      <p className="body" style={{
        color: 'rgba(255,255,255,0.78)', marginBottom: 36, textAlign: 'center',
        maxWidth: 340, marginLeft: 'auto', marginRight: 'auto',
      }}>
        Costs less than your streaming subscription. Does more than most labels.
      </p>
    </>
  );
}

function WhatYouGet() {
  return (
    <section style={{ padding: '72px 20px 64px', position: 'relative' }}>
      <WhatYouGetHeader />
      <WhatYouGetCards />

      <div style={{ marginTop: 40 }}>
        <button className="btn btn-primary btn-full">
          Start for $10/month
          <span className="arrow"><window.ArrowRight /></span>
        </button>
        <div style={{ marginTop: 14, fontSize: 13, color: 'var(--caption)', textAlign: 'center' }}>
          Approval required · Cancel anytime
        </div>
      </div>
    </section>
  );
}

// All cards use identical chrome — gradient bg, accent border, soft glow.
// Centered layout: eyebrow → big display title → body copy.
function WhatYouGetCards() {
  const cards = [
    { eyebrow: 'Reach',     title: '250+ DSPs',                        copy: 'More platforms. More reach. More ways for the world to find you.' },
    { eyebrow: 'Royalty',   title: '90% Artist\nRoyalty Payout',       copy: 'Keep 90% of your royalties. Own your masters. Always.' },
    { eyebrow: 'Support',   title: 'Full Customer\nSupport',           copy: 'Real humans, real answers. Our team has your back 7 days a week so you can focus on the music, not the problems.' },
    { eyebrow: 'Insight',   title: 'Analytics',                        copy: 'Real-time dashboard. Every stream, every market, every move, tracked and actionable.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {cards.map((c, i) => (
        <div key={i} style={{
          background: 'linear-gradient(180deg, #1a1255, #0e0838)',
          border: '2px solid rgba(0,227,135,0.3)',
          borderRadius: 24,
          padding: '36px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Soft accent glow — alternates corner per card for subtle rhythm */}
          <div style={{
            position: 'absolute',
            top: i % 2 === 0 ? -40 : 'auto',
            bottom: i % 2 === 0 ? 'auto' : -40,
            right: i % 2 === 0 ? -40 : 'auto',
            left: i % 2 === 0 ? 'auto' : -40,
            width: 160, height: 160, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,227,135,0.18), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent)',
              textTransform: 'uppercase', marginBottom: 14, fontWeight: 600,
            }}>{c.eyebrow}</div>
            <h3 className="display" style={{
              fontSize: 50, lineHeight: 0.88, marginBottom: 16,
              whiteSpace: 'pre-line', textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>{c.title}</h3>
            <p style={{
              color: '#9eb5ff', fontSize: 16, lineHeight: 1.5, margin: 0,
              maxWidth: 280, marginLeft: 'auto', marginRight: 'auto',
            }}>{c.copy}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Comparison — 440 vs others. Hybrid of Figma + cleaner mobile rhythm.
// Three cell states: checkmark, X, or text value.
// ─────────────────────────────────────────────────────────
function Comparison() {
  const Check = () => (
    <div style={{
      width: 26, height: 26, borderRadius: '50%',
      background: 'var(--accent)', color: '#0a0431',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, fontWeight: 800, lineHeight: 1,
    }}>✓</div>
  );

  const Cross = () => (
    <div style={{
      width: 22, height: 22,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: '#ff5b6e', fontSize: 18, fontWeight: 700, lineHeight: 1,
      opacity: 0.85,
    }}>✕</div>
  );

  const rows = [
    { label: 'Royalty split in\nartist\u2019s favor', a: '90%',  b: '80–100%' },
    { label: 'Live event activations*',             a: 'check',   b: 'cross' },
    { label: 'Sync licensing pipeline*',            a: 'check',   b: 'Limited' },
    { label: 'Brand partnership\npitching*',        a: 'check',   b: 'Limited' },
    { label: 'Dedicated A&R team*',                 a: 'check',   b: 'Limited' },
    { label: 'Monthly payouts',                     a: 'check',   b: 'Quarterly' },
  ];

  const renderCell = (val) => {
    if (val === 'check') return <Check />;
    if (val === 'cross') return <Cross />;
    return <span style={{ fontSize: 16, fontWeight: 700 }}>{val}</span>;
  };

  return (
    <section style={{ padding: '80px 20px', background: 'linear-gradient(180deg, transparent, rgba(0,227,135,0.04) 50%, transparent)' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>The Difference</div>

      <h2 className="display" style={{ fontSize: 52, lineHeight: 0.92, marginBottom: 20 }}>
        THE ONLY DISTRIBUTOR<br/>WITH A <span style={{ color: 'var(--accent)' }}>MEDIA<br/>ECOSYSTEM</span> BEHIND IT.
      </h2>
      <p className="body" style={{
        color: 'rgba(255,255,255,0.78)', fontSize: 16, lineHeight: 1.5,
        marginBottom: 36, maxWidth: 360,
      }}>
        Every other platform stops at distribution. We take it further. Here's what separates 440 from the rest.
      </p>

      {/* Table container with rounded chrome */}
      <div style={{
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 16,
        overflow: 'hidden',
      }}>
        {/* Header row — 440 column gets the green tint background */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr',
          alignItems: 'stretch',
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}>
          <div style={{
            padding: '16px 14px',
            fontSize: 14, color: 'var(--caption)',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            display: 'flex', alignItems: 'center',
            fontWeight: 600, lineHeight: 1.3,
          }}>
            What you get
          </div>
          <div style={{
            padding: '16px 8px',
            background: 'rgba(0,227,135,0.10)',
            borderLeft: '1px solid rgba(255,255,255,0.12)',
            borderRight: '1px solid rgba(255,255,255,0.12)',
            textAlign: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div className="display" style={{ fontSize: 32, color: 'var(--accent)', lineHeight: 1 }}>440</div>
          </div>
          <div style={{
            padding: '16px 8px',
            textAlign: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              fontSize: 14, color: 'rgba(255,255,255,0.65)',
              fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>Others</div>
          </div>
        </div>

        {/* Data rows */}
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr',
            alignItems: 'stretch',
            borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              padding: '20px 14px',
              fontSize: 16, lineHeight: 1.35,
              color: 'rgba(255,255,255,0.9)',
              whiteSpace: 'pre-line',
              display: 'flex', alignItems: 'center',
              fontWeight: 500,
            }}>{r.label}</div>
            <div style={{
              padding: '20px 8px',
              background: 'rgba(0,227,135,0.06)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'center',
              color: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{renderCell(r.a)}</div>
            <div style={{
              padding: '20px 8px',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{renderCell(r.b)}</div>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: 15, color: 'var(--caption)',
        marginTop: 18, textAlign: 'center', fontStyle: 'italic',
      }}>
        *Paid upgrade based on eligibility.
      </p>

      <p style={{
        fontSize: 15, color: 'rgba(255,255,255,0.65)',
        marginTop: 24, textAlign: 'center', lineHeight: 1.5,
        padding: '0 8px',
      }}>
        Plus all the basics: <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>distribution to 250+ DSPs</strong>, <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>master ownership</strong>, and <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>real-time analytics</strong>.
      </p>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// REVOLT ecosystem — network diagram with 440 at center
// ─────────────────────────────────────────────────────────
function RevoltEcosystem() {
  const BRANDS = [
    { label: 'REVOLT',        logo: 'https://d3bfvpwvj4qqsk.cloudfront.net/static/media/Revolt.00bf8de9a9ad9f9e7245414278748632.svg',     desc: 'The network that built the culture. 440 gets your music on linear TV, digital, social, and editorial.' },
    { label: 'RCN',           logo: 'https://d3bfvpwvj4qqsk.cloudfront.net/static/media/RCN.cd525c2ea9ba1d6721f4d2f08fad93ab.svg',         desc: 'Your music gets first look on the REVOLT Creator Network — one of the most-listened-to Black podcast networks.' },
    { label: 'RAP-UP',        logo: 'https://d3bfvpwvj4qqsk.cloudfront.net/static/media/Rapup.cebe3022679458d80af783a21d948529.svg',       desc: 'Millions of eyes on social and YouTube. 440 gets you in the room.' },
    { label: 'REVOLT SPORTS', logo: 'https://d3bfvpwvj4qqsk.cloudfront.net/static/media/Revolt_sports.6570fcfc76fc8b365dc96d64286882f1.svg', desc: 'Where hip-hop meets sports culture. 440 gets you in front of the audience that drives both.' },
    { label: '3BLACKDOT',     logo: 'https://d3bfvpwvj4qqsk.cloudfront.net/static/media/3blackDot.e517ea6cb999f1e8ba65983c71e17b89.svg',   desc: 'Plug your music into gaming, where Gen Z actually spends its time.' },
  ];

  // Pentagonal positions — viewBox sized to fit larger logos + labels
  const center = { x: 200, y: 220 };
  const radius = 150;
  const angles = [-90, -18, 54, 126, 198];
  const positions = angles.map(a => {
    const rad = (a * Math.PI) / 180;
    return {
      x: center.x + radius * Math.cos(rad),
      y: center.y + radius * Math.sin(rad),
    };
  });

  return (
    <section style={{ padding: '80px 20px', position: 'relative' }}>
      <div className="eyebrow" style={{ color: 'var(--caption)', marginBottom: 16 }}>The 440 advantage</div>
      <h2 className="display" style={{ fontSize: 60, lineHeight: 0.86, marginBottom: 20 }}>
        A WHOLE<br/>ECOSYSTEM<br/><span style={{ color: 'var(--accent)' }}>BEHIND YOU.</span>
      </h2>
      <p className="body" style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 32, fontSize: 17, lineHeight: 1.5 }}>
        440 is part of Offscript Worldwide, a media network reaching millions. Imagine that whole machine behind your next release.
      </p>

      {/* Network diagram */}
      <div style={{ position: 'relative', marginBottom: 40 }}>
        <svg viewBox="0 -25 400 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connecting lines */}
          {positions.map((p, i) => (
            <line key={`line-${i}`}
              x1={center.x} y1={center.y} x2={p.x} y2={p.y}
              stroke="rgba(0,227,135,0.35)" strokeWidth="1.2" strokeDasharray="2 4"
            />
          ))}

          {/* Pulsing dots traveling along each line */}
          {positions.map((p, i) => (
            <circle key={`pulse-${i}`} r="3" fill="var(--accent)" opacity="0.9">
              <animate attributeName="cx" from={center.x} to={p.x} dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="cy" from={center.y} to={p.y} dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Brand nodes — real logos pulled from the live CDN */}
          {BRANDS.map((b, i) => {
            const p = positions[i];
            const r = 38; // node radius (76px diameter)
            return (
              <g key={`node-${i}`}>
                <circle cx={p.x} cy={p.y} r={r + 6} fill="none" stroke="rgba(0,227,135,0.18)" strokeWidth="1" />
                <image
                  href={b.logo}
                  xlinkHref={b.logo}
                  x={p.x - r} y={p.y - r}
                  width={r * 2} height={r * 2}
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            );
          })}

          {/* 440 hub */}
          <g filter="url(#hubGlow)">
            <circle cx={center.x} cy={center.y} r="54" fill="var(--accent)" />
            <text x={center.x} y={center.y + 3} fill="#0a0431"
              fontFamily="var(--display)" fontWeight="800" fontSize="36"
              textAnchor="middle" dominantBaseline="middle" letterSpacing="-0.02em">440</text>
          </g>

          {/* Brand labels — top node label sits ABOVE its node, others BELOW */}
          {BRANDS.map((b, i) => {
            const p = positions[i];
            const labelOffsetY = i === 0 ? -72 : 72;
            return (
              <text key={`label-${i}`} x={p.x} y={p.y + labelOffsetY}
                fill="rgba(255,255,255,0.92)"
                fontFamily="var(--display)" fontWeight="700" fontSize="26"
                textAnchor="middle" dominantBaseline="middle"
                letterSpacing="0.03em">
                {b.label}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Description list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {BRANDS.map((b, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 16,
            paddingBottom: 20,
            borderBottom: i === BRANDS.length - 1 ? 'none' : '1px solid var(--hairline-soft)',
          }}>
            <img
              src={b.logo}
              alt={b.label + ' logo'}
              style={{
                width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
                display: 'block',
              }}
            />
            <div style={{ flex: 1, paddingTop: 4 }}>
              <div style={{
                fontFamily: 'var(--display)', fontWeight: 700,
                fontSize: 26, lineHeight: 1, marginBottom: 8,
                textTransform: 'uppercase', letterSpacing: '0.01em',
              }}>{b.label}</div>
              <div style={{
                fontSize: 18, lineHeight: 1.5,
                color: 'rgba(255,255,255,0.78)',
              }}>{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { WhatYouGet, Comparison, RevoltEcosystem });
