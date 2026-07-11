export default function SceneCred() {
  return (
    <section id="s-cred" data-vis="cred" data-screen-label="03 Credential" style={{ position: 'relative', overflow: 'clip', padding: '20vh 6vw', background: 'radial-gradient(900px 700px at 80% -8%,var(--g1),transparent 60%),var(--bgC)' }}>
      {/* the signal ribbon — the spoken waveform from the previous scene
          flows down and hands itself to the credential */}
      <svg aria-hidden="true" viewBox="0 0 1200 700" preserveAspectRatio="none" style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '58%', pointerEvents: 'none', overflow: 'visible' }}>
        <defs>
          <linearGradient id="ribg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--vio)', stopOpacity: '0' }} />
            <stop offset=".35" style={{ stopColor: 'var(--vio)', stopOpacity: '.7' }} />
            <stop offset="1" style={{ stopColor: 'var(--acc)', stopOpacity: '.9' }} />
          </linearGradient>
        </defs>
        <path data-draw="" d="M 150,-10 C 250,170 430,140 560,280 C 665,395 780,420 910,462 C 1000,491 1058,548 1082,660" fill="none" stroke="url(#ribg)" strokeWidth="1.6" strokeLinecap="round" opacity=".6" />
      </svg>
      <div id="credgrid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '6vw', alignItems: 'center', maxWidth: '1340px', margin: '0 auto' }}>
        <div>
          <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.26em', color: 'var(--acc-dim)' }}>04 · THE CREDENTIAL</div>
          <h2 data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '790', fontStretch: '111%', fontSize: 'clamp(42px,5.6vw,90px)', lineHeight: '.96', letterSpacing: '-.033em', margin: '16px 0 0', textWrap: 'balance' }}>Pass once. <span data-ital="" style={{ color: 'var(--acc-hl)' }}>Carry the proof</span> anywhere.</h2>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: '1.55', color: 'var(--ink2)', margin: '24px 0 0', maxWidth: '46ch' }}>One un-assisted, on-camera assessment becomes a shareable, verifiable credential, the same signal recruiters discover you by. No grind, no gaming.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="#s-end" data-mag="" className="hv-glow-3" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--acc)', color: 'var(--acc-ink)', borderRadius: '999px', padding: '15px 26px', fontWeight: '700', fontSize: '14.5px', textDecoration: 'none', boxShadow: '0 0 40px -12px var(--acc)' }}>Earn your credential →</a>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--ink3)' }}>UN-ASSISTED · ON CAMERA · ONE SITTING</span>
          </div>
        </div>
        <div style={{ justifySelf: 'center' }}>
          <div data-tilt="" style={{ perspective: '1200px' }}>
            <div data-tiltcard="" style={{ position: 'relative', overflow: 'hidden', width: 'min(460px,88vw)', borderRadius: '26px', padding: '32px', background: 'linear-gradient(150deg,var(--card1),var(--card2) 75%)', border: '1px solid var(--cardbrd)', boxShadow: '0 70px 140px -50px var(--cardglow)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', bottom: '-10%', right: '22%', width: '56px', background: 'linear-gradient(180deg,var(--tint2),var(--g2),var(--acc-bg))', transform: 'skewX(-12deg)', opacity: '.55', pointerEvents: 'none' }}></div>
              <div data-sheen="" aria-hidden="true" style={{ position: 'absolute', inset: '-40%', background: 'linear-gradient(115deg,transparent 43%,rgba(255,255,255,.13) 50%,transparent 57%)', pointerEvents: 'none', willChange: 'transform' }}></div>
              <div className="cred-foil" aria-hidden="true"></div>
              <div className="cred-glare" aria-hidden="true"></div>
              <div data-loop="scanY" data-dur="7" aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '36px', background: 'linear-gradient(180deg,transparent,color-mix(in srgb,var(--acc) 14%,transparent),transparent)', opacity: '0', pointerEvents: 'none', willChange: 'transform,opacity' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.2em', color: 'var(--acc)' }}>BRIO · VERIFIED CREDENTIAL</div>
                <div style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'radial-gradient(circle at 32% 28%,var(--logo1),var(--logo2) 62%,var(--logo3))' }}></div>
              </div>
              <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '770', fontStretch: '110%', fontSize: '34px', color: '#fff', marginTop: '28px', lineHeight: '1', letterSpacing: '-.02em' }}>Aarav Mehta</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: '#9fb0da', marginTop: '8px', letterSpacing: '.08em' }}>BACKEND ENGINEER · MID-LEVEL · TARGET STRIPE</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
                  <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '830', fontStretch: '112%', fontSize: '84px', lineHeight: '.74', color: 'var(--vio)', letterSpacing: '-.03em' }}>84</span>
                  <div style={{ paddingBottom: '7px' }}>
                    <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '770', fontSize: '31px', color: 'var(--acc)', lineHeight: '1' }}>A</div>
                    <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.16em', color: '#9fb0da' }}>PROVEN SCORE</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '34px', paddingBottom: '4px' }}>
                  <span data-loop="eq" data-dur="1.5" data-ph="0" style={{ width: '4px', background: '#9b7bf8', borderRadius: '2px', height: '80%', transformOrigin: 'bottom' }}></span>
                  <span data-loop="eq" data-dur="1.5" data-ph=".15" style={{ width: '4px', background: '#2ad4ee', borderRadius: '2px', height: '68%', transformOrigin: 'bottom' }}></span>
                  <span data-loop="eq" data-dur="1.5" data-ph=".3" style={{ width: '4px', background: '#8b5cf6', borderRadius: '2px', height: '76%', transformOrigin: 'bottom' }}></span>
                  <span data-loop="eq" data-dur="1.5" data-ph=".45" style={{ width: '4px', background: '#f5a524', borderRadius: '2px', height: '84%', transformOrigin: 'bottom' }}></span>
                </div>
              </div>
              <div style={{ marginTop: '26px', borderTop: '1px solid var(--cardline)', paddingTop: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: '#7d8bb8', letterSpacing: '.06em' }}>UN-ASSISTED · ON CAMERA</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: '#7d8bb8' }}>brio.so/p/aarav · ID 7F4A</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.26em', color: 'var(--ink4)', marginTop: '20px' }}>HOVER · INSPECT THE CREDENTIAL</div>
        </div>
      </div>
    </section>
  );
}
