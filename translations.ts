
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
      title: "2. The Problem",
      content: [
        "University students struggle to connect coursework with long-term career goals.",
        "Key challenges: Course descriptions focus on academic content, not practical skills; Information is fragmented across multiple platforms; Students cannot clearly see course-to-career pathways; High decision anxiety, especially for freshmen and interdisciplinary students."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User journey map or visual summary of student pain points showing confusion, fragmented tools, and stress during planning."]
    },
    {
      id: "research",
      title: "3. Research & Insights",
      content: [
        "Methods: Semi-structured interviews with UW students; Competitive analysis of academic and skill-based platforms.",
        "Key Insights: Students think in terms of skills, not course codes; Fragmented systems increase cognitive overload; Students lack tools to compare long-term career value; Peer and alumni experiences are highly trusted."
      ],
      imageType: "centered",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"],
      captions: ["Photo of interview process or research setup (small and subtle)"]
    },
    {
      id: "opportunity",
      title: "4. Product Opportunity",
      content: [
        "Existing tools support either academic registration or external skill development, but none centralize: Courses, Skills, Careers, and Jobs.",
        "Opportunity: Create a unified, skill-driven academic planning experience."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Screenshot snippets of competitor platforms", "Right: Short comparison visual or opportunity mapping diagram"]
    },
    {
      id: "solution",
      title: "5. From Insights to Solution",
      content: "We reframed course discovery around skills and career pathways.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1544391682-1a55b9deaad3?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Early brainstorming sketches (multiple low-fidelity ideas). We explored multiple solution directions before converging on a skill-centered discovery model."]
    },
    {
      id: "architecture",
      title: "6. Information Architecture",
      content: [
        "To support different exploration behaviors, I designed a multi-entry navigation system: Majors · Skills · Careers · Courses · Jobs.",
        "Each course contains structured skill tags, enabling relational discovery."
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Sitemap or system architecture diagram", "User flow diagram", "Example of skill tagging structure"]
    },
    {
      id: "prototype",
      title: "7. Low-Fidelity Prototype",
      content: "We tested structural clarity before moving into visual refinement.",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1586717796440-9620ed7a06a1?auto=format&fit=crop&q=80&w=600"
      ],
      captions: [
        "Hypothesis: If skills are visible as tags, students can evaluate relevance faster.",
        "Testing structural hierarchy and entry points."
      ]
    },
    {
      id: "testing",
      title: "8. Usability Testing & Iteration",
      content: [
        "Testing Participants: Freshman · Junior · Graduate student.",
        "Key Findings: Navigation labels were unclear; Users wanted job comparison tools; Career pages lacked salary and progression data."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618761767660-f4633b499b9a?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Original interface", "Right: Revised interface (Renamed labels, added salary data, and introduced Similar Jobs comparison feature)"]
    },
    {
      id: "final",
      title: "9. Final Design",
      content: "UW Pathway enables students to: Discover courses by skill relevance; Understand career outcomes; Compare job paths; Plan confidently.",
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1611162618071-b39a2ad055fb?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["High-fidelity main screen", "Skill filter screen & Learning path visualization", "Career/job page"]
    },
    {
      id: "reflection",
      title: "10. Reflection",
      content: [
        "This project strengthened my ability to: Translate research into structural product decisions; Reduce cognitive overload through information architecture; Design comparison-driven decision tools; Balance UX clarity with product strategy.",
        "Future directions: Personalized recommendations; AI-based skill gap analysis; Advisor integration."
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
    platform: "Wordplay (Open-source coding education website)",
    role: "UX Designer (Volunteer Contributor)",
    focus: "Accessibility · Interaction Design · Inclusive Design",
    tools: "Figma · GitHub Issue Tracking",
    collaboration: "Worked directly with Project Lead",
    team: "Open-source contributors",
    duration: "Ongoing",
    sector: "Education",
    text: "Wordplay aims to make programming accessible to learners of all ages, backgrounds, and locations. However, usability and accessibility barriers limited the platform’s inclusiveness. My role focused on redesigning key features and improving accessibility for keyboard and screen reader users."
  },
  sections: [
    {
      id: "problem",
      title: "2. The Problem",
      content: [
        "Despite its mission, the platform had several barriers: Unclear navigation structure; Cumbersome interface layout; Heavy reliance on hover interactions; Limited keyboard support; Incomplete screen reader compatibility; Limited visual diversity (e.g., single emoji skin tone).",
        "These issues disproportionately affected keyboard-only users, screen reader users, visually impaired learners, and users seeking representation."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Visual summary of usability issues or annotated screenshot of original interface."]
    },
    {
      id: "approach",
      title: "3. My Approach",
      content: "Selected real GitHub issues to address; Prioritized high-impact accessibility gaps; Designed in Figma; Followed WCAG accessibility principles; Iterated through stakeholder review; Validated accessibility via keyboard and screen reader checks."
    },
    {
      id: "feature-1",
      title: "Feature 1: Character Photo Import",
      content: [
        "To increase character diversity, we introduced a photo import feature.",
        "Design Considerations: File size validation; Image cropping capability; Keyboard navigability; Screen reader clarity; Clear button labeling.",
        "Accessibility Improvements: All controls accessible via tab order; Descriptive ARIA labels; Focus state visibility; Screen reader feedback for upload states."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["High-fidelity Photo Import interface", "Cropping interaction & Accessibility annotations (focus states + ARIA labels)"]
    },
    {
      id: "feature-2",
      title: "Feature 2: Quick Character Search & Favorites",
      content: [
        "Each character includes descriptive tags for searchability.",
        "Original Issues: Discovery relied on hover interactions; No structured filtering; No way to save preferred characters.",
        "Improvements: Keyword-based filtering system; Category tagging structure; “Favorite Character” functionality; Dedicated browsing area (no hover dependency); Clear favorite/unfavorite states; Fully keyboard accessible interaction."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Redesigned Character Search & Browsing Interface"]
    },
    {
      id: "feature-3",
      title: "Feature 3: Improving the “place()” Function",
      content: [
        "The original place() function lacked clarity and explanation. Users struggled to understand: Parameter meaning; Directional logic; Object positioning behavior.",
        "Improvements: Added inline text explanations; Introduced direction selector; Clarified parameter labels; Improved input accessibility."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Original “place()” interface", "Right: Redesigned version with explanations and direction selector"]
    },
    {
      id: "feature-4",
      title: "Feature 4: Emoji Skin Tone Options",
      content: [
        "To improve representation and inclusivity, I designed a skin tone selection feature.",
        "Process: Identified all emoji usage across platform; Categorized changeable emoji types; Designed skin tone selection workflow; Created keyboard interaction mapping; Added screen reader voice guidance.",
        "Accessibility Enhancements: Logical tab flow; Clear selection states; Non-color dependent indicators; Screen reader output confirmation."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Emoji skin tone selection workflow"]
    },
    {
      id: "impact",
      title: "5. Impact",
      content: [
        "The redesign improved: Navigation clarity; Feature discoverability; Keyboard-only usability; Screen reader compatibility; Representation and inclusivity.",
        "Chinese Localization: I also contributed to Chinese localization to improve clarity and cultural relevance."
      ],
      imageType: "small",
      images: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"],
      captions: ["Before/After localization example"]
    },
    {
      id: "reflection",
      title: "6. Reflection",
      content: "Key lessons: Accessibility must be designed from the start; Hover-based interactions exclude users; Inclusive design benefits all users; Iterative feedback improves solution quality; Small UI decisions significantly affect usability. Wordplay strengthened my commitment to building accessible and inclusive digital experiences."
    }
  ]
};

const PROJECT_3_EN: Project = {
  id: "urban-safety",
  title: "Urban Safety",
  subtitle: "Enhancing Urban Safety Awareness Through Privacy-Preserving Data Visualization",
  description: "Helping residents access safety information while protecting individual privacy.",
  homeDescription: "A privacy-first dashboard that provides safety transparency to residents without exposing sensitive individual data.",
  category: ["Data Viz", "Privacy", "Civic Tech"],
  overview: {
    domain: "Urban Data Visualization · UX",
    role: "User Research · Information Architecture · Data Visualization · Privacy Strategy Design",
    team: "4 members",
    duration: "7 weeks",
    context: "Course Project (INFO 200)",
    sector: "Civic Tech",
    text: "Urban Safety is a privacy-conscious city safety visualization platform designed to help residents understand neighborhood safety trends without exposing sensitive individual data."
  },
  sections: [
    {
      id: "problem",
      title: "2. Problem Context",
      content: [
        "Many residents want to understand city safety conditions. However, existing platforms often: Show precise crime or homeless locations; Risk violating individual privacy; Reinforce harmful bias; Create unnecessary anxiety; Overload users with detailed event data.",
        "The key design challenge: How might we provide meaningful safety transparency without exposing personal or sensitive information?"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated screenshot examples of typical precise-location safety apps (highlighting privacy risks)."]
    },
    {
      id: "research",
      title: "3. Research & Insights",
      content: [
        "Research Methods: Interviews with students and local residents; Survey on safety information needs; Competitive analysis (e.g., Citizen App, Nextdoor); Stakeholder mapping.",
        "Key Insights: Users want quick risk awareness, not event-by-event detail; Precise pinpoints increase privacy risks and bias; High-level trend visibility builds trust; Customizable filters reduce anxiety and overload."
      ],
      callout: "Data presentation shapes public perception.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Affinity diagram or insight clustering board & Stakeholder map (Residents, City Planners, Vulnerable Populations)."]
    },
    {
      id: "strategy",
      title: "4. Design Strategy",
      content: [
        "We adopted a Privacy-by-Design approach. Instead of precise location pins, we introduced: Blurred area indicators; Broad zone safety visualization; Layered data abstraction; Trend-based risk indication.",
        "The goal: shift focus from individuals to community-level patterns."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Traditional precise pin-based map", "Right: Early blurred-zone concept sketch"]
    },
    {
      id: "ideation",
      title: "5. Ideation & Low-Fidelity Prototyping",
      content: "We explored multiple visualization directions: Circle-based abstraction; Heatmap layers; Gradient intensity mapping; Filter-first dashboard layout.",
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Low-fidelity map exploration sketches", "Different visualization experiments (circles, heatmaps, gradients)"]
    },
    {
      id: "interaction",
      title: "6. Interaction & Filtering Design",
      content: [
        "To reduce overload and increase control, we implemented: Customizable event filters; Toggleable data layers; Time-based filtering; Risk-level simplification.",
        "The design ensures users see only relevant information."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Filtering interface screen & interaction detail (filter toggle)."]
    },
    {
      id: "final",
      title: "7. Final Design",
      content: "Urban Safety presents safety information using: Blurred geographic regions instead of exact points; Layered visual hierarchy; Soft visual tones to reduce alarmism; Trend-focused data summaries. The system encourages awareness without panic.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Final high-fidelity map screen with blurred zones and summary panel."]
    },
    {
      id: "testing",
      title: "8. User Testing & Validation",
      content: [
        "We tested: Perceived trustworthiness; Anxiety levels; Information clarity; Privacy perception.",
        "Findings: Users felt the blurred visualization protected dignity; Trend-based summaries were preferred over raw event lists; The softer visual style reduced fear."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User feedback summary visualization or annotated prototype feedback."]
    },
    {
      id: "impact",
      title: "9. Impact",
      content: "The final prototype: Increased perceived trust; Reduced privacy concerns; Maintained functional safety awareness; Avoided reinforcing bias toward vulnerable populations. The design demonstrates how data transparency and human dignity can coexist."
    },
    {
      id: "reflection",
      title: "10. Reflection",
      content: [
        "This project strengthened my understanding of: Ethical data visualization; Privacy-aware interaction design; Social responsibility in UX; Stakeholder trade-offs in civic products.",
        "I learned that: Design is not only about clarity — it is about responsibility.",
        "Future iterations could include: Real-time updates; Predictive safety modeling; Community feedback integration; Continued privacy safeguards."
      ]
    }
  ]
};

// Simplified translation helper: for brevity in this file, I'll translate the main structure and key headings.
// In a real production app, all strings in PROJECT_X_EN would have a counterpart in PROJECT_X_ZH.
const PROJECT_1_ZH: Project = {
  ...PROJECT_1_EN,
  title: "UW Pathway (华大课程规划)",
  subtitle: "通过技能导向规划重新定义课程发现",
  description: "帮助华盛顿大学的学生自信地选择符合职业目标的课程。",
  homeDescription: "一个以技能为核心的课程发现平台，旨在为华大（UW）学生搭建学术规划与职业发展的桥梁。",
  sections: PROJECT_1_EN.sections.map(s => ({
    ...s,
    title: s.title.replace("The Problem", "问题背景").replace("Research & Insights", "研究与洞察").replace("Opportunity", "产品机会").replace("Solution", "从洞察到方案").replace("Architecture", "信息架构").replace("Prototype", "低保真原型").replace("Testing", "可用性测试").replace("Final Design", "最终设计").replace("Reflection", "项目反思")
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
    title: s.title.replace("The Problem", "问题定义").replace("Approach", "设计方法").replace("Feature", "功能改进").replace("Impact", "项目影响力").replace("Reflection", "设计总结")
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
    title: s.title.replace("Context", "背景").replace("Research", "研究").replace("Strategy", "策略").replace("Ideation", "构思").replace("Interaction", "交互").replace("Final", "最终").replace("Testing", "测试").replace("Impact", "影响").replace("Reflection", "总结")
  }))
};

export const projects_en: Project[] = [PROJECT_1_EN, PROJECT_2_EN, PROJECT_3_EN];
export const projects_zh: Project[] = [PROJECT_1_ZH, PROJECT_2_ZH, PROJECT_3_ZH];
