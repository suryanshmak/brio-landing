export default function SceneEnd() {
  return (
    <section id="s-end" data-vis="end" data-screen-label="06 Finale" style={{ position: 'relative', minHeight: '105vh', overflow: 'clip', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(1100px 800px at 50% 110%,var(--bgB),var(--bgA) 70%)' }}>
      <canvas data-stars="end" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}></canvas>
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: 'min(560px,92vw)', aspectRatio: '1', transform: 'translate(-50%,-52%)', opacity: '.4' }}>
        <canvas data-orb="end" data-rb=".34" data-fade=".48,.7" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}></canvas>
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '46%', width: '0', height: '0', zIndex: '1', pointerEvents: 'none' }}>
        <span data-loop="ripple" data-dur="5.5" data-ph="0" style={{ position: 'absolute', left: '-30vmin', top: '-30vmin', width: '60vmin', height: '60vmin', borderRadius: '50%', border: '1px solid var(--acc-brd)', opacity: '0', willChange: 'transform,opacity' }}></span>
        <span data-loop="ripple" data-dur="5.5" data-ph="1.83" style={{ position: 'absolute', left: '-30vmin', top: '-30vmin', width: '60vmin', height: '60vmin', borderRadius: '50%', border: '1px solid var(--acc-brd)', opacity: '0', willChange: 'transform,opacity' }}></span>
        <span data-loop="ripple" data-dur="5.5" data-ph="3.66" style={{ position: 'absolute', left: '-30vmin', top: '-30vmin', width: '60vmin', height: '60vmin', borderRadius: '50%', border: '1px solid var(--acc-brd)', opacity: '0', willChange: 'transform,opacity' }}></span>
      </div>
      <div style={{ position: 'relative', zIndex: '2', textAlign: 'center', padding: '0 6vw' }}>
        <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.3em', color: 'var(--acc-dim)' }}>06 · READY WHEN YOU ARE</div>
        <h2 data-kin="end" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '113%', fontSize: 'clamp(60px,10.5vw,164px)', lineHeight: '.92', letterSpacing: '-.04em', margin: '22px 0 0', textWrap: 'balance', color: 'var(--ink)' }}>Say it <span data-ital="" data-loop="tglow" data-dur="5" style={{ color: 'var(--acc-hl)' }}>out loud.</span></h2>
        <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.22em', color: 'var(--ink3)', marginTop: '26px' }}>FREE DIAGNOSTIC · 10 MINUTES · NO RÉSUMÉ</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '34px', flexWrap: 'wrap' }}>
          <a href="#s-app" data-mag="" className="hv-glow-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--acc)', color: 'var(--acc-ink)', borderRadius: '999px', padding: '17px 32px', fontWeight: '700', fontSize: '15.5px', textDecoration: 'none', boxShadow: '0 0 54px -12px var(--acc)' }}>Start free →</a>
          <a href="#s-disc" className="hv-brd" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid var(--line2)', background: 'var(--wash)', color: 'var(--ink)', borderRadius: '999px', padding: '16px 26px', fontWeight: '600', fontSize: '14.5px', textDecoration: 'none' }}>For recruiters</a>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', borderTop: '1px solid var(--line)', padding: '18px 6vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.16em', color: 'var(--ink3)' }}>
        <span>© 2026 BRIO — PROOF, OUT LOUD</span>
        <span style={{ display: 'flex', gap: '22px' }}><a href="#s-app" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none' }}>BRIO.SO</a><a href="#s-app" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none' }}>PRIVACY</a><a href="#s-app" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none' }}>SECURITY</a><a href="#s-app" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none' }}>@BRIO</a></span>
      </div>
    </section>
  );
}
