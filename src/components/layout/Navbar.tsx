"use client";
import React from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../../lib/constants';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            My Portfolio&trade;
          </Link>
          
          <div className="flex items-center space-x-8"> 
            <motion.div
              className="md:text-1xl text-black dark:text-white mb-1"
              transition={{ delay: 0.4 }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mr-8 hover:text-primary transition-colors ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}