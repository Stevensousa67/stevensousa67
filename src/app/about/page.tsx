import type { Metadata } from "next";
import AboutMe from "./AboutMe";
import MyJourney from "./MyJourney";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Steven Sousa, a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Discover my journey, skills, and passion for building impactful web applications.",
  openGraph: {
    title: "About Steven Sousa | Freelance Web Developer",
    description:
      "Learn about Steven Sousa, a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS.",
    url: "https://stevensousa.com/about",
    type: "profile",
  },
  alternates: {
    canonical: "https://stevensousa.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-10 mb-10 text-center animate-fade-slide-down">
        About Me
      </h1>
      <AboutMe />
      <MyJourney />
    </>
  );
}
