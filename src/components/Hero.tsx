import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profileData.name}
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-purple-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {profileData.title}
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {profileData.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {profileData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              <span>Contáctame</span>
            </a>
            <a href="#projects" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors">
              Ver Proyectos
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6 text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{profileData.location}</span>
            </div>
            <a href={`${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`${profileData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
              <Github size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
