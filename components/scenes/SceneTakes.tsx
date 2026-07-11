export default function SceneTakes() {
  return (
    <section id="s-takes" data-vis="takes" data-screen-label="03 Three Takes" style={{ position: 'relative', overflow: 'clip', padding: '18vh 6vw', background: 'var(--bgD)' }}>
      <div id="takesgrid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '6vw', alignItems: 'center', maxWidth: '1340px', margin: '0 auto' }}>
        <div>
          <div data-scr="" style={{ fontFamily: 'var(--f-mono)', fontSize: '10.5px', letterSpacing: '.26em', color: 'var(--acc-dim)' }}>04 · THREE TAKES</div>
          <h2 data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '790', fontStretch: '111%', fontSize: 'clamp(40px,5.2vw,84px)', lineHeight: '.98', letterSpacing: '-.032em', margin: '16px 0 0', textWrap: 'balance' }}>Three takes. <span data-ital="" style={{ color: 'var(--acc-hl)' }}>Your best self.</span></h2>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: '1.6', color: 'var(--ink2)', margin: '24px 0 0', maxWidth: '46ch' }}>One shot rarely shows what you can do. Brio gives you up to three takes per question: re-record until it sounds like you, keep the one you are proud of. Only the take you keep gets scored.</p>
          <div style={{ marginTop: '28px', borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
            <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '740', fontStretch: '108%', fontSize: 'clamp(19px,1.9vw,25px)', lineHeight: '1.15', letterSpacing: '-.02em', color: 'var(--ink)' }}>Private by default. Public when you choose.</div>
            <p style={{ fontSize: 'clamp(14px,1.4vw,16.5px)', lineHeight: '1.6', color: 'var(--ink2)', margin: '12px 0 0', maxWidth: '48ch' }}>Every interview starts private: just you and your feedback. Publish your profile when it represents you, or keep practicing. Flip it back anytime.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.14em', color: 'var(--ink3)', border: '1px solid var(--line2)', borderRadius: '999px', padding: '5px 11px' }}>ONLY YOUR KEPT TAKE IS SCORED</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.14em', color: 'var(--ink3)', border: '1px solid var(--line2)', borderRadius: '999px', padding: '5px 11px' }}>UNPUBLISH ANYTIME</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.14em', color: 'var(--ink3)', border: '1px solid var(--line2)', borderRadius: '999px', padding: '5px 11px' }}>PRACTICE STAYS PRIVATE</span>
          </div>
        </div>

        <div style={{ borderRadius: '22px', border: '1px solid var(--panelbrd)', background: 'linear-gradient(180deg,var(--panel1),var(--panel2))', boxShadow: '0 40px 90px -50px var(--shadow1)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '13px 18px', borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--ink3)' }}>Q2 · SYSTEM DESIGN</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.2em', color: 'var(--acc-dim)' }}>PICK YOUR TAKE</span>
          </div>
          <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div data-asm="0" data-asm-o=".55" style={{ display: 'flex', alignItems: 'center', gap: '14px', borderRadius: '14px', border: '1px solid var(--line)', background: 'var(--wash)', padding: '12px 14px', opacity: '.55' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.14em', color: 'var(--ink3)', flexShrink: '0', width: '52px' }}>TAKE 1</span>
              <svg viewBox="0 0 200 30" preserveAspectRatio="none" style={{ flex: '1', height: '24px', minWidth: '0' }}><path data-draw="" d="M0,15 C18,24 34,6 52,15 S88,26 106,13 S148,4 166,17 S190,22 200,15" fill="none" stroke="var(--ink4)" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: 'var(--ink3)', flexShrink: '0' }}>0:58</span>
              <span style={{ fontSize: '12px', color: 'var(--ink3)', flexShrink: '0', display: 'none' }}></span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.12em', color: 'var(--ink4)', border: '1px solid var(--line)', borderRadius: '5px', padding: '2px 7px', flexShrink: '0' }}>DISCARDED</span>
            </div>
            <div data-asm="1" style={{ display: 'flex', alignItems: 'center', gap: '14px', borderRadius: '14px', border: '1px solid var(--acc-brd)', background: 'var(--acc-bg)', padding: '12px 14px', boxShadow: '0 0 34px -14px var(--acc)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.14em', color: 'var(--acc-dim)', flexShrink: '0', width: '52px' }}>TAKE 2</span>
              <svg viewBox="0 0 200 30" preserveAspectRatio="none" style={{ flex: '1', height: '24px', minWidth: '0' }}><path data-draw="" d="M0,15 C16,4 30,25 48,15 S82,3 100,16 S140,27 158,12 S186,6 200,15" fill="none" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: 'var(--ink2)', flexShrink: '0' }}>0:42</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.12em', color: 'var(--zacc-ink)', background: 'var(--acc)', borderRadius: '5px', padding: '2px 7px', fontWeight: '700', flexShrink: '0' }}>KEPT ✓ SCORED</span>
            </div>
            <div data-asm="2" data-asm-o=".55" style={{ display: 'flex', alignItems: 'center', gap: '14px', borderRadius: '14px', border: '1px solid var(--line)', background: 'var(--wash)', padding: '12px 14px', opacity: '.55' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.14em', color: 'var(--ink3)', flexShrink: '0', width: '52px' }}>TAKE 3</span>
              <svg viewBox="0 0 200 30" preserveAspectRatio="none" style={{ flex: '1', height: '24px', minWidth: '0' }}><path data-draw="" d="M0,15 C20,20 38,8 56,15 S94,23 112,14 S152,7 170,16 S192,19 200,15" fill="none" stroke="var(--ink4)" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', color: 'var(--ink3)', flexShrink: '0' }}>0:51</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8px', letterSpacing: '.12em', color: 'var(--ink4)', border: '1px solid var(--line)', borderRadius: '5px', padding: '2px 7px', flexShrink: '0' }}>DISCARDED</span>
            </div>
          </div>
          <div data-asm="3" style={{ borderTop: '1px solid var(--line)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.18em', color: 'var(--ink3)', flexShrink: '0' }}>VISIBILITY</span>
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', border: '1px solid var(--line2)', borderRadius: '18px', padding: '3px', gap: '3px' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.12em', color: 'var(--ink3)', borderRadius: '999px', padding: '5px 12px' }}>PRIVATE · ONLY YOU</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.12em', color: 'var(--zacc-ink)', background: 'var(--acc)', borderRadius: '999px', padding: '5px 12px', fontWeight: '700' }}>PUBLIC · DISCOVERABLE</span>
            </div>
            <span style={{ fontSize: '11.5px', color: 'var(--ink3)', lineHeight: '1.5', flexBasis: '100%', marginTop: '2px' }}>Aarav published after take 2. Recruiters found him in four days.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
