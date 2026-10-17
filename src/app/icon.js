import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060908",
          border: "3px solid #2a372f",
          borderRadius: "50%",
          color: "#3ddc97",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        OR
      </div>
    ),
    size,
  );
}
