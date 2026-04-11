"use client";

import Image from "next/image";
import { ExternalLink, Info, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Project } from "@/lib/allProjects";

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative group/featured">
      {/* Ambient glow */}
      <div className="absolute -inset-1 rounded-[calc(var(--radius)*2.8)] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-xl opacity-70 -z-10 transition-opacity duration-500 group-hover/featured:opacity-100" />

      <Card className="overflow-hidden ring-primary/15 shadow-lg py-0">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-[55%_45%]">
            {/* ── Content ──────────────────────────────────────── */}
            <div className="flex flex-col justify-between p-6 md:p-8 gap-6 order-2 lg:order-1">
              <div className="space-y-4">
                {/* Client Work badge */}
                <div>
                  <Badge variant="default" className="gap-1.5 h-auto px-2.5 py-1">
                    <Star className="size-3" />
                    Client Work
                  </Badge>
                </div>

                {/* Name + description */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Performance highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 dark:bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary"
                      >
                        <Trophy className="size-3" />
                        {h}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="default">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    View Project
                  </a>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <Info className="size-4" />
                      Technical Details
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="sm:max-w-lg overflow-y-auto flex flex-col gap-0">
                    <SheetHeader className="pb-4 pr-10">
                      <SheetTitle className="text-lg font-bold">
                        {project.name}
                      </SheetTitle>
                      <SheetDescription>{project.description}</SheetDescription>
                    </SheetHeader>
                    <div className="px-6 pb-4 space-y-6 flex-1">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="rounded-2xl object-cover"
                          sizes="(max-width: 640px) 100vw, 512px"
                        />
                      </AspectRatio>

                      {project.highlights && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                            PageSpeed Insights
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {project.highlights.map((h) => (
                              <div
                                key={h}
                                className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2 text-sm font-medium"
                              >
                                <Trophy className="size-3.5 text-primary" />
                                {h}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Separator />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                          Technical Details
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.techDetails}
                        </p>
                      </div>
                    </div>
                    <SheetFooter className="border-t border-border pt-4">
                      {project.link && (
                        <Button asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="size-4" />
                            View Project
                          </a>
                        </Button>
                      )}
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* ── Image ────────────────────────────────────────── */}
            <div className="relative h-60 lg:h-full overflow-hidden order-1 lg:order-2">
              {/* Fade from content to image on desktop */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent z-10 hidden lg:block" />
              {/* Live status badge — top-right, matches regular ProjectCard */}
              <div className="absolute top-3 right-3 z-20">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-background/85 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-green-600 dark:text-green-400 shadow-sm">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  Live
                </span>
              </div>
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover/featured:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Bottom fade on mobile */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-card to-transparent lg:hidden" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
