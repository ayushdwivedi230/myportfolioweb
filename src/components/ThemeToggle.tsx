import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <Magnetic strength={0.3}>
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        className="p-2.5 glass rounded-xl text-primary hover:bg-primary hover:text-dark transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        {isLight ? <Moon size={20} /> : <Sun size={20} />}
      </motion.button>
    </Magnetic>
  );
};

export default ThemeToggle;
