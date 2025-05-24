'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skillCategories } from '@/lib/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillCardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    // <section id="skills" className="py-20 bg-dark-100">
    <section id="skills" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-500 mb-3 sm:mb-4">
            Technical Skills
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 px-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-dark-500 text-dark-100'
                  : 'bg-dark-300 text-dark-400 hover:bg-dark-400 hover:text-dark-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-0"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={skillCardVariants}
              whileHover="hover"
              className="bg-dark-300 rounded-lg p-3 sm:p-4 md:p-6 text-center cursor-pointer border border-dark-400/20 hover:border-dark-500/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 relative">
                <Image
                  src={skill.logo}
                  alt={skill.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                />
              </div>
              <h3 className="text-dark-500 font-medium text-xs sm:text-sm md:text-base truncate px-1">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 text-dark-400">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-dark-500">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
              </div>
              <div className="text-xs sm:text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-dark-500">
                {skillCategories.length}
              </div>
              <div className="text-xs sm:text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-dark-500">3+</div>
              <div className="text-xs sm:text-sm">Years Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;