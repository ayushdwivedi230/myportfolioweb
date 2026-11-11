import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiDocker, SiLinux, SiMysql, SiFlask, SiGnubash,
  SiGit, SiGithub,
  SiCplusplus, SiPython, SiC
} from 'react-icons/si';
import { FaCss3Alt, FaAws, FaJava } from 'react-icons/fa6';
import { VscCode } from 'react-icons/vsc';

const row1 = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
];

const row2 = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" },
];

interface SkillCardProps {
  name: string;
  icon: any;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        boxShadow: `0 0 25px ${color}44`
      }}
      className="flex items-center gap-4 px-8 py-4 glass rounded-2xl border border-white/10 min-w-[200px] group transition-all duration-300"
    >
      <div 
        className="p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform"
        style={{ color: color }}
      >
        <Icon size={28} />
      </div>
      <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const MarqueeRow = ({ items, direction = "left" }: { items: any[], direction?: "left" | "right" }) => {
  const scrollX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="flex overflow-hidden py-8 select-none">
      <motion.div
        animate={{ x: scrollX }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
        style={{ width: "fit-content" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <SkillCard 
            key={`${item.name}-${idx}`} 
            name={item.name} 
            icon={item.icon} 
            color={item.color} 
          />
        ))}
      </motion.div>
    </div>
  );
};

const SkillsMarquee = () => {
  return (
    <section id="skills-marquee" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of modern technologies I use to bring ideas to life, 
            ranging from frontend aesthetics to cloud infrastructure.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
};

export default SkillsMarquee;
