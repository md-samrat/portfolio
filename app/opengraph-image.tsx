import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          background: "#09090B",
          backgroundImage:
            "radial-gradient(circle at 75% 20%, rgba(234,179,8,0.18), transparent 60%)",
        }}
      >
        <div style={{ color: "#A1A1AA", fontSize: 28, marginBottom: 16 }}>
          Full Stack Web Developer
        </div>
        <div style={{ color: "#FAFAFA", fontSize: 72, fontWeight: 700 }}>
          MD Samrat
        </div>
        <div style={{ color: "#EAB308", fontSize: 32, marginTop: 24 }}>
          Next.js &middot; React &middot; Node.js
        </div>
      </div>
    ),
    { ...size }
  );
}
