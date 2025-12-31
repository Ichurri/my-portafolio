'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';

const Hero = () => {

  const aux = "Hello, I'm";
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Typewriter effect state
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const fullTitle = personalInfo.title;
  
  // State to store particle positions
  const [particles, setParticles] = useState<{ left: string; top: string; duration: number; delay: number }[]>([]);
  
  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    // Generate random positions for particles
    const newParticles = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    
    setParticles(newParticles);
  }, []); // Empty dependency array means this runs once on mount
  
  // Typewriter effect
  useEffect(() => {
    if (titleIndex < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullTitle.slice(0, titleIndex + 1));
        setTitleIndex(titleIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, fullTitle]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
      
      {/* Animated background particles - only rendered client-side */}
      <ClientOnly>
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-dark-400 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </ClientOnly>

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
              { aux }
            </motion.p>
            
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 sm:px-0 bg-gradient-to-r from-dark-500 via-dark-400 to-dark-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                animation: 'gradient 3s linear infinite'
              }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-3xl lg:text-4xl font-semibold text-dark-400 mb-6 sm:mb-8 px-2 sm:px-0 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-dark-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-dark-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-dark-500 hover:bg-dark-400 text-dark-100 px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-dark-400 text-dark-400 hover:bg-dark-500 hover:text-dark-100 px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => {
                window.location.href = '/api/resume';
              }}
            >
              <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
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
              href="#contact"
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
