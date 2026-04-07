import type { Metadata } from "next";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/allProjects";
import { ProjectJsonLd, JsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/siteConfig";

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
          techStack={project.techStack}
        />
      ))}
      <h1 className="text-3xl font-semibold mt-10 mb-10 text-center animate-fade-slide-down">
        All Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            isReversed={index % 2 === 1}
            className="border-foreground/30 max-w-72 md:max-w-none lg:max-w-none mx-auto"
            imageSize={{ width: 420, height: 420 }}
          />
        ))}
      </div>
    </>
  );
}
