import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Eye } from 'lucide-react';
import Magnetic from './Magnetic';

const roles = [
  "Full-Stack Developer",
  "Cloud Computing Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-primary uppercase mb-6"
          >
            Welcome to my portfolio
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
            I'm <span className="gradient-text">Ayush Dwivedi</span>
          </h1>

          <div className="h-14 mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-medium text-text-main/80"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
            I build scalable web applications and cloud-powered systems. 
            Passionate about creating efficient, user-centric digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <motion.a
                href="/assets/AyushDwivediCV (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-dark font-bold rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <Eye size={20} />
                View Resume
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Crazy Soothing Blob */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-[120%] h-[120%] bg-linear-to-tr from-primary/20 via-secondary/20 to-primary/10 blur-3xl"
          />

          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] card-3d">
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-secondary/10 rounded-full"
            />
            
            {/* Floating Particles around frame */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute w-2 h-2 bg-primary/40 rounded-full blur-xs"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}

            <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white/5 shadow-[0_0_80px_rgba(167,139,250,0.2)] backdrop-blur-sm">
              <img 
                src="/profile.jpg" 
                alt="Ayush Dwivedi" 
                className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=600";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
