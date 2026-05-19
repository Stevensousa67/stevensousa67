"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { publicSocials } from "@/lib/socialMedia";
import { SocialIconButton } from "@/components/SocialIconButton";
import { getCurrentUtcOffset } from "@/lib/getTimeZone";
import WordRotator from "./WordRotator";
import { projects } from "@/lib/allProjects";

const stats = [
  { value: (new Date()).getFullYear() - 2020, label: "Years Coding" },
  { value: projects.length,  label: "Projects Built" },
  { value: 2,  label: "Degrees Earned" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  const timeOffset = getCurrentUtcOffset();

  return (
    <section className="px-4 pt-12 md:pt-20 pb-10">
      {/* ── Two-column hero ──────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 max-w-xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Availability chip */}
          <motion.div variants={item} className="mt-10 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for Freelance
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
          >
            Hi, I&apos;m Steven Sousa.
          </motion.h1>

          {/* Rotating subheading */}
          <motion.p
            variants={item}
            className="flex flex-wrap items-center gap-x-2 text-lg sm:text-xl text-muted-foreground font-medium mb-5"
          >
            <span>I build</span>
            <WordRotator />
            <span>web experiences.</span>
          </motion.p>

          {/* Role + location */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-8"
          >
            <span className="font-medium text-foreground">
              Full-Stack Developer
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              Plymouth, MA
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {timeOffset}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-7">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact-section">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {publicSocials.map((social) => (
              <SocialIconButton key={social.name} social={social} />
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="hidden md:flex justify-center shrink-0"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/25 to-muted-foreground/10 blur-2xl -z-10" />
            <div className="size-52 rounded-full overflow-hidden ring-2 ring-border shadow-2xl">
              <Image
                src="/ss-pictures/Steven Sousa.jpeg"
                alt="Steven Sousa"
                width={208}
                height={208}
                priority
                className="object-cover object-[center_top] w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Stats row ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
      >
        <Separator className="mt-12 mb-0" />
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 py-6 px-4">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                {value}
              </span>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
        <Separator className="mt-0" />
      </motion.div>
    </section>
  );
}
