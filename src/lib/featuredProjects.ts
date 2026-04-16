import { projects } from "./allProjects";

const featuredNames = [
  "Silver Home Health Services",
  "Acme Landscaping",
  "Holy Bible",
];

export const featuredProjects = projects.filter((p) =>
  featuredNames.includes(p.name)
);
