import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="glass-card bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Collaborate</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto text-lg">
            Whether it's scientific research data analysis or managing creative projects, I bring a unique analytical perspective.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href="mailto:sayanmondal.co@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-chem-600 hover:bg-chem-500 rounded-xl transition-all font-bold text-white hover:scale-105 shadow-lg shadow-chem-500/20">
              <Mail size={20} /> sayanmondal.co@gmail.com
            </a>
            <a href="tel:+919883635078" className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white hover:scale-105">
              <Phone size={20} /> +91 9883635078
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <SocialLink href="https://www.linkedin.com/in/sayan-mondal-32054735a/" icon={Linkedin} label="LinkedIn" hoverColor="hover:text-blue-600" />
            <SocialLink href="https://github.com/AstorDev3D" icon={Github} label="GitHub" hoverColor="hover:text-slate-900 dark:hover:text-white" />
            <SocialLink href="https://www.instagram.com/sayan_mondal.20_/" icon={Instagram} label="Instagram" hoverColor="hover:text-pink-500" />
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 flex items-center justify-center gap-2">
            <MapPin size={14} /> Kalyani Block-C, Kalyani, Nadia, 741235
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-chem-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-creative-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <footer className="mt-20 text-center text-slate-500 dark:text-slate-600 text-sm">
        <p>&copy; 2025 Sayan Mondal. Designed with Science & Art.</p>
      </footer>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label, hoverColor }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`group relative p-2 text-slate-400 transition-all transform hover:scale-110 ${hoverColor}`}>
    <Icon size={32} />
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </a>
);

export default Contact;