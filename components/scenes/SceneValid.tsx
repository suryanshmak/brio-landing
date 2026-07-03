export default function SceneValid() {
  return (
    <section id="s-valid" data-vis="valid" data-screen-label="05 Validity" style={{ position: 'relative', padding: '20vh 6vw', background: 'var(--bgA)' }}>
      <div data-wipe="" style={{ maxWidth: '1000px', margin: '0 auto', border: '1px solid var(--line)', borderRadius: '28px', padding: 'clamp(36px,5vw,64px)', background: 'linear-gradient(180deg,var(--panel1),var(--panel2))' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', flexWrap: 'wrap' }}>
          <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.26em', color: 'var(--acc-dim)' }}>05 · PROVEN SCORE — PUBLISHED VALIDITY</div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid var(--acc-brd)', background: 'var(--acc-bg)', borderRadius: '999px', padding: '6px 13px', fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--acc-dim)' }}><span data-loop="dotp" data-dur="2" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--acc)' }}></span>LIVE</span>
        </div>
        <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '740', fontStretch: '108%', fontSize: 'clamp(28px,3.9vw,54px)', lineHeight: '1.14', letterSpacing: '-.025em', marginTop: '30px', maxWidth: '24ch', textWrap: 'balance', color: 'var(--ink)' }}>A Brio "A" in Coding, mid-level → <span style={{ color: 'var(--acc-hl)' }}><span data-count="84" data-fmt="pct">84%</span> meet-or-exceed</span> at 90 days.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '26px', marginTop: '24px', fontFamily: 'var(--f-mono)', fontSize: '11px', letterSpacing: '.12em', color: 'var(--ink3)', flexWrap: 'wrap', fontVariantNumeric: 'tabular-nums' }}>
          <span>N = 37</span><span>95% CI 71–92%</span><span>SCORING MODEL V1</span>
          <a href="#s-valid" className="hv-und" style={{ color: 'var(--acc-dim)', textDecoration: 'none', letterSpacing: '.12em' }}>HOW IT'S COMPUTED →</a>
        </div>
        <div id="valcount" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '44px', marginTop: '56px', borderTop: '1px solid var(--line)', paddingTop: '44px' }}>
          <div>
            <div data-count="12480" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '111%', fontSize: 'clamp(40px,4.6vw,60px)', lineHeight: '.9', letterSpacing: '-.03em', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>12,480</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '12px' }}>UN-ASSISTED INTERVIEWS SCORED</div>
          </div>
          <div>
            <div data-count="11" data-fmt="plus" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '111%', fontSize: 'clamp(40px,4.6vw,60px)', lineHeight: '.9', letterSpacing: '-.03em', color: 'var(--acc-hl)', fontVariantNumeric: 'tabular-nums' }}>+11</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '12px' }}>MEDIAN READINESS LIFT, PTS</div>
          </div>
          <div>
            <div data-count="37" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '111%', fontSize: 'clamp(40px,4.6vw,60px)', lineHeight: '.9', letterSpacing: '-.03em', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>37</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '12px' }}>HIRING TEAMS DISCOVERING</div>
          </div>
        </div>
      </div>
    </section>
  );
}
