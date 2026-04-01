import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Steven Sousa - Freelance Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: "#64ffda",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            About
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-2px",
            }}
          >
            Steven Sousa
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#888",
              maxWidth: 800,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Full-Stack Developer specializing in modern web technologies
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#888",
          }}
        >
          stevensousa.com/about
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
