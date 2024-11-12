import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import WebNav from './components/WebNav';

type Section = 'start' | 'about' | 'skills' | 'projects' | 'blog' | 'contact';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('start');

  const handleStart = () => {
    setCurrentSection('about');
  };

  return (
    <>
      {/* Mobile Navigation */}
      {currentSection !== 'start' && (
        <div className="md:hidden">
          <Navbar
            currentSection={currentSection}
            onSectionChange={(section) => setCurrentSection(section as Section)}
          />
        </div>
      )}

      {/* Desktop Navigation */}
      {currentSection !== 'start' && (
        <WebNav
          currentSection={currentSection}
          onSectionChange={(section) => setCurrentSection(section as Section)}
        />
      )}
      
      <AnimatePresence mode="wait">
        {currentSection === 'start' && (
          <motion.div
            key="start"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <StartScreen onStart={handleStart} />
          </motion.div>
        )}
        
        {currentSection === 'about' && (
          <motion.div
            key="about"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AboutSection />
          </motion.div>
        )}

        {currentSection === 'skills' && (
          <motion.div
            key="skills"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SkillsSection />
          </motion.div>
        )}

        {currentSection === 'projects' && (
          <motion.div
            key="projects"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ProjectsSection />
          </motion.div>
        )}

        {currentSection === 'blog' && (
          <motion.div
            key="blog"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <BlogSection />
          </motion.div>
        )}

        {currentSection === 'contact' && (
          <motion.div
            key="contact"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;