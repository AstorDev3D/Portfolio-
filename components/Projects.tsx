import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';
import { Microscope, Activity } from 'lucide-react';
import TiltCard from './TiltCard';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Carbon Nanodots Analysis',
    period: 'Dec 2024 - Aug 2025',
    description: 'Focused on the reaction and reactivity of carbon nanodots in pure solvents and varying pH values. Analyzed behavior for improved disease detection and treatment.',
    tags: ['UV-Vis Spectroscopy', 'OriginPro', 'Material Characterization'],
    type: 'chemistry'
  },
  {
    id: 2,
    title: 'Nanoparticles in Cancer Treatment',
    period: 'Sep 2020 - Oct 2023',
    description: 'Researched nanoparticles as messengers for early cancer detection. Conducted extensive literature review and utilized NMR spectroscopy for analysis.',
    tags: ['NMR Spectroscopy', 'Cancer Research', 'Data Analysis'],
    type: 'creative' // Using creative color scheme for variety
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-100 dark:bg-[#0c101b]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Scientific <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-500 via-purple-500 to-pink-500">Research</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div 
                  className="h-full group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-chem-500/10 dark:hover:shadow-chem-500/5 hover:-translate-y-2 hover:scale-[1.01] hover:border-chem-500/30"
                >
                  {/* Visual Header */}
                  <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-white/5 ${
                    project.type === 'chemistry' 
                      ? 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-chem-900/40 dark:to-dark' 
                      : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-creative-900/40 dark:to-dark'
                  }`}>
                    {project.type === 'chemistry' ? (
                      <Microscope className="w-24 h-24 text-chem-500 opacity-50 transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <Activity className="w-24 h-24 text-creative-500 opacity-50 transition-transform duration-500 group-hover:scale-110" />
                    )}
                    
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-800 dark:text-white">
                      {index === 0 ? 'M.Sc. Project' : 'B.Sc. Project'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                    <p className={`text-sm mb-4 font-mono ${
                      project.type === 'chemistry' ? 'text-chem-600 dark:text-chem-400' : 'text-creative-600 dark:text-creative-400'
                    }`}>
                      {project.period}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex}
                          className={`px-3 py-1 text-xs rounded-full border ${
                            project.type === 'chemistry'
                              ? 'bg-chem-50 dark:bg-chem-500/10 text-chem-700 dark:text-chem-300 border-chem-200 dark:border-chem-500/20'
                              : 'bg-creative-50 dark:bg-creative-500/10 text-creative-700 dark:text-creative-300 border-creative-200 dark:border-creative-500/20'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;