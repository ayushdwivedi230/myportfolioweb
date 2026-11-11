import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold gradient-text mb-2 tracking-tight">Ayush Dwivedi</h2>
          <p className="text-sm text-white/30">Full-Stack Developer | Cloud Computing Enthusiast</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/ayushdwivedi230" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ayush-dwivedi-47b18225b/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-white/40 flex items-center justify-center md:justify-end gap-2 mb-2">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Ayush
          </p>
          <p className="text-xs text-white/20">
            © 2026 Ayush Dwivedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
