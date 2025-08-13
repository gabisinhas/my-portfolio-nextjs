"use client"
import React, { useState } from "react"
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            My Portfolio&trade;
          </Link>
        <div className="flex items-center space-x-8"> 
          <motion.p
            className="md:text-1xl text-black dark:text-white mb-1"
            transition={{ delay: 0.4 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors mx-2" // Add margin on the x-axis
              >
                {item.label}
              </Link>
            ))}
          </motion.p>              
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </motion.button>
            </div>        
          </div>    
        </div>
  </nav>
  )
}

export default Navbar