import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useState } from 'react';

const ProjectCard3D = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ perspective: "1000px" }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : "0deg",
          rotateY: isHovered ? rotateY : "0deg",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative cursor-pointer"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <motion.div
          className="relative bg-linear-to-br from-slate-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Glowing border effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(45deg, #7c3aed, #ec4899, #3b82f6, #7c3aed)",
              backgroundSize: "300% 300%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative bg-slate-900 m-0.5 rounded-2xl p-6 md:p-8" style={{ transform: "translateZ(50px)" }}>
            {/* Animated gradient header */}
            <motion.div
              className="relative mb-4 p-6 rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #3b82f6 100%)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3 text-white mb-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="text-purple-100 text-sm">{project.institution}</p>
              <p className="text-purple-200 text-sm">{project.period}</p>
              
              {/* Sparkles decoration */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="text-yellow-300" size={20} />
              </motion.div>
            </motion.div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
            
            {/* Technologies with hover effect */}
            <div className="mb-6">
              <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Code2 size={18} />
                Tecnologías:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(124, 58, 237, 0.4)",
                      borderColor: "rgba(124, 58, 237, 0.6)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Click to flip indicator */}
            <motion.div
              className="text-center text-slate-400 text-sm mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔄 Click para ver características
            </motion.div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-purple-900 to-slate-900 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10">
            <h4 className="font-bold text-purple-300 mb-4 text-2xl flex items-center gap-2">
              <Sparkles className="text-yellow-400" />
              Características Destacadas
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  className="text-slate-200 flex items-start gap-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.span
                    className="text-purple-400 text-xl mt-1"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    ✨
                  </motion.span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              className="text-center text-slate-400 text-sm mt-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔄 Click para regresar
            </motion.div>
          </div>
          
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20 rounded-2xl"
            style={{
              background: "radial-gradient(circle at 50% 50%, #7c3aed, transparent)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Floating shadow */}
      <motion.div
        className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-2xl -z-10"
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function ProjectsEnhanced() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-blue-500">
              Proyectos Destacados
            </span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            {projectsData.map((project, index) => (
              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
