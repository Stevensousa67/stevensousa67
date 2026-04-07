import type { Metadata } from "next";
import { siteUrl } from "@/lib/siteConfig";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";
import Contact from "@/components/sections/contact/Contact";
import AnimatedSection from "@/components/AnimatedSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Steven Sousa | Freelance Web Developer & Full-Stack Engineer",
  description:
    "Hire Steven Sousa, a freelance web developer based in Plymouth, MA serving Massachusetts and clients nationwide. Specializing in custom websites, web applications, and modern tech stacks including Next.js, React, and TypeScript. Available for freelance projects and contract work.",
  keywords: [
    "freelance web developer",
    "web developer for hire",
    "hire freelance developer",
    "web developer Plymouth MA",
    "web developer Massachusetts",
    "web developer Boston area",
    "freelance web developer Massachusetts",
    "web developer South Shore MA",
    "freelance React developer",
    "freelance Next.js developer",
    "custom website development",
    "freelance full-stack developer",
    "contract web developer",
    "small business web developer",
    "startup web developer",
    "website developer near me",
    "remote web developer",
    "Steven Sousa developer",
  ],
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <AnimatedSection animation="fade-in-up" duration="duration-700">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left" duration="duration-700" delay="delay-200">
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right" duration="duration-700">
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up" duration="duration-700">
        <Contact />
      </AnimatedSection>
    </>
  );
}