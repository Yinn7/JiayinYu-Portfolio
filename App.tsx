
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations, projects_en, projects_zh } from './translations';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on every navigation
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'zh' : 'en'));
  };

  const activeProjects = lang === 'en' ? projects_en : projects_zh;
  const activeTranslations = translations[lang];

  const renderRoute = () => {
    const hash = currentHash || '#/';
    
    if (hash.startsWith('#/project/')) {
      const id = hash.replace('#/project/', '');
      const project = activeProjects.find(p => p.id === id);
      if (project) return <ProjectDetail project={project} translations={activeTranslations} />;
    }

    if (hash === '#/projects') {
      return <Projects projects={activeProjects} />;
    }
    
    // Default to Home
    return <Home projects={activeProjects} translations={activeTranslations} />;
  };

  return (
    <Layout 
      lang={lang} 
      onLangChange={toggleLang} 
      translations={activeTranslations}
    >
      {renderRoute()}
    </Layout>
  );
};

export default App;
