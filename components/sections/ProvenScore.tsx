export default function ProvenScore() {
  return (
    <section id="proven" style={{ padding: '120px 6vw 130px', position: 'relative', background: 'linear-gradient(180deg,#f5f4fb,#eef0f9)', overflow: 'clip' }}>
      <div className="provengrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '54px', alignItems: 'center' }}>
        <div>
          <div data-reveal className="mono" style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#16a34a' }}>Proven Score</div>
          <h2 data-reveal data-d="1" className="serif" style={{ fontSize: 'clamp(38px,5.6vw,82px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '14px 0 0' }}>Does the signal <span style={{ fontStyle: 'italic' }}>predict</span> the hire?</h2>
          <p data-reveal data-d="2" style={{ fontSize: '16px', color: '#5b576f', margin: '20px 0 0', maxWidth: '46ch', lineHeight: '1.55' }}>We publish how each score band actually predicts on-the-job outcomes, gated on real data, always with a sample size and confidence interval. A predictive signal, never a hiring decision.</p>
          <div data-reveal data-d="3" style={{ display: 'flex', gap: '8px', marginTop: '22px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(95,156,11,.4)', background: 'rgba(95,156,11,.12)', color: '#4d7c0f', borderRadius: '999px', padding: '5px 12px', fontSize: '11.5px', fontWeight: '600' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5f9c0b' }}></span>Published · live</span>
            <span className="mono" style={{ fontSize: '11px', color: '#5b576f', border: '1px solid #d7d9e6', borderRadius: '7px', padding: '5px 9px' }}>N = 37</span>
            <span className="mono" style={{ fontSize: '11px', color: '#5b576f', border: '1px solid #d7d9e6', borderRadius: '7px', padding: '5px 9px' }}>95% CI 71-92%</span>
          </div>
        </div>
        <div>
          <div data-reveal data-rv="scale" style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}><span data-count="84" className="serif" style={{ fontSize: 'clamp(80px,11vw,150px)', lineHeight: '.8', color: '#16a34a', letterSpacing: '-.03em', fontVariantNumeric: 'tabular-nums' }}>84</span><span className="serif" style={{ fontSize: '52px', color: '#16a34a' }}>%</span></div>
          <div data-reveal data-d="1" style={{ fontSize: '14px', color: '#5b576f', marginTop: '6px' }}>of a Brio <b style={{ color: '#1a1626' }}>A in Coding · Mid</b> meet-or-exceed at 90 days.</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px', height: '170px', marginTop: '26px', padding: '0 4px' }}>
            <div data-prov style={{ flex: '1', height: '14%', background: 'rgba(22,163,74,.25)', borderRadius: '5px 5px 0 0' }}></div>
            <div data-prov style={{ flex: '1', height: '30%', background: 'rgba(22,163,74,.4)', borderRadius: '5px 5px 0 0' }}></div>
            <div data-prov style={{ flex: '1', height: '58%', background: 'rgba(22,163,74,.6)', borderRadius: '5px 5px 0 0' }}></div>
            <div data-prov style={{ flex: '1', height: '100%', background: '#16a34a', borderRadius: '5px 5px 0 0', boxShadow: '0 0 30px -6px rgba(22,163,74,.6)' }}></div>
            <div data-prov style={{ flex: '1', height: '74%', background: 'rgba(22,163,74,.6)', borderRadius: '5px 5px 0 0' }}></div>
            <div data-prov style={{ flex: '1', height: '40%', background: 'rgba(22,163,74,.4)', borderRadius: '5px 5px 0 0' }}></div>
            <div data-prov style={{ flex: '1', height: '20%', background: 'rgba(22,163,74,.25)', borderRadius: '5px 5px 0 0' }}></div>
          </div>
          <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', color: '#9591a8', fontSize: '10.5px' }}><span>C</span><span>B−</span><span>B</span><span style={{ color: '#16a34a', fontWeight: '600' }}>A · 84%</span><span>B</span><span>B−</span><span>C</span></div>
        </div>
      </div>
    </section>
  );
}
