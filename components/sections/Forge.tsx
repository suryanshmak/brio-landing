export default function Forge() {
  return (
    <section id="forge" style={{ position: 'relative', height: '560vh', background: '#0a0713' }}>
      <div className="forgepin" style={{ position: 'sticky', top: '0', height: '100vh', overflow: 'clip', background: 'radial-gradient(1200px 840px at 50% 8%,#180f3a,#0a0713 74%)', color: '#f3efff' }}>

        <div data-forge="haloV" aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '46%', width: '74vw', height: '74vw', maxWidth: '960px', maxHeight: '960px', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,58,237,.30),transparent 62%)', filter: 'blur(38px)', pointerEvents: 'none' }}></div>
        <div data-forge="haloL" aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '52%', width: '58vw', height: '58vw', maxWidth: '760px', maxHeight: '760px', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(101,163,13,.22),transparent 60%)', filter: 'blur(44px)', pointerEvents: 'none', opacity: '0' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '0', pointerEvents: 'none', background: 'radial-gradient(125% 95% at 50% 50%,transparent 50%,rgba(8,5,17,.6))' }}></div>

        <div style={{ position: 'absolute', top: '8.5vh', left: '0', right: '0', textAlign: 'center', zIndex: '9', padding: '0 6vw' }}>
          <div className="mono" data-forge="eyebrow" style={{ fontSize: '12px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c9f24d', minHeight: '1.2em' }}>Step one · speak</div>
          <div className="serif" data-forge="caption" style={{ fontSize: 'clamp(28px,3.7vw,52px)', lineHeight: '1.03', margin: '12px auto 0', color: '#f7f4ff', maxWidth: '20ch', minHeight: '1.1em' }}>You speak for ten minutes.</div>
        </div>

        {/* ACT 1 */}
        <div data-forge="talk" style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', willChange: 'transform,opacity' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'min(660px,86vw)', height: '320px' }}>
            <div data-forge="sonar" aria-hidden="true" style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1px solid rgba(155,123,248,.45)', animation: 'sonar 3.2s ease-out infinite' }}></div>
            <div data-forge="sonar" aria-hidden="true" style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1px solid rgba(155,123,248,.45)', animation: 'sonar 3.2s ease-out infinite', animationDelay: '1.07s' }}></div>
            <div data-forge="sonar" aria-hidden="true" style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1px solid rgba(155,123,248,.45)', animation: 'sonar 3.2s ease-out infinite', animationDelay: '2.14s' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', width: '128px', height: '128px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,77,.85),rgba(124,58,237,.42) 54%,transparent 72%)', filter: 'blur(7px)', zIndex: '1', animation: 'floaty 3s ease-in-out infinite' }}></div>
            <div data-forge="bars" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '5px', height: '208px', zIndex: '2' }}></div>
          </div>
        </div>

        {/* ACT 2 */}
        <div data-forge="chan" style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: '0', willChange: 'transform,opacity' }}>
          <div data-forge="rows" style={{ position: 'relative', width: 'min(680px,87vw)', display: 'flex', flexDirection: 'column', gap: '17px' }}>
            <div data-forge="scan" aria-hidden="true" style={{ position: 'absolute', left: '-3%', right: '-3%', top: '-6px', height: '2px', background: 'linear-gradient(90deg,transparent,#c9f24d,transparent)', boxShadow: '0 0 16px 2px rgba(201,242,77,.55)', opacity: '0', zIndex: '4' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div className="mono" style={{ width: '152px', fontSize: '12px', color: '#c4bee0', textAlign: 'right', flexShrink: '0' }}>Problem Reading</div><div style={{ position: 'relative', flex: '1', height: '13px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div data-forge-fill data-target="78" style={{ height: '100%', width: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#9b7bf8,#7c3aed)' }}></div><div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '70%', width: '2px', background: 'rgba(255,255,255,.5)', zIndex: '2' }}></div></div><div data-forge-num data-target="78" className="serif" style={{ width: '46px', fontSize: '26px', color: '#fff', textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>0</div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div className="mono" style={{ width: '152px', fontSize: '12px', color: '#c4bee0', textAlign: 'right', flexShrink: '0' }}>Reasoning Clarity</div><div style={{ position: 'relative', flex: '1', height: '13px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div data-forge-fill data-target="72" style={{ height: '100%', width: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#7dd3fc,#0ea5e9)' }}></div><div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '66%', width: '2px', background: 'rgba(255,255,255,.5)', zIndex: '2' }}></div></div><div data-forge-num data-target="72" className="serif" style={{ width: '46px', fontSize: '26px', color: '#fff', textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>0</div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div className="mono" style={{ width: '152px', fontSize: '12px', color: '#c4bee0', textAlign: 'right', flexShrink: '0' }}>Technical</div><div style={{ position: 'relative', flex: '1', height: '13px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div data-forge-fill data-target="74" style={{ height: '100%', width: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#a5b4fc,#6366f1)' }}></div><div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '64%', width: '2px', background: 'rgba(255,255,255,.5)', zIndex: '2' }}></div></div><div data-forge-num data-target="74" className="serif" style={{ width: '46px', fontSize: '26px', color: '#fff', textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>0</div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div className="mono" style={{ width: '152px', fontSize: '12px', color: '#c4bee0', textAlign: 'right', flexShrink: '0' }}>Behavioral</div><div style={{ position: 'relative', flex: '1', height: '13px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div data-forge-fill data-target="80" style={{ height: '100%', width: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#fcd34d,#d97706)' }}></div><div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '72%', width: '2px', background: 'rgba(255,255,255,.5)', zIndex: '2' }}></div></div><div data-forge-num data-target="80" className="serif" style={{ width: '46px', fontSize: '26px', color: '#fff', textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>0</div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div className="mono" style={{ width: '152px', fontSize: '12px', color: '#c4bee0', textAlign: 'right', flexShrink: '0' }}>Communication</div><div style={{ position: 'relative', flex: '1', height: '13px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div data-forge-fill data-target="84" style={{ height: '100%', width: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#d9f99d,#84cc16)' }}></div><div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '68%', width: '2px', background: 'rgba(255,255,255,.5)', zIndex: '2' }}></div></div><div data-forge-num data-target="84" className="serif" style={{ width: '46px', fontSize: '26px', color: '#fff', textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>0</div></div>
          </div>
        </div>

        {/* ACT 3 */}
        <div data-forge="score" style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0', willChange: 'transform,opacity' }}>
          <div style={{ position: 'relative', width: '360px', height: '360px' }}>
            <svg width="360" height="360" viewBox="0 0 360 360" style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
              <circle cx="180" cy="180" r="158" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="18"></circle>
              <circle data-forge="arc" cx="180" cy="180" r="158" fill="none" stroke="url(#fgrad)" strokeWidth="18" strokeLinecap="round" strokeDasharray="992.74" strokeDashoffset="992.74"></circle>
              <defs><linearGradient id="fgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9b7bf8"></stop><stop offset="0.5" stopColor="#2ad4ee"></stop><stop offset="1" stopColor="#c9f24d"></stop></linearGradient></defs>
            </svg>
            <div data-forge="orb" style={{ position: 'absolute', inset: '0' }}><span style={{ position: 'absolute', left: '50%', top: '50%', width: '13px', height: '13px', borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 14px 2px #7c3aed88', transform: 'translate(-50%,-50%) rotate(0deg) translateY(-158px)' }}></span><span style={{ position: 'absolute', left: '50%', top: '50%', width: '13px', height: '13px', borderRadius: '50%', background: '#0ea5e9', boxShadow: '0 0 14px 2px #0ea5e988', transform: 'translate(-50%,-50%) rotate(72deg) translateY(-158px)' }}></span><span style={{ position: 'absolute', left: '50%', top: '50%', width: '13px', height: '13px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 14px 2px #6366f188', transform: 'translate(-50%,-50%) rotate(144deg) translateY(-158px)' }}></span><span style={{ position: 'absolute', left: '50%', top: '50%', width: '13px', height: '13px', borderRadius: '50%', background: '#d97706', boxShadow: '0 0 14px 2px #d9770688', transform: 'translate(-50%,-50%) rotate(216deg) translateY(-158px)' }}></span><span style={{ position: 'absolute', left: '50%', top: '50%', width: '13px', height: '13px', borderRadius: '50%', background: '#84cc16', boxShadow: '0 0 14px 2px #84cc1688', transform: 'translate(-50%,-50%) rotate(288deg) translateY(-158px)' }}></span></div>
            <div style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div data-forge="num" className="serif" style={{ fontSize: '126px', lineHeight: '.8', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>0</div>
              <div className="mono" style={{ fontSize: '11px', letterSpacing: '.22em', color: '#c4bee0', marginTop: '8px' }}>READINESS / 100</div>
            </div>
          </div>
        </div>

        {/* ACT 4 */}
        <div data-forge="cred" style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0', perspective: '1500px', willChange: 'opacity' }}>
          <div data-forge="credcard" style={{ position: 'relative', overflow: 'hidden', width: 'min(392px,86vw)', borderRadius: '24px', padding: '30px', background: 'linear-gradient(160deg,#1c1340,#120c28)', border: '1px solid rgba(155,123,248,.42)', boxShadow: '0 60px 130px -42px rgba(124,58,237,.65)', transform: 'rotateY(72deg) scale(.8)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
            <div data-forge="sweep" aria-hidden="true" style={{ position: 'absolute', top: '-20%', bottom: '-20%', left: '0', width: '45%', background: 'linear-gradient(105deg,transparent,rgba(255,255,255,.30),transparent)', transform: 'translateX(-140%)', pointerEvents: 'none', zIndex: '5' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '.18em', color: '#c9f24d' }}>BRIO · VERIFIED</div>
              <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'radial-gradient(circle at 32% 28%,#e6ddff,#7c3aed 62%,#3f1d80)' }}></div>
            </div>
            <div className="serif" style={{ fontSize: '31px', color: '#fff', marginTop: '22px', lineHeight: '1' }}>Suryansh M.</div>
            <div className="mono" style={{ fontSize: '11px', color: '#9b93c4', marginTop: '6px', letterSpacing: '.03em' }}>Backend Engineer · targeting Google</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '14px', marginTop: '24px' }}>
              <span className="serif" style={{ fontSize: '76px', lineHeight: '.74', color: '#9b7bf8' }}>84</span>
              <div style={{ paddingBottom: '7px' }}><div className="serif" style={{ fontSize: '30px', color: '#c9f24d', lineHeight: '1' }}>A</div><div className="mono" style={{ fontSize: '9px', letterSpacing: '.14em', color: '#9b93c4' }}>PROVEN SCORE</div></div>
            </div>
            <div style={{ marginTop: '22px', borderTop: '1px solid rgba(155,123,248,.2)', paddingTop: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: '10px', color: '#837da0', letterSpacing: '.05em' }}>Un-assisted · on camera</span>
              <span className="mono" style={{ fontSize: '10px', color: '#837da0' }}>brio.so/p/suryansh</span>
            </div>
            <div data-forge="stamp" aria-hidden="true" style={{ position: 'absolute', right: '24px', top: '64px', border: '2px solid rgba(201,242,77,.85)', color: '#c9f24d', borderRadius: '9px', padding: '5px 9px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', letterSpacing: '.16em', transform: 'rotate(-15deg) scale(.4)', opacity: '0', zIndex: '6' }}>VERIFIED</div>
          </div>
        </div>

        {/* stepper */}
        <div style={{ position: 'absolute', bottom: '5.5vh', left: '50%', transform: 'translateX(-50%)', width: 'min(540px,82vw)', zIndex: '9' }}>
          <div style={{ position: 'relative', height: '2px', background: 'rgba(255,255,255,.12)', margin: '0 6px' }}>
            <div data-forge="stepfill" style={{ position: 'absolute', left: '0', top: '0', height: '100%', width: '0', background: 'linear-gradient(90deg,#7c3aed,#2ad4ee,#c9f24d)' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
            <span data-forge="step" className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: '#c9f24d', transition: 'color .3s' }}>SPEAK</span>
            <span data-forge="step" className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: '#6f6790', transition: 'color .3s' }}>MEASURE</span>
            <span data-forge="step" className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: '#6f6790', transition: 'color .3s' }}>RESOLVE</span>
            <span data-forge="step" className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: '#6f6790', transition: 'color .3s' }}>PROVE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
