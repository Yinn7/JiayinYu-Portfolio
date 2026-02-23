
import { Translations, Project } from './types';

export const translations: Record<'en' | 'zh', Translations> = {
  en: {
    nav: {
      projects: "Projects",
      email: "jyu16@uw.edu",
      lang: "中文"
    },
    home: {
      greeting: "Hi, I'm Jiayin Yu",
      role: "An UX Researcher/Designer",
      mission: "Build inclusive insights to advance equity…",
      viewMore: "View More"
    },
    skills: {
      title: "My Skills",
      categories: [
        { title: "UX Research", items: "User interviews · Insight synthesis · Persona development · Usability testing" },
        { title: "Interaction Design", items: "Information architecture · User flows · Prototyping · Iterative design" },
        { title: "Data & Systems Thinking", items: "Data visualization · Filtering systems · Cognitive load reduction · Pattern-based insights" },
        { title: "Ethical & Privacy-Aware Design", items: "Privacy-by-design · Bias-aware decisions · Human-centered civic thinking" },
        { title: "Product Thinking", items: "Problem framing · Stakeholder alignment · Feature prioritization · Impact-driven decisions" }
      ]
    },
    projectLabels: {
      role: "Role",
      team: "Team",
      duration: "Duration",
      sector: "Sector",
      platform: "Platform",
      focus: "Focus",
      tools: "Tools",
      collaboration: "Collaboration",
      domain: "Domain",
      context: "Context"
    }
  },
  zh: {
    nav: {
      projects: "项目作品",
      email: "jyu16@uw.edu",
      lang: "EN"
    },
    home: {
      greeting: "你好，我是 Jiayin Yu",
      role: "用户体验研究员 / 设计师",
      mission: "构建包容性洞察，推动公平发展...",
      viewMore: "查看详情"
    },
    skills: {
      title: "专业技能",
      categories: [
        { title: "用户体验研究", items: "用户访谈 · 洞察合成 · 用户画像 · 可用性测试" },
        { title: "交互设计", items: "信息架构 · 用户流程 · 原型设计 · 迭代设计" },
        { title: "数据与系统思维", items: "数据可视化 · 筛选系统 · 降低认知负荷 · 基于模式的洞察" },
        { title: "伦理与隐私设计", items: "隐私设计 · 偏见意识决策 · 以人为本的公民思维" },
        { title: "产品思维", items: "问题界定 · 利益相关者对齐 · 功能优先级排序 · 影响力驱动决策" }
      ]
    },
    projectLabels: {
      role: "职责",
      team: "团队",
      duration: "周期",
      sector: "领域",
      platform: "平台",
      focus: "重点",
      tools: "工具",
      collaboration: "协作",
      domain: "领域",
      context: "背景"
    }
  }
};

const PROJECT_1_EN: Project = {
  id: "uw-pathway",
  title: "UW Pathway",
  subtitle: "Redefining Course Discovery Through Skill-Based Planning",
  description: "Helping University of Washington students confidently choose courses aligned with career goals.",
  homeDescription: "A skill-based course discovery platform that bridges academic planning and career outcomes by connecting courses, skills, and jobs.",
  category: ["UX Research", "IA", "EdTech"],
  overview: {
    role: "UX Research · Information Architecture · Interaction Design · Prototyping",
    team: "4 members",
    duration: "7 weeks",
    sector: "Education Technology",
    text: "UW Pathway is a skill-based course discovery platform that bridges academic planning and career outcomes by connecting courses, skills, and jobs in one centralized system."
  },
  sections: [
    {
      id: "problem",
      title: "1. The Problem",
      content: "University students struggle to connect coursework with long-term career goals. Key challenges include: Course descriptions focus on academic content, not practical skills; Information is fragmented across multiple platforms; Students cannot clearly see course-to-career pathways; High decision anxiety, especially for freshmen.",
      imageType: "full",
      images: ["https://picsum.photos/seed/uwp1/1200/600"],
      captions: ["User journey map showing confusion and fragmented planning tools."]
    },
    {
      id: "research",
      title: "2. Research & Insights",
      content: "We conducted semi-structured interviews with UW students and competitive analysis of academic platforms. Key Insights: Students think in terms of skills, not codes; Fragmented systems increase cognitive overload; Peer and alumni experiences are highly trusted.",
      imageType: "centered",
      images: ["https://picsum.photos/seed/uwp2/600/400"],
      captions: ["Photo of the research and interview process."]
    },
    {
      id: "opportunity",
      title: "3. Product Opportunity",
      content: "Existing tools support either academic registration or external skill development. Opportunity: Create a unified, skill-driven experience centralizing Courses, Skills, Careers, and Jobs.",
      imageType: "side-by-side",
      images: ["https://picsum.photos/seed/uwp3/600/400", "https://picsum.photos/seed/uwp4/600/400"],
      captions: ["Competitor platform snippets", "Opportunity mapping diagram"]
    },
    {
      id: "solution",
      title: "4. From Insights to Solution",
      content: "We reframed course discovery around skills and career pathways.",
      imageType: "full",
      images: ["https://picsum.photos/seed/uwp5/1200/600"],
      captions: ["Early brainstorming sketches converging on a skill-centered discovery model."]
    },
    {
      id: "architecture",
      title: "5. Information Architecture",
      content: "Designed a multi-entry navigation system: Majors · Skills · Careers · Courses · Jobs. Each course contains structured skill tags.",
      imageType: "grid",
      images: ["https://picsum.photos/seed/uwp6/600/400", "https://picsum.photos/seed/uwp7/600/400", "https://picsum.photos/seed/uwp8/600/400"],
      captions: ["System architecture", "User flow diagram", "Skill tagging structure"]
    },
    {
      id: "testing",
      title: "6. Usability Testing",
      content: "Tested with Freshman, Junior, and Graduate students. Findings: Navigation labels were unclear; Users wanted job comparison tools.",
      imageType: "side-by-side",
      images: ["https://picsum.photos/seed/uwp9/600/400", "https://picsum.photos/seed/uwp10/600/400"],
      captions: ["Original interface", "Revised interface with salary and similar jobs data"]
    }
  ]
};

const PROJECT_2_EN: Project = {
  id: "wordplay",
  title: "Wordplay",
  subtitle: "Improving Accessibility & Inclusive Design",
  description: "Enhancing usability and inclusivity for a web-based coding education platform.",
  homeDescription: "Redesigning key features and improving accessibility for keyboard and screen reader users for a global programming learning platform.",
  category: ["Accessibility", "Inclusive Design", "Coding"],
  overview: {
    platform: "Wordplay (Open-source coding education website)",
    role: "UX Designer (Volunteer Contributor)",
    focus: "Accessibility · Interaction Design · Inclusive Design",
    tools: "Figma · GitHub Issue Tracking",
    collaboration: "Worked directly with Project Lead",
    team: "Open-source team",
    duration: "Ongoing",
    sector: "EdTech",
    text: "Wordplay aims to make programming accessible to learners of all ages. However, usability and accessibility barriers limited the platform’s inclusiveness. My role focused on redesigning key features for keyboard and screen reader users."
  },
  sections: [
    {
      id: "problem",
      title: "1. The Problem",
      content: "Barriers included: Unclear navigation structure, heavy reliance on hover, limited keyboard support, and incomplete screen reader compatibility. These disproportionately affected keyboard-only and visually impaired learners.",
      imageType: "full",
      images: ["https://picsum.photos/seed/wp1/1200/600"],
      captions: ["Visual summary of usability issues and original interface barriers."]
    },
    {
      id: "approach",
      title: "2. My Approach",
      content: "Selected real GitHub issues, prioritized high-impact accessibility gaps, and followed WCAG principles. Iterated through stakeholder review and validated via screen reader checks."
    },
    {
      id: "feature-1",
      title: "3. Feature 1: Photo Import",
      content: "Introduced photo import to increase character diversity. Controls are accessible via tab order with descriptive ARIA labels and clear focus state visibility.",
      imageType: "side-by-side",
      images: ["https://picsum.photos/seed/wp2/600/400", "https://picsum.photos/seed/wp3/600/400"],
      captions: ["High-fidelity Photo Import interface", "Accessibility annotations (focus states)"]
    },
    {
      id: "feature-2",
      title: "4. Feature 2: Character Search",
      content: "Original discovery relied on hover. Improvements: Keyword-based filtering system, category tagging, and a dedicated browsing area with no hover dependency.",
      imageType: "full",
      images: ["https://picsum.photos/seed/wp4/1200/600"],
      captions: ["Redesigned Character Search & Browsing Interface"]
    },
    {
      id: "feature-3",
      title: "5. Feature 3: Emoji Skin Tones",
      content: "Designed skin tone selection workflow. Process: Identified all emoji usage, designed selection workflow, and created keyboard interaction mapping.",
      imageType: "small",
      images: ["https://picsum.photos/seed/wp5/400/400"],
      captions: ["Keyboard mapping for emoji selection."]
    },
    {
      id: "impact",
      title: "6. Impact",
      content: "The redesign improved navigation clarity, feature discoverability, and representation. The platform now better aligns with its mission of global accessibility.",
      imageType: "small",
      images: ["https://picsum.photos/seed/wp6/400/300"],
      captions: ["Chinese localization example showing cultural relevance."]
    }
  ]
};

const PROJECT_3_EN: Project = {
  id: "urban-safety",
  title: "Urban Safety",
  subtitle: "Privacy-Preserving Data Visualization",
  description: "Helping residents access safety information while protecting individual privacy.",
  homeDescription: "A privacy-conscious city safety visualization platform designed to help residents understand neighborhood trends without exposing individuals.",
  category: ["Data Viz", "Privacy", "Civic Tech"],
  overview: {
    domain: "Urban Data Visualization · UX",
    role: "User Research · IA · Data Visualization · Privacy Strategy Design",
    team: "4 members",
    duration: "7 weeks",
    context: "Course Project (INFO 200)",
    sector: "Public Interest Tech",
    text: "Urban Safety helps residents understand neighborhood safety trends without exposing sensitive individual data, avoiding the privacy violations common in precise pinpoint maps."
  },
  sections: [
    {
      id: "problem",
      title: "1. Problem Context",
      content: "Existing platforms show precise crime locations, risking privacy and reinforcing bias. Challenge: How might we provide meaningful safety transparency without exposing personal or sensitive information?",
      imageType: "full",
      images: ["https://picsum.photos/seed/us1/1200/600"],
      captions: ["Examples of precise-location apps highlighting privacy risks."]
    },
    {
      id: "research",
      title: "2. Research & Insights",
      content: "Methods: Interviews and stakeholder mapping. Key Insights: Users want risk awareness, not event detail. Precise pins increase anxiety. High-level trend visibility builds trust.",
      callout: "Data presentation shapes public perception.",
      imageType: "full",
      images: ["https://picsum.photos/seed/us2/1200/600"],
      captions: ["Affinity diagram clustering user safety needs."]
    },
    {
      id: "strategy",
      title: "3. Design Strategy",
      content: "Privacy-by-Design approach: Blurred area indicators, broad zone safety visualization, and layered data abstraction. Goal: Shift focus from individuals to community-level patterns.",
      imageType: "side-by-side",
      images: ["https://picsum.photos/seed/us3/600/400", "https://picsum.photos/seed/us4/600/400"],
      captions: ["Traditional pinpoint map", "Early blurred-zone concept sketch"]
    },
    {
      id: "ideation",
      title: "4. Ideation & Lo-Fi",
      content: "Explored circle-based abstraction, heatmaps, and gradient mapping. Filter-first dashboard layout ensures users see only relevant information.",
      imageType: "grid",
      images: ["https://picsum.photos/seed/us5/600/400", "https://picsum.photos/seed/us6/600/400", "https://picsum.photos/seed/us7/600/400"],
      captions: ["Circle abstraction", "Heatmap experiment", "Gradient intensity mapping"]
    },
    {
      id: "final",
      title: "5. Final Design",
      content: "Uses blurred geographic regions, layered hierarchy, and soft tones to reduce alarmism. Trend-focused summaries encourage awareness without panic.",
      imageType: "full",
      images: ["https://picsum.photos/seed/us8/1200/600"],
      captions: ["Final high-fidelity map screen with blurred safety zones."]
    },
    {
      id: "impact",
      title: "6. Impact",
      content: "The final prototype increased perceived trust and reduced privacy concerns. Design demonstrates how transparency and dignity can coexist."
    }
  ]
};

// Simplified Chinese versions of the same projects
const PROJECT_1_ZH: Project = { ...PROJECT_1_EN, title: "UW Pathway (华盛顿大学课程规划)", subtitle: "通过基于技能的规划重新定义课程发现", description: "帮助学生自信地选择符合职业目标的课程。" };
const PROJECT_2_ZH: Project = { ...PROJECT_2_EN, title: "Wordplay (编程学习平台)", subtitle: "改善全球编程平台的无障碍与包容性设计", description: "增强网页版编程教育平台的易用性。" };
const PROJECT_3_ZH: Project = { ...PROJECT_3_EN, title: "Urban Safety (城市安全看板)", subtitle: "通过保护隐私的数据可视化增强安全意识", description: "帮助居民获取安全信息的同时保护个人隐私。" };

export const projects_en: Project[] = [PROJECT_1_EN, PROJECT_2_EN, PROJECT_3_EN];
export const projects_zh: Project[] = [PROJECT_1_ZH, PROJECT_2_ZH, PROJECT_3_ZH];
