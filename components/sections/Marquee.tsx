export default function Marquee() {
  return (
    <section style={{ padding: '26px 0', borderTop: '1px solid rgba(124,58,237,.1)', borderBottom: '1px solid rgba(124,58,237,.1)', background: '#fff', overflow: 'clip' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'marq 26s linear infinite', whiteSpace: 'nowrap', willChange: 'transform' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', paddingRight: '40px' }}>
          <span className="mono" style={{ fontSize: '11px', letterSpacing: '.16em', color: '#7c3aed', textTransform: 'uppercase' }}>Demonstrated signal for</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Stripe</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Google</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Meta</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Airbnb</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Lattice</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Razorpay</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Ramp</span><span style={{ color: '#cdc8dc' }}>✦</span>
        </div>
        <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '40px', paddingRight: '40px' }}>
          <span className="mono" style={{ fontSize: '11px', letterSpacing: '.16em', color: '#7c3aed', textTransform: 'uppercase' }}>Demonstrated signal for</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Stripe</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Google</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Meta</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Airbnb</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Lattice</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Razorpay</span><span style={{ color: '#cdc8dc' }}>✦</span><span className="serif" style={{ fontSize: '30px', color: '#3b364d' }}>Ramp</span><span style={{ color: '#cdc8dc' }}>✦</span>
        </div>
      </div>
    </section>
  );
}
