// src/App.jsx
import React from 'react';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import LanguageSwitch from './components/common/LanguageSwitch';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';


const App = () => {
  return (
    <LanguageProvider>
      <div className="bg-gray-50">
        <Header />
        <LanguageSwitch />
        <ScrollToTop />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer className="py-8 bg-emerald-950 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="paperlogy-medium text-gray-300">
              © 2025 Dongin Kim. Made with React & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;