import { motion, useAnimation } from 'framer-motion';
import { technicalSkills, softSkills } from '../data/skills';
import { useEffect, useState } from 'react';

const SkillOrb = ({ skill, index, category }: { skill: string, index: number, category: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = {
    languages: 'from-purple-500 to-pink-500',
    frameworks: 'from-blue-500 to-cyan-500',
    databases: 'from-green-500 to-emerald-500',
    devops: 'from-orange-500 to-red-500',
    styling: 'from-pink-500 to-rose-500',
    other: 'from-yellow-500 to-amber-500',
  };
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.div
        className={`relative bg-linear-to-br ${colors[category as keyof typeof colors]} p-4 rounded-full cursor-pointer`}
        whileHover={{ scale: 1.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2 + index * 0.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-white font-semibold text-sm px-2">{skill}</span>
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-50"
          style={{
            background: `linear-gradient(to bottom right, ${colors[category as keyof typeof colors].split(' ')[1]}, ${colors[category as keyof typeof colors].split(' ')[3]})`,
          }}
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </motion.div>
      
      {/* Tooltip on hover */}
      {isHovered && (
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {skill}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
        </motion.div>
      )}
    </motion.div>
  );
};

const SoftSkillCard = ({ skill, index }: { skill: typeof softSkills[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: 10,
      }}
      style={{ perspective: "1000px" }}
      className="relative"
    >
      <motion.div
        className="relative bg-linear-to-br from-purple-600 to-purple-900 p-8 rounded-2xl shadow-2xl text-white text-center overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated background particles */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            className="text-5xl mb-4"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {skill.icon === 'MessageSquare' && '💬'}
            {skill.icon === 'Users' && '👥'}
            {skill.icon === 'Zap' && '⚡'}
            {skill.icon === 'Lightbulb' && '💡'}
            {skill.icon === 'Brain' && '🧠'}
          </motion.div>
          
          <h4 className="font-bold text-xl mb-2">{skill.name}</h4>
          <p className="text-purple-200 text-sm">{skill.nameEn}</p>
        </motion.div>
        
        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
          }}
        />
      </motion.div>
      
      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

// Conexiones fijas para evitar hydration mismatch
const fixedConnections = [
  { from: 3, to: 12 },
  { from: 7, to: 15 },
  { from: 1, to: 18 },
  { from: 9, to: 4 },
  { from: 14, to: 6 },
  { from: 2, to: 19 },
  { from: 11, to: 8 },
  { from: 5, to: 16 },
  { from: 17, to: 10 },
  { from: 0, to: 13 },
  { from: 8, to: 3 },
  { from: 13, to: 7 },
  { from: 6, to: 1 },
  { from: 19, to: 11 },
  { from: 4, to: 14 },
];

export default function SkillsEnhanced() {
  const [connections] = useState(fixedConnections);
  
  return (
    <section id="skills" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ec4899 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              Habilidades
            </span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Technical Skills with Orbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-pink-300">
                Habilidades Técnicas
              </span>
            </h3>
            
            {/* Orbs Container */}
            <div className="relative min-h-[400px]">
              {/* Connections (lines between orbs) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                {connections.map((conn, idx) => (
                  <motion.line
                    key={idx}
                    x1={`${(conn.from % 10) * 10 + 5}%`}
                    y1={`${Math.floor(conn.from / 10) * 50 + 25}%`}
                    x2={`${(conn.to % 10) * 10 + 5}%`}
                    y2={`${Math.floor(conn.to / 10) * 50 + 25}%`}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{
                      duration: 2,
                      delay: idx * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Skills Orbs by Category */}
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="contents">
                    {skills.map((skill, idx) => (
                      <SkillOrb
                        key={`${category}-${skill}`}
                        skill={skill}
                        index={idx}
                        category={category}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-pink-300">
                Habilidades Blandas
              </span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {softSkills.map((skill, idx) => (
                <SoftSkillCard key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
