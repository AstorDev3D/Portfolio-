import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Secretary of Creative & Magazine',
    role: 'University of Kalyani',
    institution: '',
    period: 'Dec 2023 - Aug 2025',
    type: 'chemistry',
    description: [
      'Led 15-member creative team for event materials & logistics.',
      'Coordinated production of department reunion magazine (300 print / 500+ digital).',
      'Authored scientific reports & technical documentation.',
      'Collaborated with 30-person decoration team for event aesthetics.',
      'Managed budgets using Excel & Project Management tools.'
    ]
  },
  {
    id: 2,
    title: 'General Secretary',
    role: 'Santipur College',
    institution: '',
    period: 'Sep 2020 - Aug 2023',
    type: 'creative',
    description: [
      'Directed 30-member creative team for Freshers Welcome Event.',
      'Managed budgeting & procurement for food/decoration under tight deadlines.',
      'Coordinated vendors & maintained detailed documentation/reports.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-500 to-creative-500">Leadership</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chem-500 via-creative-500 to-transparent transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`md:flex items-center justify-between mb-16 relative ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <motion.div 
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-dark z-10 shadow-[0_0_15px] shadow-chem-500 bg-chem-500"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              ></motion.div>

              {/* Content Side */}
              <motion.div 
                className={`w-full md:w-5/12 pl-20 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                 <div className="hidden md:block">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <div className={`font-mono text-sm mt-1 font-bold ${
                    exp.type === 'chemistry' ? 'text-chem-600 dark:text-chem-400' : 'text-creative-600 dark:text-creative-400'
                  }`}>
                    {exp.role} | {exp.period}
                  </div>
                 </div>
              </motion.div>

              {/* Card Side */}
              <motion.div 
                className={`w-full md:w-5/12 pl-20 md:pl-0 mt-4 md:mt-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                {/* Mobile Header (Shown only on small screens) */}
                <div className="md:hidden mb-4 -ml-12">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <div className="text-sm text-chem-500 font-mono font-bold">{exp.role}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">{exp.period}</div>
                </div>

                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:border-chem-500/50 hover:shadow-xl transition-all duration-300">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm list-disc pl-4 marker:text-chem-500">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;