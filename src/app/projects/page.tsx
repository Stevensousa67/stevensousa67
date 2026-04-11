import type { Metadata } from "next";
import { projects } from "@/lib/allProjects";
import { ProjectJsonLd, JsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import ProjectsGrid from "./ProjectsGrid";

const pageUrl = `${siteUrl}/projects`;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including full-stack applications built with Next.js, TypeScript, React, Django, and more. View live demos and technical details.",
  keywords: [
    "web development portfolio",
    "Steven Sousa projects",
    "Next.js projects",
    "React portfolio",
    "TypeScript projects",
    "full-stack projects",
    "web developer portfolio Massachusetts",
    "freelance web developer work",
    "custom web applications",
    "Django projects",
  ],
  openGraph: {
    title: "Projects | Steven Sousa - Web Developer Portfolio",
    description:
      "Explore my portfolio of web development projects including full-stack applications built with Next.js, TypeScript, React, and more.",
    url: pageUrl,
    type: "website",
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        type="WebPage"
        pageName="Projects | Steven Sousa - Web Developer Portfolio"
        pageDescription="Explore my portfolio of web development projects including full-stack applications built with Next.js, TypeScript, React, Django, and more."
        pageUrl={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Projects", url: pageUrl },
        ]}
      />
      {projects.map((project) => (
        <ProjectJsonLd
          key={`schema-${project.name}`}
          name={project.name}
          description={project.description}
          url={project.link}
          image={project.image}
          techStack={project.techStack.join(", ")}
        />
      ))}

      <div className="pb-24">
        {/* Page hero */}
        <div className="px-4 pt-14 pb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-slide-down">
            My Projects
          </h1>
          <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-lg mx-auto animate-fade-slide-down">
            Client work, web applications, and personal projects — built with
            modern tools and shipped to production.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </>
  );
}
