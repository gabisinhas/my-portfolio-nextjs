import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      
      className="group relative bg-[#0B1120] border border-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      
      <div className="p-6 flex flex-col h-full min-h-[250px]">
        <div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6]">
              {project.category}
            </span>
            <span className="text-xs text-gray-500">
              {project.date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
            </span>
          </div>

          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
            {project.title}
          </h3>

          
          <p className="text-gray-400 mb-4 line-clamp-4 text-sm leading-relaxed">
            {project.description}
          </p>

          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
