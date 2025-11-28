'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { personalInfo } from '@/lib/data';
import { useState, useEffect } from 'react';
import styles from './About.module.css';
import { getLoadingStrategy, imageConfig } from '@/lib/imageUtils';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-500 mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Get to know me a little better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative flex justify-center items-center ${styles.fadeInUp} px-4 sm:px-2 md:px-0`}
          >
            <div className={`${styles.profileImageWrapper} max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] w-full`}>
              {!imageLoaded && <div className={styles.imageLoading} />}
              <Image
                src="https://personal-website-s3-bucket.s3.us-east-2.amazonaws.com/profile.webp"
                alt={`${personalInfo.name} profile picture`}
                fill
                priority={isVisible}
                loading={getLoadingStrategy(isVisible)}
                className={`${styles.profileImage} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
                quality={imageConfig.quality}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
                onLoad={() => setImageLoaded(true)}
              />
              {/* Decorative elements */}
              <div className={styles.decorativeCircle1} />
              <div className={styles.decorativeCircle2} />
            </div>
          </motion.div>

          {/* Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${styles.fadeInUp} px-4 sm:px-2 md:px-0`}
          >
            <Card className="p-4 sm:p-6 md:p-8 h-full flex flex-col bg-dark-300/50 border-dark-400/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-dark-500/5 hover:border-dark-500/30">
              <div className="flex flex-col h-full justify-between">
                {/* Bio section */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-500 relative inline-block pb-2">
                    {personalInfo.name}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-dark-500/100 rounded-full"></span>
                  </h3>
                  <p className="text-dark-400 leading-relaxed text-base sm:text-lg">
                    {personalInfo.bioAbout}
                  </p>
                </div>
                
                <Separator className="my-4 sm:my-6 bg-dark-400/20" />
                
                {/* Contact information section */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:gap-3 items-start sm:items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-dark-500 font-medium min-w-[100px] flex items-center mb-1 sm:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Location:
                    </span>
                    <span className="text-dark-400 text-sm sm:text-base">{personalInfo.location}</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-dark-500 font-medium min-w-[100px] flex items-center mb-1 sm:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email:
                    </span>
                    <a href={`mailto:${personalInfo.email}`} className="text-dark-400 hover:text-dark-500 underline-offset-4 hover:underline transition-colors text-sm sm:text-base break-all sm:break-normal">{personalInfo.email}</a>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-dark-500 font-medium min-w-[100px] flex items-center mb-1 sm:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone:
                    </span>
                    <a href={`tel:${personalInfo.phone}`} className="text-dark-400 hover:text-dark-500 underline-offset-4 hover:underline transition-colors text-sm sm:text-base">{personalInfo.phone}</a>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
