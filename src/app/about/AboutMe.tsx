"use client";
import Image from 'next/image';
import { aboutMe } from '@/lib/aboutMe';
import { easeOut, motion } from 'framer-motion';

export default function AboutMe() {
    const baseUrl = `/ss-pictures/`;
    const imageSrc = `${baseUrl}Steven Sousa.jpeg`;

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const item = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-4">
                <motion.div className="flex-1 mb-10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <Image src={imageSrc} alt="Steven Sousa" width={250} height={250} className="rounded-2xl object-cover mx-auto" />
                </motion.div>
                <motion.div className="flex-1 text-center md:text-left" variants={container} initial="hidden" animate="visible">
                    {aboutMe.map((paragraph, index) => (
                        <motion.p key={index} className="text-md mb-4" variants={item}>{paragraph.paragraph}</motion.p>
                    ))}
                </motion.div>
            </div>
        </>
    )
}