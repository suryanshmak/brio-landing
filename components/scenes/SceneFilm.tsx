/**
 * SceneFilm — "watch it listen." A Higgsfield-generated push-in of a real
 * candidate mid-interview; the scroll scrubs the footage, and the product
 * assembles OUT of it: pinned quotes, live signals, the readiness score,
 * and finally the profile. The film is the dashboard.
 *
 * All [data-fui] overlays carry their reveal window in the attribute value
 * (section progress 0..1) and are driven by SigEngine.filmFrame. Inline
 * opacity 0 is overridden to visible under prefers-reduced-motion.
 */
export default function SceneFilm() {
  const chip = {
    fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.16em',
    borderRadius: '6px', padding: '3px 8px', flexShrink: '0',
  } as const;
  return (
    <section id="s-film" data-vis="film" data-screen-label="02 Watch It Listen" style={{ position: 'relative', height: '340vh', background: '#05070f' }}>
      <div style={{ position: 'sticky', top: '0', height: '100vh', overflow: 'clip' }}>
        <video
          data-film=""
          aria-hidden="true"
          src="/interview-scrub.mp4"
          poster="/interview-poster.jpg"
          muted
          playsInline
          preload="auto"
          style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
        ></video>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg,rgba(5,7,15,.62),transparent 26%,transparent 58%,rgba(5,7,15,.78))', pointerEvents: 'none' }}></div>

        {/* recorder chrome */}
        <div style={{ position: 'absolute', top: '0', left: '0', right: '0', display: 'flex', alignItems: 'center', gap: '12px', padding: '84px 4vw 0' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.16em', color: '#5ee1ff' }}>
            <span data-loop="dotp" data-dur="1.4" style={{ display: 'inline-block' }}>●</span> <span data-film-tc="">REC 00:07:42</span>
          </span>
          <span data-scr="" style={{ margin: '0 auto', fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '.26em', color: '#93a5d6' }}>02 · WATCH IT LISTEN</span>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: '9.5px', letterSpacing: '.16em', color: '#7d8bb8', border: '1px solid rgba(255,255,255,.16)', borderRadius: '999px', padding: '5px 12px' }}>LIVE ANALYSIS</span>
        </div>

        {/* pinned quotes — what it heard, anchored to the speaker */}
        <div className="fui-qa" data-fui=".26" style={{ opacity: '0', position: 'absolute', left: '7%', top: '30%', maxWidth: '300px', borderRadius: '12px', border: '1px solid rgba(255,255,255,.14)', background: 'rgba(5,10,22,.72)', backdropFilter: 'blur(8px)', padding: '11px 14px', willChange: 'transform,opacity' }}>
          <div style={{ fontSize: '13px', color: '#eef3ff', lineHeight: '1.45' }}>&ldquo;cap the blast radius first&rdquo;</div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '7px' }}>
            <span style={{ ...chip, color: '#f5a524', border: '1px solid rgba(245,165,36,.4)' }}>OWNERSHIP</span>
            <span style={{ ...chip, color: '#7d8bb8', border: '1px solid rgba(255,255,255,.12)' }}>00:08:04</span>
          </div>
        </div>
        <div className="fui-qb" data-fui=".38" style={{ opacity: '0', position: 'absolute', right: '7%', top: '24%', maxWidth: '300px', borderRadius: '12px', border: '1px solid rgba(255,255,255,.14)', background: 'rgba(5,10,22,.72)', backdropFilter: 'blur(8px)', padding: '11px 14px', willChange: 'transform,opacity' }}>
          <div style={{ fontSize: '13px', color: '#eef3ff', lineHeight: '1.45' }}>&ldquo;bisect the deploy, halve the surface&rdquo;</div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '7px' }}>
            <span style={{ ...chip, color: '#9b7bf8', border: '1px solid rgba(155,123,248,.4)' }}>METHOD</span>
            <span style={{ ...chip, color: '#7d8bb8', border: '1px solid rgba(255,255,255,.12)' }}>00:08:11</span>
          </div>
        </div>

        {/* signal meters — computed live */}
        <div className="fui-m" style={{ position: 'absolute', left: '7%', bottom: '27%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            ['PROBLEM READING', '86', '.54'],
            ['REASONING CLARITY', '79', '.585'],
            ['TECHNICAL', '84', '.63'],
          ].map(([label, val, w]) => (
            <div key={label} data-fui={w} style={{ opacity: '0', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.14)', background: 'rgba(5,10,22,.72)', backdropFilter: 'blur(8px)', padding: '7px 13px', willChange: 'transform,opacity' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.16em', color: '#93a5d6' }}>{label}</span>
              <span data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontSize: '15px', color: '#eef3ff', fontVariantNumeric: 'tabular-nums' }}>{val}</span>
            </div>
          ))}
        </div>

        {/* readiness — resolves as if computed */}
        <div className="fui-r" data-fui=".68" style={{ opacity: '0', position: 'absolute', right: '7%', bottom: '25%', textAlign: 'right', willChange: 'transform,opacity' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', justifyContent: 'flex-end' }}>
            <span data-film-n="" data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '830', fontStretch: '112%', fontSize: 'clamp(64px,7vw,110px)', lineHeight: '.8', color: '#5ee1ff', letterSpacing: '-.03em', fontVariantNumeric: 'tabular-nums', textShadow: '0 0 60px rgba(94,225,255,.35)' }}>0</span>
            <div style={{ paddingBottom: '6px' }}>
              <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontSize: '26px', color: '#eef3ff', lineHeight: '1' }}>A</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.16em', color: '#93a5d6' }}>READINESS</div>
            </div>
          </div>
          <div style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.18em', color: '#5ee1ff', border: '1px solid rgba(94,225,255,.35)', borderRadius: '999px', padding: '5px 12px' }}>BAND A · VERIFIED</div>
        </div>

        {/* the profile emerges from the interview */}
        <div className="fui-p" data-fui=".8" style={{ opacity: '0', position: 'absolute', left: '50%', bottom: '7vh', transform: 'translateX(-50%)', width: 'min(520px,90vw)', borderRadius: '18px', border: '1px solid rgba(96,158,255,.3)', background: 'linear-gradient(180deg,rgba(12,24,52,.85),rgba(5,10,22,.92))', backdropFilter: 'blur(12px)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 30px 80px -30px rgba(0,0,0,.8)', willChange: 'transform,opacity' }}>
          <span aria-hidden="true" style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'linear-gradient(135deg,var(--av1),var(--av2))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: '0' }}>AM</span>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div data-disp="" style={{ fontFamily: 'var(--f-disp)', fontWeight: '760', fontStretch: '108%', fontSize: '17px', color: '#fff', lineHeight: '1.1' }}>Aarav Mehta</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.12em', color: '#9fb0da', marginTop: '4px' }}>BACKEND ENGINEER · brio.so/p/aarav</div>
          </div>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: '8.5px', letterSpacing: '.14em', color: 'var(--zacc-ink)', background: 'var(--zacc)', borderRadius: '999px', padding: '5px 11px', fontWeight: '700', flexShrink: '0' }}>VERIFIED ✓</span>
        </div>

        <div style={{ position: 'absolute', left: '0', right: '0', bottom: '2.4vh', textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '9px', letterSpacing: '.26em', color: '#7580a3' }}>ONE TAKE · SCORED ON SUBSTANCE</div>
      </div>
    </section>
  );
}
