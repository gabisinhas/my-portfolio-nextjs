import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazon,
  SiApachecouchdb,
} from 'react-icons/si';

import { FaDatabase } from 'react-icons/fa';

export const skills = [
  { name: 'React', icon: SiReact, color: 'text-sky-500', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-emerald-500', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400', category: 'Backend' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500', category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-500', category: 'Backend' },
  { name: 'DB2', icon: FaDatabase, color: 'text-blue-700', category: 'Backend' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400', category: 'Tools & Others' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500', category: 'Tools & Others' },
  { name: 'AWS', icon: SiAmazon, color: 'text-amber-500', category: 'Tools & Others' },
  {
    name: 'IBM Cloudant',
    icon: SiApachecouchdb,
    color: 'text-red-500',
    category: 'Tools & Others',
  },
];
