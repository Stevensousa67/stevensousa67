"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { aboutMe } from "@/lib/aboutMe";
import { skills } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Guitar,
  Dumbbell,
  Gamepad2,
  Gauge,
} from "lucide-react";

const stats = [
  { label: "Years Coding", value: (new Date()).getFullYear() - 2020, icon: Code2 },
  { label: "Roles Held", value: "3", icon: Briefcase },
  { label: "Degrees Earned", value: 2, icon: GraduationCap },
];

const interests = [
  { label: "Guitar", icon: Guitar },
  { label: "Fitness", icon: Dumbbell },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Motorcycles", icon: Gauge },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AboutMe() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  const interestsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-60px" });
  const interestsInView = useInView(interestsRef, { once: true, margin: "-60px" });

  const imageSrc = `/ss-pictures/Steven Sousa.jpeg`;

  return (
    <section className="px-4">
      {/* ── Hero: photo + name + bio ─────────────────────────────────── */}
      <motion.div
        ref={heroRef}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-14"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        {/* Photo */}
        <motion.div variants={itemVariants} className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/25 to-muted-foreground/10 blur-xl -z-10" />
            <Image
              src={imageSrc}
              alt="Steven Sousa"
              width={290}
              height={290}
              priority
              className="rounded-3xl object-cover ring-1 ring-border shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Name + bio */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <motion.div variants={itemVariants}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Plymouth, MA · Available for Freelance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Steven Sousa
            </h2>
          </motion.div>

          {aboutMe.map((para, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed"
            >
              {para.paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <motion.div
        ref={statsRef}
        className="grid grid-cols-3 gap-3 md:gap-4 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        {stats.map(({ label, value, icon: Icon }) => (
          <motion.div key={label} variants={itemVariants}>
            <Card className="text-center hover:ring-1 hover:ring-primary/20 transition-all duration-200">
              <CardContent className="flex flex-col items-center gap-1.5 py-1">
                <Icon className="size-4 text-muted-foreground" />
                <span className="text-2xl md:text-3xl font-bold tracking-tight">
                  {value}
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {label}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Separator className="mb-10" />

      {/* ── Skills ───────────────────────────────────────────────────── */}
      <motion.div
        ref={skillsRef}
        variants={containerVariants}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        className="mb-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          Technologies
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="h-auto px-3 py-1.5 text-sm gap-1.5 rounded-xl"
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
          ))}
        </motion.div>
      </motion.div>

      <Separator className="mb-10" />

      {/* ── Interests ────────────────────────────────────────────────── */}
      <motion.div
        ref={interestsRef}
        variants={containerVariants}
        initial="hidden"
        animate={interestsInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          Outside the Code
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {interests.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5 text-sm font-medium shadow-sm"
            >
              <Icon className="size-4 text-muted-foreground" />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
