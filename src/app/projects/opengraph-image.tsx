import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Projects by Steven Sousa - Web Development Portfolio";
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
            Portfolio
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
            My Projects
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 24,
            }}
          >
            {["Next.js", "React", "TypeScript", "Django"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  border: "1px solid rgba(100, 255, 218, 0.3)",
                  color: "#64ffda",
                  fontSize: 18,
                }}
              >
                {tech}
              </div>
            ))}
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
          stevensousa.com/projects
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
