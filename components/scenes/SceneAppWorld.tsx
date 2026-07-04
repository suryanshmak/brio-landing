export default function SceneAppWorld() {
  return (
    <>
      {/* THE ROOM */}
      <div data-z="world" style={{ position: 'absolute', inset: '0', willChange: 'transform' }}>
        <div data-z="lights" aria-hidden="true" style={{ position: 'absolute', inset: '0' }}>
          <canvas data-stars="app" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}></canvas>
          <div style={{ position: 'absolute', left: '-12%', top: '-18%', width: '62vw', height: '62vw', borderRadius: '50%', background: 'radial-gradient(closest-side,var(--g1),transparent 70%)' }}></div>
          <div style={{ position: 'absolute', right: '-14%', top: '20%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(closest-side,var(--g2),transparent 70%)' }}></div>
          <div style={{ position: 'absolute', left: '8%', top: '14%', width: '2px', height: '26vh', background: 'linear-gradient(180deg,transparent,var(--line2),transparent)' }}></div>
          <div style={{ position: 'absolute', left: '11%', top: '18%', width: '2px', height: '18vh', background: 'linear-gradient(180deg,transparent,var(--line),transparent)' }}></div>
          <div style={{ position: 'absolute', right: '9%', top: '12%', width: '22vh', height: '30vh', border: '1px solid var(--line)', borderRadius: '14px', opacity: '.5', background: 'linear-gradient(200deg,var(--wash),transparent 60%)' }}></div>
          <div style={{ position: 'absolute', right: '13%', top: '16%', width: '14vh', height: '2px', background: 'linear-gradient(90deg,transparent,var(--line2),transparent)' }}></div>
          <div data-loop="sweep" data-dur="13" aria-hidden="true" style={{ position: 'absolute', top: '-20%', bottom: '-20%', left: '0', width: '30%', background: 'linear-gradient(100deg,transparent,var(--wash2) 50%,transparent)', filter: 'blur(10px)', transform: 'translateX(-30vw)', willChange: 'transform' }}></div>
        </div>

        <div data-z="head" id="zhead" style={{ position: 'absolute', left: '0', right: '0', top: '11vh', textAlign: 'center', zIndex: '3', padding: '0 6vw' }}>
          <div className="ld" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid var(--acc-brd)', background: 'var(--acc-bg)', borderRadius: '999px', padding: '7px 14px', marginBottom: '20px' }}>
            <span data-loop="dotp" data-dur="2.2" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--acc)' }}></span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.22em', color: 'var(--acc-dim)' }}>VOICE-FIRST · VERIFIED · LIVE</span>
          </div>
          <h1 data-disp="" data-kin="hero" className="ld" data-d="1" style={{ fontFamily: 'var(--f-disp)', fontWeight: '800', fontStretch: '113%', fontSize: 'clamp(40px,5.6vw,86px)', lineHeight: '.94', letterSpacing: '-.035em', margin: '0 auto', maxWidth: '13ch', textWrap: 'balance' }}>Prove you're ready, <span data-ital="" style={{ color: 'var(--acc-hl)' }}>out loud.</span></h1>
          <div className="ld" data-d="2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '13px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href="#s-cred" data-mag="" className="hv-glow-2" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--acc)', color: 'var(--acc-ink)', borderRadius: '999px', padding: '14px 26px', fontWeight: '700', fontSize: '14.5px', textDecoration: 'none', boxShadow: '0 0 44px -12px var(--acc)' }}>Start your first interview →</a>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.18em', color: 'var(--ink3)' }}>FREE · 10 MIN · NO RÉSUMÉ</span>
          </div>
        </div>

        {/* LAPTOP */}
        <div id="zlap" data-z="lap" style={{ position: 'absolute', left: '50%', top: '56.5%', transform: 'translate(-50%,-50%)', width: 'min(880px,74vw,108vh)', zIndex: '2', perspective: '1400px' }}>
          <div data-z="chassis" style={{ position: 'relative', borderRadius: '22px', padding: '14px 14px 30px', background: 'linear-gradient(180deg,#2a3350,#131a2e 60%,#0b1020)', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 60px 120px -40px rgba(0,0,0,.75),0 4px 18px -6px rgba(0,0,0,.5)', willChange: 'transform', transformStyle: 'preserve-3d' }}>
            <div data-z="screen" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', background: '#05070f', aspectRatio: '16/10', border: '1px solid rgba(0,0,0,.6)' }}>
              <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '54%', width: '70%', aspectRatio: '1', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(43,98,232,.3),transparent 65%)' }}></div>
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: 'radial-gradient(circle at 32% 28%,var(--logo1),var(--logo2) 62%,var(--logo3))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '9px' }}>b</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.2em', color: '#93a5d6' }}>BRIO · LIVE INTERVIEW</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.14em', color: 'var(--zacc)' }}><span data-loop="dotp" data-dur="1.4" style={{ display: 'inline-block' }}>●</span> <span data-roomclock="">REC 00:07:42</span></span>
              </div>
              <canvas data-orb="mini" data-cols="z" data-rb=".2" data-fade=".3,.42" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '.9' }}></canvas>
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '10px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.24em', color: '#93a5d6' }}>SYSTEM DESIGN · UN-ASSISTED · CAMERA ON</div>
              </div>
              <div data-z="glare" aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(118deg,transparent 30%,rgba(255,255,255,.09) 42%,rgba(255,255,255,.02) 50%,transparent 62%)', pointerEvents: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', bottom: '9px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.3em', color: '#5a6488' }}>BRIO</div>
          </div>
          <div style={{ margin: '0 auto', width: '26%', height: '14px', background: 'linear-gradient(180deg,#0e1426,#070b16)', borderRadius: '0 0 10px 10px', border: '1px solid rgba(255,255,255,.07)', borderTop: 'none' }}></div>
          <div style={{ margin: '-2px auto 0', width: '40%', height: '7px', background: 'linear-gradient(180deg,#131a2e,#0a0f1e)', borderRadius: '6px' }}></div>
          <div aria-hidden="true" style={{ margin: '26px auto 0', width: '78%', height: '34px', borderRadius: '50%', background: 'radial-gradient(ellipse,var(--shadow1),transparent 70%)', opacity: '.6' }}></div>
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '16vh', background: 'linear-gradient(180deg,transparent,var(--wash2))' }}></div>
      </div>

      {/* floating stat card */}
      <div id="zstat" data-z="stat" style={{ position: 'absolute', right: '7vw', top: '24vh', zIndex: '4' }}>
        <div data-loop="floaty" data-dur="7" style={{ backdropFilter: 'blur(16px) saturate(1.3)', background: 'var(--glass)', border: '1px solid var(--line2)', borderRadius: '18px', padding: '14px 16px', width: '196px', boxShadow: '0 30px 70px -30px var(--shadow1)' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.18em', color: 'var(--ink3)' }}>LIVE READINESS</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
            <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '800', fontStretch: '110%', fontSize: '40px', lineHeight: '.9', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>74</span>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--acc-dim)' }}>▲ +6</span>
          </div>
          <svg viewBox="0 0 150 40" width="160" height="38" preserveAspectRatio="none" style={{ marginTop: '7px', overflow: 'visible', display: 'block' }}>
            <defs><linearGradient id="spk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{ stopColor: 'var(--vio)' }} stopOpacity=".3" /><stop offset="1" style={{ stopColor: 'var(--vio)' }} stopOpacity="0" /></linearGradient></defs>
            <path d="M0,35.4 25,30.7 50,32.3 75,23 100,18.4 125,15.3 150,10.6 150,40 0,40Z" fill="url(#spk)" />
            <polyline points="0,35.4 25,30.7 50,32.3 75,23 100,18.4 125,15.3 150,10.6" fill="none" style={{ stroke: 'var(--vio)' }} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <circle cx="150" cy="10.6" r="3" fill="var(--acc)" />
          </svg>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.1em', color: 'var(--ink3)', marginTop: '7px' }}>BACKEND · STRIPE</div>
        </div>
      </div>

      {/* marquee */}
      <div data-z="marq" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', borderTop: '1px solid var(--line)', padding: '13px 0', overflow: 'clip', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)' }}>
        <div data-loop="marq" data-dur="30" style={{ display: 'flex', width: 'max-content', whiteSpace: 'nowrap', willChange: 'transform' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '38px', paddingRight: '38px' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.22em', color: 'var(--acc-dim)' }}>DEMONSTRATED SIGNAL FOR</span>
            <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Stripe</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Google</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Meta</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Airbnb</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Lattice</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Razorpay</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Ramp</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span>
          </div>
          <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '38px', paddingRight: '38px' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.22em', color: 'var(--acc-dim)' }}>DEMONSTRATED SIGNAL FOR</span>
            <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Stripe</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Google</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Meta</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Airbnb</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Lattice</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Razorpay</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span><span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '600', fontStretch: '108%', fontSize: '20px', color: 'var(--ink3)' }}>Ramp</span><span style={{ color: 'var(--acc-dim)', opacity: '.6' }}>✦</span>
          </div>
        </div>
      </div>

      <div data-z="cue" style={{ position: 'absolute', bottom: 'max(8vh,62px)', left: '50%', transform: 'translateX(-50%)', zIndex: '6', fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.3em', color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--glass)', backdropFilter: 'blur(10px)', border: '1px solid var(--line)', borderRadius: '999px', padding: '9px 18px' }}>
        <span data-loop="dotp" data-dur="1.8" style={{ display: 'inline-block' }}>▼</span> SCROLL · ENTER THE INTERVIEW
      </div>
    </>
  )
}
