"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/featuredProjects";
import ProjectCard from "./ProjectCard";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-4">
      {/* ── Header ───────────────────────────────────────────── */}
      <motion.div
        ref={headerRef}
        className="flex items-end justify-between mb-10"
        variants={container}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.div variants={item}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div variants={item}>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-1 text-muted-foreground hover:text-foreground"
          >
            <Link href="/projects">
              View all
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Cards grid ───────────────────────────────────────── */}
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={container}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.name} variants={item} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
