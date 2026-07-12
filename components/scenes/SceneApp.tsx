import SceneAppWorld from "./SceneAppWorld";
import SceneAppCrisp from "./SceneAppCrisp";

/**
 * SCENE 01 · THE APP — zoom in → interview → score → shareable profile.
 * The sticky stage holds the room/world (with the laptop), the full-viewport
 * in-app layer, and the dolly-zoom overlays (speed lines, letterbox bars,
 * pass-through flash). All motion is driven by SigEngine.
 */
export default function SceneApp() {
  return (
    <section
      id="s-app"
      data-vis="app"
      data-screen-label="01 The App Journey"
      style={{ position: 'relative', height: '820vh', background: 'var(--bgA)' }}
    >
      <div data-z="stick" style={{ position: 'sticky', top: '0', height: '100vh', overflow: 'clip' }}>
        <SceneAppWorld />
        <SceneAppCrisp />
        <div
          data-z="speed"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-12%',
            zIndex: '7',
            opacity: '0',
            pointerEvents: 'none',
            background:
              'repeating-conic-gradient(from 0deg at 50% 47%,transparent 0deg 5.4deg,rgba(150,205,255,.13) 5.9deg 6.5deg,transparent 7deg 11.6deg)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 47%,transparent 25%,#000 60%)',
            maskImage: 'radial-gradient(circle at 50% 47%,transparent 25%,#000 60%)',
            willChange: 'transform,opacity',
          }}
        ></div>
        <div
          data-z="barT"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '7vh',
            background: '#010208',
            zIndex: '8',
            transform: 'translateY(-101%)',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        ></div>
        <div
          data-z="barB"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '7vh',
            background: '#010208',
            zIndex: '8',
            transform: 'translateY(101%)',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        ></div>
        <div
          data-z="flash"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '0',
            zIndex: '7',
            background:
              'radial-gradient(circle at 50% 47%,rgba(228,242,255,.9),rgba(120,190,255,.3) 34%,rgba(90,120,255,.12) 52%,transparent 70%)',
            opacity: '0',
            pointerEvents: 'none',
            willChange: 'transform,opacity',
          }}
        ></div>
      </div>
    </section>
  );
}
