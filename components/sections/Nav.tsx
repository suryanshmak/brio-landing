export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "50",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        padding: "18px 6vw",
        backdropFilter: "blur(12px)",
        background:
          "linear-gradient(180deg,rgba(245,244,251,.85),rgba(245,244,251,.4))",
        borderBottom: "1px solid rgba(124,58,237,.08)",
        willChange: "transform",
        transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "9px",
            background:
              "radial-gradient(circle at 33% 27%,#e6ddff,#7c3aed 60%,#3f1d80)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "800",
            fontSize: "17px",
            lineHeight: "1",
          }}
        >
          b
        </div>
        <span className="serif" style={{ fontSize: "22px", letterSpacing: "-.01em" }}>
          Brio
        </span>
      </div>
      <div
        className="hnav"
        style={{
          marginLeft: "24px",
          display: "flex",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <a className="navlink" href="#forge">
          How it works
        </a>
        <a className="navlink" href="#credential">
          Credential
        </a>
        <a className="navlink" href="#recruiters">
          For recruiters
        </a>
        <a className="navlink" href="#proven">
          Proven Score
        </a>
      </div>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <a className="navlink" href="#">
          Sign in
        </a>
        <a className="btn-d magnetic" href="#trythis" style={{ padding: "10px 18px" }}>
          Start free
        </a>
      </div>
    </nav>
  );
}
