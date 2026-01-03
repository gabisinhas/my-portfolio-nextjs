'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { personalInfo, socialLinks } from '../../data/personal-info';
import { toast } from 'react-hot-toast';
import type { ContactForm } from '../../types';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      { ...formData },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });

  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && ('text' in error || 'message' in error)) {
      const err = error as { text?: string; message?: string };
      console.error('EmailJS error:', err.text || err.message || error);
    } else {
      console.error('EmailJS error:', error);
    }
    toast.error('Failed to send message. Please try again.');
  }

  setIsSubmitting(false);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        <motion.section variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together!
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    {link.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          
          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                placeholder="Project collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
