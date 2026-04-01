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
      "Freelance web developer for hire. I build custom websites and web applications for startups, small businesses, and entrepreneurs using modern technologies.",
    knowsAbout: skillNames,
    sameAs: [
      "https://github.com/Stevensousa67",
      "https://linkedin.com/in/stevensousa67",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Freelance Web Developer",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills: skillNames.join(", "),
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Steven Sousa - Freelance Web Development",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Freelance web development services including custom websites, web applications, e-commerce solutions, and landing pages. Specializing in Next.js, React, TypeScript, and modern web technologies.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Web Development",
      "Custom Website Design",
      "Web Application Development",
      "Frontend Development",
      "Full-Stack Development",
      "E-commerce Development",
      "Landing Page Development",
    ],
    provider: {
      "@type": "Person",
      name: "Steven Sousa",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Freelance web development services available for new projects",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Steven Sousa - Freelance Web Developer for Hire",
    url: siteUrl,
    description:
      "Hire a freelance web developer for your next project. Custom websites and web applications built with Next.js, React, and TypeScript.",
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
      ? [personSchema, serviceSchema, websiteSchema]
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
