"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Drawer, DrawerTitle, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { easeOut, motion } from 'framer-motion';

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
    isReversed?: boolean;
}

export default function ProjectCard({ project, imageSize = { width: 420, height: 420 }, className = "", isReversed = false }: ProjectCardProps) {
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
        return <Button disabled className={buttonClassName}>Coming Soon</Button>;
    };

    const cardVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} className={`w-full ${className} flex justify-center`}>
            <Card className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 flex flex-col lg:flex-row">
                {/* Mobile & Tablet Layout (Stacked Vertically) */}
                <div className="flex flex-col items-center text-center lg:hidden">
                    <CardHeader className="w-full mb-8">
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.status}</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full flex flex-col items-center">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <div className="cursor-pointer w-full max-w-sm"> {/* Added max-w-sm for image on mobile */}
                                    <ProjectImage />
                                </div>
                            </DrawerTrigger>
                            <DrawerContent className="max-h-[100vh] overflow-hidden">
                                <div className="p-4 max-w-5xl mx-auto flex flex-col min-h-0">
                                    <DrawerTitle className="text-xl font-semibold mb-4 md:hidden">{project.name}</DrawerTitle>
                                    <div className="min-h-0 overflow-y-auto">
                                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                                            <div className="w-full md:basis-1/3 md:max-w-md md:order-1">
                                                <ProjectImage />
                                                <p className="mt-4 text-muted-foreground">{project.techStack}</p>
                                            </div>
                                            <div className="w-full md:basis-2/3 md:order-2">
                                                <DrawerTitle className="text-xl font-semibold mb-4 hidden md:block">{project.name}</DrawerTitle>
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
                        <CardDescription className="text-center mt-4">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="w-1/4 justify-center mt-4">
                        <ProjectButton>Open Project</ProjectButton>
                    </CardFooter>
                </div>

                {/* Desktop Layout (Side-by-Side) */}
                <div className="hidden lg:flex lg:flex-row w-full">
                    {isReversed ? (
                        <>
                            <motion.div className="w-2/3 flex flex-col min-w-0" variants={childVariants}>
                                <CardContent className="flex justify-center items-center flex-grow">
                                    <p>{project.techDetails}</p>
                                </CardContent>
                                <CardFooter className={isReversed ? "justify-start" : "justify-end"}>
                                    <ProjectButton>{isLive ? "View Project" : "Coming Soon"}</ProjectButton>
                                </CardFooter>
                            </motion.div>
                            <motion.div className="w-1/3 flex-shrink-0" variants={childVariants}>
                                <CardHeader className="flex flex-col items-center">
                                    <CardTitle>{project.name}</CardTitle>
                                    <CardDescription>{project.status}</CardDescription>
                                    <ProjectImage className="cursor-pointer" />
                                    <p className="mt-4 text-muted-foreground text-center">{project.techStack}</p>
                                </CardHeader>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            <motion.div className="w-1/3 flex-shrink-0" variants={childVariants}>
                                <CardHeader className="flex flex-col items-center">
                                    <CardTitle>{project.name}</CardTitle>
                                    <CardDescription>{project.status}</CardDescription>
                                    <ProjectImage className="cursor-pointer" />
                                    <p className="mt-4 text-muted-foreground text-center">{project.techStack}</p>
                                </CardHeader>
                            </motion.div>
                            <motion.div className="w-2/3 flex flex-col min-w-0" variants={childVariants}>
                                <CardContent className="flex justify-center items-center flex-grow">
                                    <p>{project.techDetails}</p>
                                </CardContent>
                                <CardFooter className={isReversed ? "justify-start" : "justify-end"}>
                                    <ProjectButton>{isLive ? "View Project" : "Coming Soon"}</ProjectButton>
                                </CardFooter>
                            </motion.div>
                        </>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}