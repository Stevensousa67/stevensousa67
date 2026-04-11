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

      <div className="pb-24">
        {/* Page hero */}
        <div className="px-4 pt-14 pb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-slide-down">
            About Me
          </h1>
          <p className="mt-3 text-muted-foreground text-base md:text-lg animate-fade-slide-down">
            Freelance Web Developer &amp; Software Engineer
          </p>
        </div>

        <AboutMe />
        <MyJourney />
      </div>
    </>
  );
}
