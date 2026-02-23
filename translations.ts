
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
      context: "项目背景"
    }
  }
};

const PROJECT_1_EN: Project = {
  id: "uw-pathway",
  title: "UW Pathway",
  subtitle: "Redefining Course Discovery Through Skill-Based Planning",
  description: "Helping University of Washington students confidently choose courses aligned with career goals.",
  homeDescription: "A skill-based course discovery platform that bridges academic planning and career outcomes for University of Washington students.",
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
      content: [
        "University students struggle to connect coursework with long-term career goals.",
        "Key challenges include course descriptions focusing on academic content rather than practical skills, fragmented information across multiple platforms, and high decision anxiety for freshmen and interdisciplinary students."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User journey map visual summary showing confusion, fragmented tools, and planning stress."]
    },
    {
      id: "research",
      title: "2. Research & Insights",
      content: [
        "Methods: Semi-structured interviews with UW students and competitive analysis of academic platforms.",
        "Key Insights: Students think in terms of skills, not course codes; Fragmented systems increase cognitive overload; Students lack tools to compare long-term career value; Peer and alumni experiences are highly trusted."
      ],
      imageType: "centered",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"],
      captions: ["Research setup and interview photo (subtle representation)."]
    },
    {
      id: "opportunity",
      title: "3. Product Opportunity",
      content: [
        "Existing tools support either academic registration or external skill development, but none centralize courses, skills, careers, and jobs.",
        "Opportunity: Create a unified, skill-driven academic planning experience."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Screenshot snippets of competitor platforms", "Opportunity mapping and comparison visual"]
    },
    {
      id: "solution",
      title: "4. From Insights to Solution",
      content: "We reframed course discovery around skills and career pathways, moving away from traditional department-based browsing.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1544391682-1a55b9deaad3?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Early brainstorming sketches converging on a skill-centered discovery model."]
    },
    {
      id: "architecture",
      title: "5. Information Architecture",
      content: [
        "I designed a multi-entry navigation system: Majors · Skills · Careers · Courses · Jobs.",
        "Each course contains structured skill tags, enabling relational discovery across different disciplines."
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Sitemap and system architecture", "User flow diagram", "Skill tagging structure example"]
    },
    {
      id: "prototype",
      title: "6. Low-Fidelity Prototype",
      content: "We tested structural clarity before visual refinement. Hypothesis: 'If skills are visible as tags, students can evaluate relevance faster.'",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1586717796440-9620ed7a06a1?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Wireframe 1: Discovery", "Wireframe 2: Detail view"]
    },
    {
      id: "testing",
      title: "7. Usability Testing & Iteration",
      content: [
        "Participants: Freshmen, Juniors, and Graduate students.",
        "Key Findings: Navigation labels were initially unclear; users requested job comparison tools; career pages required salary and progression data."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618761767660-f4633b499b9a?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Original interface", "Revised interface with salary data and similar jobs comparison."]
    },
    {
      id: "final",
      title: "8. Final Design",
      content: "UW Pathway enables students to discover courses by skill relevance, understand career outcomes, compare job paths, and plan confidently.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"],
      captions: ["High-fidelity hero screen of the UW Pathway platform."]
    },
    {
      id: "reflection",
      title: "9. Reflection",
      content: "This project strengthened my ability to translate research into structural decisions and reduce cognitive overload through IA. Future directions: AI-based skill gap analysis."
    }
  ]
};

const PROJECT_2_EN: Project = {
  id: "wordplay",
  title: "Wordplay",
  subtitle: "Improving Accessibility & Inclusive Design for Coding",
  description: "Enhancing usability and inclusivity for a web-based coding education platform.",
  homeDescription: "Redesigning an open-source coding platform to be fully accessible for keyboard-only and screen reader users worldwide.",
  category: ["Accessibility", "Inclusive Design", "Open Source"],
  overview: {
    platform: "Wordplay (Open-source coding education website)",
    role: "UX Designer (Volunteer Contributor)",
    focus: "Accessibility · Interaction Design · Inclusive Design",
    tools: "Figma · GitHub Issue Tracking",
    collaboration: "Worked directly with Project Lead",
    team: "Open-source community",
    duration: "Ongoing",
    sector: "EdTech",
    text: "Wordplay aims to make programming accessible to learners of all ages. My role focused on redesigning key features and improving accessibility for keyboard and screen reader users."
  },
  sections: [
    {
      id: "problem",
      title: "1. The Problem",
      content: "Despite its mission, barriers included unclear navigation, heavy reliance on hover, and incomplete screen reader compatibility. This disproportionately affected visually impaired learners and keyboard-only users.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated screenshot of the original interface highlighting accessibility barriers."]
    },
    {
      id: "approach",
      title: "2. My Approach",
      content: "I selected real GitHub issues, prioritized high-impact accessibility gaps, and followed WCAG principles while iterating through stakeholder review."
    },
    {
      id: "feature-1",
      title: "3. Character Photo Import",
      content: "To increase diversity, we introduced photo import. Key design considerations included file validation, cropping capability, and full ARIA labeling for screen readers.",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["High-fidelity Photo Import interface", "Accessibility annotations for cropping interaction"]
    },
    {
      id: "feature-2",
      title: "4. Quick Search & Favorites",
      content: "Discovery previously relied on hover. I introduced keyword-based filtering and a dedicated browsing area that is fully keyboard accessible.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Redesigned Character Search & Browsing interface."]
    },
    {
      id: "feature-3",
      title: "5. The 'place()' Function",
      content: "The original function lacked clarity. I added inline text explanations and introduced a visual direction selector with improved input accessibility.",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Original 'place()' interface", "Redesigned version with explanations"]
    },
    {
      id: "feature-4",
      title: "6. Emoji Skin Tones",
      content: "Designed a selection workflow to improve representation. Included logical tab flow and screen reader voice guidance for selection states.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Emoji skin tone selection workflow diagram."]
    },
    {
      id: "impact",
      title: "7. Impact",
      content: "The redesign improved feature discoverability and keyboard usability. I also contributed to Chinese localization to improve clarity for global users.",
      imageType: "small",
      images: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"],
      captions: ["Before/After localization example for cultural relevance."]
    }
  ]
};

const PROJECT_3_EN: Project = {
  id: "urban-safety",
  title: "Urban Safety",
  subtitle: "Privacy-Preserving Data Visualization for Cities",
  description: "Helping residents access safety information while protecting individual privacy.",
  homeDescription: "A privacy-conscious urban safety dashboard that visualizes neighborhood trends using blurred geographic regions to prevent bias.",
  category: ["Data Viz", "Privacy", "Civic Tech"],
  overview: {
    domain: "Urban Data Visualization · UX",
    role: "User Research · IA · Data Visualization · Privacy Strategy Design",
    team: "4 members",
    duration: "7 weeks",
    context: "Course Project (INFO 200)",
    sector: "Public Interest Tech",
    text: "Urban Safety is a privacy-conscious platform designed to help residents understand safety trends without exposing sensitive individual data or reinforcing harmful bias."
  },
  sections: [
    {
      id: "context",
      title: "1. Problem Context",
      content: "Existing platforms often show precise crime locations, risking privacy and creating anxiety. Challenge: How might we provide meaningful safety transparency without exposing personal information?",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated screenshots of precise-location apps highlighting privacy risks."]
    },
    {
      id: "research",
      title: "2. Research & Insights",
      content: "Insights from interviews and stakeholder mapping showed that users want quick risk awareness, not event detail. Precise pins often increase bias toward vulnerable populations.",
      callout: "Data presentation shapes public perception.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Affinity diagram and stakeholder map (Residents, Planners, Vulnerable Populations)."]
    },
    {
      id: "strategy",
      title: "3. Design Strategy",
      content: "We adopted a 'Privacy-by-Design' approach: Blurred area indicators, broad zone visualization, and layered data abstraction to shift focus to community-level patterns.",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Traditional pinpoint map", "Early blurred-zone concept sketch"]
    },
    {
      id: "ideation",
      title: "4. Ideation & Lo-Fi",
      content: "Explored circle-based abstraction, heatmaps, and gradient intensity mapping to represent risk without specificity.",
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Circle abstraction", "Heatmap layers", "Gradient experiments"]
    },
    {
      id: "interaction",
      title: "5. Interaction & Filtering",
      content: "To reduce cognitive overload, we implemented customizable event filters and toggleable data layers for user control.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Final filtering interface screen showing layer controls."]
    },
    {
      id: "final",
      title: "6. Final Design",
      content: "Urban Safety uses blurred regions and soft visual tones to reduce alarmism while maintaining functional safety awareness.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Final high-fidelity map screen with privacy-preserving zones."]
    },
    {
      id: "testing",
      title: "7. User Testing",
      content: "Findings: Users felt the blurred visualization protected dignity; trend-based summaries were preferred over raw event lists; softer visuals reduced fear.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User feedback summary and annotated prototype iteration."]
    }
  ]
};

// Chinese versions of the projects
const PROJECT_1_ZH: Project = { 
  ...PROJECT_1_EN, 
  title: "UW Pathway (华大课程规划)", 
  subtitle: "通过技能导向规划重新定义课程发现", 
  description: "帮助华盛顿大学的学生自信地选择符合职业目标的课程。",
  homeDescription: "一个以技能为核心的课程发现平台，旨在为华大（UW）学生搭建学术规划与职业发展的桥梁。",
  overview: { ...PROJECT_1_EN.overview, text: "UW Pathway 是一个基于技能的课程发现平台，通过将课程、技能和职位连接到一个集中系统中，弥合了学术规划和职业成果之间的差距。" },
  sections: PROJECT_1_EN.sections.map(s => ({ ...s, title: s.title.replace(/\d\./, "").trim() }))
};

const PROJECT_2_ZH: Project = { 
  ...PROJECT_2_EN, 
  title: "Wordplay (编程无障碍设计)", 
  subtitle: "提升全球编程学习平台的无障碍与包容性",
  description: "增强网页版编程教育平台的易用性与包容性。",
  homeDescription: "重新设计开源编程平台，为全球仅限键盘使用和屏幕阅读器使用者提供完整的无障碍支持。",
  overview: { ...PROJECT_2_EN.overview, text: "Wordplay 旨在让所有年龄段的学习者都能接触编程。我的工作重点是重新设计核心功能，并提高键盘和屏幕阅读器用户的无障碍体验。" },
  sections: PROJECT_2_EN.sections.map(s => ({ ...s, title: s.title.replace(/\d\./, "").trim() }))
};

const PROJECT_3_ZH: Project = { 
  ...PROJECT_3_EN, 
  title: "Urban Safety (城市安全看板)", 
  subtitle: "通过隐私保护的数据可视化增强城市安全意识",
  description: "帮助居民在获取安全信息的同时，有效保护个人隐私。",
  homeDescription: "一个注重隐私保护的城市安全仪表盘，通过模糊地理区域可视化社区安全趋势，防止产生偏见。",
  overview: { ...PROJECT_3_EN.overview, text: "Urban Safety 是一个注重隐私保护的平台，旨在帮助居民了解安全趋势，同时不泄露敏感个人数据或加剧偏见。" },
  sections: PROJECT_3_EN.sections.map(s => ({ ...s, title: s.title.replace(/\d\./, "").trim() }))
};

export const projects_en: Project[] = [PROJECT_1_EN, PROJECT_2_EN, PROJECT_3_EN];
export const projects_zh: Project[] = [PROJECT_1_ZH, PROJECT_2_ZH, PROJECT_3_ZH];
