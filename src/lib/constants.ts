export const SITE_CONFIG = {
  name: "Gabriela's Portfolio",
  description: "Full-stack developer specializing in Vue.js and Node.js",
  url: "https://yourportfolio.com",
  author: {
    name: "Gabriela",
    email: "your-email@example.com",
    github: "https://github.com/gabisinhas",
    linkedin: "https://linkedin.com/in/yourprofile"
  }
};

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export const SKILLS_CATEGORIES = {
  FRONTEND: "Frontend",
  BACKEND: "Backend", 
  TOOLS: "Tools & Others"
} as const;

export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.1;