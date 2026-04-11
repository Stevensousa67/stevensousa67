"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-3xl w-full py-16">

        {/* ── Astronaut image ─────────────────────────────────── */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-muted-foreground/10 blur-2xl -z-10" />
            <motion.div
              animate={{ y: [-6, 6] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5, ease: "easeInOut" }}
            >
              <div className="w-[260px] h-[260px] rounded-3xl overflow-hidden ring-1 ring-border shadow-2xl">
                <Image
                  src="/ss-pictures/Astronaut.jpg"
                  alt="Astronaut floating in space"
                  width={260}
                  height={260}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Text + CTAs ──────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2"
          >
            Page Not Found
          </motion.p>

          <motion.h1
            variants={item}
            className="text-7xl sm:text-8xl font-bold tracking-tight leading-none mb-4"
          >
            404
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground leading-relaxed mb-8 max-w-sm"
          >
            You&apos;ve drifted into deep space. This page doesn&apos;t exist — let&apos;s get you back to Earth.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="size-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
