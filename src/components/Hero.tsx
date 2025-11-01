import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { useEffect, useState } from 'react';

// Posiciones fijas para las partículas (evita hydration mismatch)
const particlePositions = [
  { left: 10, top: 20, x: 5, duration: 3.2 },
  { left: 85, top: 15, x: -8, duration: 4.1 },
  { left: 30, top: 70, x: 10, duration: 3.5 },
  { left: 75, top: 80, x: -5, duration: 4.5 },
  { left: 50, top: 10, x: 8, duration: 3.8 },
  { left: 15, top: 60, x: -10, duration: 4.2 },
  { left: 90, top: 40, x: 7, duration: 3.3 },
  { left: 25, top: 85, x: -6, duration: 4.8 },
  { left: 60, top: 25, x: 9, duration: 3.6 },
  { left: 40, top: 50, x: -7, duration: 4.3 },
  { left: 70, top: 65, x: 6, duration: 3.9 },
  { left: 20, top: 35, x: -9, duration: 4.6 },
  { left: 80, top: 55, x: 8, duration: 3.4 },
  { left: 35, top: 90, x: -8, duration: 4.4 },
  { left: 95, top: 30, x: 10, duration: 3.7 },
  { left: 5, top: 45, x: -6, duration: 4.0 },
  { left: 55, top: 75, x: 7, duration: 3.5 },
  { left: 45, top: 20, x: -10, duration: 4.7 },
  { left: 65, top: 95, x: 9, duration: 3.3 },
  { left: 12, top: 55, x: -7, duration: 4.1 },
  { left: 88, top: 10, x: 6, duration: 3.8 },
  { left: 22, top: 78, x: 8, duration: 4.5 },
  { left: 78, top: 42, x: -9, duration: 3.6 },
  { left: 48, top: 88, x: 10, duration: 4.2 },
  { left: 68, top: 18, x: -8, duration: 3.4 },
  { left: 32, top: 62, x: 7, duration: 4.8 },
  { left: 92, top: 72, x: -6, duration: 3.9 },
  { left: 8, top: 32, x: 9, duration: 4.3 },
  { left: 58, top: 52, x: -10, duration: 3.7 },
  { left: 42, top: 8, x: 8, duration: 4.6 },
];

// Componente de partículas flotantes con posiciones fijas
const FloatingParticle = ({ delay, index }: { delay: number; index: number }) => {
  const pos = particlePositions[index];
  
  return (
    <motion.div
      className="absolute w-2 h-2 bg-purple-400 rounded-full"
      style={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, pos.x, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: pos.duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white px-4">
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 50%), radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.1} index={i} />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ x, y }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-blue-500">
              {profileData.name}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-pink-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {profileData.title}
            </motion.span>
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-yellow-400" size={20} />
            </motion.span>
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
