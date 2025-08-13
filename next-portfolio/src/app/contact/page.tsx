'use client'

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft } from '../utils/animations'

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-18">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-4 md:grid-cols-1 gap-12">
        {/* Contact Information in gray quadrant */}
        <motion.div
          className="space-y-8 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg col-span-2"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-700 dark:text-white">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <a
                  href="mailto:gabisinhas@yahoo.com.br"
                  className="text-gray-700 dark:text-white hover:text-primary"
                >
                  gabisinhas@yahoo.com.br
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <a
                  href="tel:+5519996450442"
                  className="text-gray-700 dark:text-white hover:text-primary"
                >
                  +55 (19) 99645-0442
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-700 dark:text-white">São Paulo, Brazil</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
