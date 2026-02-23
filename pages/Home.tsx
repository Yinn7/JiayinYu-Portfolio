
import React, { useEffect, useState } from 'react';
import { Translations, Project } from '../types';

interface HomeProps {
  projects: Project[];
  translations: Translations;
}

const Home: React.FC<HomeProps> = ({ projects, translations }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-[960px] mx-auto px-6 py-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <header className="mb-32">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
          {translations.home.greeting}
        </h1>
        <div className="space-y-4">
          <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
            {translations.home.role}
          </p>
          <p className="text-xl md:text-2xl font-light text-[#666]">
            {translations.home.mission}
          </p>
        </div>
      </header>

      <section id="projects" className="mb-32 space-y-32">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={`#/project/${project.id}`}
            className="group block relative"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#F5F4F2] mb-10 rounded-sm">
              <img 
                src={project.sections[0]?.images?.[0] || 'https://picsum.photos/seed/project/960/540'} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-3 opacity-60 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#1A1A1A] opacity-30"></span>
                  {project.subtitle}
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h2>
                <p className="text-lg font-light text-[#666] leading-relaxed max-w-xl">
                  {project.homeDescription}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right flex items-end justify-start md:justify-end h-full">
                <span className="text-sm uppercase tracking-widest font-bold border-b-2 border-[#1A1A1A] transition-all pb-1 translate-y-0 group-hover:-translate-y-1">
                  {translations.home.viewMore}
                </span>
              </div>
            </div>
          </a>
        ))}
      </section>

      <section className="py-24 border-t border-[#F5F4F2]">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16">
          {translations.skills.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {translations.skills.categories.map((skill, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-bold tracking-tight border-l-4 border-[#1A1A1A] pl-4">{skill.title}</h4>
              <p className="text-lg font-light leading-relaxed text-[#666]">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
