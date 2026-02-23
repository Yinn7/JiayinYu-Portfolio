
export type Language = 'en' | 'zh';

export interface ProjectOverview {
  role: string;
  team: string;
  duration: string;
  sector: string;
  text: string;
  platform?: string;
  focus?: string;
  tools?: string;
  collaboration?: string;
  domain?: string;
  context?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string | string[];
  imageType?: 'full' | 'centered' | 'side-by-side' | 'grid' | 'half' | 'small' | 'hero';
  images?: string[];
  captions?: string[];
  callout?: string;
  isBoxed?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  homeDescription: string;
  category: string[];
  overview: ProjectOverview;
  sections: Section[];
}

export interface Activity {
  name: string;
  role: string;
  images: string[];
  reflections: string[];
}

export interface Translations {
  nav: {
    projects: string;
    email: string;
    lang: string;
  };
  home: {
    greeting: string;
    role: string;
    mission: string;
    viewMore: string;
  };
  skills: {
    title: string;
    categories: {
      title: string;
      items: string;
    }[];
  };
  activities: {
    title: string;
    items: Activity[];
    roleLabel: string;
    reflectionLabel: string;
  };
  projectLabels: {
    role: string;
    team: string;
    duration: string;
    sector: string;
    platform: string;
    focus: string;
    tools: string;
    collaboration: string;
    domain: string;
    context: string;
  };
}
