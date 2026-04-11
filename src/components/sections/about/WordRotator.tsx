"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GradientWord = {
  text: string;
  from: string;
  to: string;
};

const words: GradientWord[] = [
  { text: "Beautiful",  from: "from-blue-500",   to: "to-teal-500"   },
  { text: "Blazing",    from: "from-purple-500",  to: "to-pink-500"   },
  { text: "Scalable",   from: "from-orange-500",  to: "to-yellow-500" },
  { text: "Modern",     from: "from-green-500",   to: "to-blue-500"   },
];

const WordRotator = () => {
  const [currentWord, setCurrentWord] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-24 sm:w-28">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className={`block font-bold bg-gradient-to-r ${words[currentWord].from} ${words[currentWord].to} bg-clip-text text-transparent text-center`}
        >
          {words[currentWord].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default WordRotator;
