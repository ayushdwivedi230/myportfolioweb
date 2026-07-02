import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Sparkles, BookOpen, Target } from 'lucide-react';
import Tilt from './Tilt';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (Computer Science)",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      score: "CGPA: 7.04",
      period: "Since Aug’ 2023",
      current: true,
      description: "Focusing on Full Stack Development, cloud technologies, and Algorithms.",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      degree: "Intermediate",
      institution: "Morning Star Children Academy",
      location: "Orai, Uttar Pradesh",
      score: "70%",
      period: "Apr’ 20 – Mar’ 22",
      description: "Specialized in Physics, Chemistry, and Mathematics.",
      icon: BookOpen,
      color: "text-secondary"
    },
    {
      degree: "Matriculation",
      institution: "BNSD Shiksha Niketan Inter College",
      location: "Kanpur, Uttar Pradesh",
      score: "90%",
      period: "Apr’ 18 – Mar’ 20",
      description: "Foundation in core subjects with strong academic excellence.",
      icon: Target,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="education" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={12} />
            <span>Academic Records</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter"
          >
            Education <span className="gradient-text">Milestones</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt className="group relative glass p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{item.period}</span>
                    {item.current && (
                      <span className="text-[8px] font-bold text-primary mt-1 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {item.degree}
                </h3>
                <p className="text-sm text-text-muted font-medium mb-4 flex items-center gap-1.5">
                  {item.institution}
                </p>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-primary/60" />
                      <span className="text-[10px] font-bold text-text-muted/50 uppercase tracking-widest">Score</span>
                    </div>
                    <span className="text-sm font-bold text-text-main/90">{item.score}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-text-muted/30" />
                      <span className="text-[10px] font-bold text-text-muted/50 uppercase tracking-widest">Location</span>
                    </div>
                    <span className="text-xs font-bold text-text-main/90 text-right">{item.location}</span>
                  </div>
                </div>

                <p className="text-text-muted/60 text-[13px] leading-relaxed italic border-t border-white/5 pt-4">
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

export default Education;
