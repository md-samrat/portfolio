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
          background: "#09090B",
          border: "2px solid #EAB308",
          borderRadius: 14,
          color: "#EAB308",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        MS
      </div>
    ),
    { ...size }
  );
}
