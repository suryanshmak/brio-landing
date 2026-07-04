export default function SiteFooter() {
  return (
    <footer style={{ position: 'relative', background: 'var(--bgD)', borderTop: '1px solid var(--line)', padding: '64px 6vw 34px' }}>
      <div id="footgrid" style={{ maxWidth: '1340px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '44px', alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'radial-gradient(circle at 32% 28%,var(--logo1),var(--logo2) 62%,var(--logo3))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>b</span>
            <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '700', fontStretch: '110%', fontSize: '18px', letterSpacing: '-.02em', color: 'var(--ink)' }}>brio</span>
          </div>
          <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--ink3)', margin: '16px 0 0', maxWidth: '34ch' }}>Real skills, shown out loud. Three takes, your best self forward, and you decide who sees it.</p>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.18em', color: 'var(--ink4)', marginTop: '18px' }}>PROOF, OUT LOUD · SINCE 2024</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.22em', color: 'var(--ink4)', marginBottom: '14px' }}>PRODUCT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#s-app" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>How it works</a>
            <a href="#s-takes" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Three takes</a>
            <a href="#s-cred" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>The credential</a>
            <a href="#s-disc" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>For recruiters</a>
            <a href="#s-valid" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Published validity</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.22em', color: 'var(--ink4)', marginBottom: '14px' }}>COMPANY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>About</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Manifesto</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Careers</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Contact</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.22em', color: 'var(--ink4)', marginBottom: '14px' }}>TRUST</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Privacy</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Security</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Terms</a>
            <a href="#" className="hv-ink" style={{ color: 'var(--ink3)', textDecoration: 'none', fontSize: '13px' }}>Your data</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1340px', margin: '44px auto 0', borderTop: '1px solid var(--line)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.16em', color: 'var(--ink4)' }}>© 2026 BRIO INC</span>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.16em', color: 'var(--ink4)', textAlign: 'right' }}>RECORDINGS ENCRYPTED AT REST · PRIVATE BY DEFAULT · DELETE YOUR DATA ANYTIME</span>
      </div>
    </footer>
  );
}
