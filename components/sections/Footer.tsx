export default function Footer() {
  return (
    <footer style={{ background: '#0b0814', color: '#837da0', padding: '30px 6vw 44px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'radial-gradient(circle at 33% 27%,#e6ddff,#7c3aed 60%,#3f1d80)' }}></div><span className="serif" style={{ fontSize: '18px', color: '#f3efff' }}>Brio</span></div>
      <div className="mono" style={{ fontSize: '11px', letterSpacing: '.06em' }}>Readiness, measured on substance.</div>
      <div style={{ display: 'flex', gap: '18px', fontSize: '12.5px' }}><a href="#" style={{ color: '#837da0', textDecoration: 'none' }}>Product</a><a href="#" style={{ color: '#837da0', textDecoration: 'none' }}>Proven Score</a><a href="#" style={{ color: '#837da0', textDecoration: 'none' }}>Privacy</a></div>
    </footer>
  );
}
