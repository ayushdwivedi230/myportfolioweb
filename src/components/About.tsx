import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Server, Sparkles } from 'lucide-react';
import Tilt from './Tilt';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            <span>About Me</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Crafting Digital <span className="gradient-text">Experiences</span>
          </motion.h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-24 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-text-main">
              I'm <span className="text-primary">Ayush</span>, a Full-Stack Developer focused on building structured, scalable, and user-centric applications.
            </h3>
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                My journey into development started with a strong interest in how technology powers real-world systems, and it has grown into a commitment to building meaningful digital products.
              </p>
              <p>
                I work across the entire stack — designing intuitive frontends, developing efficient backend systems, and ensuring smooth integration between the two. Recently, I’ve been expanding my skill set into cloud computing, exploring how applications can be deployed, managed, and scaled in modern environments.
              </p>
              <p className="font-medium text-text-main/80 italic">
                I believe good software is not just functional — it’s efficient, maintainable, and built with a clear purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <Tilt className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                <h4 className="text-primary font-bold text-3xl mb-1">4+</h4>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Projects Built</p>
              </Tilt>
              <Tilt className="glass p-6 rounded-2xl border border-white/5 hover:border-secondary/20 transition-colors">
                <h4 className="text-secondary font-bold text-3xl mb-1">10+</h4>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Certifications</p>
              </Tilt>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Code2,
                title: "Full-Stack Development",
                desc: "Expertise in MERN stack, building responsive and high-performance web applications.",
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                desc: "Proficient in AWS, Docker, and CI/CD pipelines for automated and scalable deployments.",
                color: "text-secondary",
                bg: "bg-secondary/10"
              },
              {
                icon: Server,
                title: "Backend Architecture",
                desc: "Designing robust APIs and database schemas that prioritize security and performance.",
                color: "text-indigo-400",
                bg: "bg-indigo-400/10"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Tilt className="glass p-8 rounded-3xl flex gap-6 hover:bg-white/10 transition-all duration-500 group border border-white/5 card-3d h-full">
                  <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform h-fit`}>
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
