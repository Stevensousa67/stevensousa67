"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/allProjects";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "professional", label: "Client Work" },
  { value: "web", label: "Web Apps" },
  { value: "python", label: "Python" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

const featuredProject = projects.find((p) => p.featured)!;
const regularProjects = projects.filter((p) => !p.featured);

const counts: Record<FilterValue, number> = {
  all: projects.length,
  professional: projects.filter((p) => p.category === "professional").length,
  web: projects.filter((p) => p.category === "web").length,
  python: projects.filter((p) => p.category === "python").length,
};

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const showFeatured =
    activeFilter === "all" || activeFilter === "professional";

  const filteredRegular =
    activeFilter === "all"
      ? regularProjects
      : regularProjects.filter((p) => p.category === activeFilter);

  const isEmpty = !showFeatured && filteredRegular.length === 0;

  return (
    <div className="px-4">
      {/* ── Filter bar ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              )}
            >
              {filter.label}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                  isActive
                    ? "bg-white/20 text-primary-foreground"
                    : "bg-foreground/10 text-muted-foreground"
                )}
              >
                {counts[filter.value]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Grid ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout" initial={false}>
          {showFeatured && (
            <motion.div
              key="featured"
              className="col-span-full"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <FeaturedProjectCard project={featuredProject} />
            </motion.div>
          )}

          {filteredRegular.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.3,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Empty state ─────────────────────────────────────────── */}
      {isEmpty && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center text-muted-foreground"
        >
          No projects in this category yet.
        </motion.div>
      )}
    </div>
  );
}
