import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Atom, Users } from 'lucide-react';
import TiltCard from './TiltCard';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-slate-200 to-slate-50 dark:from-black dark:to-[#0B0F19]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* AI Cert */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="h-full bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-amber-500/50 transition-colors group">
                <div className="h-40 bg-white dark:bg-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <Bot className="w-16 h-16 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bring AI to Work</h3>
                <p className="text-sm text-chem-600 dark:text-chem-400 mb-4 font-mono">Google Workspace | June 2025</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[60px]">
                  Practical workshop on integrating Artificial Intelligence tools into daily professional workflows.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1n4dVwCybryZ5SBaz0QIhThP6G-qD8Xop/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold hover:underline"
                >
                  View Certificate <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Chemistry Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="h-full bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-chem-500/50 transition-colors group">
                <div className="h-40 bg-white dark:bg-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <Atom className="w-16 h-16 text-chem-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">M.Sc. Chemistry</h3>
                <p className="text-sm text-chem-600 dark:text-chem-400 mb-4 font-mono">University of Kalyani | 2025</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[60px]">
                  Master of Science degree specializing in Physical Chemistry and advanced laboratory techniques.
                </p>
                <span className="inline-flex items-center text-slate-400 cursor-not-allowed text-xs uppercase tracking-wider font-bold">
                  Degree Awarded
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="h-full bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-creative-500/50 transition-colors group">
                <div className="h-40 bg-white dark:bg-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <Users className="w-16 h-16 text-creative-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Student Leadership</h3>
                <p className="text-sm text-chem-600 dark:text-chem-400 mb-4 font-mono">Santipur College | 2023</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[60px]">
                  Recognized for outstanding organizational leadership as General Secretary managing large-scale events.
                </p>
                <span className="inline-flex items-center text-slate-400 cursor-not-allowed text-xs uppercase tracking-wider font-bold">
                  Verified Role
                </span>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;