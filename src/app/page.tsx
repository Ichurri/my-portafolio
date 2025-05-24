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
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-dark-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
      
      <Skills />
      <Contact />
    </main>
  );
}