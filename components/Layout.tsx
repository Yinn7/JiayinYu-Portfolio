
import React from 'react';
import { Language, Translations } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  onLangChange: () => void;
  translations: Translations;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, onLangChange, translations }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="#/" className="text-lg font-bold tracking-tight hover:opacity-50 transition-opacity">
            Jiayin Yu
          </a>
        </div>
        <div className="flex items-center space-x-6 md:space-x-12">
          <a href="#/projects" className="text-sm tracking-wide uppercase font-medium hover:opacity-50 transition-opacity">
            {translations.nav.projects}
          </a>
          <a 
            href="mailto:jyu16@uw.edu" 
            className="text-sm tracking-wide uppercase font-medium hover:opacity-50 transition-opacity hidden md:block"
          >
            jyu16@uw.edu
          </a>
          <button 
            onClick={onLangChange}
            className="text-xs border border-[#1A1A1A] px-3 py-1 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 font-medium"
          >
            {translations.nav.lang}
          </button>
        </div>
      </nav>
      
      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-[#F5F4F2] py-24 px-6 md:px-12 mt-auto">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Let's build inclusive insights together.
          </p>
          <a 
            href="mailto:jyu16@uw.edu"
            className="text-xl md:text-2xl font-medium underline underline-offset-8 hover:opacity-50 transition-opacity"
          >
            jyu16@uw.edu
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
