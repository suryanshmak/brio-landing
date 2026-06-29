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
        <div style={{ perspective: '1500px' }}>
        <div data-cred="card" style={{ position: 'relative', width: '440px', height: '278px', borderRadius: '20px', boxShadow: '0 50px 90px -30px rgba(0,0,0,.7)', background: 'linear-gradient(135deg,#fbfaff,#eee7ff 55%,#e7eeff)', overflow: 'hidden', transformOrigin: 'center' }}>
          <div style={{ position: 'absolute', inset: '0', background: 'repeating-radial-gradient(circle at 18% 120%,transparent 0 7px,rgba(124,58,237,.07) 7px 8px),repeating-radial-gradient(circle at 92% -15%,transparent 0 9px,rgba(14,165,233,.06) 9px 10px),repeating-linear-gradient(115deg,transparent 0 13px,rgba(124,58,237,.035) 13px 14px)' }}></div>
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,.55) 48%,rgba(190,240,255,.4) 52%,transparent 70%)', backgroundSize: '220% 100%', animation: 'flow 4.5s linear infinite', mixBlendMode: 'screen' }}></div>
          <div style={{ position: 'relative', padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', color: '#1a1626' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div><div style={{ fontWeight: '800', fontSize: '16px' }}>brio</div><div className="mono" style={{ fontSize: '8.5px', letterSpacing: '.22em', color: '#8b88a1', marginTop: '1px' }}>VERIFIED CREDENTIAL</div></div>
              <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', background: 'conic-gradient(from 0deg,#ffd1f5,#c9b8ff,#b8f0ff,#d6ffe0,#ffe9b8,#ffd1f5)', animation: 'spin 6s linear infinite' }}><div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', fontSize: '18px' }}>✓</div></div>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div><div className="mono" style={{ fontSize: '9px', letterSpacing: '.16em', color: '#8b88a1' }}>GRADE</div><div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}><span className="serif" style={{ fontSize: '64px', lineHeight: '.8', color: '#7c3aed' }}>A</span><span className="serif" style={{ fontSize: '40px', lineHeight: '.8' }}>84</span></div></div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '34px' }}><span style={{ width: '5px', background: '#7c3aed', borderRadius: '2px', height: '74%', transformOrigin: 'bottom', animation: 'eq 1.5s ease-in-out infinite' }}></span><span style={{ width: '5px', background: '#0ea5e9', borderRadius: '2px', height: '72%', transformOrigin: 'bottom', animation: 'eq 1.5s ease-in-out .15s infinite' }}></span><span style={{ width: '5px', background: '#6366f1', borderRadius: '2px', height: '74%', transformOrigin: 'bottom', animation: 'eq 1.5s ease-in-out .3s infinite' }}></span><span style={{ width: '5px', background: '#d97706', borderRadius: '2px', height: '60%', transformOrigin: 'bottom', animation: 'eq 1.5s ease-in-out .45s infinite' }}></span></div>
            </div>
            <div style={{ marginTop: '14px', borderTop: '1px solid rgba(124,58,237,.16)', paddingTop: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div className="serif" style={{ fontSize: '18px' }}>Suryansh Makharia</div><div className="mono" style={{ fontSize: '8.5px', color: '#8b88a1' }}>ID 7F4A·2606</div></div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
