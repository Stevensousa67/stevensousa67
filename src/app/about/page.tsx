import type { Metadata } from "next";
import AboutMe from "./AboutMe";
import MyJourney from "./MyJourney";
import { JsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/siteConfig";

const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Steven Sousa, a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Discover my journey, skills, and passion for building impactful web applications.",
  keywords: [
    "Steven Sousa",
    "about Steven Sousa",
    "freelance web developer Plymouth MA",
    "web developer background",
    "Next.js developer Massachusetts",
    "TypeScript developer",
    "React developer for hire",
    "full-stack developer South Shore MA",
  ],
  openGraph: {
    title: "About Steven Sousa | Freelance Web Developer",
    description:
      "Learn about Steven Sousa, a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS.",
    url: pageUrl,
    type: "profile",
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="WebPage"
        pageName="About Steven Sousa | Freelance Web Developer"
        pageDescription="Learn about Steven Sousa, a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS."
        pageUrl={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "About", url: pageUrl },
        ]}
      />
      <h1 className="text-3xl font-semibold mt-10 mb-10 text-center animate-fade-slide-down">
        About Me
      </h1>
      <AboutMe />
      <MyJourney />
    </>
  );
}
