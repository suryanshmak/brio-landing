export default function SceneDisc() {
  return (
    <section id="s-disc" data-vis="disc" data-screen-label="04 Shortlist" style={{ position: 'relative', height: '280vh', background: 'var(--bgC)' }}>
      <div style={{ position: 'sticky', top: '0', height: '100vh', overflow: 'clip' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-8%', bottom: '-20%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(closest-side,var(--g1),transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '9vh', left: '6vw', right: '6vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', zIndex: '5' }}>
          <div>
            <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.26em', color: 'var(--acc-dim)' }}>05 · FOR RECRUITERS</div>
            <h2 data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '790', fontStretch: '111%', fontSize: 'clamp(34px,4.6vw,66px)', lineHeight: '.98', letterSpacing: '-.03em', margin: '12px 0 0' }}>Hear the signal,<br /><span data-ital="" style={{ color: 'var(--acc-hl)' }}>before the résumé.</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: '0' }}>
            <div data-disc="idx" style={{ fontFamily: 'var(--f-mono)', fontSize: '11px', letterSpacing: '.2em', color: 'var(--ink2)', fontVariantNumeric: 'tabular-nums' }}>01 / 04</div>
            <div style={{ position: 'relative', width: '150px', height: '2px', background: 'var(--wash2)' }}>
              <div data-disc="fill" style={{ position: 'absolute', inset: '0', background: 'var(--acc)', transform: 'scaleX(0)', transformOrigin: 'left' }}></div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '0', right: '0', top: '58%', transform: 'translateY(-50%)' }}>
          <div data-disc="rail" style={{ display: 'flex', gap: '26px', padding: '0 6vw', width: 'max-content', willChange: 'transform' }}>
            <div className="disccard" data-disc="card" style={{ width: '480px', borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg,var(--panel1),var(--panel2))', border: '1px solid var(--panelbrd)', boxShadow: '0 40px 90px -50px var(--shadow1)', display: 'flex', flexDirection: 'column', gap: '16px', willChange: 'transform' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'linear-gradient(135deg,var(--av1),var(--av2))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: '0' }}>SK</span>
                <div style={{ flex: '1' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '109%', fontSize: '29px', lineHeight: '1', letterSpacing: '-.02em', color: 'var(--ink)' }}>Sara K.</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.22em', color: 'var(--acc-dim)', marginTop: '6px' }}>TECH LEAD</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '110%', fontSize: '40px', lineHeight: '.85', color: 'var(--acc-hl)', fontVariantNumeric: 'tabular-nums' }}>98</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '4px' }}>FIT</div>
                </div>
              </div>
              <svg viewBox="0 0 600 60" preserveAspectRatio="none" style={{ width: '100%', height: '40px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}><g data-loop="flowx" data-dur="4"><path d="M0,30 C75,6 150,54 225,30 S375,4 450,30 S600,54 675,30 S750,6 825,30" fill="none" style={{ stroke: 'var(--vio)' }} strokeWidth="2.5" strokeLinecap="round" /></g></svg>
              <p style={{ fontSize: '13.5px', color: 'var(--ink2)', margin: '0', lineHeight: '1.55' }}>Top-decile on Substance and Structure. Closed every system-design follow-up un-assisted.</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--acc-dim)', background: 'var(--acc-bg)', border: '1px solid var(--acc-brd)', borderRadius: '7px', padding: '4px 10px', fontWeight: '700' }}>A+</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--ink2)', border: '1px solid var(--line2)', borderRadius: '7px', padding: '4px 10px' }}>TECHNICAL 88</span>
              </div>
            </div>
            <div className="disccard" data-disc="card" style={{ width: '480px', borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg,var(--panel1),var(--panel2))', border: '1px solid var(--panelbrd)', boxShadow: '0 40px 90px -50px var(--shadow1)', display: 'flex', flexDirection: 'column', gap: '16px', willChange: 'transform' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'linear-gradient(135deg,#d97706,#92400e)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: '0' }}>MA</span>
                <div style={{ flex: '1' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '109%', fontSize: '29px', lineHeight: '1', letterSpacing: '-.02em', color: 'var(--ink)' }}>Maya A.</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.22em', color: 'var(--acc-dim)', marginTop: '6px' }}>OWNERSHIP</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '110%', fontSize: '40px', lineHeight: '.85', color: 'var(--acc-hl)', fontVariantNumeric: 'tabular-nums' }}>95</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '4px' }}>FIT</div>
                </div>
              </div>
              <svg viewBox="0 0 600 60" preserveAspectRatio="none" style={{ width: '100%', height: '40px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}><g data-loop="flowx" data-dur="3.4"><path d="M0,30 C75,10 150,50 225,30 S375,2 450,30 S600,50 675,30 S750,10 825,30" fill="none" stroke="#f5a524" strokeWidth="2.5" strokeLinecap="round" /></g></svg>
              <p style={{ fontSize: '13.5px', color: 'var(--ink2)', margin: '0', lineHeight: '1.55' }}>Strongest Composure in the pool, recovered cleanly on every curveball, never froze.</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--acc-dim)', background: 'var(--acc-bg)', border: '1px solid var(--acc-brd)', borderRadius: '7px', padding: '4px 10px', fontWeight: '700' }}>A</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--ink2)', border: '1px solid var(--line2)', borderRadius: '7px', padding: '4px 10px' }}>BEHAVIORAL 86</span>
              </div>
            </div>
            <div className="disccard" data-disc="card" style={{ width: '480px', borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg,var(--panel1),var(--panel2))', border: '1px solid var(--panelbrd)', boxShadow: '0 40px 90px -50px var(--shadow1)', display: 'flex', flexDirection: 'column', gap: '16px', willChange: 'transform' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'linear-gradient(135deg,#0ea5e9,#075985)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: '0' }}>LZ</span>
                <div style={{ flex: '1' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '109%', fontSize: '29px', lineHeight: '1', letterSpacing: '-.02em', color: 'var(--ink)' }}>Lin Z.</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.22em', color: 'var(--acc-dim)', marginTop: '6px' }}>STRUCTURED</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '110%', fontSize: '40px', lineHeight: '.85', color: 'var(--acc-hl)', fontVariantNumeric: 'tabular-nums' }}>91</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink3)', marginTop: '4px' }}>FIT</div>
                </div>
              </div>
              <svg viewBox="0 0 600 60" preserveAspectRatio="none" style={{ width: '100%', height: '40px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}><g data-loop="flowx" data-dur="4.6"><path d="M0,30 C75,16 150,44 225,30 S375,12 450,30 S600,44 675,30 S750,16 825,30" fill="none" style={{ stroke: 'var(--cyn)' }} strokeWidth="2.5" strokeLinecap="round" /></g></svg>
              <p style={{ fontSize: '13.5px', color: 'var(--ink2)', margin: '0', lineHeight: '1.55' }}>Cleanest Clarity score on record, premise to payoff with zero backtracking.</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--acc-dim)', background: 'var(--acc-bg)', border: '1px solid var(--acc-brd)', borderRadius: '7px', padding: '4px 10px', fontWeight: '700' }}>A</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: 'var(--ink2)', border: '1px solid var(--line2)', borderRadius: '7px', padding: '4px 10px' }}>REASONING 83</span>
              </div>
            </div>
            <a className="disccard" data-disc="card" href="#s-end" style={{ width: '400px', borderRadius: '24px', padding: '32px', background: 'var(--acc)', color: 'var(--acc-ink)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px', textDecoration: 'none', boxShadow: '0 40px 110px -44px var(--acc)', willChange: 'transform' }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.24em', opacity: '.75' }}>RECRUITER ACCESS</div>
              <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '800', fontStretch: '110%', fontSize: '38px', lineHeight: '1', letterSpacing: '-.025em' }}>Your shortlist starts here.</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--f-mono)', fontSize: '11px', letterSpacing: '.16em', fontWeight: '700' }}><span>OPEN DISCOVERY</span><span style={{ fontSize: '24px' }}>→</span></div>
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '6vh', left: '0', right: '0', textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.26em', color: 'var(--ink4)' }}>SCROLL · THE SHORTLIST TRACKS SIDEWAYS ▸</div>
      </div>
    </section>
  );
}
