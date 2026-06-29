export default function ProofBento() {
  return (
    <section id="proof" style={{ padding: '120px 6vw 110px', position: 'relative', overflow: 'clip' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <div data-reveal className="mono" style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#7c3aed' }}>By the numbers</div>
          <h2 data-reveal data-d="1" className="serif" style={{ fontSize: 'clamp(40px,6vw,86px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '14px 0 0' }}>Proof, <span style={{ fontStyle: 'italic' }}>not promises.</span></h2>
        </div>
        <div data-reveal data-d="2" className="mono" style={{ fontSize: '11px', color: '#9591a8', letterSpacing: '.1em', maxWidth: '30ch', textAlign: 'right', lineHeight: '1.6' }}>Aggregate signal across every verified Brio interview to date.</div>
      </div>

      <div className="proofbento">
        {/* BIG STAT 2x2 */}
        <div className="ptile tilt" style={{ gridColumn: '1/3', gridRow: '1/3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(160deg,#fbfaff,#f1eefc)' }}>
          <div className="gridlines"></div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="mono" style={{ fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#9591a8' }}>Verified interviews</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#4d7c0f', fontWeight: '600' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#65a30d', animation: 'dotp 2.4s infinite' }}></span>live</span>
          </div>
          <div style={{ position: 'relative' }}>
            <span data-count="12400" className="serif" style={{ fontSize: 'clamp(64px,8vw,104px)', lineHeight: '.85', color: '#7c3aed', letterSpacing: '-.02em' }}>12,400</span>
            <div style={{ fontSize: '14px', color: '#5b576f', marginTop: '8px', maxWidth: '34ch' }}>spoken, on-camera assessments scored on substance, and counting.</div>
            <svg viewBox="0 0 600 80" preserveAspectRatio="none" style={{ width: '100%', height: '56px', marginTop: '18px', overflow: 'visible' }}><defs><linearGradient id="pbf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7c3aed" stopOpacity=".22"/><stop offset="1" stopColor="#7c3aed" stopOpacity="0"/></linearGradient></defs><path d="M0,60 60,56 120,58 180,44 240,46 300,32 360,30 420,18 480,20 540,10 600,6 600,80 0,80Z" fill="url(#pbf)"/><polyline points="0,60 60,56 120,58 180,44 240,46 300,32 360,30 420,18 480,20 540,10 600,6" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"/></svg>
          </div>
        </div>
        {/* 340 placed */}
        <div className="ptile tilt" style={{ gridColumn: '3/4', gridRow: '1/2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span className="mono" style={{ fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#9591a8' }}>Candidates placed</span>
          <div><span data-count="340" className="serif" style={{ fontSize: 'clamp(44px,5vw,64px)', lineHeight: '.85', color: '#16131f', display: 'block' }}>340</span><div style={{ fontSize: '12.5px', color: '#16a34a', fontWeight: '600', marginTop: '6px' }}>▲ 38 this quarter</div></div>
        </div>
        {/* +23% lift */}
        <div className="ptile tilt" style={{ gridColumn: '4/5', gridRow: '1/2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(160deg,#f3fbe9,#eef7dd)', borderColor: 'rgba(95,156,11,.22)' }}>
          <span className="mono" style={{ fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#4d7c0f' }}>Avg readiness lift</span>
          <div><div style={{ display: 'flex', alignItems: 'baseline' }}><span className="serif" style={{ fontSize: 'clamp(44px,5vw,64px)', lineHeight: '.85', color: '#4d7c0f' }}>+</span><span data-count="23" className="serif" style={{ fontSize: 'clamp(44px,5vw,64px)', lineHeight: '.85', color: '#4d7c0f' }}>23</span><span className="serif" style={{ fontSize: '32px', color: '#4d7c0f' }}>%</span></div><div style={{ fontSize: '12.5px', color: '#5b576f', marginTop: '6px' }}>over four sessions</div></div>
        </div>
        {/* testimonial 2x1 */}
        <div className="ptile tilt" style={{ gridColumn: '3/5', gridRow: '2/3', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#16131f', borderColor: 'rgba(255,255,255,.08)' }}>
          <div className="serif" style={{ fontSize: 'clamp(20px,2.1vw,27px)', lineHeight: '1.3', color: '#f3efff' }}>“I stopped sending résumés. I send my Brio, <span style={{ color: '#c9f24d' }}>it says more in 84 than a page ever did.</span>”</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginTop: '18px' }}><span style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#3f1d80)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px' }}>AM</span><div><div style={{ fontSize: '13px', color: '#f3efff', fontWeight: '600' }}>Aarav M.</div><div className="mono" style={{ fontSize: '10px', color: '#9591a8' }}>Backend Engineer · placed at Stripe</div></div></div>
        </div>
        {/* distribution ruler 2x1 */}
        <div className="ptile tilt" style={{ gridColumn: '1/3', gridRow: '3/4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span className="mono" style={{ fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#9591a8' }}>Readiness distribution</span><span className="mono" style={{ fontSize: '10.5px', color: '#7c3aed' }}>median 71</span></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '74px' }}><span style={{ flex: '1', height: '8%', background: 'rgba(124,58,237,.28)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '14%', background: 'rgba(124,58,237,.28)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '24%', background: 'rgba(124,58,237,.28)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '36%', background: 'rgba(124,58,237,.3)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '52%', background: 'rgba(124,58,237,.34)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '70%', background: 'rgba(124,58,237,.55)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '86%', background: 'rgba(124,58,237,.8)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '100%', background: '#7c3aed', borderRadius: '3px 3px 0 0', boxShadow: '0 0 18px -2px rgba(124,58,237,.7)' }}></span><span style={{ flex: '1', height: '88%', background: 'rgba(124,58,237,.8)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '72%', background: 'rgba(124,58,237,.55)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '50%', background: 'rgba(124,58,237,.34)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '28%', background: 'rgba(124,58,237,.3)', borderRadius: '3px 3px 0 0' }}></span><span style={{ flex: '1', height: '15%', background: 'rgba(124,58,237,.28)', borderRadius: '3px 3px 0 0' }}></span></div>
            <div style={{ position: 'relative', height: '13px', marginTop: '7px', borderTop: '1px solid #e3e1ee' }}><span className="mono" style={{ position: 'absolute', left: '0', top: '3px', fontSize: '9.5px', color: '#9591a8' }}>0</span><span className="mono" style={{ position: 'absolute', left: '25%', top: '3px', fontSize: '9.5px', color: '#9591a8', transform: 'translateX(-50%)' }}>25</span><span className="mono" style={{ position: 'absolute', left: '50%', top: '3px', fontSize: '9.5px', color: '#9591a8', transform: 'translateX(-50%)' }}>50</span><span className="mono" style={{ position: 'absolute', left: '75%', top: '3px', fontSize: '9.5px', color: '#9591a8', transform: 'translateX(-50%)' }}>75</span><span className="mono" style={{ position: 'absolute', right: '0', top: '3px', fontSize: '9.5px', color: '#9591a8' }}>100</span></div>
          </div>
        </div>
        {/* dark proven 2x1 */}
        <div className="ptile tilt" style={{ gridColumn: '3/5', gridRow: '3/4', display: 'flex', alignItems: 'center', gap: '22px', background: 'radial-gradient(120% 120% at 100% 0%,rgba(124,58,237,.5),transparent 60%),#0b0814', borderColor: 'rgba(124,58,237,.3)' }}>
          <div><div className="mono" style={{ fontSize: '10.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#c9f24d' }}>Proven Score</div><div className="serif" style={{ fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: '1.08', color: '#f3efff', marginTop: '8px' }}>A in Coding → <span style={{ color: '#c9f24d' }}>84%</span> hit the 90-day bar</div><div className="mono" style={{ fontSize: '10.5px', color: '#9591a8', marginTop: '10px' }}>N=37 · 95% CI 71-92% · model v1</div></div>
        </div>
      </div>
    </section>
  );
}
