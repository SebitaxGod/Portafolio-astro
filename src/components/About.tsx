import { motion } from 'framer-motion';
import { Award, Languages } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-purple-600" size={28} />
                <h3 className="text-2xl font-semibold text-slate-900">Idiomas</h3>
              </div>
              <ul className="space-y-2">
                {profileData.languages.map((lang, index) => (
                  <li key={index} className="text-slate-700">
                    <span className="font-medium">{lang.name}:</span> {lang.level}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-600" size={28} />
                <h3 className="text-2xl font-semibold text-slate-900">Certificaciones</h3>
              </div>
              <ul className="space-y-3">
                {profileData.certifications.map((cert, index) => (
                  <li key={index} className="text-slate-700 flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
