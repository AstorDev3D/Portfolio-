
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleTheme } from './ToggleTheme';

interface NavbarProps {
  isDark: boolean;
}

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Research', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 left-0 px-4 md:px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/70 dark:bg-dark/60 border border-white/20 dark:border-white/5 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5">
          {/* Logo */}
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight">
              SAYAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-500 to-creative-500 animate-gradient-x">MONDAL</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="hover:text-chem-500 dark:hover:text-chem-400 transition-colors cursor-pointer relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chem-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <a
              href="https://drive.google.com/file/d/1vTZ9ceCYhbn_840fG6Ji9Az7T7jSJHIt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-chem-500 transition-colors"
            >
              Resume <ExternalLink size={14} />
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-chem-600 hover:bg-chem-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-chem-500/30 cursor-pointer"
            >
              Hire Me
            </Link>

            <ToggleTheme 
                animationType="wave-ripple" 
                duration={700} 
                className="text-slate-800 dark:text-yellow-400 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700" 
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ToggleTheme 
                animationType="circle-spread" 
                className="text-slate-800 dark:text-yellow-400 bg-slate-200 dark:bg-slate-800"
            />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-slate-800 dark:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-slate-50 dark:bg-dark flex flex-col items-center justify-center gap-8 backdrop-blur-xl"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-slate-800 dark:text-white"
            >
              <X size={32} />
            </button>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-chem-500 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}

             <a
              href="https://drive.google.com/file/d/1vTZ9ceCYhbn_840fG6Ji9Az7T7jSJHIt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-200"
            >
              Resume <ExternalLink size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
