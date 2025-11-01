import { motion } from 'framer-motion';
import { technicalSkills, softSkills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
          
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Habilidades Técnicas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">Lenguajes</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.frameworks.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">Bases de Datos</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.databases.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.devops.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">Estilos & UI</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.styling.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3 text-lg">Otros</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.other.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
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
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Habilidades Blandas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-linear-to-br from-purple-600 to-purple-800 p-6 rounded-lg shadow-lg text-white text-center"
                >
                  <div className="text-3xl mb-3">
                    {skill.icon === 'MessageSquare' && '💬'}
                    {skill.icon === 'Users' && '👥'}
                    {skill.icon === 'Zap' && '⚡'}
                    {skill.icon === 'Lightbulb' && '💡'}
                    {skill.icon === 'Brain' && '🧠'}
                  </div>
                  <h4 className="font-semibold mb-1">{skill.name}</h4>
                  <p className="text-sm text-purple-200">{skill.nameEn}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
