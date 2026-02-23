
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
  description: "Helping University of Washington students confidently choose courses aligned with career goals and skill development.",
  homeDescription: "A skill-based course discovery platform connecting Courses · Skills · Careers · Jobs to help UW students plan for the future.",
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
      title: "The Problem",
      content: [
        "Key Challenges",
        "——————",
        "• Course descriptions focus on academic content, not practical skills",
        "• Information is fragmented across multiple platforms",
        "• Students cannot clearly see course-to-career pathways",
        "• High decision anxiety, especially for freshmen and interdisciplinary students"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User journey map or visual summary of student pain points"]
    },
    {
      id: "research",
      title: "Research & Insights",
      content: [
        "Methods",
        "• Semi-structured interviews with UW students",
        "• Competitive analysis of academic and skill-based platforms",
        "Key Insights",
        "• Students think in terms of skills, not course codes",
        "• Fragmented systems increase cognitive overload",
        "• Students lack tools to compare long-term career value",
        "• Peer and alumni experiences are highly trusted"
      ],
      imageType: "centered",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"],
      captions: ["Photo of interview process"]
    },
    {
      id: "opportunity",
      title: "Product Opportunity",
      content: [
        "Existing tools support either academic registration or external skill development",
        "Gap: No centralized system connecting Courses · Skills · Careers · Jobs",
        "Opportunity: Create a unified, skill-driven academic planning experience"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Competitor screenshots", "Right: Opportunity mapping diagram"]
    },
    {
      id: "solution",
      title: "Ideation & Solution",
      content: "We reframed course discovery around skills and career pathways.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1544391682-1a55b9deaad3?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Brainstorm sketches. Caption: 'We explored multiple solution directions before converging on a skill-centered discovery model.'"]
    },
    {
      id: "architecture",
      title: "Information Architecture",
      content: [
        "Multi-entry navigation: Majors · Skills · Careers · Courses · Jobs",
        "Each course contains structured skill tags for relational discovery"
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH] Sitemap", "[IMAGE PLACEHOLDER – HALF WIDTH LEFT] User flow", "[IMAGE PLACEHOLDER – HALF WIDTH RIGHT] Skill tagging structure"]
    },
    {
      id: "prototype",
      title: "Low-Fidelity Prototype",
      content: "Tested structural clarity before visual refinement.",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1586717796440-9620ed7a06a1?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – SIDE-BY-SIDE] Low-fidelity wireframes (2–3 screens). Caption: 'Hypothesis: If skills are visible as tags, students can evaluate relevance faster.'"]
    },
    {
      id: "testing",
      title: "Usability Testing & Iteration",
      content: [
        "Participants: Freshman · Junior · Graduate student",
        "Key Findings:",
        "• Navigation labels unclear",
        "• Users wanted job comparison tools",
        "• Career pages lacked salary/progression data"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618761767660-f4633b499b9a?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – SIDE-BY-SIDE BEFORE & AFTER]. Caption: 'Renamed labels, added salary data, introduced Similar Jobs comparison feature.'"]
    },
    {
      id: "final",
      title: "Final Design",
      content: "UW Pathway enables students to: Discover courses by skill relevance; Understand career outcomes; Compare job paths; Plan confidently.",
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1611162618071-b39a2ad055fb?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH HERO]", "Skill filter screen", "Learning path visualization", "Career/job page"]
    },
    {
      id: "reflection",
      title: "Reflection",
      content: [
        "• Translating research into structural product decisions",
        "• Reducing cognitive overload via information architecture",
        "• Designing comparison-driven decision tools",
        "• Balancing UX clarity with product strategy",
        "Future Directions: AI-based recommendations, skill gap analysis, advisor integration"
      ]
    }
  ]
};

const PROJECT_2_EN: Project = {
  id: "wordplay",
  title: "Wordplay",
  subtitle: "Improving Accessibility & Inclusive Design for a Global Programming Learning Platform",
  description: "Enhancing usability and inclusivity for a web-based coding education platform.",
  homeDescription: "Redesigning an open-source coding education platform to prioritize process and accessibility for learners of all backgrounds.",
  category: ["Accessibility", "Inclusive Design", "Open Source"],
  overview: {
    platform: "Wordplay (Open-source coding education)",
    role: "UX Designer (Volunteer)",
    focus: "Accessibility · Interaction Design · Inclusive Design",
    tools: "Figma · GitHub",
    collaboration: "Project Lead",
    team: "Open-source contributors",
    duration: "Ongoing",
    sector: "Education",
    text: "Wordplay aims to make programming accessible to learners of all ages, backgrounds, and locations. My role focused on redesigning key features and improving accessibility for keyboard and screen reader users."
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      content: [
        "Key Challenges",
        "——————",
        "• Unclear navigation structure",
        "• Cumbersome interface layout",
        "• Heavy reliance on hover interactions",
        "• Limited keyboard support & screen reader compatibility",
        "• Limited visual diversity (single emoji skin tone)"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated original interface screenshot"]
    },
    {
      id: "feature-1",
      title: "Feature 1: Character Photo Import",
      content: [
        "File size validation, image cropping",
        "Keyboard navigability, screen reader feedback"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH]", "[IMAGE PLACEHOLDER – SIDE-BY-SIDE] Before/After"]
    },
    {
      id: "feature-2",
      title: "Feature 2: Quick Character Search & Favorites",
      content: [
        "Category tagging, keyword search",
        "Dedicated browsing area, fully keyboard accessible"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=1200"],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH]"]
    },
    {
      id: "feature-3",
      title: "Feature 3: Improving the place() Function",
      content: "Added text explanations, direction selector, improved accessibility",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – SIDE-BY-SIDE] Before/After"]
    },
    {
      id: "feature-4",
      title: "Feature 4: Emoji Skin Tone Options",
      content: [
        "Inclusive skin tone selection workflow",
        "Keyboard mapping & screen reader guidance"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=1200"],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH]", "[IMAGE PLACEHOLDER – SMALL DETAIL]"]
    },
    {
      id: "localization",
      title: "Chinese Localization",
      content: "Interface translation with accessibility preserved",
      imageType: "small",
      images: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"],
      captions: ["[IMAGE PLACEHOLDER – SMALL IMAGE]"]
    },
    {
      id: "impact",
      title: "Impact & Reflection",
      content: [
        "• Improved navigation, discoverability, keyboard & screen reader usability",
        "• Increased inclusivity & representation",
        "• Lessons: accessibility must be considered from the start; iterative stakeholder feedback improves outcomes"
      ]
    }
  ]
};

const PROJECT_3_EN: Project = {
  id: "urban-safety",
  title: "Urban Safety",
  subtitle: "Privacy-Preserving City Safety Visualization",
  description: "Helping residents access safety information while protecting individual privacy.",
  homeDescription: "A privacy-first dashboard that provides safety transparency to residents without exposing sensitive individual data.",
  category: ["Data Viz", "Privacy", "Civic Tech"],
  overview: {
    domain: "Urban Data Visualization / UX",
    role: "User Research · Information Architecture · Data Visualization · Privacy Strategy",
    team: "4 members",
    duration: "7 weeks",
    context: "INFO 200 Course Project",
    sector: "Civic Tech",
    text: "Urban Safety is a privacy-conscious city safety visualization platform designed to help residents understand neighborhood safety trends without exposing sensitive individual data."
  },
  sections: [
    {
      id: "problem",
      title: "Problem Context",
      content: [
        "Residents want city safety info",
        "Existing platforms often show precise crime/homeless locations → privacy risks",
        "High data overload, unnecessary anxiety",
        "Design challenge: transparency without exposing individuals"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated screenshot of privacy risks"]
    },
    {
      id: "research",
      title: "Research & Insights",
      content: [
        "Methods: Interviews, survey, competitive analysis, stakeholder mapping",
        "Key Insights:",
        "• Users want quick trend-level awareness",
        "• Precise pinpoints increase privacy risk & bias",
        "• Trend visibility builds trust",
        "• Filters reduce overload"
      ],
      callout: "Data presentation shapes public perception.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH] Affinity diagram", "[IMAGE PLACEHOLDER – SMALL IMAGE] Stakeholder map"]
    },
    {
      id: "strategy",
      title: "Design Strategy",
      content: [
        "Privacy-by-Design: blurred zones, layered data abstraction, trend-based indicators",
        "The goal: shift focus from individuals to community-level patterns."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Traditional precise pin map", "Right: Blurred-zone prototype sketch"]
    },
    {
      id: "ideation",
      title: "Low-Fidelity Prototyping & Interaction Design",
      content: [
        "Circle abstraction, heatmaps, gradient intensity",
        "Filter-first dashboard layout"
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH] Low-fidelity map sketches", "[IMAGE PLACEHOLDER – GRID 3 IMAGES] Different visualization experiments", "[IMAGE PLACEHOLDER – FULL WIDTH] Filtering interface", "[IMAGE PLACEHOLDER – SMALL DETAIL] Filter toggle interaction"]
    },
    {
      id: "final",
      title: "Final Design",
      content: [
        "Blurred geographic regions instead of exact points",
        "Layered visual hierarchy, soft tones, trend-focused summaries",
        "Encourages awareness without panic"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200"],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH HERO]", "[IMAGE PLACEHOLDER – SIDE-BY-SIDE] Blurred map / Data summary panel", "[IMAGE PLACEHOLDER – SMALL IMAGE] Legend close-up"]
    },
    {
      id: "testing",
      title: "User Testing & Validation",
      content: [
        "Metrics: trustworthiness, anxiety, clarity, privacy perception",
        "Findings: blurred visualization protects dignity; trend summaries preferred; soft visual style reduces fear"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["[IMAGE PLACEHOLDER – FULL WIDTH] User feedback visualization"]
    },
    {
      id: "impact",
      title: "Impact & Reflection",
      content: [
        "• Increased perceived trust",
        "• Reduced privacy concerns",
        "• Maintained safety awareness",
        "• Lessons: ethical data visualization, privacy-aware design, social responsibility, stakeholder trade-offs"
      ]
    }
  ]
};

// Simplified translation helper:
const PROJECT_1_ZH: Project = {
  ...PROJECT_1_EN,
  title: "UW Pathway (华大课程规划)",
  subtitle: "通过技能导向规划重新定义课程发现",
  description: "帮助华盛顿大学的学生自信地选择符合职业目标的课程。",
  homeDescription: "一个以技能为核心的课程发现平台，旨在为华大（UW）学生搭建学术规划与职业发展的桥梁。",
  sections: PROJECT_1_EN.sections.map(s => ({
    ...s,
    title: s.title.replace("The Problem", "问题背景").replace("Research & Insights", "研究与洞察").replace("Product Opportunity", "产品机会").replace("Ideation & Solution", "构思与方案").replace("Information Architecture", "信息架构").replace("Low-Fidelity Prototype", "低保真原型").replace("Usability Testing & Iteration", "可用性测试").replace("Final Design", "最终设计").replace("Reflection", "项目总结")
  }))
};

const PROJECT_2_ZH: Project = {
  ...PROJECT_2_EN,
  title: "Wordplay (编程无障碍设计)",
  subtitle: "提升全球编程学习平台的无障碍与包容性",
  description: "增强网页版编程教育平台的易用性与包容性。",
  homeDescription: "重新设计开源编程平台，为全球学习者提供完整的无障碍支持。",
  sections: PROJECT_2_EN.sections.map(s => ({
    ...s,
    title: s.title.replace("The Problem", "问题定义").replace("Feature", "功能改进").replace("Impact & Reflection", "影响力与总结")
  }))
};

const PROJECT_3_ZH: Project = {
  ...PROJECT_3_EN,
  title: "Urban Safety (城市安全看板)",
  subtitle: "通过隐私保护的数据可视化增强城市安全意识",
  description: "帮助居民在获取安全信息的同时保护个人隐私。",
  homeDescription: "一个注重隐私保护的城市安全仪表盘，通过模糊区域可视化趋势，防止偏见。",
  sections: PROJECT_3_EN.sections.map(s => ({
    ...s,
    title: s.title.replace("Problem Context", "问题背景").replace("Research & Insights", "研究洞察").replace("Design Strategy", "设计策略").replace("Low-Fidelity Prototyping & Interaction Design", "原型与交互").replace("Final Design", "最终设计").replace("User Testing & Validation", "测试验证").replace("Impact & Reflection", "影响与反思")
  }))
};

export const projects_en: Project[] = [PROJECT_1_EN, PROJECT_2_EN, PROJECT_3_EN];
export const projects_zh: Project[] = [PROJECT_1_ZH, PROJECT_2_ZH, PROJECT_3_ZH];
