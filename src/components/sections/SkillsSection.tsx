'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { skills } from '@/data/skills';

const categories = ['Frontend', 'Backend', 'Tools & Others'];

const categoryMeta: Record<string, { description: string }> = {
  Frontend: {
    description: 'Building accessible, responsive and performant user interfaces.',
  },
  Backend: {
    description: 'Designing APIs, business logic, authentication and data layers.',
  },
  'Tools & Others': {
    description: 'Tools and platforms used for development, delivery and automation.',
  },
};

export default function SkillsSection() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white-600 dark:text-gray-300 ">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(category => (
          <div
            key={category}
            className="bg-white rounded-2xl p-8 shadow-sm text-center"
          >
            
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {category}
            </h3>

            
            <p className="text-sm text-gray-500 mb-8">
              {categoryMeta[category].description}
            </p>

            
            <div className="grid grid-cols-3 gap-8 place-items-center">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <skill.icon
                      className={`text-4xl ${skill.color}`}
                    />

                    <span className="text-xs font-medium text-gray-600">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
