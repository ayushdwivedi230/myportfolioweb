/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import CursorCharacter from './components/CursorCharacter';

export default function App() {
  return (
    <div className="relative">
      <StarBackground />
      <CursorCharacter />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <SkillsMarquee />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
