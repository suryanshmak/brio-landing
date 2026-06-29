export default function Statement() {
  return (
    <section className="scanwrap" style={{ padding: '160px 6vw', position: 'relative' }}>
      <div className="mono" style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9591a8', marginBottom: '26px' }}>The difference</div>
      <div className="scanbox" style={{ position: 'relative', maxWidth: '17ch', fontSize: 'clamp(40px,6.4vw,92px)', lineHeight: '1.06', letterSpacing: '-.015em' }}>
        <div className="serif" style={{ color: '#c9c4d6' }}>Résumés say what you did. <span style={{ fontStyle: 'italic' }}>Brio shows what you can do.</span></div>
        <div className="scanfill serif" aria-hidden="true" style={{ position: 'absolute', inset: '0', color: '#16131f', clipPath: 'inset(0 100% 0 0)' }}>Résumés say what you did. <span style={{ fontStyle: 'italic', color: '#7c3aed' }}>Brio shows what you can do.</span></div>
        <div className="scanline" style={{ position: 'absolute', top: '-2%', bottom: '-2%', left: '0', width: '2px', background: 'linear-gradient(#7c3aed,#0ea5e9)', boxShadow: '0 0 18px 3px rgba(124,58,237,.5)', opacity: '0' }}></div>
      </div>
    </section>
  );
}
