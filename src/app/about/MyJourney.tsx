"use client";
import Image from "next/image";
import { myJourney } from "@/lib/myJourney";
import { easeOut, motion } from "framer-motion";

const MyJourney = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div className="px-4 mb-4">
      <motion.h2 className="text-3xl font-semibold text-center my-10">My Journey</motion.h2>
      <motion.div className="relative border-l-2 border-gray-200 dark:border-gray-700" variants={container} initial="hidden" animate="visible">
        {myJourney.map((event, index) => (
          <motion.div key={index} className="mb-10 ml-6" variants={item}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-b dark:ring-gray-900 dark:bg-blue-900">
              <Image src={event.icon} alt={event.company} height={20} width={20} className={event.isBlack ? "dark:invert" : ""}></Image>
            </span>
            <h3 className="flex items-center mb-2 text-lg font-semibold text-foreground">
              {event.title} at {event.company}
            </h3>
            <time className="block mb-2 text-sm leading-none text-foreground-muted">
              {event.date}
            </time>
            <p className="text-foreground-muted whitespace-pre-line leading-relaxe">
              {event.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyJourney;
