import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-dark-100 text-dark-500">
      <Header />
      <Hero />
      <About />
      
      <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-dark-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-500 mb-3 sm:mb-4">Projects Section</h2>
            <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-2">Coming soon...</p>
          </div>
        </div>
      </section>
      
      <Skills />
      <Contact />
    </main>
  );
}