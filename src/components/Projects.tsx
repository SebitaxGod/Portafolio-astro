import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="bg-linear-to-r from-purple-600 to-purple-800 p-6">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <Code2 size={24} />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-purple-100 text-sm">{project.institution}</p>
                  <p className="text-purple-200 text-sm">{project.period}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-slate-700 flex items-center gap-2">
                          <span className="text-purple-600">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
