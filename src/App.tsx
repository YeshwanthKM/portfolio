import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-white text-primary-black font-sans selection:bg-black selection:text-white">
      {/* Custom follower cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <Skills />
        <About />
        <Education />
        <Projects />
        <Achievements />
        <Community />
        <Contact />
        <ScrollToTop />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
