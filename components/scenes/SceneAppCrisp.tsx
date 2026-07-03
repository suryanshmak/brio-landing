export default function SceneAppCrisp() {
  return (
    <div data-z="crisp" style={{ position: 'absolute', inset: '0', zIndex: '6', opacity: '0', pointerEvents: 'none', background: '#05070f', willChange: 'transform,opacity' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: 'min(900px,90vw)', aspectRatio: '1', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(43,98,232,.26),transparent 64%)' }}></div>
      <canvas data-stars="chamber" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}></canvas>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'radial-gradient(120% 100% at 50% 50%,transparent 55%,rgba(2,4,10,.7))' }}></div>

      {/* persistent app chrome */}
      <div id="appchrome" style={{ position: 'absolute', top: '0', left: '0', right: '0', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 4vw', borderBottom: '1px solid rgba(255,255,255,.07)', background: 'rgba(5,7,15,.5)', zIndex: '9' }}>
        <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: 'radial-gradient(circle at 32% 28%,var(--logo1),var(--logo2) 62%,var(--logo3))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '13px' }}>b</span>
        <span data-app="mode" style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.22em', color: '#93a5d6' }}>LIVE INTERVIEW · SYSTEM DESIGN</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.16em', color: 'var(--zacc)' }}><span data-loop="dotp" data-dur="1.4" style={{ display: 'inline-block' }}>●</span> <span data-app="clock">REC 00:07:42</span></span>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.14em', color: '#7d8bb8', border: '1px solid rgba(255,255,255,.14)', borderRadius: '999px', padding: '5px 12px' }}>UN-ASSISTED · CAMERA ON</span>
      </div>
      {/* journey stepper */}
      <div style={{ position: 'absolute', top: '64px', left: '0', right: '0', display: 'flex', justifyContent: 'center', zIndex: '9' }}>
        <div id="appstep" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(5,7,15,.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '999px', padding: '8px 18px' }}>
          <span data-app="st0" style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: 'var(--zacc)' }}>01 INTERVIEW</span>
          <span style={{ width: '26px', height: '1px', background: 'rgba(255,255,255,.18)' }}></span>
          <span data-app="st1" style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: '#5d6a92' }}>02 SCORE</span>
          <span style={{ width: '26px', height: '1px', background: 'rgba(255,255,255,.18)' }}></span>
          <span data-app="st2" style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: '#5d6a92' }}>03 PROFILE</span>
          <span style={{ width: '26px', height: '1px', background: 'rgba(255,255,255,.18)' }}></span>
          <span data-app="st3" style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: '#5d6a92' }}>04 DISCOVERED</span>
        </div>
      </div>

      {/* STAGE A · INTERVIEW */}
      <div data-st="0" style={{ position: 'absolute', inset: '0', willChange: 'transform,opacity' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)', width: 'min(74vh,94vw)', height: 'min(74vh,94vw)', pointerEvents: 'none' }}>
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', overflow: 'visible' }}>
            <g data-loop="rot" data-dur="80" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}><circle cx="50" cy="50" r="41" fill="none" stroke="rgba(159,176,218,.16)" strokeWidth=".2" strokeDasharray=".7 2.4" /></g>
            <g data-loop="rot" data-dur="130" data-rev="1" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}><circle cx="50" cy="50" r="47" fill="none" stroke="rgba(159,176,218,.1)" strokeWidth=".16" strokeDasharray="5.5 3.2" /><circle cx="97" cy="50" r=".8" style={{ fill: 'var(--zacc)' }} /></g>
          </svg>
          <div style={{ position: 'absolute', left: '50%', bottom: '-6%', width: '74%', height: '12%', transform: 'translateX(-50%)', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(79,128,255,.16),transparent 70%)' }}></div>
        </div>
        <canvas data-orb="hero" data-cols="z" data-rb=".3" data-fade=".44,.62" style={{ position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)', width: 'min(74vh,94vw)', height: 'min(74vh,94vw)', opacity: '.95' }}></canvas>
        <div id="zcam" style={{ position: 'absolute', right: '4vw', bottom: '7vh', width: '180px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', background: '#070b18', boxShadow: '0 24px 60px -24px rgba(0,0,0,.7)', zIndex: '4' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: 'rgba(255,255,255,.04)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.18em', color: '#93a5d6' }}>YOU · CAMERA ON</span>
            <span data-loop="dotp" data-dur="1.4" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff5470', display: 'inline-block' }}></span>
          </div>
          <div style={{ position: 'relative', height: '104px', background: 'radial-gradient(90px 60px at 50% 88%,rgba(79,128,255,.28),transparent 70%),linear-gradient(180deg,#0a1226,#060a18)' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '30%', width: '42px', height: '42px', borderRadius: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle at 50% 40%,#2b446f,#101c3a 72%)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: '-14px', width: '104px', height: '54px', borderRadius: '50px 50px 0 0', transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#1d3057,#0c1630)' }}></div>
            <span data-zmic="" style={{ position: 'absolute', left: '8px', bottom: '8px', display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}><span data-loop="eq" data-dur="1.1" data-ph="0" style={{ width: '2.5px', height: '45%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span><span data-loop="eq" data-dur="1.1" data-ph=".18" style={{ width: '2.5px', height: '85%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span><span data-loop="eq" data-dur="1.1" data-ph=".36" style={{ width: '2.5px', height: '60%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span><span data-loop="eq" data-dur="1.1" data-ph=".5" style={{ width: '2.5px', height: '75%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span></span>
            <span data-zlisten="" style={{ position: 'absolute', right: '8px', bottom: '8px', fontFamily: 'var(--f-mono)', fontSize: '7.5px', letterSpacing: '.14em', color: '#7d8bb8' }}>LISTENING…</span>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '0', right: '0', bottom: '6vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '13px', padding: '0 6vw', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: '#93a5d6', border: '1px solid rgba(255,255,255,.14)', borderRadius: '999px', padding: '3px 10px' }}>Q1 / 3</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.3em', color: 'var(--zacc)' }}>BRIO ASKS</span>
          </div>
          <div id="zq" data-z="q" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '730', fontStretch: '109%', fontSize: 'clamp(20px,2.6vw,34px)', lineHeight: '1.2', letterSpacing: '-.02em', color: '#f2f5ff', maxWidth: '34ch', minHeight: '2.4em', textWrap: 'balance' }}>“Walk me through a system you broke — and what you did in the next hour.”</div>
          <div data-z="hint" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.24em', color: '#7d8bb8' }}>
            <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}><span data-loop="eq" data-dur="1.3" data-ph="0" style={{ width: '2px', height: '40%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span><span data-loop="eq" data-dur="1.3" data-ph=".2" style={{ width: '2px', height: '90%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span><span data-loop="eq" data-dur="1.3" data-ph=".4" style={{ width: '2px', height: '60%', background: 'var(--zacc)', borderRadius: '2px', transformOrigin: 'bottom' }}></span></span>
            SCROLL — ANSWER OUT LOUD
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '26px', flexWrap: 'wrap' }}>
            <span data-ztag="0" style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: '#f5a524', border: '1px solid rgba(245,165,36,.4)', background: 'rgba(245,165,36,.08)', borderRadius: '999px', padding: '4px 10px', opacity: '0', transform: 'scale(.6)', willChange: 'transform' }}>◆ OWNERSHIP</span>
            <span data-ztag="1" style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: '#8b5cf6', border: '1px solid rgba(139,92,246,.4)', background: 'rgba(139,92,246,.08)', borderRadius: '999px', padding: '4px 10px', opacity: '0', transform: 'scale(.6)', willChange: 'transform' }}>◆ METHOD</span>
            <span data-ztag="2" style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: '#2ad4ee', border: '1px solid rgba(42,212,238,.4)', background: 'rgba(42,212,238,.08)', borderRadius: '999px', padding: '4px 10px', opacity: '0', transform: 'scale(.6)', willChange: 'transform' }}>◆ ACCOUNTABILITY</span>
          </div>
          <div data-z="tr" style={{ fontFamily: 'var(--f-mono)', fontSize: 'clamp(11px,1.2vw,13.5px)', letterSpacing: '.04em', color: '#9fb0da', maxWidth: '74ch', minHeight: '1.5em', opacity: '0' }}>YOU · “I’d cap the blast radius first — freeze writes, bisect the deploy, then own the postmortem.”</div>
        </div>
      </div>

      {/* STAGE B · SCORE */}
      <div data-st="1" style={{ position: 'absolute', inset: '0', willChange: 'transform,opacity', opacity: '0' }}>
        <div id="stgscore" style={{ position: 'absolute', left: '50%', top: '52%', transform: 'translate(-50%,-50%)', width: 'min(1060px,90vw)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6vw', alignItems: 'center' }}>
          <div data-gw="" style={{ position: 'relative', width: 'min(300px,72vw)', aspectRatio: '1', justifySelf: 'center' }}>
            <div data-fg="shock" aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: '100%', aspectRatio: '1', transform: 'translate(-50%,-50%) scale(.6)', borderRadius: '50%', border: '2px solid var(--zacc)', opacity: '0', pointerEvents: 'none', willChange: 'transform,opacity' }}></div>
            <svg viewBox="0 0 340 340" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', overflow: 'visible' }}>
              <circle cx="170" cy="170" r="150" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="16" />
              <circle data-fg="arc" cx="170" cy="170" r="150" fill="none" stroke="url(#sigarc)" strokeWidth="16" strokeLinecap="round" strokeDasharray="942.48" strokeDashoffset="942.48" />
              <defs><linearGradient id="sigarc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style={{ stopColor: 'var(--zvio)' }} /><stop offset="0.55" style={{ stopColor: 'var(--cyn)' }} /><stop offset="1" style={{ stopColor: 'var(--zacc)' }} /></linearGradient></defs>
            </svg>
            <div data-fg="orbit" style={{ position: 'absolute', inset: '0', willChange: 'transform' }}>
              <span style={{ position: 'absolute', left: '50%', top: '50%', width: '11px', height: '11px', borderRadius: '50%', background: '#9b7bf8', boxShadow: '0 0 14px 2px rgba(155,123,248,.5)', transform: 'translate(-50%,-50%) rotate(0deg) translateY(min(-150px,-44%))' }}></span>
              <span style={{ position: 'absolute', left: '50%', top: '50%', width: '11px', height: '11px', borderRadius: '50%', background: '#2ad4ee', boxShadow: '0 0 14px 2px rgba(42,212,238,.5)', transform: 'translate(-50%,-50%) rotate(90deg) translateY(min(-150px,-44%))' }}></span>
              <span style={{ position: 'absolute', left: '50%', top: '50%', width: '11px', height: '11px', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 14px 2px rgba(139,92,246,.5)', transform: 'translate(-50%,-50%) rotate(180deg) translateY(min(-150px,-44%))' }}></span>
              <span style={{ position: 'absolute', left: '50%', top: '50%', width: '11px', height: '11px', borderRadius: '50%', background: '#f5a524', boxShadow: '0 0 14px 2px rgba(245,165,36,.5)', transform: 'translate(-50%,-50%) rotate(270deg) translateY(min(-150px,-44%))' }}></span>
            </div>
            <div style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div data-fg="score" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '112%', fontSize: 'clamp(64px,9vh,104px)', lineHeight: '.82', color: '#fff', fontVariantNumeric: 'tabular-nums', letterSpacing: '-.03em' }}>0</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.26em', color: '#9fb0da', marginTop: '9px' }}>READINESS / 100</div>
              <div data-fg="band" style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '7px', border: '1px solid var(--acc-brd)', background: 'var(--acc-bg)', borderRadius: '999px', padding: '5px 13px', fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.18em', color: 'var(--zacc)', opacity: '0', transform: 'scale(.6)' }}>BAND A · VERIFIED</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.26em', color: '#7d8bb8' }}>SUBSTANCE, SPLIT FOUR WAYS</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <div className="fgl" style={{ width: '132px', fontFamily: 'var(--f-mono)', fontSize: '11px', color: '#b9c3de', textAlign: 'right', flexShrink: '0' }}>Problem Reading</div>
              <div style={{ position: 'relative', flex: '1', height: '11px', borderRadius: '7px', background: 'rgba(255,255,255,.07)', overflow: 'hidden' }}>
                <div data-fgfill="" data-t="86" style={{ position: 'absolute', inset: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#7c5ce0,#9b7bf8)', transformOrigin: 'left', transform: 'scaleX(0)', willChange: 'transform' }}></div>
                <div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '70%', width: '2px', background: 'rgba(255,255,255,.4)', zIndex: '2' }}></div>
              </div>
              <div data-fgnum="" data-t="86" data-disp="" style={{ width: '46px', fontFamily: 'var(--f-disp)', fontWeight: '750', fontStretch: '108%', fontSize: '23px', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>0</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <div className="fgl" style={{ width: '132px', fontFamily: 'var(--f-mono)', fontSize: '11px', color: '#b9c3de', textAlign: 'right', flexShrink: '0' }}>Reasoning Clarity</div>
              <div style={{ position: 'relative', flex: '1', height: '11px', borderRadius: '7px', background: 'rgba(255,255,255,.07)', overflow: 'hidden' }}>
                <div data-fgfill="" data-t="79" style={{ position: 'absolute', inset: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#0ea5c9,#2ad4ee)', transformOrigin: 'left', transform: 'scaleX(0)', willChange: 'transform' }}></div>
                <div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '66%', width: '2px', background: 'rgba(255,255,255,.4)', zIndex: '2' }}></div>
              </div>
              <div data-fgnum="" data-t="79" data-disp="" style={{ width: '46px', fontFamily: 'var(--f-disp)', fontWeight: '750', fontStretch: '108%', fontSize: '23px', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>0</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <div className="fgl" style={{ width: '132px', fontFamily: 'var(--f-mono)', fontSize: '11px', color: '#b9c3de', textAlign: 'right', flexShrink: '0' }}>Technical</div>
              <div style={{ position: 'relative', flex: '1', height: '11px', borderRadius: '7px', background: 'rgba(255,255,255,.07)', overflow: 'hidden' }}>
                <div data-fgfill="" data-t="84" style={{ position: 'absolute', inset: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#6d3ee8,#8b5cf6)', transformOrigin: 'left', transform: 'scaleX(0)', willChange: 'transform' }}></div>
                <div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '64%', width: '2px', background: 'rgba(255,255,255,.4)', zIndex: '2' }}></div>
              </div>
              <div data-fgnum="" data-t="84" data-disp="" style={{ width: '46px', fontFamily: 'var(--f-disp)', fontWeight: '750', fontStretch: '108%', fontSize: '23px', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>0</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <div className="fgl" style={{ width: '132px', fontFamily: 'var(--f-mono)', fontSize: '11px', color: '#b9c3de', textAlign: 'right', flexShrink: '0' }}>Behavioral</div>
              <div style={{ position: 'relative', flex: '1', height: '11px', borderRadius: '7px', background: 'rgba(255,255,255,.07)', overflow: 'hidden' }}>
                <div data-fgfill="" data-t="88" style={{ position: 'absolute', inset: '0', borderRadius: '7px', background: 'linear-gradient(90deg,#d98a06,#f5a524)', transformOrigin: 'left', transform: 'scaleX(0)', willChange: 'transform' }}></div>
                <div aria-hidden="true" style={{ position: 'absolute', top: '0', bottom: '0', left: '72%', width: '2px', background: 'rgba(255,255,255,.4)', zIndex: '2' }}></div>
              </div>
              <div data-fgnum="" data-t="88" data-disp="" style={{ width: '46px', fontFamily: 'var(--f-disp)', fontWeight: '750', fontStretch: '108%', fontSize: '23px', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>0</div>
            </div>
            <div data-fg="gap" style={{ marginTop: '6px', border: '1px solid var(--acc-brd)', background: 'var(--acc-bg)', borderRadius: '14px', padding: '13px 16px', opacity: '0' }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--zacc)', marginBottom: '8px' }}>↳ WHAT IT HEARD — PINNED FROM YOUR ANSWER</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ flexShrink: '0', marginTop: '6px', width: '6px', height: '6px', borderRadius: '50%', background: '#f5a524' }}></span>
                <span style={{ fontSize: '12.5px', color: '#dfe6ff', lineHeight: '1.5' }}>“cap the blast radius first” <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.1em', color: '#f5a524' }}>OWNERSHIP · 00:08:04</span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '6px' }}>
                <span style={{ flexShrink: '0', marginTop: '6px', width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></span>
                <span style={{ fontSize: '12.5px', color: '#dfe6ff', lineHeight: '1.5' }}>“bisect the deploy” <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.1em', color: '#8b5cf6' }}>METHOD · 00:08:11</span></span>
              </div>
              <div style={{ marginTop: '9px', borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '8px', fontSize: '12px', color: '#9fb0da', lineHeight: '1.5' }}><b style={{ color: '#f2f5ff' }}>Fix next:</b> state your constraints before the plan — you led with action twice.</div>
            </div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: '#5d6a92' }}>— CALIBRATED BAND MARKERS · SCORED ON SUBSTANCE, NEVER DELIVERY</div>
          </div>
        </div>
      </div>

      {/* STAGE C · SHARE */}
      <div data-st="2" style={{ position: 'absolute', inset: '0', willChange: 'transform,opacity', opacity: '0' }}>
        <div style={{ position: 'absolute', left: '50%', top: '54%', transform: 'translate(-50%,-50%)', width: 'min(760px,92vw)' }}>
          <div data-pr="0" style={{ textAlign: 'center', marginBottom: '22px' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.3em', color: 'var(--zacc)' }}>YOUR PROOF — READY TO SHARE</div>
          </div>
          <div data-pr="1" style={{ borderRadius: '20px', overflow: 'hidden', background: 'linear-gradient(180deg,#0d1530,#070c1d)', border: '1px solid rgba(96,158,255,.28)', boxShadow: '0 60px 120px -50px rgba(34,110,230,.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 16px', background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3a4668' }}></span><span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3a4668' }}></span><span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3a4668' }}></span>
              <span style={{ marginLeft: '12px', fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: '#93a5d6', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '7px', padding: '3px 12px' }}>brio.so/p/aarav</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.18em', color: '#7d8bb8' }}>PUBLIC PROFILE</span>
            </div>
            <div style={{ padding: 'clamp(18px,2.6vw,28px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg,var(--av1),var(--av2))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '17px', flexShrink: '0' }}>AM</span>
                <div style={{ flex: '1', minWidth: '180px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexWrap: 'wrap' }}>
                    <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '108%', fontSize: '24px', lineHeight: '1', letterSpacing: '-.02em', color: '#fff' }}>Aarav Mehta</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.1em', color: 'var(--zacc)', background: 'var(--acc-bg)', border: '1px solid var(--acc-brd)', borderRadius: '999px', padding: '3px 9px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--zacc)' }}></span>VERIFIED</span>
                  </div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', color: '#7d8bb8', marginTop: '5px' }}>Backend Engineer · un-assisted · on camera · 7 sessions</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                  <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '830', fontStretch: '112%', fontSize: '46px', lineHeight: '.78', color: 'var(--zvio)', letterSpacing: '-.03em' }}>84</span>
                  <div style={{ paddingBottom: '3px' }}>
                    <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '770', fontSize: '19px', color: 'var(--zacc)', lineHeight: '1' }}>A</div>
                    <div style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', letterSpacing: '.14em', color: '#7d8bb8' }}>PROVEN</div>
                  </div>
                </div>
              </div>
              <div id="stgclips" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '11px', marginTop: '18px' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.09)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ position: 'relative', height: '52px', background: 'linear-gradient(160deg,rgba(99,102,241,.16),rgba(99,102,241,.04))' }}>
                    <svg viewBox="0 0 200 44" preserveAspectRatio="none" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '.6' }}><path d="M0,22 C20,8 32,36 50,22 S82,6 100,22 S140,38 158,22 S188,8 200,22" fill="none" stroke="#8b8ff5" strokeWidth="2" strokeLinecap="round" /></svg>
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '0', height: '0', borderLeft: '8px solid #dfe6ff', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', marginLeft: '2px' }}></span></span></div>
                    <span style={{ position: 'absolute', right: '7px', bottom: '6px', fontFamily: 'var(--f-mono)', fontSize: '8.5px', color: '#c8d2f2', background: 'rgba(5,10,25,.6)', borderRadius: '4px', padding: '1px 5px' }}>0:42</span>
                  </div>
                  <div style={{ padding: '9px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: '#dfe6ff', fontWeight: '600' }}>Sys Design · T2</span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', color: '#8b8ff5', border: '1px solid rgba(139,143,245,.35)', borderRadius: '4px', padding: '1px 5px' }}>TECH</span>
                  </div>
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.09)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ position: 'relative', height: '52px', background: 'linear-gradient(160deg,rgba(245,165,36,.14),rgba(245,165,36,.03))' }}>
                    <svg viewBox="0 0 200 44" preserveAspectRatio="none" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '.6' }}><path d="M0,22 C18,34 36,10 54,22 S90,36 108,20 S150,6 168,24 S192,34 200,22" fill="none" stroke="#f5a524" strokeWidth="2" strokeLinecap="round" /></svg>
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '0', height: '0', borderLeft: '8px solid #ffe9c4', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', marginLeft: '2px' }}></span></span></div>
                    <span style={{ position: 'absolute', right: '7px', bottom: '6px', fontFamily: 'var(--f-mono)', fontSize: '8.5px', color: '#c8d2f2', background: 'rgba(5,10,25,.6)', borderRadius: '4px', padding: '1px 5px' }}>0:38</span>
                  </div>
                  <div style={{ padding: '9px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: '#dfe6ff', fontWeight: '600' }}>Behavioral · T3</span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', color: '#f5a524', border: '1px solid rgba(245,165,36,.35)', borderRadius: '4px', padding: '1px 5px' }}>BEHAV</span>
                  </div>
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.09)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ position: 'relative', height: '52px', background: 'linear-gradient(160deg,rgba(42,212,238,.14),rgba(42,212,238,.03))' }}>
                    <svg viewBox="0 0 200 44" preserveAspectRatio="none" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: '.6' }}><path d="M0,22 C22,14 40,30 60,22 S96,8 116,26 S156,36 176,18 S192,12 200,22" fill="none" stroke="#2ad4ee" strokeWidth="2" strokeLinecap="round" /></svg>
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '0', height: '0', borderLeft: '8px solid #d2f4fb', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', marginLeft: '2px' }}></span></span></div>
                    <span style={{ position: 'absolute', right: '7px', bottom: '6px', fontFamily: 'var(--f-mono)', fontSize: '8.5px', color: '#c8d2f2', background: 'rgba(5,10,25,.6)', borderRadius: '4px', padding: '1px 5px' }}>0:51</span>
                  </div>
                  <div style={{ padding: '9px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: '#dfe6ff', fontWeight: '600' }}>Coding · T2</span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', color: '#2ad4ee', border: '1px solid rgba(42,212,238,.35)', borderRadius: '4px', padding: '1px 5px' }}>REASON</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', color: '#7d8bb8', letterSpacing: '.08em' }}>EVERY SCORE LINKS TO THE SPOKEN MOMENT · ID 7F4A·2606</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', color: '#7d8bb8', letterSpacing: '.08em' }}>ALWAYS CURRENT</span>
              </div>
            </div>
          </div>
          <div data-pr="v" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#d97706,#92400e)', border: '2px solid #05070f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700' }}>L</span>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#635bff,#2d2a8c)', border: '2px solid #05070f', marginLeft: '-7px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700' }}>S</span>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#0ea5e9,#075985)', border: '2px solid #05070f', marginLeft: '-7px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700' }}>R</span>
            </span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.16em', color: '#9fb0da' }}><span data-loop="dotp" data-dur="1.8" style={{ display: 'inline-block', color: 'var(--zacc)' }}>●</span> 3 RECRUITERS VIEWING · STRIPE OPENED YOUR SYS-DESIGN CLIP 2M AGO</span>
          </div>
          <div data-pr="2" id="stgshare" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '13px', marginTop: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(8,14,32,.6)', backdropFilter: 'blur(10px)', borderRadius: '999px', padding: '6px 6px 6px 18px' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '12.5px', color: '#dfe6ff', letterSpacing: '.02em' }}>brio.so/p/aarav</span>
              <button data-copy="" data-loop="pulse" data-dur="2.6" type="button" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.14em', background: 'var(--zacc)', color: 'var(--zacc-ink)', border: 'none', borderRadius: '999px', padding: '10px 18px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 0 34px -8px var(--zacc)' }}>COPY LINK</button>
            </div>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.2em', color: '#7d8bb8' }}>ONE LINK · THE WHOLE SIGNAL</span>
          </div>
          <div data-pr="3" style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="#s-end" className="hv-white" style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.2em', color: '#9fb0da', textDecoration: 'none', borderBottom: '1px solid rgba(159,176,218,.35)', paddingBottom: '3px' }}>THIS COULD BE YOU IN 10 MINUTES — START FREE ↓</a>
          </div>
        </div>
      </div>

      {/* STAGE D · DISCOVERED (the recruiter's screen) */}
      <div data-st="3" style={{ position: 'absolute', inset: '0', willChange: 'transform,opacity', opacity: '0' }}>
        <div data-rctoast="" style={{ position: 'absolute', top: '112px', left: '50%', transform: 'translate(-50%,-16px)', opacity: '0', zIndex: '5', display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'var(--glass)', backdropFilter: 'blur(12px)', border: '1px solid var(--acc-brd)', borderRadius: '999px', padding: '9px 16px', boxShadow: '0 12px 40px -12px var(--zacc)', whiteSpace: 'nowrap' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--zacc)' }}></span>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.16em', color: 'var(--ink)' }}>NEW VERIFIED CANDIDATE IN YOUR QUEUE</span>
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '54%', transform: 'translate(-50%,-50%)', width: 'min(680px,92vw)' }}>
          <div data-rc="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'linear-gradient(135deg,#d97706,#92400e)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>L</span>
              <div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.2em', color: '#dfe6ff' }}>LATTICE · ENG RECRUITING</div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: '#7d8bb8', marginTop: '3px' }}>TALENT QUEUE — RANKED BY VERIFIED SIGNAL</div>
              </div>
            </div>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.16em', color: '#7d8bb8', border: '1px solid rgba(255,255,255,.12)', borderRadius: '999px', padding: '4px 10px' }}>BACKEND · L4</span>
          </div>
          <div data-rc="" style={{ position: 'relative', borderRadius: '16px', border: '1px solid var(--acc-brd)', background: 'linear-gradient(180deg,rgba(94,225,255,.06),rgba(8,14,32,.6))', padding: '15px 17px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 0 60px -22px var(--zacc)' }}>
            <span style={{ width: '44px', height: '44px', borderRadius: '13px', background: 'linear-gradient(135deg,var(--av1),var(--av2))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '15px', flexShrink: '0' }}>AM</span>
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '108%', fontSize: '19px', color: '#fff', letterSpacing: '-.01em' }}>Aarav Mehta</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', letterSpacing: '.12em', color: 'var(--zacc)', border: '1px solid var(--acc-brd)', borderRadius: '999px', padding: '2px 7px' }}>YOU</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', letterSpacing: '.12em', color: 'var(--zacc)' }}>VERIFIED ✓</span>
              </div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', color: '#7d8bb8', marginTop: '5px', letterSpacing: '.06em' }}>SYS DESIGN 84 · UN-ASSISTED · 3 CLIPS PINNED</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: '0' }}>
              <div data-rcfit="" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '820', fontStretch: '110%', fontSize: '30px', lineHeight: '.85', color: 'var(--zacc)', fontVariantNumeric: 'tabular-nums' }}>0</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '7.5px', letterSpacing: '.2em', color: '#7d8bb8', marginTop: '3px' }}>FIT</div>
            </div>
            <button data-rcbtn="" type="button" style={{ flexShrink: '0', fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.12em', background: 'var(--zacc)', color: 'var(--zacc-ink)', border: 'none', borderRadius: '999px', padding: '10px 16px', fontWeight: '700', cursor: 'pointer', willChange: 'transform' }}>SHORTLIST</button>
          </div>
          <div data-rc="" data-dim=".55" style={{ marginTop: '9px', borderRadius: '14px', border: '1px solid rgba(255,255,255,.08)', background: 'rgba(8,14,32,.45)', padding: '11px 17px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '38px', height: '38px', borderRadius: '11px', background: '#1c2748', color: '#8fa0c8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: '0' }}>RI</span>
            <div style={{ flex: '1', minWidth: '0' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '600', color: '#c6d0ea' }}>R. Iyer</span>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', color: '#5d6a92', marginTop: '4px', letterSpacing: '.06em' }}>RÉSUMÉ ONLY · NO VERIFIED SIGNAL</div>
            </div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '15px', color: '#8fa0c8', fontVariantNumeric: 'tabular-nums' }}>—</div>
          </div>
          <div data-rc="" data-dim=".38" style={{ marginTop: '8px', borderRadius: '14px', border: '1px solid rgba(255,255,255,.07)', background: 'rgba(8,14,32,.4)', padding: '11px 17px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '38px', height: '38px', borderRadius: '11px', background: '#1c2748', color: '#8fa0c8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: '0' }}>KO</span>
            <div style={{ flex: '1', minWidth: '0' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '600', color: '#c6d0ea' }}>K. Osei</span>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', color: '#5d6a92', marginTop: '4px', letterSpacing: '.06em' }}>RÉSUMÉ ONLY · NO VERIFIED SIGNAL</div>
            </div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '15px', color: '#8fa0c8', fontVariantNumeric: 'tabular-nums' }}>—</div>
          </div>
          <div data-rc="" style={{ marginTop: '14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(5,7,15,.72)', padding: '13px 16px' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.18em', color: '#7d8bb8', marginBottom: '7px' }}>MESSAGE → AARAV</div>
            <div data-rcmsg="" style={{ fontFamily: 'var(--f-mono)', fontSize: '12px', color: '#dfe6ff', minHeight: '1.6em', letterSpacing: '.02em', lineHeight: '1.5' }}></div>
          </div>
          <div data-rc="" style={{ textAlign: 'center', marginTop: '15px', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.22em', color: '#7d8bb8' }}>SIGNAL GETS SEEN. RÉSUMÉS GET SKIMMED.</div>
        </div>
      </div>
    </div>
  );
}
