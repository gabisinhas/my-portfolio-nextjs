import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { education } from '@/data/education';

export default function EducationSection() {
  return (
    <motion.section variants={fadeInUp} className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Education
      </h2>

      <ul className="space-y-4">
        {education.map((edu) => (
          <li
            key={edu.degree}
            className="border-l-2 border-primary pl-4"
          >
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-sm text-primary">{edu.institution}</p>
            <p className="text-xs text-gray-500">
              {edu.startYear} – {edu.endYear}
            </p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
