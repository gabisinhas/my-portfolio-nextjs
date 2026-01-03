"use client";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-200 dark:bg-dark border-t border-gray-200 dark:border-gray-800 fixed bottom-0 left-0 w-full z-50" style={{boxShadow: '0 -2px 8px rgba(0,0,0,0.03)'}}>
      <div className="container max-w-7xl mx-auto px-4 py-1">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className='text-sm text-secondary mt-2'>
              Built with Next.JS | © {currentYear} {SITE_CONFIG.author.name}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={SITE_CONFIG.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={SITE_CONFIG.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}