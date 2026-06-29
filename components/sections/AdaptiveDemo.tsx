export default function AdaptiveDemo() {
  return (
    <section id="trythis" style={{ position: 'relative', overflow: 'clip', padding: '120px 6vw 130px', color: '#f3efff', background: 'radial-gradient(1000px 760px at 50% 4%,#1c1248,#0b0814 72%),#0b0814' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', top: '36%', height: '300px', transform: 'translateY(-50%)', opacity: '.3', pointerEvents: 'none' }}><svg viewBox="0 0 1600 300" preserveAspectRatio="none" style={{ width: '130%', height: '100%', overflow: 'visible' }}><defs><linearGradient id="psig" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7c3aed" /><stop offset=".5" stopColor="#2ad4ee" /><stop offset="1" stopColor="#c9f24d" /></linearGradient></defs><g style={{ animation: 'flow 7s linear infinite' }}><path d="M0,150 C110,60 220,240 360,150 S610,60 740,150 S990,240 1120,150 S1370,60 1500,150 1660,150 1820,150" fill="none" stroke="url(#psig)" strokeWidth="2" strokeLinecap="round" /></g></svg></div>

      <div style={{ position: 'relative', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px' }}>
          <div data-reveal className="mono" style={{ fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#c9f24d' }}>The adaptive interviewer</div>
          <h2 data-reveal data-d="1" className="serif" style={{ fontSize: 'clamp(40px,6.4vw,92px)', lineHeight: '.98', letterSpacing: '-.02em', margin: '14px 0 0' }}>It doesn't read answers.<br /><span style={{ fontStyle: 'italic' }}>It interrogates them.</span></h2>
          <p data-reveal data-d="2" style={{ fontSize: 'clamp(15px,1.6vw,19px)', color: '#b6b0cf', margin: '20px 0 0', maxWidth: '54ch', lineHeight: '1.55' }}>Every answer earns a follow-up that goes straight at the weak spot. Watch a real moment land, the proof a résumé can't show.</p>
        </div>

        {/* the moment */}
        <div data-reveal data-d="2" style={{ marginTop: '52px', borderRadius: '24px', border: '1px solid rgba(124,58,237,.28)', background: 'linear-gradient(180deg,rgba(28,18,72,.5),rgba(11,8,20,.72))', boxShadow: '0 60px 120px -64px rgba(124,58,237,.6)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '15px 22px', borderBottom: '1px solid rgba(124,58,237,.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c9f24d', boxShadow: '0 0 10px #c9f24d' }}></span><span className="mono" style={{ fontSize: '11px', letterSpacing: '.12em', color: '#c4bee0' }}>LIVE INTERVIEW · SYSTEM DESIGN</span></div>
            <span className="mono" style={{ fontSize: '11px', color: '#7a749a' }}>Take 2 · un-assisted</span>
          </div>
          <div style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span className="mono" style={{ flexShrink: '0', width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(124,58,237,.2)', border: '1px solid rgba(124,58,237,.4)', color: '#c4b5fd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>AI</span>
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px 16px 16px 16px', padding: '14px 18px', maxWidth: '62ch' }}><span style={{ fontSize: 'clamp(15px,1.7vw,19px)', color: '#f3efff', lineHeight: '1.5' }}>Design a URL shortener that scales to a billion links.</span></div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
              <span className="mono" style={{ flexShrink: '0', width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg,#7c3aed,#3f1d80)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>SM</span>
              <div style={{ background: 'rgba(124,58,237,.14)', border: '1px solid rgba(124,58,237,.28)', borderRadius: '16px 4px 16px 16px', padding: '14px 18px', maxWidth: '62ch' }}><span style={{ fontSize: 'clamp(14px,1.6vw,17px)', color: '#e7e3f5', lineHeight: '1.55' }}>I'd shard the database by user ID and put a cache in front of the read path.</span></div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span className="mono" style={{ flexShrink: '0', width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(201,242,77,.18)', border: '1px solid rgba(201,242,77,.5)', color: '#c9f24d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>AI</span>
              <div style={{ position: 'relative', background: 'rgba(201,242,77,.08)', border: '1px solid rgba(201,242,77,.4)', borderRadius: '4px 16px 16px 16px', padding: '16px 18px', maxWidth: '62ch', boxShadow: '0 0 44px -16px rgba(201,242,77,.5)' }}>
                <div className="mono" style={{ fontSize: '9.5px', letterSpacing: '.16em', color: '#c9f24d', marginBottom: '7px' }}>↳ ADAPTIVE FOLLOW-UP · CAUGHT A GAP</div>
                <span className="serif" style={{ fontSize: 'clamp(18px,2.2vw,26px)', color: '#f7f4ff', lineHeight: '1.32' }}>"You said shard by user ID, what breaks at 10× write volume on a single hot user?"</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
              <span className="mono" style={{ flexShrink: '0', width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg,#7c3aed,#3f1d80)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>SM</span>
              <div style={{ background: 'rgba(124,58,237,.14)', border: '1px solid rgba(124,58,237,.28)', borderRadius: '16px 4px 16px 16px', padding: '14px 18px', maxWidth: '62ch' }}><span style={{ fontSize: 'clamp(14px,1.6vw,17px)', color: '#e7e3f5', lineHeight: '1.55' }}>…right, a celebrity link would hot-spot that shard. I'd salt the key and isolate hot keys.</span></div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(124,58,237,.18)', padding: '20px 22px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', maxWidth: '46ch' }}>
              <span className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', color: '#c4bee0', border: '1px solid rgba(124,58,237,.35)', borderRadius: '999px', padding: '6px 12px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed' }}></span>Pinned · 04:12 → Problem Reading</span>
              <span style={{ fontSize: '12.5px', color: '#9b93c4' }}>Evidence: didn't address hot-key skew until prompted.</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: '9.5px', letterSpacing: '.14em', color: '#7a749a', marginBottom: '6px' }}>TECHNICAL · CALIBRATED BAND</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                <span className="mono" style={{ fontSize: '11px', color: '#5a5575', border: '1px solid rgba(255,255,255,.1)', borderRadius: '6px', padding: '3px 8px' }}>C</span>
                <span className="mono" style={{ fontSize: '11px', color: '#c9f24d', border: '1px solid rgba(201,242,77,.5)', background: 'rgba(201,242,77,.12)', borderRadius: '6px', padding: '3px 8px', fontWeight: '700' }}>B → A</span>
                <span className="mono" style={{ fontSize: '11px', color: '#5a5575', border: '1px solid rgba(255,255,255,.1)', borderRadius: '6px', padding: '3px 8px' }}>A+</span>
              </div>
              <div className="mono" style={{ fontSize: '10px', color: '#7a749a', marginTop: '6px' }}>Building confidence · 4 sessions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
