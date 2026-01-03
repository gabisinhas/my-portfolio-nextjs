'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Avatar */}
          <motion.div
            className="flex justify-center"
            {...scaleIn}
          >
            <Image
              src="/profile.png"
              alt="Gabriela dos Santos"
              width={120}
              height={120}
              className="rounded-full ring-2 ring-primary/40"
              priority
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Gabriela dos Santos
          </motion.h1>

          {/* Role */}
          <motion.p
            {...fadeInUp}
            className="text-lg md:text-xl text-primary font-medium"
          >
            Full Stack Software Engineer
          </motion.p>

          {/* Stack + Value */}
          <motion.p
            {...fadeInUp}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Building scalable web applications with React and TypeScript,
            supported by Python and Node.js backends. 4+ years of experience
            in production environments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            className="flex justify-center gap-4 pt-6"
          >
            <Link
              href="/projects"
              className="px-7 py-3 rounded-lg bg-primary text-white font-medium
                         hover:bg-primary/90 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg border border-gray-700
                         text-gray-300 hover:border-primary hover:text-primary
                         transition"
            >
              Contact
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
