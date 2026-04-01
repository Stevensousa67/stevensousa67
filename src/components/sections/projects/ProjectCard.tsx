import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Drawer, DrawerTitle, DrawerClose, DrawerContent, DrawerTrigger, DrawerDescription } from "@/components/ui/drawer";

interface Project {
    name: string;
    status: string;
    image: string;
    description: string;
    link?: string;
    techStack?: string;
    techDetails?: string;
}

interface ProjectCardProps {
    project: Project;
    imageSize?: { width: number; height: number };
    className?: string;
}

export default function ProjectCard({ project, imageSize = { width: 420, height: 420 }, className = "" }: ProjectCardProps) {
    const isLive = project.status === "Live" && project.link;

    const ProjectImage = ({ className: imageClassName = "" }: { className?: string }) => (
        <AspectRatio ratio={9 / 6}>
            <Image src={project.image} alt={project.name} width={imageSize.width} height={imageSize.height} className={`rounded-lg h-full w-full object-cover ${imageClassName}`} />
        </AspectRatio>
    );

    const ProjectButton = ({ children, className: buttonClassName = "" }: { children: React.ReactNode; className?: string }) => {
        if (isLive) {
            return (
                <Button asChild className={buttonClassName}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{children}</a>
                </Button>
            );
        }
        return (
            <Button disabled className={buttonClassName}>Coming Soon</Button>
        );
    };

    return (
        <Card className={`transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 ${className}`}>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.status}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <Drawer>
                    <DrawerTrigger className="w-full border-0 bg-transparent p-0">
                        <div className="w-full">
                            <ProjectImage className="cursor-pointer" />
                        </div>
                    </DrawerTrigger>
                    <DrawerContent className="max-h-[100vh] overflow-hidden">
                        <div className="p-4 max-w-5xl mx-auto flex flex-col min-h-0">
                            {/* Title Above Image on Mobile */}
                            <DrawerTitle className="text-xl font-semibold mb-4 md:hidden">{project.name}</DrawerTitle>
                            <DrawerDescription className="sr-only">{project.description}</DrawerDescription>
                            <div className="min-h-0 overflow-y-auto">
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                                    {/* Left Side - Image and Tech Stack */}
                                    <div className="w-full md:basis-1/3 md:max-w-md md:order-1">
                                        <ProjectImage />
                                        <p className="mt-4 text-muted-foreground">{project.techStack}</p>
                                    </div>
                                    {/* Right Side - Title and Details */}
                                    <div className="w-full md:basis-2/3 md:order-2">
                                        <DrawerTitle className="text-xl font-semibold mb-4 hidden md:block">{project.name}</DrawerTitle>
                                        <DrawerDescription className="sr-only">{project.description}</DrawerDescription>
                                        <p>{project.techDetails}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-end mt-2 sticky bottom-0 p-4">
                                <ProjectButton>{isLive ? "Open Project" : "Coming Soon"}</ProjectButton>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
                <CardDescription className="text-center">{project.description}</CardDescription>
                <ProjectButton className="mt-4">Open Project</ProjectButton>
            </CardFooter>
        </Card>
    );
}