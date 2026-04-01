'use client';
import React from 'react';
import Image from 'next/image';
import QuoteRotator from './QuoteRotator';
import { skills } from '@/lib/skills';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  return (
    <>
      <section className="mt-30 flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="outline" className="flex items-center gap-4 px-2 py-2 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
              <Image src={skill.icon} alt={skill.name} width={18} height={18} className={skill.isBlack ? "invert-0 dark:invert" : ""} />
              <span className="sr-only">{skill.name} icon</span>
              <span className="hidden sm:inline">{skill.name}</span>
            </Badge>
          ))}
        </div>
        <QuoteRotator />
      </section>
    </>
  );
}
