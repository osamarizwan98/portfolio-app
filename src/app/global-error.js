"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#060908", color: "#eef3ef", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 40, margin: "0 0 16px" }}>Something went wrong.</h1>
          <button
            type="button"
            onClick={reset}
            style={{ minHeight: 54, padding: "0 30px", border: 0, borderRadius: 999, background: "#3ddc97", color: "#04130b", fontSize: 16, cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
