export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  date: Date;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'Frontend Development' | 'Backend Development' | 'Full-Stack Development' | 'UX Design';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Others';
  proficiency: number; // 1-100
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  achievements: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Theme = 'light' | 'dark';

export interface NavigationItem {
  href: string;
  label: string;
}