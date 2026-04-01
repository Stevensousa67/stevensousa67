import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hire Steven Sousa - Freelance Web Developer for Hire";
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
        {/* Decorative code elements */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            opacity: 0.3,
            fontSize: 14,
            fontFamily: "monospace",
            color: "#64ffda",
          }}
        >
          <span>{"const developer = {"}</span>
          <span style={{ marginLeft: 20 }}>{"name: 'Steven Sousa',"}</span>
          <span style={{ marginLeft: 20 }}>{"role: 'Freelance Web Developer',"}</span>
          <span style={{ marginLeft: 20 }}>{"skills: ['Next.js', 'React', 'TypeScript']"}</span>
          <span>{"};"}</span>
        </div>

        {/* Main content */}
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
              fontSize: 28,
              color: "#64ffda",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Freelance Web Developer for Hire
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
              padding: "8px 20px",
              borderRadius: 20,
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              border: "1px solid rgba(34, 197, 94, 0.5)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span style={{ color: "#22c55e", fontSize: 16, fontWeight: 500 }}>
              Available for Projects
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 20,
            }}
          >
            {["Next.js", "TypeScript", "React", "Tailwind CSS"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  border: "1px solid rgba(100, 255, 218, 0.3)",
                  color: "#64ffda",
                  fontSize: 16,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#888",
          }}
        >
          stevensousa.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
