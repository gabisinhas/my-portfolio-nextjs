import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <motion.section
      variants={fadeInUp}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Professional Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-6 border-l border-gray-200 dark:border-gray-700"
          >
            {/* Dot */}
            <span className="absolute -left-1.5 top-1 w-3 h-3 bg-primary rounded-full" />

            <h3 className="text-lg font-semibold">
              {exp.position}
              <span className="text-primary font-normal">
                {' '}@ {exp.company}
              </span>
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              {exp.period}
            </p>

            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {exp.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
