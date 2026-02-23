
import React, { useState, useMemo } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(['All']);
    projects.forEach(p => p.category.forEach(c => cats.add(c)));
    return Array.from(cats);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category.includes(filter));
  }, [projects, filter]);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">Case Studies</h1>
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-widest px-8 py-3 rounded-full border transition-all font-bold ${
                filter === cat 
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                : 'border-[#F5F4F2] hover:border-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {filteredProjects.map((project) => (
          <a 
            key={project.id} 
            href={`#/project/${project.id}`}
            className="group block relative"
          >
            <div className="aspect-[1.4] w-full overflow-hidden bg-[#F5F4F2] mb-8 rounded-sm">
              <img 
                src={project.sections[0]?.images?.[0] || 'https://picsum.photos/seed/project/600/450'} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                {project.category.map(c => (
                  <span key={c} className="text-[9px] uppercase tracking-[0.2em] text-[#666] font-bold bg-[#F5F4F2] px-3 py-1 rounded">
                    {c}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#666] transition-colors">{project.title}</h2>
              <p className="text-lg font-light text-[#666] line-clamp-2 leading-relaxed">
                {project.homeDescription}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
