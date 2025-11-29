import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { FlaskConical, Layers, PieChart } from 'lucide-react';
import TiltCard from './TiltCard';

const skills: SkillCategory[] = [
  {
    title: 'Chemistry & Lab',
    icon: FlaskConical,
    skills: ['Origin', 'Chemdraw', 'Gauss View', 'NMR/IR Analysis', 'UV-Vis', 'Lab Tech'],
    colorClass: 'text-chem-500 border-chem-500'
  },
  {
    title: 'Creative & 3D',
    icon: Layers,
    skills: ['Blender (3D/2D)', 'DaVinci Resolve', 'Figma', 'Illustrator', 'Photoshop'],
    colorClass: 'text-creative-500 border-creative-500'
  },
  {
    title: 'Productivity',
    icon: PieChart,
    skills: ['Microsoft Excel', 'PowerBi', 'PowerPoint', 'Research'],
    colorClass: 'text-green-500 border-green-500'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div 
                  className={`h-full bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border-t-4 shadow-lg ${category.colorClass.split(' ')[1]}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 ${category.colorClass.split(' ')[0]}`}>
                      <category.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;