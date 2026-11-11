import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import Tilt from './Tilt';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Key <span className="gradient-text">Achievements</span></h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-20 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Tilt className="glass p-10 rounded-3xl text-center group hover:border-primary/30 transition-all card-3d h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
