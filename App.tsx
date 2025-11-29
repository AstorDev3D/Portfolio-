
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark if no preference or if preference is dark
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : true;
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Sync React state with DOM changes (driven by ToggleTheme component)
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDarkNow = document.documentElement.classList.contains('dark');
          setIsDark(isDarkNow);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-chem-500/30 selection:text-chem-500">
      <CustomCursor />
      <ParticleBackground isDark={isDark} />
      
      <Navbar isDark={isDark} />
      
      <main className="relative z-10">
        <Hero />
        <StatsBanner />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      
      {/* Floating Action Button for Mobile Resume */}
      <a 
        href="https://drive.google.com/file/d/1vTZ9ceCYhbn_840fG6Ji9Az7T7jSJHIt/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-chem-500 to-creative-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="View Resume"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      </a>
    </div>
  );
};

export default App;
