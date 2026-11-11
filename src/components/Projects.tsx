import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import Tilt from './Tilt';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <Tilt className="group glass rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500">
        <div className="relative h-72 rounded-t-[2.5rem] overflow-hidden">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-10 text-center">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white/80">{project.title}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">Image coming soon</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="absolute top-6 right-6 flex gap-3 z-50" style={{ transform: "translateZ(30px)" }}>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 glass rounded-2xl text-white hover:bg-primary hover:text-dark transition-all duration-300 backdrop-blur-xl relative z-50 pointer-events-auto"
              title="View Code"
            >
              <Github size={20} />
            </a>
            {project.liveLink !== '#' && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 glass rounded-2xl text-white hover:bg-secondary hover:text-dark transition-all duration-300 backdrop-blur-xl relative z-50 pointer-events-auto"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="p-10">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-2">
              {project.subtitle}
            </span>
            <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-text-muted leading-relaxed mb-8 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-1.5 rounded-xl bg-white/5 text-[11px] font-bold uppercase tracking-wider text-white/50 border border-white/5 group-hover:border-primary/20 transition-colors">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 relative z-50" style={{ transform: "translateZ(30px)" }}>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-4 glass rounded-2xl text-center text-sm font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 relative z-50 pointer-events-auto"
            >
              <Github size={18} />
              Source Code
            </a>
            {project.liveLink !== '#' && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 bg-primary text-dark rounded-2xl text-center text-sm font-bold hover:shadow-[0_10px_30px_rgba(167,139,250,0.4)] transition-all duration-300 flex items-center justify-center gap-2 relative z-50 pointer-events-auto"
              >
                <ExternalLink size={18} />
                Live Preview
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto"
          >
            A selection of my recent work, ranging from full-stack applications to 
            specialized cloud infrastructure projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
