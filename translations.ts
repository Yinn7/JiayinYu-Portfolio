
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
    activities: {
      title: "Activities",
      roleLabel: "Role / What I Did",
      reflectionLabel: "Reflections / Learnings",
      items: [
        {
          name: "HuskyAdapt",
          role: "Timeline: 04/2024 - Current\n\nParticipated in a school club project modifying toys for children with disabilities. We hacked existing toys—like a planetarium projector, a whale toy, and a ball track—to add large, accessible external buttons, ensuring they are usable for children with limited motor control.",
          images: [
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt1.jpg",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt2.jpg",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt3.mp4",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt4.mp4"
          ],
          reflections: [
            "Inclusive thinking: design from children's abilities and needs",
            "Hands-on skills: soldering, circuit troubleshooting, and hardware modification",
            "Problem-solving: adapting mass-market toys for accessibility switches",
            "Collaboration: working with a team to ensure device safety and reliability"
          ]
        }
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
    activities: {
      title: "活动经历",
      roleLabel: "角色 / 项目内容",
      reflectionLabel: "感悟 / 收获",
      items: [
        {
          name: "HuskyAdapt",
          role: "时间线：04/2024 - 至今\n\n参加学校社团项目，为残障儿童改装玩具。我们对现有玩具（如星空投影仪、小鲸鱼玩具和滚球轨道）进行了硬件改装，增加了大型、易触碰的外部开关，确保患有运动障碍的儿童也能轻松使用。",
          images: [
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt1.jpg",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt2.jpg",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt3.mp4",
            "jiayin-yu---ux-portfolio/assets/image/huskyadapt/huskyadapt4.mp4"
          ],
          reflections: [
            "包容性思维：基于儿童的能力和需求进行设计",
            "动手能力：焊接、电路故障排除和硬件改装",
            "解决问题：将大众市场玩具改装为无障碍开关玩具",
            "团队协作：分工配合确保设备的安全性与可靠性"
          ]
        }
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

const PROJECT_2_EN: Project = {
  id: "wordplay",
  title: "Wordplay",
  subtitle: "Improving Accessibility & Inclusive Design for a Global Programming Learning Platform",
  description: "Enhancing usability and inclusivity for a web-based coding education platform.",
  homeDescription: "Redesigning an open-source coding platform to prioritize accessibility for learners of all ages and backgrounds.",
  category: ["Accessibility", "Inclusive Design", "Open Source"],
  overview: {
    platform: "Wordplay (Open-source coding education website)",
    role: "UX Designer (Volunteer Contributor)",
    focus: "Accessibility · Interaction Design · Inclusive Design",
    tools: "Figma · GitHub Issue Tracking",
    collaboration: "Worked directly with Project Lead",
    team: "Open-source contributors",
    duration: "01/2025 - Current",
    sector: "Education",
    text: "Wordplay aims to make programming accessible to learners of all ages, backgrounds, and locations. My role focused on redesigning key features and improving accessibility for keyboard and screen reader users."
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Key Challenges",
      isBoxed: true,
      content: [
        "——————",
        "• Unclear navigation structure",
        "• Cumbersome interface layout",
        "• Heavy reliance on hover interactions",
        "• Limited keyboard support & screen reader compatibility",
        "• Limited visual diversity (single emoji skin tone)"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated original interface screenshot with highlighted issues"]
    },
    {
      id: "feature-1",
      title: "Feature 1: Character Photo Import",
      isBoxed: true,
      content: [
        "**Current problem:** Limited character diversity, no way to upload custom images.",
        "**improvement:** Added photo upload with size validation, cropping, keyboard & screen reader accessibility, clear labels, and focus states.",
        "**Accessibility Consideration:** Tab order, ARIA labels, screen reader upload feedback."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["High-fidelity Photo Import interface", "Cropping workflow & Accessibility annotations"]
    },
    {
      id: "feature-2",
      title: "Feature 2: Quick Character Search & Favorites",
      isBoxed: true,
      content: [
        "**Current problem:** Discovery relied on hover; no filtering or favorites.",
        "**improvement:** Added keyword-based search, category tags, Favorite Character feature, dedicated browsing area.",
        "**Accessibility Consideration:** Fully keyboard-accessible; no hover dependency."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Redesigned Character Search & Browsing Interface"]
    },
    {
      id: "feature-3",
      title: "Feature 3: Improving the “place()” Function",
      isBoxed: true,
      content: [
        "**Current problem:** Users unclear on parameters and direction.",
        "**improvement:** Added inline explanations, directional selector, clarified labels, improved input accessibility.",
        "**Accessibility Consideration:** Better visual feedback and keyboard focus management."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Original Interface", "Right: Redesigned Interface"]
    },
    {
      id: "feature-4",
      title: "Feature 4: Emoji Skin Tone Options",
      isBoxed: true,
      content: [
        "**Current problem:** Single emoji skin tone available.",
        "**improvement:** Added skin tone selector with inclusive workflow, keyboard mapping, and screen reader guidance.",
        "**Accessibility Consideration:** Selection feedback for screen readers and consistent focus rings."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Emoji selection workflow and small detail interaction close-up"]
    },
    {
      id: "reflection",
      title: "Reflection",
      isBoxed: true,
      content: [
        "• Accessibility must be designed from the start",
        "• Inclusive design benefits all users",
        "• Iterative feedback improves solution quality",
        "• Small UI decisions significantly affect usability"
      ]
    }
  ]
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
    duration: "09/2025 - 12/2025\n7 weeks",
    sector: "Education Technology",
    text: "UW Pathway is a skill-based course discovery platform that bridges academic planning and career outcomes by connecting courses, skills, and jobs in one centralized system."
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Key Challenges",
      isBoxed: true,
      content: [
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
      subtitle: "Methods",
      content: [
        "• Semi-structured interviews with UW students",
        "• Competitive analysis of academic and skill-based platforms"
      ],
      imageType: "centered",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"],
      captions: ["Photo of interview process"]
    },
    {
      id: "insights",
      title: "Key Insights",
      isBoxed: true,
      content: [
        "• Students think in terms of skills, not course codes",
        "• Fragmented systems increase cognitive overload",
        "• Students lack tools to compare long-term career value",
        "• Peer and alumni experiences are highly trusted"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Affinity diagram or insight clustering board"]
    },
    {
      id: "opportunity",
      title: "Product Opportunity",
      content: [
        "Existing tools support either academic registration or external skill development, but none centralize: Courses, Skills, Careers, Jobs",
        "Opportunity: Create a unified, skill-driven academic planning experience"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Left: Competitor platform screenshots", "Right: Opportunity mapping diagram"]
    },
    {
      id: "solution",
      title: "Ideation & Solution",
      content: "We reframed course discovery around skills and career pathways.",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1544391682-1a55b9deaad3?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Brainstorm sketches. \"We explored multiple solution directions before converging on a skill-centered discovery model.\""]
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
      captions: ["Sitemap [Full Width]", "User flow diagram [Half Width Left]", "Skill tagging structure [Half Width Right]"]
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
      captions: ["Hypothesis: If skills are visible as tags, students can evaluate relevance faster."]
    },
    {
      id: "testing",
      title: "Usability Testing & Iteration",
      subtitle: "Key Findings",
      isBoxed: true,
      content: [
        "Testing Participants: Freshman · Junior · Graduate student",
        "• Navigation labels unclear",
        "• Users wanted job comparison tools",
        "• Career pages lacked salary/progression data"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618761767660-f4633b499b9a?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Renamed labels, added salary data, and introduced Similar Jobs comparison feature."]
    },
    {
      id: "final",
      title: "Final Design",
      content: [
        "UW Pathway enables students to:",
        "• Discover courses by skill relevance",
        "• Understand career outcomes",
        "• Compare job paths",
        "• Plan confidently"
      ],
      imageType: "hero",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&get=80&w=1200",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["High-fidelity main screen", "Skill filter, Learning path, and Career/job pages"]
    },
    {
      id: "reflection",
      title: "Reflection",
      isBoxed: true,
      content: [
        "• Translate research into structural product decisions",
        "• Reduce cognitive overload through information architecture",
        "• Design comparison-driven decision tools",
        "• Balance UX clarity with product strategy",
        "Future: Personalized recommendations, AI-based skill gap analysis, Advisor integration"
      ]
    }
  ]
};

const PROJECT_3_EN: Project = {
  id: "urban-safety",
  title: "Urban Safety",
  subtitle: "Enhancing Urban Safety Awareness Through Privacy-Preserving Data Visualization",
  description: "Helping residents access safety information while protecting individual privacy.",
  homeDescription: "A privacy-conscious urban safety dashboard that visualizes neighborhood trends using blurred geographic regions.",
  category: ["Data Viz", "Privacy", "Civic Tech"],
  overview: {
    domain: "Urban Data Visualization · UX",
    role: "User Research · Information Architecture · Data Visualization · Privacy Strategy Design",
    team: "4 members",
    duration: "03/2025 - 06/2025\n6 weeks",
    context: "INFO 200 Course Project",
    sector: "Civic Tech",
    text: "Urban Safety is a privacy-conscious city safety visualization platform designed to help residents understand neighborhood safety trends without exposing sensitive individual data."
  },
  sections: [
    {
      id: "problem",
      title: "Problem Context",
      content: [
        "Existing platforms show precise crime/homeless locations → privacy risk, bias, anxiety",
        "Users need meaningful safety info without personal data exposure"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Annotated screenshot of existing apps highlighting privacy risks"]
    },
    {
      id: "insights",
      title: "Key Insights",
      subtitle: "Research Results",
      isBoxed: true,
      content: [
        "• Users prefer trend-level awareness over precise events",
        "• High-level visualization builds trust",
        "• Customizable filters reduce anxiety",
        "• Ethical insight: \"Data presentation shapes public perception\""
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Affinity diagram and stakeholder map"]
    },
    {
      id: "strategy",
      title: "Design Strategy",
      content: [
        "Privacy-by-Design: blurred area indicators, layered abstraction, trend-based risk info to shift focus to community-level patterns."
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Traditional precise pins", "Early blurred-zone concept sketch"]
    },
    {
      id: "ideation",
      title: "Ideation & Prototyping",
      content: [
        "Explored circles, heatmaps, and gradient intensity mapping to represent risk without specificity."
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["Low-fidelity map sketches", "Visualization experiments (circles, heatmaps, gradients)"]
    },
    {
      id: "interaction",
      title: "Interaction & Filtering Design",
      content: [
        "Custom filters, toggleable layers, time-based filtering, risk simplification to ensure users see only relevant info."
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["Filter interface and layer control detail"]
    },
    {
      id: "final",
      title: "Final Design",
      content: [
        "Blurred geographic regions, layered hierarchy, soft tones, trend-focused summaries to encourage awareness without panic."
      ],
      imageType: "hero",
      images: [
        "https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["Final high-fidelity map screen", "Legend and visual hierarchy detail"]
    },
    {
      id: "testing",
      title: "User Testing & Validation",
      isBoxed: true,
      content: [
        "• Blurred visualization protects dignity",
        "• Reduces fear & improves trust",
        "• Trend summaries preferred over raw event lists"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["User feedback summary visualization"]
    },
    {
      id: "reflection",
      title: "Reflection",
      isBoxed: true,
      content: [
        "• Ethical data visualization & privacy-aware design",
        "• Stakeholder trade-offs in civic products",
        "• Social responsibility in UX",
        "Future: real-time updates, predictive modeling, community feedback integration"
      ]
    }
  ]
};

const PROJECT_1_ZH: Project = {
  id: "uw-pathway",
  title: "UW Pathway (华大课程规划)",
  subtitle: "通过技能导向规划重新定义课程发现",
  description: "帮助华盛顿大学的学生自信地选择符合职业目标的课程。",
  homeDescription: "一个以技能为核心的课程发现平台，旨在为华大（UW）学生搭建学术规划与职业发展的桥梁。",
  category: ["用户体验研究", "信息架构", "教育技术"],
  overview: {
    role: "用户体验研究 · 信息架构 · 交互设计 · 原型设计",
    team: "4名成员",
    duration: "2025年9月 - 12月\n7周",
    sector: "教育技术",
    text: "UW Pathway 是一个以技能为核心的课程发现平台，通过在一个中心化系统中连接课程、技能和职位，弥合了学术规划与职业成果之间的差距。"
  },
  sections: [
    {
      id: "problem",
      title: "问题背景",
      subtitle: "核心挑战",
      isBoxed: true,
      content: [
        "——————",
        "• 课程描述侧重于学术内容，而非实际技能",
        "• 信息分散在多个平台",
        "• 学生无法清晰地看到课程到职业的路径",
        "• 决策焦虑感强，尤其是新生和跨学科学生"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["用户旅程图或学生痛点视觉总结"]
    },
    {
      id: "research",
      title: "研究洞察",
      subtitle: "研究方法",
      content: [
        "• 对华大学生进行半结构化访谈",
        "• 对学术和技能平台进行竞品分析"
      ],
      imageType: "centered",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"],
      captions: ["访谈过程照片"]
    },
    {
      id: "insights",
      title: "核心洞察",
      isBoxed: true,
      content: [
        "• 学生以“技能”而非“课程代码”来思考",
        "• 碎片化的系统增加了认知负荷",
        "• 学生缺乏比较长期职业价值的工具",
        "• 同行和校友的经验非常值得信赖"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"],
      captions: ["亲和图或洞察聚类板"]
    },
    {
      id: "opportunity",
      title: "产品机会",
      content: [
        "现有工具要么支持学术注册，要么支持外部技能开发，但没有一个能将“课程、技能、职业、职位”集中在一起。",
        "机会：创建一个统一的、由技能驱动的学术规划体验。"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["左：竞品平台截图", "右：机会映射图"]
    },
    {
      id: "solution",
      title: "构思与方案",
      content: "我们围绕技能和职业路径重新定义了课程发现。",
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1544391682-1a55b9deaad3?auto=format&fit=crop&q=80&w=1200"],
      captions: ["头脑风暴草图。“在收敛到以技能为中心的发现模型之前，我们探索了多个解决方案方向。”"]
    },
    {
      id: "architecture",
      title: "信息架构",
      content: [
        "多入口导航：专业 · 技能 · 职业 · 课程 · 职位",
        "每门课程都包含结构化的技能标签，用于关联发现"
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["网站地图 [全宽]", "用户流程图 [左半宽]", "技能标签结构 [右半宽]"]
    },
    {
      id: "prototype",
      title: "低保真原型",
      content: "在进行视觉优化之前测试结构的清晰度。",
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1586717796440-9620ed7a06a1?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["假设：如果技能以标签形式可见，学生可以更快地评估相关性。"]
    },
    {
      id: "testing",
      title: "可用性测试",
      subtitle: "核心发现",
      isBoxed: true,
      content: [
        "测试参与者：新生 · 大三学生 · 研究生",
        "• 导航标签不清晰",
        "• 用户想要职位比较工具",
        "• 职业页面缺乏薪资/晋升数据"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618761767660-f4633b499b9a?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["重新命名了标签，增加了薪资数据，并引入了“相似职位”比较功能。"]
    },
    {
      id: "final",
      title: "最终设计",
      content: [
        "UW Pathway 使学生能够：",
        "• 通过技能相关性发现课程",
        "• 了解职业成果",
        "• 比较职业路径",
        "• 自信地进行规划"
      ],
      imageType: "hero",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&get=80&w=1200",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["高保真主屏幕", "技能筛选、学习路径和职业/职位页面"]
    },
    {
      id: "reflection",
      title: "项目总结",
      isBoxed: true,
      content: [
        "• 将研究转化为结构化的产品决策",
        "• 通过信息架构减少认知负荷",
        "• 设计比较驱动的决策工具",
        "• 平衡用户体验清晰度与产品策略",
        "未来：个性化推荐、基于 AI 的技能差距分析、导师集成"
      ]
    }
  ]
};

const PROJECT_2_ZH: Project = {
  id: "wordplay",
  title: "Wordplay (编程无障碍设计)",
  subtitle: "提升全球编程学习平台的无障碍与包容性",
  description: "增强网页版编程教育平台的易用性与包容性。",
  homeDescription: "重新设计开源编程平台，为全球学习者提供完整的无障碍支持。",
  category: ["无障碍", "包容性设计", "开源"],
  overview: {
    platform: "Wordplay (开源编程教育网站)",
    role: "用户体验设计师 (志愿者贡献者)",
    focus: "无障碍 · 交互设计 · 包容性设计",
    tools: "Figma · GitHub 议题追踪",
    collaboration: "直接与项目负责人合作",
    team: "开源贡献者",
    duration: "2025年1月 - 至今",
    sector: "教育",
    text: "Wordplay 旨在让所有年龄、背景和地区的学习者都能接触到编程。我的工作重点是重新设计核心功能，并改善键盘和屏幕阅读器用户的无障碍体验。"
  },
  sections: [
    {
      id: "problem",
      title: "问题定义",
      subtitle: "核心挑战",
      isBoxed: true,
      content: [
        "——————",
        "• 导航结构不清晰",
        "• 界面布局繁琐",
        "• 过度依赖悬停交互",
        "• 键盘支持和屏幕阅读器兼容性有限",
        "• 视觉多样性不足（单一肤色的表情符号）"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200"],
      captions: ["标注了问题的原始界面截图"]
    },
    {
      id: "feature-1",
      title: "功能 1：角色照片导入",
      isBoxed: true,
      content: [
        "**当前问题：** 角色多样性有限，无法上传自定义图像。",
        "**改进方案：** 增加了带有尺寸验证、裁剪、键盘和屏幕阅读器无障碍支持的照片上传功能，并配有清晰的标签和焦点状态。",
        "**无障碍考量：** 选项卡顺序、ARIA 标签、屏幕阅读器上传反馈。"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["高保真照片导入界面", "裁剪流程与无障碍标注"]
    },
    {
      id: "feature-2",
      title: "功能 2：快速角色搜索与收藏",
      isBoxed: true,
      content: [
        "**当前问题：** 发现功能依赖悬停；没有筛选或收藏功能。",
        "**改进方案：** 增加了基于关键词的搜索、分类标签、收藏角色功能以及专门的浏览区域。",
        "**无障碍考量：** 完全支持键盘操作；不依赖悬停。"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1618761767630-010461622312?auto=format&fit=crop&q=80&w=1200"],
      captions: ["重新设计的角色搜索与浏览界面"]
    },
    {
      id: "feature-3",
      title: "功能 3：改进 “place()” 函数",
      isBoxed: true,
      content: [
        "**当前问题：** 用户不清楚参数和方向。",
        "**改进方案：** 增加了内联说明、方向选择器、明确的标签，并改进了输入无障碍性。",
        "**无障碍考量：** 更好的视觉反馈和键盘焦点管理。"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["左：原始界面", "右：重新设计的界面"]
    },
    {
      id: "feature-4",
      title: "功能 4：表情符号肤色选项",
      isBoxed: true,
      content: [
        "**当前问题：** 仅提供单一肤色的表情符号。",
        "**改进方案：** 增加了带有包容性工作流、键盘映射和屏幕阅读器指导的肤色选择器。",
        "**无障碍考量：** 屏幕阅读器的选择反馈和一致的焦点环。"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1614332284142-f9026362d22d?auto=format&fit=crop&q=80&w=1200"],
      captions: ["表情符号选择流程和细节交互特写"]
    },
    {
      id: "reflection",
      title: "项目总结",
      isBoxed: true,
      content: [
        "• 无障碍必须从一开始就进行设计",
        "• 包容性设计惠及所有用户",
        "• 迭代反馈提高解决方案质量",
        "• 微小的 UI 决策会显著影响易用性"
      ]
    }
  ]
};

const PROJECT_3_ZH: Project = {
  id: "urban-safety",
  title: "Urban Safety (城市安全看板)",
  subtitle: "通过隐私保护的数据可视化增强城市安全意识",
  description: "帮助居民在获取安全信息的同时保护个人隐私。",
  homeDescription: "一个注重隐私保护的城市安全仪表盘，通过模糊区域可视化趋势，防止偏见。",
  category: ["数据可视化", "隐私保护", "公民技术"],
  overview: {
    domain: "城市数据可视化 · 用户体验",
    role: "用户研究 · 信息架构 · 数据可视化 · 隐私策略设计",
    team: "4名成员",
    duration: "2025年3月 - 6月\n6周",
    context: "INFO 200 课程项目",
    sector: "公民技术",
    text: "Urban Safety 是一个注重隐私保护的城市安全可视化平台，旨在帮助居民了解社区安全趋势，同时不暴露敏感的个人数据。"
  },
  sections: [
    {
      id: "problem",
      title: "问题背景",
      content: [
        "现有平台显示精确的犯罪/流浪者位置 → 隐私风险、偏见、焦虑",
        "用户需要有意义的安全信息，但不希望暴露个人数据"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200"],
      captions: ["标注了现有应用隐私风险的截图"]
    },
    {
      id: "insights",
      title: "研究洞察",
      subtitle: "研究结果",
      isBoxed: true,
      content: [
        "• 用户更喜欢趋势层面的意识，而非精确的事件",
        "• 高层级的可视化能建立信任",
        "• 可定制的筛选器能减少焦虑",
        "• 伦理洞察：“数据呈现方式塑造公众认知”"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["亲和图和利益相关者地图"]
    },
    {
      id: "strategy",
      title: "设计策略",
      content: [
        "隐私设计 (Privacy-by-Design)：使用模糊区域指示器、分层抽象、基于趋势的风险信息，将重点转移到社区层面的模式。"
      ],
      imageType: "side-by-side",
      images: [
        "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["传统的精确图钉", "早期的模糊区域概念草图"]
    },
    {
      id: "ideation",
      title: "构思原型",
      content: [
        "探索了圆圈、热力图和渐变强度映射，以在不指明具体位置的情况下表示风险。"
      ],
      imageType: "grid",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
      ],
      captions: ["低保真地图草图", "可视化实验（圆圈、热力图、渐变）"]
    },
    {
      id: "interaction",
      title: "交互筛选",
      content: [
        "自定义筛选器、可切换图层、基于时间的筛选、风险简化，确保用户只看到相关信息。"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"],
      captions: ["筛选界面和图层控制细节"]
    },
    {
      id: "final",
      title: "最终设计",
      content: [
        "模糊的地理区域、分层级结构、柔和的色调、侧重趋势的总结，以鼓励关注而不引起恐慌。"
      ],
      imageType: "hero",
      images: [
        "https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1493134795711-470dd1485924?auto=format&fit=crop&q=80&w=1200"
      ],
      captions: ["最终高保真地图屏幕", "图例和视觉层级细节"]
    },
    {
      id: "testing",
      title: "测试验证",
      isBoxed: true,
      content: [
        "• 模糊的可视化保护了尊严",
        "• 减少恐惧并提高信任",
        "• 相比原始事件列表，用户更倾向于趋势总结"
      ],
      imageType: "full",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"],
      captions: ["用户反馈总结可视化"]
    },
    {
      id: "reflection",
      title: "项目总结",
      isBoxed: true,
      content: [
        "• 伦理数据可视化与隐私意识设计",
        "• 公民产品中的利益相关者权衡",
        "• 用户体验中的社会责任",
        "未来：实时更新、预测模型、社区反馈集成"
      ]
    }
  ]
};

// Reordered: Wordplay (Current), UW Pathway (late 2025), Urban Safety (mid 2025)
export const projects_en: Project[] = [PROJECT_2_EN, PROJECT_1_EN, PROJECT_3_EN];
export const projects_zh: Project[] = [PROJECT_2_ZH, PROJECT_1_ZH, PROJECT_3_ZH];
