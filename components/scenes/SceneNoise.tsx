export default function SceneNoise() {
  return (
    <section id="s-noise" data-vis="noise" data-screen-label="02 Noise to Signal" style={{ position: 'relative', height: '190vh', background: 'var(--bgC)' }}>
      <div style={{ position: 'sticky', top: '0', height: '100vh', overflow: 'clip', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div aria-hidden="true" data-par="a" style={{ position: 'absolute', left: '7%', top: '16%', width: '210px', padding: '16px', borderRadius: '14px', background: 'var(--wash)', border: '1px solid var(--line)', filter: 'blur(1.6px)', opacity: '.75' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink4)' }}>RÉSUMÉ · PDF</div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '12px', width: '86%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '8px', width: '70%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '8px', width: '92%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash)', marginTop: '8px', width: '55%' }}></div>
        </div>
        <div aria-hidden="true" data-par="b" style={{ position: 'absolute', right: '9%', top: '20%', width: '190px', padding: '16px', borderRadius: '14px', background: 'var(--wash)', border: '1px solid var(--line)', filter: 'blur(2.4px)', opacity: '.6' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink4)' }}>COVER LETTER</div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '12px', width: '78%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '8px', width: '90%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '8px', width: '62%' }}></div>
        </div>
        <div aria-hidden="true" data-par="c" style={{ position: 'absolute', left: '16%', bottom: '14%', width: '180px', padding: '16px', borderRadius: '14px', background: 'var(--wash)', border: '1px solid var(--line)', filter: 'blur(1.2px)', opacity: '.7' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.2em', color: 'var(--ink4)' }}>KEYWORDS.TXT</div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '12px', width: '66%' }}></div>
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--wash2)', marginTop: '8px', width: '84%' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: '2', padding: '0 6vw', maxWidth: '1200px', width: '100%' }}>
          <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.26em', color: 'var(--acc-dim)', marginBottom: '30px' }}>02 · THE DIFFERENCE</div>
          <div style={{ position: 'relative', maxWidth: '14ch', fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '108%', fontSize: 'clamp(44px,6.6vw,100px)', lineHeight: '1.02', letterSpacing: '-.03em' }} data-disp="">
            <div style={{ color: 'var(--ghost)' }}>Résumés say what you did. Brio shows what you <span data-ital="">can do.</span></div>
            <div data-noise="crisp" aria-hidden="true" style={{ position: 'absolute', inset: '0', color: 'var(--ink)', clipPath: 'inset(0 0 0 0)' }}>Résumés say what you did. Brio shows what you <span data-ital="" style={{ color: 'var(--acc-hl)' }}>can do.</span></div>
            <div data-noise="beam" aria-hidden="true" style={{ position: 'absolute', top: '-4%', bottom: '-4%', left: '0', width: '2px', background: 'linear-gradient(180deg,transparent,var(--acc),transparent)', boxShadow: '0 0 22px 3px var(--acc)', opacity: '0' }}></div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '6vh', right: '6vw', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.24em', color: 'var(--ink4)' }}>SIGNAL EXTRACTION — SCRUB ▸</div>
      </div>
    </section>
  );
}
