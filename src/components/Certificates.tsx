import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { certificates } from '../data/certificates';
import Tilt from './Tilt';

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional <span className="gradient-text">Certifications</span></h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(cert.image)}
            >
              <Tilt className="group glass rounded-2xl overflow-hidden cursor-pointer card-3d h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm text-text-muted/70">{cert.org}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-dark/90 backdrop-blur-md"
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
