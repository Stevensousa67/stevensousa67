"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export default function AnimatedCard({ children, className, index = 0 }: AnimatedCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.45,
        delay: inView ? index * 0.06 : 0,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
