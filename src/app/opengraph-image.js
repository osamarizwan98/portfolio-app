import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#060908",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(61,220,151,0.22), rgba(61,220,151,0) 45%)",
          color: "#eef3ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #2a372f",
              borderRadius: 999,
              color: "#3ddc97",
              fontSize: 24,
            }}
          >
            OR
          </div>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            I build Shopify apps, full-stack products & AI automation.
          </div>
          <div style={{ fontSize: 26, color: "#a2ada6" }}>
            {`${site.role} · Karachi, UTC+5 · Open to full-time & contract`}
          </div>
        </div>
        <div style={{ display: "flex", height: 6, width: 220, background: "#3ddc97", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
