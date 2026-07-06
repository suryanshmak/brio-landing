export default function Chrome() {
  return (
    <>
      <div id="grain"></div>
      <div aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '58', pointerEvents: 'none', background: 'radial-gradient(130% 105% at 50% 42%,transparent 55%,var(--vig) 100%)' }}></div>
      <div className="ctick ct-tl"></div><div className="ctick ct-tr"></div><div className="ctick ct-bl"></div><div className="ctick ct-br"></div>

      <button data-snd="" type="button" className="hv-ink-acc" style={{ position: 'fixed', right: '18px', bottom: '18px', zIndex: '90', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.18em', color: 'var(--ink2)', background: 'var(--glass)', backdropFilter: 'blur(10px)', border: '1px solid var(--line2)', borderRadius: '999px', padding: '9px 14px', cursor: 'pointer' }}>
        <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', height: '10px' }}><span style={{ width: '2px', height: '40%', background: 'currentColor', borderRadius: '2px' }}></span><span style={{ width: '2px', height: '100%', background: 'currentColor', borderRadius: '2px' }}></span><span style={{ width: '2px', height: '65%', background: 'currentColor', borderRadius: '2px' }}></span></span>
        <span data-snd-tx="">SOUND · OFF</span>
      </button>

      <a href="#s-noise" className="skip-link">SKIP THE INTRO ↓</a>

      {/* NAV */}
      <nav data-nav="" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '80', display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 5vw', backdropFilter: 'blur(14px)', background: 'var(--nav0)', borderBottom: '1px solid var(--line)' }}>
        <a href="#s-app" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--ink)' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'radial-gradient(circle at 32% 28%,var(--logo1),var(--logo2) 62%,var(--logo3))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>b</span>
          <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '700', fontStretch: '110%', fontSize: '18px', letterSpacing: '-.02em' }}>brio</span>
        </a>
        <div id="navlinks" style={{ marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#s-app" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>How it works</a>
          <a href="#s-takes" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>Three takes</a>
          <a href="#s-cred" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>Credential</a>
          <a href="#s-disc" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>Recruiters</a>
          <a href="#s-valid" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>Validity</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#s-end" className="hv-ink" style={{ color: 'var(--ink2)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>Sign in</a>
          <a href="#s-end" className="hv-glow-1" style={{ background: 'var(--acc)', color: 'var(--acc-ink)', borderRadius: '999px', padding: '12px 22px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>Start free</a>
        </div>
      </nav>
    </>
  );
}
