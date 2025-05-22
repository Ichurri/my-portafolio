import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="bg-dark-100 text-dark-500">
      <Header />
      <Hero />
      
      {/* Placeholder sections - we'll build these next */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-dark-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Skills Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center bg-dark-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Section</h2>
          <p className="text-dark-400">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}