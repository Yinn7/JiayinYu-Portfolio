
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
      if (ref) observer.observe(ref as Element);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref) observer.unobserve(ref as Element);
      });
    };
  }, [project]);

  const parseLine = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderContent = (content: string | string[]) => {
    const lines = Array.isArray(content) ? content : [content];
    return lines.map((line, i) => {
      if (line === "——————") {
        return <div key={i} className="h-px bg-[#1A1A1A]/10 my-4" />;
      }
      if (line.startsWith("•")) {
        return (
          <div key={i} className="flex items-start space-x-3 mb-2">
            <span className="opacity-40 mt-1">•</span>
            <span className="flex-1">{parseLine(line.substring(1).trim())}</span>
          </div>
        );
      }
      return (
        <p key={i} className="mb-2 last:mb-0 leading-tight">
          {parseLine(line)}
        </p>
      );
    });
  };

  const renderImages = (section: Section) => {
    if (!section.images || section.images.length === 0) return null;

    switch (section.imageType) {
      case 'hero':
      case 'full':
        return (
          <div className="space-y-4 my-10">
            <div className="w-full aspect-video bg-[#F5F4F2] overflow-hidden rounded-lg group shadow-sm border border-[#F5F4F2]">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-[11px] font-medium text-[#888] tracking-wide uppercase leading-tight">
                {section.captions[0]}
              </p>
            )}
          </div>
        );
      case 'centered':
        return (
          <div className="space-y-4 my-10 flex flex-col items-center">
            <div className="max-w-[700px] w-full aspect-[3/2] bg-[#F5F4F2] overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-[11px] font-medium text-[#888] tracking-wide uppercase text-center leading-tight">
                {section.captions[0]}
              </p>
            )}
          </div>
        );
      case 'side-by-side':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {section.images.map((img, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full aspect-[4/3] bg-[#F5F4F2] overflow-hidden rounded-lg group shadow-sm">
                  <img 
                    src={img} 
                    alt={`${section.title} ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                  />
                </div>
                {section.captions?.[i] && (
                  <p className="text-[11px] font-medium text-[#888] tracking-wide uppercase leading-tight">{section.captions[i]}</p>
                )}
              </div>
            ))}
          </div>
        );
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {section.images.map((img, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full aspect-square bg-[#F5F4F2] overflow-hidden rounded-lg group shadow-sm">
                  <img 
                    src={img} 
                    alt={`${section.title} ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                  />
                </div>
                {section.captions?.[i] && (
                  <p className="text-[10px] font-medium text-[#888] tracking-wide uppercase leading-tight">{section.captions[i]}</p>
                )}
              </div>
            ))}
          </div>
        );
      case 'small':
        return (
          <div className="max-w-[400px] my-10">
            <div className="aspect-[4/3] bg-[#F5F4F2] overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={section.images[0]} 
                alt={section.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              />
            </div>
            {section.captions?.[0] && (
              <p className="text-[11px] font-medium text-[#888] mt-3 tracking-wide uppercase leading-tight">{section.captions[0]}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col md:flex-row relative">
      {/* Sidebar Navigation */}
      <aside className="hidden md:block w-72 shrink-0 pr-16 sticky top-32 h-fit">
        <div className="relative">
          <div className="absolute left-0 top-0 w-px h-full bg-[#F5F4F2]" />
          <ul className="space-y-6 relative">
            <li className="pl-8 relative">
              <button 
                onClick={() => sectionRefs.current['overview']?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-[10px] uppercase tracking-[0.2em] text-left transition-all duration-300 font-bold ${activeSection === 'overview' ? 'opacity-100 scale-105 origin-left' : 'opacity-20 hover:opacity-50'}`}
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
                  className={`text-[10px] uppercase tracking-[0.2em] text-left transition-all duration-300 font-bold ${activeSection === s.id ? 'opacity-100 scale-105 origin-left' : 'opacity-20 hover:opacity-50'}`}
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
        <header id="overview" ref={(el) => { sectionRefs.current['overview'] = el; }} className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#666] mb-10 leading-snug">
            {project.subtitle}
          </p>
          
          <div className="bg-[#F5F4F2] rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-12">
            {Object.entries(project.overview).filter(([key]) => key !== 'text').map(([key, val]) => (
              <div key={key}>
                <h5 className="text-[10px] uppercase tracking-[0.1em] font-bold mb-2 opacity-40">
                  {translations.projectLabels[key as keyof typeof translations.projectLabels] || key}
                </h5>
                <p className="text-[13px] font-bold leading-tight">{val as string}</p>
              </div>
            ))}
          </div>
          
          <div className="font-light text-[18px] text-[#1A1A1A] leading-relaxed max-w-none">
            {project.overview.text}
          </div>
        </header>

        {project.sections.map((section) => (
          <section 
            key={section.id} 
            id={section.id} 
            ref={(el) => { sectionRefs.current[section.id] = el; }}
            className="mb-24 scroll-mt-32"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                {section.title}
              </h2>
              {section.subtitle && (
                <h4 className="text-lg font-bold text-[#666] tracking-tight">
                  {section.subtitle}
                </h4>
              )}
            </div>
            
            <div className={`text-[17px] leading-snug text-[#1A1A1A] max-w-3xl ${section.isBoxed ? 'bg-[#F5F4F2] p-8 rounded-2xl' : ''}`}>
              {renderContent(section.content)}
            </div>

            {section.callout && (
              <div className="bg-[#1A1A1A] text-white p-10 my-16 rounded-2xl relative group overflow-hidden">
                <p className="text-2xl font-bold tracking-tight italic leading-tight relative z-10">
                  "{section.callout}"
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-8xl font-bold">"</div>
              </div>
            )}

            {renderImages(section)}
          </section>
        ))}

        <div className="py-24 border-t border-[#F5F4F2] text-center">
          <p className="text-xs uppercase tracking-widest font-bold opacity-30 mb-8">End of Presentation</p>
          <a href="#/projects" className="text-4xl md:text-6xl font-bold tracking-tighter hover:opacity-50 transition-all underline underline-offset-16 decoration-1">
            Back to All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
