'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';

export default function About() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-5xl mx-auto px-4 py-20 space-y-24"
    >
      
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Full Stack Software Engineer with 4+ years of experience building
          scalable web applications using React, TypeScript, and Python.
          Experience in enterprise systems, security practices, and modern
          front-end architectures.
        </p>
      </section>

      <ExperienceSection />
      <EducationSection />
    </motion.main>
  );
}
