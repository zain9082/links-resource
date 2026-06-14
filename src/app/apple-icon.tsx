import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050816 0%, #1e1b4b 50%, #8b5cf6 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 56,
              fontWeight: 800,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: -2,
            }}
          >
            LR
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
