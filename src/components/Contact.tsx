import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-8"></div>
          
          <p className="text-center text-lg text-slate-200 mb-12">
            Siempre abierto a colaborar en proyectos de desarrollo web, innovación tecnológica y soluciones digitales orientadas al usuario.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href={`mailto:${profileData.email}`}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:bg-slate-700 transition-colors flex items-center gap-4"
            >
              <div className="bg-purple-600 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-slate-300 text-sm">{profileData.email}</p>
              </div>
            </motion.a>
            
            <motion.a
              href={`tel:${profileData.phone}`}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:bg-slate-700 transition-colors flex items-center gap-4"
            >
              <div className="bg-purple-600 p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                <p className="text-slate-300 text-sm">{profileData.phone}</p>
              </div>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-lg shadow-lg flex items-center gap-4"
            >
              <div className="bg-purple-600 p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                <p className="text-slate-300 text-sm">{profileData.location}</p>
              </div>
            </motion.div>
            
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <motion.a
                  href={`https://${profileData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href={`https://${profileData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Send size={20} />
              Enviar un mensaje
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
