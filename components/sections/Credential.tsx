import HolographicCredential from "@/components/HolographicCredential";

export default function Credential() {
  return (
    <section id="credential" style={{ position: 'relative', overflow: 'clip', padding: '150px 6vw', color: '#f3efff', background: 'radial-gradient(900px 700px at 78% -10%,rgba(124,58,237,.4),transparent 60%),radial-gradient(700px 600px at 10% 110%,rgba(201,242,77,.12),transparent 60%),#0b0814' }}>
      <div style={{ position: 'absolute', right: '-6%', top: '0', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(155,123,248,.3),transparent)', filter: 'blur(24px)', animation: 'glow 6s ease-in-out infinite' }}></div>
      <div className="credgrid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 460px', gap: '60px', alignItems: 'center' }}>
        <div>
          <div data-reveal className="mono" style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#c9f24d' }}>The credential</div>
          <h2 data-reveal data-d="1" className="serif" style={{ fontSize: 'clamp(40px,6vw,88px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '16px 0 0' }}>Pass once.<br /><span style={{ fontStyle: 'italic' }}>Carry the proof</span><br />anywhere.</h2>
          <p data-reveal data-d="2" style={{ fontSize: 'clamp(15px,1.6vw,19px)', lineHeight: '1.55', color: '#b6b0cf', margin: '24px 0 0', maxWidth: '46ch' }}>One un-assisted, on-camera assessment becomes a shareable, verifiable credential, the same signal recruiters discover you by. No grind, no gaming.</p>
          <a data-reveal data-d="3" href="#trythis" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', marginTop: '30px', background: '#c9f24d', color: '#140e2c', borderRadius: '999px', padding: '14px 24px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 0 30px -8px rgba(201,242,77,.6)' }}>Earn your credential →</a>
        </div>
        <HolographicCredential />
      </div>
    </section>
  );
}
