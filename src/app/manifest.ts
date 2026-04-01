import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Steven Sousa - Freelance Web Developer",
    short_name: "Steven Sousa",
    description:
      "Freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Building impactful web applications for businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
