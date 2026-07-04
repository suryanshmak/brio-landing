"use client";

import { useEffect, useRef } from "react";

/**
 * Orb studies — five candidate "natural" forms for the Brio listening entity,
 * rendered side by side with the same ice palette and mouse reactivity so the
 * differences are purely about character. Pick one; it gets ported into
 * SigEngine's makeOrbGL.
 */

const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

const COMMON =
  "precision highp float;\n" +
  "uniform vec2 uR;uniform float uT;uniform vec2 uM;uniform float uP;uniform vec3 uA;uniform vec3 uB;\n" +
  "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n" +
  "float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);\n" +
  "return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}\n" +
  "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n2(p);p=p*2.03+vec2(7.3,3.1);a*=.5;}return v;}\n" +
  "float voice(float t){float v=sin(t*2.3)*sin(t*3.1+1.7)*sin(t*.7+4.);return smoothstep(.12,.8,v*v);}\n";

const SHADERS: Record<string, string> = {
  aurora:
    COMMON +
    "void main(){\n" +
    "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
    "float t=uT;float vc=voice(t);\n" +
    "uv-=uM*.05*uP;\n" +
    "float r=length(uv);\n" +
    "float an=atan(uv.y,uv.x);\n" +
    "vec2 q=vec2(an*1.4, r*2.6-t*.28);\n" +
    "vec2 warp=vec2(fbm(q+vec2(0.,t*.16)),fbm(q+vec2(3.7,-t*.13)));\n" +
    "float f=fbm(q+1.1*warp);\n" +
    "float band=smoothstep(.34,.9,f)*(.65+.35*vc);\n" +
    "float mask=exp(-r*r*6.2)*(.85+.06*sin(t*.8));\n" +
    "float glow=exp(-r*r*2.6)*.16;\n" +
    "float m=band*mask*1.7+mask*.22+glow;\n" +
    "float fade=1.-smoothstep(.4,.5,r);m*=fade;\n" +
    "vec3 col=mix(uA,uB,clamp(f*1.1+vc*.2,0.,1.));\n" +
    "gl_FragColor=vec4(col*(.5+.7*min(m,1.2)),clamp(m,0.,1.));\n" +
    "}",
  liquid:
    COMMON +
    "void main(){\n" +
    "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
    "float t=uT;float vc=voice(t);\n" +
    "uv-=uM*.06*uP;\n" +
    "float r=length(uv);\n" +
    "float an=atan(uv.y,uv.x);\n" +
    "float wob=sin(an*3.+t*.8)*.022+sin(an*5.-t*.6)*.014+(fbm(vec2(an*.9+3.,t*.14))-.5)*.05;\n" +
    "float rad=.31*(1.+.016*sin(t*.7))+wob*(.35+.65*vc);\n" +
    "float d=r-rad;\n" +
    "float body=1.-smoothstep(-.012,.012,d);\n" +
    "float depth=1.-smoothstep(-.3,.02,d);\n" +
    "float inner=fbm(uv*2.6+vec2(t*.05,-t*.04));\n" +
    "float caust=pow(fbm(uv*4.2+vec2(-t*.07,t*.05)),2.)*1.4;\n" +
    "float rim=exp(-abs(d)*64.);\n" +
    "float sss=exp(-max(d,0.)*9.)*.18;\n" +
    "float m=body*(.22+.34*inner+.3*caust*depth)+rim*(.75+.45*vc+.5*uP)+sss;\n" +
    "float fade=1.-smoothstep(.42,.5,r);m*=fade;\n" +
    "vec3 col=mix(uA,uB,clamp(.25+.45*inner+.5*rim,0.,1.));\n" +
    "gl_FragColor=vec4(col*(.5+.68*min(m,1.25)),clamp(m,0.,1.));\n" +
    "}",
  ink:
    COMMON +
    "void main(){\n" +
    "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
    "float t=uT;float vc=voice(t);\n" +
    "uv-=uM*.05*uP;\n" +
    "float rot=t*.045;\n" +
    "vec2 p=mat2(cos(rot),-sin(rot),sin(rot),cos(rot))*uv;\n" +
    "float r=length(p);\n" +
    "float an=atan(p.y,p.x);\n" +
    "float w=fbm(vec2(an*1.6+fbm(vec2(an*2.4,t*.18))*1.4, r*2.8-t*.22));\n" +
    "float dens=smoothstep(.28,.92,w)*(1.-smoothstep(.1,.5,r));\n" +
    "dens*=.75+.25*sin(t*.6)+.35*vc;\n" +
    "float core=exp(-r*r*11.)*(.4+.2*vc);\n" +
    "float wisp=pow(fbm(vec2(an*3.2,r*5.-t*.5)),3.)*exp(-r*3.)*1.2;\n" +
    "float m=dens*1.35+core+wisp;\n" +
    "float fade=1.-smoothstep(.4,.5,r);m*=fade;\n" +
    "vec3 col=mix(uA,uB,clamp(w+core*.8,0.,1.));\n" +
    "gl_FragColor=vec4(col*(.5+.66*min(m,1.2)),clamp(m,0.,1.));\n" +
    "}",
  jelly:
    COMMON +
    "void main(){\n" +
    "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
    "float t=uT;float vc=voice(t);\n" +
    "uv-=uM*.06*uP;\n" +
    "float r=length(uv);\n" +
    "float an=atan(uv.y,uv.x);\n" +
    "float body=exp(-r*r*8.5)*(.42+.14*sin(t*1.05)+.2*vc);\n" +
    "float ph1=fract(t*.3);\n" +
    "float ph2=fract(t*.3+.5);\n" +
    "float ring1=exp(-abs(r-(.1+ph1*.34))*30.)*(1.-ph1)*(1.-ph1);\n" +
    "float ring2=exp(-abs(r-(.1+ph2*.34))*30.)*(1.-ph2)*(1.-ph2);\n" +
    "float tend=pow(fbm(vec2(an*2.6+t*.06, r*4.2-t*.5)),2.4)*exp(-r*2.4)*(.8+.5*vc);\n" +
    "float m=body+(ring1+ring2)*(.4+.4*vc)+tend;\n" +
    "float fade=1.-smoothstep(.42,.5,r);m*=fade;\n" +
    "vec3 col=mix(uA,uB,clamp(r*1.9+.25*sin(t*.4)+.2*vc,0.,1.));\n" +
    "gl_FragColor=vec4(col*(.52+.66*min(m,1.2)),clamp(m,0.,1.));\n" +
    "}",
  iris:
    COMMON +
    "void main(){\n" +
    "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
    "float t=uT;float vc=voice(t);\n" +
    "vec2 p=uv-uM*.05*uP;\n" +
    "float r=length(p);\n" +
    "float an=atan(p.y,p.x);\n" +
    "float amp=(.22+.78*vc);\n" +
    "float breath=1.+.02*sin(t*.9);\n" +
    "float w=sin(an*7.+t*1.4)*.3+sin(an*13.-t*2.2)*.18+sin(an*23.+t*3.6)*.1;\n" +
    "float rad=.3*breath*(1.+.09*w*(amp*.6+.08));\n" +
    "float d=r-rad;\n" +
    "float ring=exp(-abs(d)*44.)*(.8+.55*vc);\n" +
    "float tid=floor(an*7.639437+.5);\n" +
    "float seg=abs(fract(an*7.639437+.5)-.5)*2.;\n" +
    "float bl=n2(vec2(tid*.37,t*1.9));\n" +
    "float len=.028+.13*bl*(.2+.8*vc);\n" +
    "float bar=(1.-smoothstep(.26,.45,seg))*smoothstep(.0,.008,d)*(1.-smoothstep(len-.014,len,d));\n" +
    "float ticks=bar*(.3+.8*vc);\n" +
    "float core=(1.-smoothstep(-.5,.0,d))*(.14+.12*fbm(p*3.+vec2(t*.1,-t*.07))+.1*vc);\n" +
    "float m=ring*1.1+ticks+core;\n" +
    "float fade=1.-smoothstep(.44,.52,r);m*=fade;\n" +
    "vec3 col=mix(uA,uB,clamp(.35+.5*vc,0.,1.));\n" +
    "gl_FragColor=vec4(col*(.5+.62*min(m,1.25)),clamp(m,0.,1.));\n" +
    "}",
};

const STUDIES = [
  { key: "aurora", name: "A · AURORA", desc: "Silk curtains of light. No geometry, pure flow." },
  { key: "liquid", name: "B · LIQUID", desc: "A water-drop lens. Thin meniscus, shimmer inside." },
  { key: "ink", name: "C · INK", desc: "Ink blooming in water. Breathes while it listens." },
  { key: "jelly", name: "D · JELLY", desc: "Bioluminescent pulse. Rings travel out as it hears." },
  { key: "iris", name: "E · IRIS", desc: "The current ring, for comparison." },
];

export default function OrbLab() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const A = [79 / 255, 128 / 255, 255 / 255];
    const B = [94 / 255, 225 / 255, 255 / 255];
    const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    addEventListener("mousemove", onMove, { passive: true });

    const items: any[] = [];
    grid.querySelectorAll("canvas").forEach((cv) => {
      const key = cv.getAttribute("data-study")!;
      const gl = cv.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
      if (!gl) return;
      const mk = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
          console.error("orb-lab shader [" + key + "]:", gl.getShaderInfoLog(s));
          throw new Error("shader");
        }
        return s;
      };
      let pr: WebGLProgram;
      try {
        pr = gl.createProgram()!;
        gl.attachShader(pr, mk(gl.VERTEX_SHADER, VS));
        gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, SHADERS[key]));
        gl.linkProgram(pr);
        if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error("link");
      } catch (e) { return; }
      gl.useProgram(pr);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, "p");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const U: Record<string, WebGLUniformLocation | null> = {};
      ["uR", "uT", "uM", "uP", "uA", "uB"].forEach((n) => { U[n] = gl.getUniformLocation(pr, n); });
      const resize = () => {
        const r = cv.getBoundingClientRect();
        if (!r.width) return;
        const d = Math.min(devicePixelRatio || 1, 1.5);
        cv.width = Math.round(r.width * d);
        cv.height = Math.round(r.height * d);
        gl.viewport(0, 0, cv.width, cv.height);
      };
      resize();
      items.push({ cv, gl, U, resize });
    });

    const onResize = () => items.forEach((it) => it.resize());
    addEventListener("resize", onResize, { passive: true });

    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const t = (now - t0) / 1000;
      for (const it of items) {
        const { cv, gl, U } = it;
        const r = cv.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        const mn = Math.min(r.width, r.height);
        const mx = (mouse.x - r.left - r.width / 2) / mn;
        const my = -(mouse.y - r.top - r.height / 2) / mn;
        const dist = Math.hypot(mouse.x - (r.left + r.width / 2), mouse.y - (r.top + r.height / 2));
        const prox = Math.max(0, 1 - dist / (mn * 1.2));
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(U.uR, cv.width, cv.height);
        gl.uniform1f(U.uT, t);
        gl.uniform2f(U.uM, mx, my);
        gl.uniform1f(U.uP, prox);
        gl.uniform3f(U.uA, A[0], A[1], A[2]);
        gl.uniform3f(U.uB, B[0], B[1], B[2]);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#04070f", color: "#eef3ff", padding: "80px 6vw 90px", fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "10.5px", letterSpacing: ".26em", color: "#57c4dd" }}>LAB · ORB STUDIES</div>
            <h1 style={{ fontWeight: 790, fontStretch: "111%" as any, fontSize: "clamp(34px,4.6vw,64px)", lineHeight: "1", letterSpacing: "-.03em", margin: "14px 0 0" }}>Which one feels alive?</h1>
            <p style={{ fontSize: "15px", color: "#8791b3", margin: "14px 0 0", maxWidth: "56ch", lineHeight: "1.6" }}>Five candidates for the listening entity. Same palette, same rhythm of speech and pauses, different nature. Move your cursor near each one: they notice.</p>
          </div>
          <a href="/" style={{ fontFamily: "var(--font-mono), monospace", fontSize: "10px", letterSpacing: ".18em", color: "#b9c3de", textDecoration: "none", border: "1px solid rgba(255,255,255,.17)", borderRadius: "999px", padding: "9px 16px", flexShrink: 0 }}>← BACK TO SITE</a>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginTop: "44px" }}>
          {STUDIES.map((s) => (
            <div key={s.key} style={{ borderRadius: "20px", border: "1px solid rgba(255,255,255,.09)", background: "linear-gradient(180deg,rgba(12,24,52,.5),rgba(5,10,22,.7))", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "1", background: "radial-gradient(90% 90% at 50% 50%,#0a1428,#04070f 78%)" }}>
                <canvas data-study={s.key} style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}></canvas>
              </div>
              <div style={{ padding: "13px 16px 15px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "10px", letterSpacing: ".2em", color: "#5ee1ff" }}>{s.name}</div>
                <div style={{ fontSize: "12.5px", color: "#8791b3", marginTop: "6px", lineHeight: "1.5" }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
