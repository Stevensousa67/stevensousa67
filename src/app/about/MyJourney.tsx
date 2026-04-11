"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { myJourney } from "@/lib/myJourney";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

type Journey = (typeof myJourney)[number];

function parseDescription(description: string) {
  return description
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line, i) => {
      if (line.startsWith("●")) {
        return (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-[0.35rem] size-1.5 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-muted-foreground leading-relaxed">
              {line.slice(1).trim()}
            </span>
          </div>
        );
      }
      return (
        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
          {line}
        </p>
      );
    });
}

function TimelineItem({ event }: { event: Journey }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = event.type === "work";

  return (
    <motion.div
      ref={ref}
      className="relative pl-10"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* Dot */}
      <div
        className={`absolute left-0 top-5 -translate-x-1/2 size-8 rounded-full flex items-center justify-center ring-4 ring-background z-10 ${
          isWork
            ? "bg-primary text-primary-foreground"
            : "bg-card border-2 border-border text-foreground"
        }`}
      >
        {isWork ? (
          <Briefcase className="size-3.5" />
        ) : (
          <GraduationCap className="size-3.5" />
        )}
      </div>

      {/* Card */}
      <Card className="hover:ring-1 hover:ring-primary/20 transition-all duration-200">
        <CardContent className="pt-1 pb-1">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge
              variant={isWork ? "default" : "secondary"}
              className="text-[10px] uppercase tracking-wide"
            >
              {isWork ? "Work" : "Education"}
            </Badge>
            <time className="text-xs text-muted-foreground">{event.date}</time>
          </div>

          {/* Title + company */}
          <div className="flex items-start gap-2.5 mb-4">
            <Image
              src={event.icon}
              alt={event.company}
              width={18}
              height={18}
              className={`mt-0.5 shrink-0 ${event.isBlack ? "dark:invert" : ""}`}
            />
            <div>
              <h3 className="font-semibold text-base leading-snug">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {event.company}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">{parseDescription(event.description)}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function MyJourney() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="px-4 mt-16">
      <motion.h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        My Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative ml-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {myJourney.map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
