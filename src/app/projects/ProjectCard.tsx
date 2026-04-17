"use client";

import Image from "next/image";
import { ExternalLink, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import type { Project } from "@/lib/allProjects";

const categoryLabel: Record<Project["category"], string> = {
  professional: "Client Work",
  web: "Web App",
  python: "Python",
};

const MAX_BADGES = 4;

export default function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "Live" && !!project.link;
  const isGitHub = project.link?.includes("github.com");
  const viewLabel = isGitHub ? "View on GitHub" : "View Project";

  return (
    <Card className="group/card flex flex-col h-full overflow-hidden hover:ring-primary/20 transition-all duration-300 hover:shadow-lg py-0 gap-0">
      {/* ── Image ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          {isLive ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            </a>
          ) : (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
            />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </AspectRatio>

        {/* Status badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={
              isLive
                ? "inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-background/85 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-green-600 dark:text-green-400 shadow-sm"
                : "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-background/85 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 shadow-sm"
            }
          >
            <span
              className={`size-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-amber-500"}`}
            />
            {project.status}
          </span>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 flex-1 px-6 pt-5 pb-4">
        {/* Category + name */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">
            {categoryLabel[project.category]}
          </p>
          <h3 className="font-bold text-base leading-snug">{project.name}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, MAX_BADGES).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > MAX_BADGES && (
            <Badge variant="outline" className="text-xs font-medium">
              +{project.techStack.length - MAX_BADGES} more
            </Badge>
          )}
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <div className="flex gap-2 px-6 pt-4 pb-6 border-t border-border/50">
        {isLive ? (
          <Button asChild size="sm" className="flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-3.5" />
              {viewLabel}
            </a>
          </Button>
        ) : (
          <Button disabled size="sm" className="flex-1">
            Coming Soon
          </Button>
        )}

        {/* Details sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Info className="size-3.5" />
              Details
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-lg overflow-y-auto flex flex-col gap-0">
            <SheetHeader className="pb-4 pr-10">
              <SheetTitle className="text-lg font-bold">{project.name}</SheetTitle>
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

              {project.techDetails && (
                <>
                  <Separator />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      Technical Details
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.techDetails}
                    </p>
                  </div>
                </>
              )}
            </div>

            <SheetFooter className="border-t border-border pt-4">
              {isLive && (
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    {viewLabel}
                  </a>
                </Button>
              )}
              {!isLive && (
                <Button disabled>Coming Soon</Button>
              )}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}
