"use client"

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "../utils/animations";

const AboutPage = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto py-18">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          {...fadeInDown}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.section className="mb-16" {...fadeInUp}>
          <p className="text-lg text-gray-200 dark:text-white max-w-3xl mx-auto text-center">
            I&apos;m a passionate Full Stack Developer with expertise in
            building scalable, secure web applications. With a strong foundation
            in both frontend and backend technologies, I create seamless user
            experiences and robust server-side solutions. I am skilled in
            JavaScript, React, Node.js, and Python (Flask & FastAPI), with
            hands-on experience in building RESTful APIs and deploying
            applications on cloud platforms.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 className="section-title" {...fadeInUp}>
            Skills
          </motion.h2>
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                  alt="Vue.js"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="React"
                  className="w-8 h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                  alt="Angular"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="HTML5"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="CSS3"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/less/less-plain-wordmark.svg"
                  alt="LESS"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="SASS"
                  className="w-8 h-8"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="Express"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
                  alt="Java"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="Python"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="PostgreSQL"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="MongoDB"
                  className="w-8 h-8"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Tools & Others
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="Docker"
                  className="w-8 h-8"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/jira.png"
                  alt="JIRA"
                  className="w-8 h-8"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.h2 className="section-title" {...fadeInUp}>
            Experience
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Mid-Level Full Stack Developer
              </h3>
              <p className="text-primary mb-2">IBM • 2023 - Present</p>
              <ul className="text-gray-900 dark:text-white list-disc list-inside space-y-2">
                <li>
                  Led development of multiple modules of web applications using VUEjs and
                  Node.js
                </li>
                <li>
                  Migrated front-end from Vue2 to Vue3
                </li>
                <li>
                  Mitigated security vulnerabilities by 95% across multiple applications
                </li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Senior Business Analyst/Software Developer Junior
              </h3>
              <p className="text-primary mb-2">
                IBM • 2019 - 2023
              </p>
              <ul className="text-gray-900 dark:text-white list-disc list-inside space-y-2">
                <li>Created frontend applications (Vue.js) and backend APIs (Python/Flask) for HR systems</li>
                <li>
                    Migrated stored procedures from Java to Python; led hybrid cloud transitions
                </li>
                <li>Built unit tests using Pytest</li>
                <li>Developed user reports using SQL</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;
