'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { skillCategories } from '@/lib/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(0); // -1 para izquierda, 1 para derecha

  const handleCategoryChange = (index: number) => {
    // Determinar la dirección de la animación
    setDirection(index > activeCategory ? 1 : -1);
    setActiveCategory(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      y: -2, // Reducido aún más para evitar superposición
      boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 4px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2
      }
    }
  };
  
  // Variantes para la animación de deslizamiento
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
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
        <div className="sticky top-16 bg-dark-100 py-2 z-20">
          <motion.div
            className="flex flex-wrap justify-center mb-4 sm:mb-6 gap-2 px-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.category}
                onClick={() => handleCategoryChange(index)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 relative overflow-hidden ${
                  activeCategory === index
                    ? 'bg-dark-500 text-dark-100'
                    : 'bg-dark-300 text-dark-400 hover:bg-dark-400 hover:text-dark-200'
                }`}
                whileHover={{ scale: activeCategory === index ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.category}
                {activeCategory === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-100"
                    layoutId="activeCategoryIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Category Description */}
          <motion.div
            key={`description-${activeCategory}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8 sm:mb-10 px-4"
          >
            <p className="text-sm text-dark-400 italic max-w-3xl mx-auto">
              {skillCategories[activeCategory].description}
            </p>
          </motion.div>
        </div>

        {/* Skills Grid con espacio adicional */}
        <div className="relative overflow-hidden mt-4 pt-2 mb-8 sm:mb-12">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeCategory}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-7 max-w-6xl mx-auto px-2 sm:px-0 pb-4 sm:pb-6"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={skillCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3
                  }}
                  className="bg-dark-300 rounded-lg p-3 sm:p-4 md:p-6 text-center cursor-pointer border border-dark-400/20 hover:border-dark-500/50 transition-all duration-300"
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
                  <motion.h3 
                    className="text-dark-500 font-medium text-xs sm:text-sm md:text-base truncate px-1 mb-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    {skill.title}
                  </motion.h3>
                  
                  {/* Nivel de competencia */}
                  {skill.level && (
                    <motion.div 
                      className="flex justify-center gap-0.5 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div 
                          key={`${skill.title}-level-${level}`}
                          className={`h-1 w-2 sm:h-1.5 sm:w-3 rounded-full ${
                            level <= (skill.level || 0) 
                              ? 'bg-dark-500' 
                              : 'bg-dark-400/30'
                          }`}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 text-dark-400 relative z-10">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-dark-500">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
              </div>
              <div className="text-xs sm:text-sm">Technologies</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-dark-500">
                {skillCategories.length}
              </div>
              <div className="text-xs sm:text-sm">Categories</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-dark-500">3+</div>
              <div className="text-xs sm:text-sm">Years Learning</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;