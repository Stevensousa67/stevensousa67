import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from '@/lib/featuredProjects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section className="mt-30 flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>

        {/* Grid layout when screen can fit all 3 cards - now with consistent margins */}
        <div className="hidden lg:flex flex-wrap gap-8 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} className="w-80 border border-foreground/30" />
          ))}
        </div>

        {/* Carousel for smaller screens only */}
        <div className="w-full max-w-4xl px-4 lg:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 sm:-left-2 md:-left-4 lg:-left-6" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 sm:-right-2 md:-right-4 lg:-right-6" />
            <CarouselContent className="-ml-2 md:-ml-4 pt-2">
              {projects.map((project) => (
                <CarouselItem key={project.name} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <ProjectCard project={project} imageSize={{ width: 420, height: 420 }} className="max-w-72 mx-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Button to all projects page */}
        <Button asChild className="mt-4 hover:underline">
          <Link href="/projects">View all projects</Link>
        </Button>
      </section>
    </>
  );
}
