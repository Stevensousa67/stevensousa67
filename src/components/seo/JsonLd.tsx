import { skills } from "@/lib/skills";

const siteUrl = "https://stevensousa.com";

interface PersonJsonLdProps {
  type?: "Person" | "WebSite" | "WebPage";
  pageName?: string;
  pageDescription?: string;
  pageUrl?: string;
}

export function JsonLd({
  type = "Person",
  pageName,
  pageDescription,
  pageUrl,
}: PersonJsonLdProps) {
  const skillNames = skills.map((skill) => skill.name);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Steven Sousa",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Freelance Web Developer",
    description:
      "Freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Building impactful web applications for businesses.",
    knowsAbout: skillNames,
    sameAs: [
      "https://github.com/Stevensousa67",
      "https://linkedin.com/in/stevensousa67",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Steven Sousa",
    url: siteUrl,
    description:
      "Portfolio website of Steven Sousa, a freelance web developer specializing in modern web technologies.",
    author: {
      "@type": "Person",
      name: "Steven Sousa",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName || "Steven Sousa",
    description:
      pageDescription ||
      "Portfolio website of Steven Sousa, a freelance web developer.",
    url: pageUrl || siteUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Steven Sousa",
      url: siteUrl,
    },
    author: {
      "@type": "Person",
      name: "Steven Sousa",
    },
  };

  const schemas =
    type === "Person"
      ? [personSchema, websiteSchema]
      : type === "WebPage"
        ? [webPageSchema]
        : [websiteSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function ProjectJsonLd({
  name,
  description,
  url,
  image,
  techStack,
}: {
  name: string;
  description: string;
  url?: string;
  image: string;
  techStack?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url || siteUrl,
    image: `${siteUrl}${image}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Steven Sousa",
      url: siteUrl,
    },
    ...(techStack && {
      softwareRequirements: techStack,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
