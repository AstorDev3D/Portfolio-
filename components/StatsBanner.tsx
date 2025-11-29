import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Certified Chemist', value: 'M.Sc.', color: 'text-chem-500' },
  { label: 'Years Leadership', value: '4+', color: 'text-creative-500' },
  { label: 'Team Size Led', value: '15+', color: 'text-blue-500 dark:text-blue-400' },
  { label: 'Major Research Projects', value: '2', color: 'text-pink-500 dark:text-pink-400' },
];

const StatsBanner: React.FC = () => {
  return (
    <div className="py-10 border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;