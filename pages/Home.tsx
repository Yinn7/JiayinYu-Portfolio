
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
                <div className="mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-1">{project.title}</h2>
                  <p className="text-xl md:text-2xl font-normal text-[#888] tracking-tight leading-tight">
                    {project.overview.duration.split('\n')[0].replace('-', '–')}
                  </p>
                </div>
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

      <section className="py-24 border-t border-[#F5F4F2]">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16">
          {translations.activities.title}
        </h2>
        <div className="space-y-32">
          {translations.activities.items.map((activity, idx) => (
            <div key={idx} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-12">
                  <h3 className="text-4xl font-bold mb-6">{activity.name}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest font-bold opacity-40 mb-3">
                        {translations.activities.roleLabel}
                      </h4>
                      <p className="text-xl font-light leading-relaxed text-[#333] whitespace-pre-line">
                        {activity.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {activity.images.map((img, i) => (
                  <div key={i} className="aspect-video bg-[#F5F4F2] rounded-lg overflow-hidden border border-[#F5F4F2]">
                    <img 
                      src={img} 
                      alt={`${activity.name} photo ${i + 1}`} 
                      className="w-full h-full object-cover transition-opacity opacity-90 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F4F2] p-10 rounded-2xl">
                <h4 className="text-sm uppercase tracking-widest font-bold opacity-40 mb-6">
                  {translations.activities.reflectionLabel}
                </h4>
                <ul className="space-y-4">
                  {activity.reflections.map((reflection, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="opacity-40 mt-1">•</span>
                      <p className="text-lg font-light leading-snug text-[#1A1A1A]">
                        {reflection}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
