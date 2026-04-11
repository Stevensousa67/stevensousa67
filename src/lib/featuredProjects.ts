import { projects } from "./allProjects";

const featuredNames = [
  "Silver Home Health Services",
  "Holy Bible",
  "Football",
];

export const featuredProjects = projects.filter((p) =>
  featuredNames.includes(p.name)
);
