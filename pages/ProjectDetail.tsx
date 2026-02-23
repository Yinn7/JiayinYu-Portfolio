
import React, { useEffect, useState, useRef } from 'react';
import { Project, Section, Translations } from '../types';

interface ProjectDetailProps {
  project: Project;
  translations: Translations;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, translations }) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-10% 0px -70% 0px" }
    );

    const refs = sectionRefs.current;
    Object.values(refs).forEach((ref) => {
      if (ref) observer.observe(ref as HTMLElement);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref) observer.unobserve(ref as HTMLElement);
      });
    };
  }, [project]);

  const renderImages = (section: Section) => {
    if (!section.images || section.images.length === 0) return null;

    switch (section.imageType) {
      case 'full':
        return (
          <div className="space-y-6 my-16">
            <div className="w-full aspect-video bg-[#F5F4F2] overflow-hidden rounded-sm group">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-xs font-light text-[#666] italic border-l border-[#1A1A1A] pl-4">
                {section.captions[0]}
              </p>
            )}
          </div>
        );
      case 'centered':
        return (
          <div className="space-y-6 my-16 flex flex-col items-center">
            <div className="max-w-[700px] w-full aspect-[3/2] bg-[#F5F4F2] overflow-hidden rounded-sm group">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-xs font-light text-[#666] italic text-center max-w-[600px]">
                {section.captions[0]}
              </p>
            )}
          </div>
        );
      case 'side-by-side':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
            {section.images.map((img, i) => (
              <div key={i} className="space-y-4">
                <div className="w-full aspect-[4/3] bg-[#F5F4F2] overflow-hidden rounded-sm group">
                  <img 
                    src={img} 
                    alt={`${section.title} ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                  />
                </div>
                {section.captions?.[i] && (
                  <p className="text-xs font-light text-[#666] italic">{section.captions[i]}</p>
                )}
              </div>
            ))}
          </div>
        );
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            {section.images.map((img, i) => (
              <div key={i} className="space-y-3">
                <div className="w-full aspect-square bg-[#F5F4F2] overflow-hidden rounded-sm group">
                  <img 
                    src={img} 
                    alt={`${section.title} ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                  />
                </div>
                {section.captions?.[i] && (
                  <p className="text-[10px] font-light text-[#666] italic">{section.captions[i]}</p>
                )}
              </div>
            ))}
          </div>
        );
      case 'small':
        return (
          <div className="max-w-[400px] my-12">
            <div className="aspect-[4/3] bg-[#F5F4F2] overflow-hidden rounded-sm group">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-xs font-light text-[#666] mt-4 italic">{section.captions[0]}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col md:flex-row relative">
      {/* Sidebar Navigation with Vertical Line */}
      <aside className="hidden md:block w-72 shrink-0 pr-16 sticky top-32 h-fit">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-0 top-0 w-px h-full bg-[#F5F4F2]" />
          <ul className="space-y-8 relative">
            <li className="pl-8 relative">
              <button 
                onClick={() => sectionRefs.current['overview']?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-[10px] uppercase tracking-widest text-left transition-all duration-300 ${activeSection === 'overview' ? 'opacity-100 font-bold scale-105 origin-left' : 'opacity-20 hover:opacity-50'}`}
              >
                Project Overview
              </button>
              {activeSection === 'overview' && (
                <div className="absolute left-[-1.5px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#1A1A1A] rounded-full transition-all duration-500" />
              )}
            </li>
            {project.sections.map((s) => (
              <li key={s.id} className="pl-8 relative">
                <button 
                  onClick={() => sectionRefs.current[s.id]?.scrollIntoView({ behavior: 'smooth' })}
                  className={`text-[10px] uppercase tracking-widest text-left transition-all duration-300 ${activeSection === s.id ? 'opacity-100 font-bold scale-105 origin-left' : 'opacity-20 hover:opacity-50'}`}
                >
                  {s.title}
                </button>
                {activeSection === s.id && (
                  <div className="absolute left-[-1.5px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#1A1A1A] rounded-full transition-all duration-500" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow max-w-[800px] min-h-screen">
        <header id="overview" ref={(el) => { sectionRefs.current['overview'] = el; }} className="mb-32 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#666] mb-12">
            {project.subtitle}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 py-12 border-y border-[#F5F4F2] mb-16">
            {Object.entries(project.overview).filter(([key]) => key !== 'text').map(([key, val]) => (
              <div key={key}>
                <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">
                  {translations.projectLabels[key as keyof typeof translations.projectLabels] || key}
                </h5>
                <p className="text-[13px] font-bold leading-tight">{val as string}</p>
              </div>
            ))}
          </div>
          
          <div className="prose prose-xl prose-neutral font-light leading-relaxed text-[#1A1A1A] max-w-none">
            {project.overview.text}
          </div>
        </header>

        {project.sections.map((section, idx) => (
          <section 
            key={section.id} 
            id={section.id} 
            ref={(el) => { sectionRefs.current[section.id] = el; }}
            className="mb-48 scroll-mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 border-b border-[#F5F4F2] pb-8">
              {section.title}
            </h2>
            
            <div className="space-y-8 font-light text-[#333] leading-relaxed text-lg max-w-3xl">
              {Array.isArray(section.content) 
                ? section.content.map((p, i) => <p key={i}>{p}</p>) 
                : <p>{section.content}</p>
              }
            </div>

            {section.callout && (
              <div className="bg-[#F5F4F2] p-12 my-20 border-l-[8px] border-[#1A1A1A] relative overflow-hidden group">
                <p className="text-3xl font-bold tracking-tight italic relative z-10 leading-tight">
                  "{section.callout}"
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-8xl font-bold">"</div>
              </div>
            )}

            {renderImages(section)}
          </section>
        ))}

        {/* Next Project Hint */}
        <div className="py-32 border-t border-[#F5F4F2] text-center">
          <p className="text-sm uppercase tracking-widest font-bold opacity-30 mb-8">End of Project</p>
          <a href="#/projects" className="text-4xl md:text-6xl font-bold tracking-tighter hover:opacity-50 transition-all underline underline-offset-16 decoration-1">
            Back to All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
