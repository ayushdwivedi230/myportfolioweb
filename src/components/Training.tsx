import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import Tilt from './Tilt';

const Training = () => {
  const trainingData = [
    {
      title: "React & Node.js Development",
      organization: "Centre for Professional Enhancement",
      link: "#",
      period: "Jun’ 25 – Aug’ 25",
      points: [
        "Completed a full-stack development training organized by Lovely Professional University, covering modern frontend and backend development workflows.",
        "Gained hands-on experience in building responsive web interfaces using React, component-based architecture, and state management concepts.",
        "Worked with Node.js and Express.js to develop Restful APIs, manage server-side logic, and handle database interactions.",
        "Launched end-to-end web application modules integrating both frontend and backend components, improving understanding of full-stack project structure."
      ]
    }
  ];

  return (
    <section id="training" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional <span className="gradient-text">Training</span></h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-20 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {trainingData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Tilt className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-secondary/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-main mb-2 flex items-center gap-3">
                      <Laptop className="text-secondary" size={28} />
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-text-muted font-medium">
                      <span className="flex items-center gap-1">
                        {item.organization}
                      </span>
                      {item.link !== '#' && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm">
                          <ExternalLink size={14} /> Link
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-text-main/80 text-sm font-bold whitespace-nowrap w-fit">
                    <Calendar size={16} className="text-secondary/70" />
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {item.points.map((point, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-3 text-text-muted leading-relaxed"
                    >
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
