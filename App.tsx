
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Socials from './components/Socials';
import StarfieldBackground from './components/StarfieldBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-gray-200 font-mono overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      <StarfieldBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <main className="container mx-auto px-6 md:px-8 flex-grow">
          <About />
          <Skills />
          <Projects />
          <Vision />
          <Contact />
        </main>
        <footer className="text-center py-12 px-6">
          <Socials />
          <p className="mt-8 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Priyanshu Gusain. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
