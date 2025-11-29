import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Atom, PenTool, Box, LineChart, FlaskConical, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  
  const toRotate = ["Administration Professional", "Chemistry Professional", "Creative Lead"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    } else {
      setDelta(100);
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-chem-500/30 bg-chem-500/10 text-chem-600 dark:text-chem-400 text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-chem-500 animate-pulse"></span>
            Available for Research & Creative Roles
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-sans">
            Sayan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-500 via-creative-500 to-pink-500">
              Mondal
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8 font-light h-8 font-mono">
            {text}<span className="border-r-2 border-slate-500 animate-pulse ml-1">&nbsp;</span>
          </h2>

          {/* Redesigned Bio Section */}
          <div className="relative mb-10 pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-gradient-to-b before:from-chem-500 before:to-creative-500 before:rounded-full">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
              Certified Chemist (M.Sc.) with <span className="font-bold text-slate-900 dark:text-white">4+ years</span> of leadership experience.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
               <span className="text-slate-500 dark:text-slate-400">Bridging the gap between</span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">
                 <Atom size={14} /> Scientific Research
               </span>
               <span className="text-slate-400">&</span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-500/20">
                 <Sparkles size={14} /> Creative Management
               </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 overflow-hidden cursor-pointer">
                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <Link to="projects" smooth={true} duration={500} offset={-50}>
              <button className="px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-105 cursor-pointer text-slate-700 dark:text-slate-200">
                Research <FlaskConical size={16} />
              </button>
            </Link>

             <a href="https://drive.google.com/file/d/1n4dVwCybryZ5SBaz0QIhThP6G-qD8Xop/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-105 cursor-pointer text-slate-700 dark:text-slate-200">
                Certificate <FileText size={16} />
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Content - 3D Card (Simplified via updated TiltCard) */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-chem-500/20 to-creative-500/20 rounded-full blur-3xl animate-pulse"></div>

          <TiltCard className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center relative z-20">
            <div className="text-center p-8">
              <Atom className="w-20 h-20 text-chem-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
              <h3 className="text-2xl font-bold mb-2 font-mono tracking-wider text-slate-900 dark:text-white">CHEMISTRY</h3>
              <div className="w-24 h-px bg-slate-300 dark:bg-slate-700 mx-auto my-4"></div>
              <PenTool className="w-16 h-16 text-creative-500 mx-auto mt-2 drop-shadow-[0_0_15px_rgba(217,70,239,0.6)]" />
              <h3 className="text-2xl font-bold mt-4 font-mono tracking-wider text-slate-900 dark:text-white">CREATIVE</h3>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FlaskConical className="text-chem-500 w-6 h-6" />
            </motion.div>

            <motion.div 
              className="absolute bottom-12 -left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <Box className="text-creative-500 w-6 h-6" />
            </motion.div>

             <motion.div 
              className="absolute top-10 -left-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            >
              <LineChart className="text-green-500 w-6 h-6" />
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;