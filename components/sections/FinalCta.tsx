export default function FinalCta() {
  return (
    <section style={{ position: 'relative', overflow: 'clip', padding: '160px 6vw 150px', textAlign: 'center', color: '#f3efff', background: 'radial-gradient(800px 600px at 50% -20%,rgba(124,58,237,.45),transparent 60%),#0b0814' }}>
      <div data-sig style={{ position: 'absolute', left: '0', right: '0', top: '62%', height: '300px', transform: 'translateY(-50%)', opacity: '.6', pointerEvents: 'none' }}><svg viewBox="0 0 1600 300" preserveAspectRatio="none" style={{ width: '130%', height: '100%', overflow: 'visible' }}><defs><linearGradient id="csig" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#9b7bf8" /><stop offset=".5" stopColor="#2ad4ee" /><stop offset="1" stopColor="#c9f24d" /></linearGradient></defs><g style={{ animation: 'flow 6s linear infinite' }}><path d="M0,150 C110,40 220,260 360,150 S610,40 740,150 S990,260 1120,150 S1370,40 1500,150 1660,150 1820,150" fill="none" stroke="url(#csig)" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 6px rgba(155,123,248,.6))' }} /></g></svg></div>
      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
        <div data-reveal className="mono" style={{ fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#cbb6ff' }}>Ten minutes · one honest conversation</div>
        <h2 data-close="word" className="serif" style={{ fontSize: 'clamp(72px,15vw,230px)', lineHeight: '.9', letterSpacing: '-.03em', margin: '18px 0 0', transformOrigin: 'center' }}>Prove it<span style={{ fontStyle: 'italic' }}>.</span></h2>
        <p data-reveal data-d="1" style={{ fontSize: 'clamp(16px,1.7vw,20px)', color: '#b6b0cf', margin: '26px auto 0', maxWidth: '48ch' }}>A readiness score and your first findings, for free. Then carry the proof anywhere.</p>
        <div data-reveal data-d="2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
          <a className="magnetic" href="#trythis" style={{ background: '#fff', color: '#140e2c', borderRadius: '999px', padding: '16px 30px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', boxShadow: '0 0 40px -8px rgba(255,255,255,.4)' }}>Start your first interview →</a>
          <a href="#recruiters" style={{ color: '#cbb6ff', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>I'm hiring →</a>
        </div>
      </div>
    </section>
  );
}
