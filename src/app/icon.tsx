import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          LR
        </div>
      </div>
    ),
    { ...size },
  );
}
