import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'xbis-maintenance-module',
    title: 'XBIS Implementation of Maintenance Module',
    description: 'Delivered UX Prototype to the customer and Front-End Module built in Vue.js with reusable web components.',
    technologies: ['Vue.js', 'UX Design'],
    image: '/projects/xbis-maintenance.png',
    date: new Date('2023-07-01'),
    status: 'completed',
    category: 'Frontend Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'xbis-cloudant-upgrade',
    title: 'XBIS Back-End Upgrade of Cloudant DB',
    description: 'The IBM Cloudant library was upgraded, which led to a huge change in its implementation for back-end CRUD operations.',
    technologies: ['Node.js', 'IBM Cloudant', 'Database'],
    image: '/projects/cloudant-upgrade.png',
    date: new Date('2023-11-01'),
    status: 'completed',
    category: 'Backend Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'vue-migration',
    title: 'Vue 2 to Vue3 Migration',
    description: 'Successfully migrated a legacy Vue 2 application to Vue 3, improving performance and code quality.',
    technologies: ['Vue.js', 'Migration', 'Performance'],
    image: '/projects/vue-migration.png',
    date: new Date('2024-01-01'),
    status: 'completed',
    category: 'Frontend Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'remessa-implementation',
    title: 'Remessa Implementation',
    description: 'New module to implement the Remessa feature in the application XBIS which manages the payment of invoices. Delivered full UX Design and frontend implementation. Besides, also contributed with the backend implementation.',
    technologies: ['Vue.js', 'Node.js', 'UX Design', 'Full-Stack'],
    image: '/projects/remessa-module.png',
    date: new Date('2024-02-01'),
    status: 'completed',
    category: 'Full-Stack Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  }
];