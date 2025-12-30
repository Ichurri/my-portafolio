'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { useSectionAnimation } from '@/hooks/use-section-animation';

export default function Home() {
  // Usar el hook de animación de secciones
  useSectionAnimation();

  return (
    <main className="bg-dark-100 text-dark-500">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}