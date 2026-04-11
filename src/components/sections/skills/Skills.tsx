"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Skills() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-4">
      {/* ── Header ───────────────────────────────────────────── */}
      <motion.div
        ref={headingRef}
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Tech Stack
        </h2>
        <p className="mt-2 text-muted-foreground">
          Technologies I work with to build production-ready applications.
        </p>
      </motion.div>

      {/* ── Skills badges ────────────────────────────────────── */}
      <motion.div
        ref={gridRef}
        className="flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={item}>
            <Badge
              variant="secondary"
              className="h-auto px-3 py-1.5 text-sm gap-1.5 rounded-xl font-medium"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={15}
                height={15}
                className={skill.isBlack ? "dark:invert" : ""}
              />
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
