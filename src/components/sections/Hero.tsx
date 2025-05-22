'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-dark-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-dark-400 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-dark-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {personalInfo.title}
            </motion.h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-dark-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-dark-500 hover:bg-dark-400 text-dark-100 px-8 py-3 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-dark-400 text-dark-400 hover:bg-dark-400 hover:text-dark-100 px-8 py-3 text-lg"
              onClick={() => {
                // This will be updated when we add the actual resume
                alert('Resume download will be implemented');
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-500 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-500 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-dark-400 hover:text-dark-500 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;