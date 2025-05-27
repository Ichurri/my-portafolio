'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'skills', label: 'Skills' },
    { href: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Verificar qué sección está visible
      const sections = menuItems.map(item => item.href);
      sections.push('home'); // Añadir la sección home aunque no esté en el menú
      let currentSection = '';
      
      // Obtener la altura exacta del header para el cálculo
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 64; // 64px es el equivalente a h-16
      
      // Determinar qué sección está más visible en la pantalla actualmente
      const viewportHeight = window.innerHeight;
      let maxVisibleArea = 0;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        
        // Calcular cuánto de la sección es visible en el viewport
        const visibleTop = Math.max(headerHeight, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visiblePercent = visibleHeight / rect.height;
        
        // Si esta sección tiene más área visible que la anterior, la establecemos como activa
        if (visiblePercent > maxVisibleArea) {
          maxVisibleArea = visiblePercent;
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-100/90 backdrop-blur-md border-b border-dark-300' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-xl font-bold text-dark-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div 
                key={item.href}
                className="relative"
              >
                <motion.a
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href, 800);
                  }}
                  className={`text-sm font-medium cursor-pointer ${
                    activeSection === item.href 
                      ? 'text-dark-500' 
                      : 'text-dark-400 hover:text-dark-500'
                  } transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-200 rounded-lg mt-2">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={`#${item.href}`}
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      activeSection === item.href 
                        ? 'text-dark-500 bg-dark-300/30' 
                        : 'text-dark-400 hover:text-dark-500'
                    } relative overflow-hidden`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href, 800);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ 
                      backgroundColor: 'rgba(85, 85, 85, 0.1)',
                    }}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-dark-500"
                        layoutId="activeMobileSection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;