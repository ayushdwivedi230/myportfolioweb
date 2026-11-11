import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import Tilt from './Tilt';

const Skills = () => {
  const categories = [
    { title: "Languages", items: skills.languages, color: "from-emerald-400 to-teal-400" },
    { title: "Frontend", items: skills.frontend, color: "from-violet-400 to-indigo-400" },
    { title: "Backend", items: skills.backend, color: "from-indigo-400 to-blue-400" },
    { title: "Database", items: skills.database, color: "from-purple-400 to-violet-400" },
    { title: "Cloud & DevOps", items: skills.cloud, color: "from-blue-400 to-cyan-400" },
    { title: "Tools", items: skills.tools, color: "from-slate-400 to-gray-400" }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-20 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group card-3d h-full">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className={`w-2 h-6 rounded-full bg-linear-to-b ${cat.color}`} />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
