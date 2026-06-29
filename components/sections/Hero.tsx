import ParticleField from "@/components/ParticleField";

export default function Hero() {
  return (
    <section
      id="top"
      className="heroPad"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "150px 5vw 90px",
        overflow: "hidden",
      }}
    >
      <ParticleField
        mode="wave"
        theme="light"
        style={{ position: "absolute", inset: "0", zIndex: "0" }}
      />
      <div
        style={{
          position: "absolute",
          inset: "0",
          zIndex: "1",
          pointerEvents: "none",
          background:
            "linear-gradient(90deg,rgba(245,244,251,.97) 0%,rgba(245,244,251,.78) 34%,rgba(245,244,251,.25) 62%,rgba(245,244,251,0) 100%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: "0",
          zIndex: "1",
          pointerEvents: "none",
          background: "linear-gradient(0deg,rgba(245,244,251,.85),transparent 36%)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: "2",
          maxWidth: "1180px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <div
            data-r
            data-d="1"
            className="pill"
            style={{ marginBottom: "24px" }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#65a30d",
                animation: "dotp 2.4s infinite",
              }}
            ></span>
            <span
              className="mono"
              style={{
                fontSize: "11px",
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: "#4d7c0f",
              }}
            >
              Voice-first · verified
            </span>
          </div>
          <h1
            data-r
            data-d="2"
            className="serif disp"
            style={{
              fontSize: "clamp(58px,8vw,104px)",
              lineHeight: ".96",
              letterSpacing: "-.02em",
              margin: "0",
            }}
          >
            Prove you&apos;re ready, <br />
            <span style={{ fontStyle: "italic" }}>out loud.</span>
          </h1>
          <p
            data-r
            data-d="3"
            style={{
              fontSize: "clamp(16px,1.5vw,20px)",
              lineHeight: "1.55",
              color: "#5b576f",
              margin: "24px 0 0",
              maxWidth: "48ch",
            }}
          >
            Brio runs real spoken interviews, scores the{" "}
            <span style={{ color: "#16131f", fontWeight: "600" }}>substance</span>{" "}
            of your answers, and turns it into a portable, verifiable readiness
            credential, so you&apos;re hired for what you can do, not what you wrote.
          </p>
          <div
            data-r
            data-d="4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <a className="btn-d magnetic" href="#trythis">
              Start your first interview →
            </a>
            <a className="btn-g" href="#forge">
              See how it works ↓
            </a>
          </div>
          <div
            data-r
            data-d="5"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              marginTop: "34px",
              color: "#8b88a1",
              fontSize: "13px",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ color: "#16a34a" }}>✓</span> Free diagnostic
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ color: "#16a34a" }}>✓</span> 10 minutes
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ color: "#16a34a" }}>✓</span> No résumé
            </span>
          </div>
        </div>
        <div
          data-r
          data-d="4"
          className="statcard panel"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            padding: "16px 18px",
            animation: "floatY 7s ease-in-out infinite",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: "9.5px",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#8b88a1",
            }}
          >
            Live readiness
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
              marginTop: "3px",
            }}
          >
            <span
              data-count="74"
              className="serif"
              style={{ fontSize: "48px", lineHeight: ".9", color: "#7c3aed" }}
            >
              74
            </span>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#16a34a" }}>
              ▲ +6
            </span>
          </div>
          <svg
            viewBox="0 0 150 44"
            width="150"
            height="42"
            preserveAspectRatio="none"
            style={{ marginTop: "8px", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="sp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7c3aed" stopOpacity=".28" />
                <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,36 25,33 50,34 75,24 100,18 125,11 150,6 150,44 0,44Z"
              fill="url(#sp)"
            />
            <polyline
              points="0,36 25,33 50,34 75,24 100,18 125,11 150,6"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="150" cy="6" r="3" fill="#7c3aed" />
          </svg>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "6px",
              fontSize: "11px",
              color: "#8b88a1",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                gap: "1.5px",
                height: "11px",
              }}
            >
              <span
                style={{
                  width: "2px",
                  height: "40%",
                  background: "#7c3aed",
                  borderRadius: "2px",
                  transformOrigin: "bottom",
                  animation: "eqb 1.3s ease-in-out infinite",
                }}
              ></span>
              <span
                style={{
                  width: "2px",
                  height: "90%",
                  background: "#7c3aed",
                  borderRadius: "2px",
                  transformOrigin: "bottom",
                  animation: "eqb 1.3s ease-in-out .2s infinite",
                }}
              ></span>
              <span
                style={{
                  width: "2px",
                  height: "60%",
                  background: "#7c3aed",
                  borderRadius: "2px",
                  transformOrigin: "bottom",
                  animation: "eqb 1.3s ease-in-out .4s infinite",
                }}
              ></span>
            </span>
            Backend · Stripe
          </div>
        </div>
      </div>
    </section>
  );
}
