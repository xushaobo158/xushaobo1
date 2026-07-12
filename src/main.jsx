import React, { useEffect, useId, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AlertTriangle, ArrowDown, ArrowLeft, ArrowUpRight, Bell, CheckCircle2, ChevronDown, ClipboardList, Copy, Download, FileText, FolderInput, Globe, Lightbulb, Mail, MessageCircle, Phone, Search, SlidersHorizontal } from 'lucide-react';
import './styles.css';

const copy = {
  zh: {
    nav: ['首页', '简历', '作品', '联系'],
    heroName: '徐少柏 / Xushaobo',
    heroIntro:
      'Hi，我是徐少柏，一名拥有交互设计背景的产品体验设计师，擅长结合产品思维、vibe coding工作流与高保真原型，将复杂需求快速转化为清晰、可落地的交互体验。',
    heroCta: '查看我的作品',
    scroll: 'SCROLL',
    selected: 'Selected',
    workTitle: 'PROJECTS',
    workHint: '点击卡片查看项目',
    role: 'PRODUCT / UX DESIGNER',
    homeResumeEyebrow: 'RESUME SNAPSHOT',
    homeResumeTitle: '简历速览',
    homeResumeLead: '',
    homeResumeSideNote: '适合用于产品体验设计 / UIUX 相关岗位投递，也可以通过右侧入口直接下载完整 PDF 简历。',
    homeResumeTags: ['产品思维', 'Vibe coding', '体验设计', 'AI工具'],
    homeResumeSections: [
      {
        title: '关于我',
        paragraphs: [
          { label: '设计能力与思维', text: '熟练使用 figma 与 Adobe 软件工具，具备从用户研究、需求梳理、交互架构到高保真输出、组件库搭建的完整项目经验，覆盖工业软件、APP、网页设计等。' },
          { label: 'AI 工具应用能力', text: '具备熟练使用 Lovable、ChatGPT、Figma Make 及 Vibe coding 提升效率的能力，结合 Codex 等工具实现设计、开发、测试闭环，提升方案落地能力。' },
          { label: '个人成就', text: '未来设计师艺术设计大赛国赛三等奖、中国好创意暨全国艺术设计大赛省赛一等奖、校级一等奖学金、大学生创新创业实践项目负责人（获一万元项目资助经费）、杰出学生干部。' },
        ],
      },
      {
        title: '教育经历',
        compactHead: true,
        entries: [
          {
            org: '东北林业大学（211）硕士',
            role: '设计学（前15%）',
            date: '2024.09-2027.06',
            details: [],
          },
          {
            org: '绥化学院 学士',
            role: '环境设计（前10%）',
            date: '2019.09-2023.06',
            details: [],
          },
        ],
      },
      {
        title: '实习经历',
        entries: [
          {
            org: '北京经纬恒润科技股份有限公司',
            role: '交互设计实习生',
            date: '2025.12-2026.05',
            details: [],
          },
          {
            org: '北京妙动时光文化传媒有限公司',
            role: '产品设计实习生',
            date: '2024.03-2024.08',
            details: [],
          },
        ],
      },
    ],
    homeResumeDownload: '下载 PDF 简历',
    resumeProfile: [
      { label: '姓名', value: '徐少柏 / Xushaobo' },
      { label: '电话 / 微信', value: '15930186021' },
      { label: '个人邮箱', value: '3121353738@qq.com' },
      { label: '求职方向', value: '交互设计师 / 用户体验设计师' },
    ],
    cards: [
      {
        title: '不夜星球社交APP产品体验设计优化',
        subtitle: '围绕用户核心路径，优化产品结构与社交互动细节',
        meta: 'APP / UX / 产品设计',
        image: '/assets/cover-social-app.webp',
        href: '/projects/social-app',
      },
      {
        title: '文件生成后台工具系统设计',
        subtitle: '从业务流程出发，重构信息架构与操作流程',
        meta: 'B端系统 / UX / 界面设计',
        image: '/assets/cover-backend-tool.webp',
        href: '/projects/file-tool',
      },
      {
        title: '网站视觉优化改版设计',
        subtitle: '强化信息层级与视觉一致性，提升品牌展示和用户感知',
        meta: '网页 / 视觉设计 / UI设计',
        image: '/assets/cover-web-redesign.webp',
        href: '/projects/web-redesign',
      },
      {
        title: '作品开发中',
        subtitle: '更多项目正在整理与完善，保持更新',
        meta: 'More works / 敬请期待',
        image: '/assets/cover-wip.webp',
        href: '/projects/in-progress',
        muted: true,
      },
    ],
    contactTitle: '期待与你合作',
    contactLead: '如果你正在寻找一名关注体验、结构与落地细节的 UIUX 设计师，我们可以聊聊。',
    contactItems: [
      { label: 'Email', value: '3121353738@qq.com', href: 'mailto:3121353738@qq.com' },
      { label: 'WeChat', value: '15930186021', href: '#' },
      { label: 'Phone', value: '15930186021', href: 'tel:15930186021' },
    ],
    copyAction: '复制',
    marquee: 'LET US BUILD SOMETHING GREAT TOGETHER',
  },
  en: {
    nav: ['Home', 'Resume', 'Work', 'Contact'],
    heroName: 'Xu Shaobo / Xushaobo',
    heroIntro:
      'Designing user experiences and interfaces for internet products, with attention to user needs, product structure, and every interaction detail.',
    heroCta: 'View selected work',
    scroll: 'SCROLL',
    selected: 'Selected',
    workTitle: 'PROJECTS',
    workHint: 'Click cards to view case studies',
    role: 'PRODUCT / UX DESIGNER',
    homeResumeEyebrow: 'RESUME SNAPSHOT',
    homeResumeTitle: 'Resume Snapshot',
    homeResumeLead: '',
    homeResumeSideNote: 'Useful as a quick hiring snapshot for Product Experience / UIUX roles, with the full PDF resume available on the right.',
    homeResumeTags: ['Product Thinking', 'Vibe Coding', 'Experience Design', 'AI Tools'],
    homeResumeSections: [
      {
        title: 'About Me',
        paragraphs: [
          { label: 'Design capabilities & thinking', text: 'Experienced with Figma and Adobe tools, covering user research, requirement framing, interaction architecture, high-fidelity output, and component library building across industrial software, apps, and web design.' },
          { label: 'AI-enhanced workflow', text: 'Comfortable using Lovable, ChatGPT, Figma Make, Vibe Coding, and Codex to build a faster loop between design, development, and validation, helping ideas land more effectively.' },
          { label: 'Selected achievements', text: 'National and provincial design competition awards, top university scholarship recognition, entrepreneurship project leadership with funded support, and outstanding student leader recognition.' },
        ],
      },
      {
        title: 'Education',
        entries: [
          {
            org: 'Northeast Forestry University (211)',
            role: 'M.Des. in Design (Top 15%)',
            date: '2024.09-2027.06',
            details: [
              'Coursework includes UX design, interaction design, user research and statistics, ergonomics, product and service systems, ecological and sustainable design, and design management.',
              'Awards include university first-class scholarships, national and provincial design competition prizes, and student leadership recognition.',
            ],
          },
          {
            org: 'Suihua University',
            role: 'B.A. in Environmental Design (Top 10%)',
            date: '2019.09-2023.06',
            details: [
              'Coursework includes visual rendering, CAD drawing, 3DMAX interior/exterior production, ergonomics, materials and construction, and architectural drafting.',
              'Awards include scholarship recognition, national design competition prizes, and student leadership recognition.',
            ],
          },
        ],
      },
      {
        title: 'Internships',
        entries: [
          {
            org: 'HI Raintech',
            role: 'Interaction Design Intern',
            date: '2025.12-2026.05',
            details: [
              'Built and maintained a B-side component library with 20+ foundational components for internal vehicle-platform systems.',
              'Collaborated on two internal tool modules, producing process maps and 20+ high-fidelity screens.',
              'Supported Beijing Auto Show preparation with large-screen interfaces, showcase visuals, and internal brand logo output.',
            ],
          },
          {
            org: 'Beijing Miaodong Time Media',
            role: 'Product Design Intern',
            date: '2024.03-2024.08',
            details: [
              'Ran competitive research and user interviews to extract pain points, personas, and experience findings.',
              'Participated in iOS/Android design system work and iterative UX optimization around livestreaming and messaging flows.',
            ],
          },
        ],
      },
    ],
    homeResumeDownload: 'Download PDF Resume',
    resumeProfile: [
      { label: 'Name', value: 'Xu Shaobo / Xushaobo' },
      { label: 'Phone / WeChat', value: '15930186021' },
      { label: 'Email', value: '3121353738@qq.com' },
      { label: 'Target Role', value: 'Interaction Designer / UX Designer' },
    ],
    cards: [
      {
        title: 'Sleepless Planet Social App Experience Optimization',
        subtitle: 'Optimizing core user paths, product structure, and social interaction details.',
        meta: 'App / UX / Product Design',
        image: '/assets/cover-social-app.webp',
        href: '/projects/social-app',
      },
      {
        title: 'File Generation Back-office Tool System Design',
        subtitle: 'Restructuring information architecture and workflows from business processes.',
        meta: 'B2B System / UX / UI Design',
        image: '/assets/cover-backend-tool.webp',
        href: '/projects/file-tool',
      },
      {
        title: 'Website Visual Optimization Redesign',
        subtitle: 'Improving information hierarchy, visual consistency, and brand perception.',
        meta: 'Website / Visual Design / UI',
        image: '/assets/cover-web-redesign.webp',
        href: '/projects/web-redesign',
      },
      {
        title: 'Works in Development',
        subtitle: 'More projects are being organized and refined for publication.',
        meta: 'More works / Coming soon',
        image: '/assets/cover-wip.webp',
        href: '/projects/in-progress',
        muted: true,
      },
    ],
    contactTitle: 'Let us collaborate',
    contactLead:
      'If you are looking for a UIUX designer who cares about experience, structure, and implementation details, let us talk.',
    contactItems: [
      { label: 'Email', value: '3121353738@qq.com', href: 'mailto:3121353738@qq.com' },
      { label: 'WeChat', value: '15930186021', href: '#' },
      { label: 'Phone', value: '15930186021', href: 'tel:15930186021' },
    ],
    copyAction: 'Copy',
    marquee: 'LET US BUILD SOMETHING GREAT TOGETHER',
  },
};

const projectPageContent = {
  'social-app': {
    zh: {
      eyebrow: 'C 端社交 APP / 产品体验设计优化',
      title: '不夜星球社交 APP 产品体验设计优化',
      intro:
        '基于“发现、判断、互动、承接”链路，围绕兴趣社交产品中的发现对象/房间困难、互动判断成本高、陌生人破冰难、直播间参与路径复杂等问题，重构用户从发现到互动的核心体验链路。',
      cta: '查看完整原型',
      tags: ['vibe coding', '用户体验', 'UIUX', '前端原型'],
      summary: [
        { label: '项目角色', value: '体验设计师' },
        { label: '项目时间', value: '2024.03-2024.08' },
        { label: '设计工具', value: 'codex / figma' },
      ],
      sections: [
        {
          title: '项目概览',
          text:
            '不夜星球是一款面向年轻用户的兴趣社交产品，用户可通过兴趣标签、语音房、直播互动和消息聊天建立社交关系。\n\n然而，随着功能模块增多，用户在进入产品后容易出现找不到合适互动对象、进入房间前判断成本高、陌生人破冰困难等问题，因此本项目围绕核心社交链路进行体验重构。',
          roleText:
            '用户访谈与需求整理；竞品机制分析；信息架构梳理；核心流程设计；首页、广场、消息、直播间关键页面设计；组件库搭建；设计交付与改版迭代。',
          noteLabel: '项目目标',
          noteText: '围绕“发现内容—判断对象—发起对话—消息承接”的核心链路，降低选择压力与破冰成本，让用户更容易完成首次有效互动。',
          bullets: ['兴趣社交产品体验重构', '首页、广场、消息、直播间关键路径优化', '从发现到互动的完整链路梳理'],
        },
        {
          title: '问题背景',
          text:
            '从功能丰富到体验聚焦，兴趣社交产品的核心矛盾集中在三个层面：内容入口多，但用户不知道从哪里开始；可互动对象多，但判断依据不足；可以聊天，但陌生人破冰成本高。',
        },
        {
          title: '用户研究',
          text:
            '通过 200+ 问卷、半结构化访谈、竞品体验走查、任务走查和用户反馈归纳，验证用户对同兴趣社交的需求兴趣，同时定位当前社交软件聚焦性不足、路径泛化导致体验不佳的问题。',
          noteLabel: '研究维度',
          noteText: '研究问题围绕“用户为什么进入产品、如何寻找感兴趣的人或房间、如何判断是否互动、为什么放弃聊天”展开。',
          bullets: ['半结构化访谈：了解用户使用兴趣社交产品的动机和痛点', '竞品体验走查：分析 Soul、TT语音、直播类产品的社交路径', '任务走查：模拟从首页到房间、进入互动、发起消息的完整路径'],
        },
        {
          title: '用户分层与旅程',
          text:
            '基于不同社交动机，将用户分为陪伴型、兴趣型、游戏型和娱乐型四类，并梳理他们在“开始进入首页—选择兴趣标签/浏览推荐—查看用户或房间卡片—判断兴趣与在线状态—点击打招呼/进入房间—系统提供破冰话题—消息页承接对话”的旅程。',
          noteLabel: '用户目标',
          noteText: '找到一个感兴趣的人或房间，并完成首次互动。核心体验需要降低选择纠结，提升互动与破冰能力。',
          bullets: ['陪伴型用户：关注在线状态、回复速度和即时回应', '兴趣型用户：关注兴趣标签、共同话题和动态内容', '游戏/娱乐型用户：关注房间氛围、直播热度和互动活动'],
        },
        {
          title: '设计策略',
          text:
            '设计策略围绕“如何让兴趣社交用户更快找到合适的人/房间，并更低压力地完成首次互动？”展开，将分散路径收束为更明确的发现、判断、破冰和承接机制。',
          noteLabel: '四个策略',
          noteText: '重构发现路径、增强判断信息、降低破冰压力、强化关系承接。',
          bullets: ['策略 1：重构发现路径，让首页从功能入口集合转向社交发现入口', '策略 2：增强判断信息，在用户卡片和房间卡片中补足在线状态、兴趣标签和共同兴趣', '策略 3 & 4：用破冰引导和消息承接，让轻互动继续转化为聊天、关注或进入房间'],
        },
        {
          title: '产品原型',
          text:
            '低保真原型阶段主要用于验证用户从“发现内容”到“发起互动”再到“消息承接”的核心路径。本阶段不展开完整视觉风格，而是聚焦首页信息层级、广场探索路径、用户/房间卡片判断信息、破冰流程和消息承接逻辑。',
          noteLabel: 'Function Overview',
          noteText: '核心功能包括：首页推荐、兴趣标签、用户卡片、房间卡片、破冰引导、消息承接和关系入口。',
          bullets: ['首页推荐：前置高匹配用户和房间入口', '卡片判断：展示兴趣、在线状态、共同标签和互动入口', '消息承接：将打招呼、正式聊天、关注和房间关系串起来'],
        },
        {
          title: '组织测试与方案改进',
          text:
            '组织 6 名有兴趣社交或直播类产品使用经验的用户参与测试，围绕“发现人/房间—判断是否合适—发起互动—消息承接”四个任务进行走查。测试暴露出首页与广场分工不明确、卡片判断信息不足、破冰流程缺少上下文等问题。',
          noteLabel: '迭代重点',
          noteText: '基于首轮用户测试反馈，二轮方案重点聚焦核心社交路径的清晰度。',
          bullets: ['首页发现效率、卡片判断充分度、破冰引导清晰度、消息承接清晰度四项评分', '方案改进方向：路径收敛、推荐前置、关系承接', '通过首页推荐前置、广场探索分工、卡片信息补充和破冰引导降低理解成本'],
        },
        {
          title: '成果总结',
          text:
            '经过两轮低保真原型任务走查，用户对“发现人/房间—判断是否合适—发起互动—消息承接”的路径理解评分由 3.15/5 提升至 4.18/5；点击前判断效率提升约 20%；三周迭代中共有 30+ 人次参与测试、访谈或提出建议。',
          noteLabel: '结果',
          noteText: '从“功能入口堆叠”转向“核心社交路径聚焦”，让用户更快理解下一步、更容易判断对象、更自然地完成破冰。',
          bullets: ['路径理解评分：3.15 → 4.18', '点击前判断效率提升：+20%', '测试、访谈与建议参与：30+ 人次'],
        },
      ],
    },
    en: {
      eyebrow: 'Consumer Social / Product Experience Design',
      title: 'Sleepless Planet Social App Experience Optimization',
      intro:
        'This page sets up a complete case-study framework first. Real project background, screens, rationale, and outcomes can be filled in later.',
      summary: [
        { label: 'Type', value: 'Consumer social app' },
        { label: 'Role', value: 'Product experience / Interaction design' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Product / Engineering / Operations' },
      ],
      sections: [
        { title: 'Overview', text: 'Use this section for project background, target users, and business goals.', bullets: ['Background TBD', 'Users TBD', 'Goals TBD'] },
        { title: 'Challenges', text: 'A good place to explain friction points and why the product flow needed redesign.', bullets: ['Pain points TBD', 'Constraints TBD', 'Design angle TBD'] },
        { title: 'Process', text: 'Reserve this block for journey analysis, information architecture, flows, and high-fidelity screens.', bullets: ['Journey analysis', 'Interaction strategy', 'UI refinement'] },
        { title: 'Outcome', text: 'This section can later hold launch results, feedback, and reflections.', bullets: ['Impact TBD', 'Feedback TBD', 'Reflection TBD'] },
      ],
    },
  },
  'file-tool': {
    zh: {
      eyebrow: 'B 端系统 / 工具体验设计',
      title: '文件生成后台工具系统设计',
      intro:
        '围绕文件生成这一高频业务场景，对后台工具的信息架构、任务流程与关键页面进行重构。当前先完整复刻案例页结构，后续再逐步填入真实业务背景和方案细节。',
      cta: '查看完整原型',
      tags: ['B端系统', '工具设计', '体验优化', '流程重构'],
      summary: [
        { label: '角色', value: 'UIUX 设计师' },
        { label: '周期', value: '待补充' },
        { label: '技能 / 工具', value: 'Figma / 业务梳理 / 流程设计' },
      ],
      sections: [
        {
          title: '项目概览',
          text: '这是一个服务于内部业务执行的后台工具，目标是把文件生成流程从零散操作整合成稳定、清晰、可追踪的任务路径。',
          noteLabel: '项目目标',
          noteText: '让复杂的生成任务变得更容易理解、更容易执行，并减少重复沟通成本。',
          bullets: ['业务背景待补充', '使用角色待补充', '系统目标待补充'],
        },
        {
          title: '我的角色',
          text: '我在项目中负责需求理解、使用路径梳理、信息架构重组、页面交互设计和关键界面视觉输出。',
          noteLabel: '职责范围',
          noteText: '后续可在这里补充你如何与业务、产品和研发协同推进。',
          bullets: ['需求拆解', '信息架构设计', '页面交互输出'],
        },
        {
          title: '用户研究',
          text: '这部分适合后续补充业务方访谈、内部角色观察、流程回溯以及原系统使用反馈，帮助案例页解释为什么要做这次重构。',
          noteLabel: '研究方式',
          noteText: '可以放角色访谈、流程走查、协作链路梳理与异常场景分析。',
          bullets: ['研究对象待补充', '使用反馈待补充', '结论待补充'],
        },
        {
          title: '设计洞察',
          text: '这一节用于承接“信息难找、状态不清、步骤冗长、反馈不及时”等问题，概括影响效率的关键因素。',
          noteLabel: '核心洞察',
          noteText: '后台工具的核心不是“页面多”，而是让用户清楚当前状态、下一步动作和结果反馈。',
          bullets: ['流程断点待补充', '效率问题待补充', '协作问题待补充'],
        },
        {
          title: '设计策略',
          text: '这里适合说明你如何通过任务拆分、模块重组、状态设计和表单策略来重构整个生成流程。',
          noteLabel: '策略方向',
          noteText: '优先建立清晰的任务结构、状态反馈和结果确认机制。',
          bullets: ['信息架构优化', '操作流重构', '状态设计待补充'],
        },
        {
          title: '最终方案',
          text: '最终方案部分可放任务列表、配置页、批量处理页、结果页与异常反馈页，形成完整的系统案例展示。',
          noteLabel: '展示内容',
          noteText: '后续可补充列表页、配置页、结果页以及协作流程关键界面。',
          bullets: ['关键页面待补充', '前后对比待补充', '模块说明待补充'],
        },
        {
          title: '可用性测试',
          text: '这里用于说明方案是否经过角色验证、内部走查或任务测试，以及测试后进行了哪些改动。',
          noteLabel: '验证方式',
          noteText: '可继续补充关键任务测试、内部试用和异常流程验证。',
          bullets: ['验证目标待补充', '测试结论待补充', '修改内容待补充'],
        },
        {
          title: '项目反思',
          text: '最后一节可以放设计交付、上线价值、跨团队协作经验，以及你对 B 端效率设计的进一步思考。',
          noteLabel: '复盘方向',
          noteText: '适合沉淀方法论、沟通模式和系统设计经验。',
          bullets: ['项目价值待补充', '协作复盘待补充', '经验总结待补充'],
        },
      ],
    },
    en: {
      eyebrow: 'B2B Tool / System UX Design',
      title: 'File Generation Back-office Tool System Design',
      intro:
        'This page establishes a reusable structure for later business-flow breakdowns, IA redesign, and key interface showcases.',
      summary: [
        { label: 'Type', value: 'B2B back-office tool' },
        { label: 'Role', value: 'UIUX designer' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Business / Product / Engineering' },
      ],
      sections: [
        { title: 'Overview', text: 'For business context, user roles, and system goals.', bullets: ['Context TBD', 'Roles TBD', 'Goals TBD'] },
        { title: 'Current Problems', text: 'Use this to explain workflow inefficiencies and structural issues in the old system.', bullets: ['Flow gaps TBD', 'Efficiency issues TBD', 'Collaboration issues TBD'] },
        { title: 'Design Solution', text: 'A place for IA updates, module redesign, and task-flow improvements.', bullets: ['IA redesign', 'Flow restructure', 'Key screen design'] },
        { title: 'Delivery & Value', text: 'Later this can include deliverables, standards, and impact.', bullets: ['Deliverables TBD', 'Guidelines TBD', 'Impact TBD'] },
      ],
    },
  },
  'web-redesign': {
    zh: {
      eyebrow: '网页改版 / 视觉优化设计',
      title: '网站视觉优化改版设计',
      intro:
        '以品牌表达与浏览效率为目标，对网站视觉语言、信息层级和关键页面进行重新梳理。当前先按参考站复刻详情页结构，后续再补充真实设计过程与改版成果。',
      cta: '查看完整原型',
      tags: ['网页改版', '视觉设计', '品牌体验', '信息层级'],
      summary: [
        { label: '角色', value: 'UI 设计 / 体验优化' },
        { label: '周期', value: '待补充' },
        { label: '技能 / 工具', value: 'Figma / 视觉规范 / 设计系统' },
      ],
      sections: [
        {
          title: '项目概览',
          text: '这是一个围绕品牌展示与信息效率展开的网页改版项目，重点在于建立更一致的视觉表达与更清晰的浏览节奏。',
          noteLabel: '项目目标',
          noteText: '让用户更快理解品牌、看到重点内容，并在页面浏览中获得更稳定的感知体验。',
          bullets: ['品牌背景待补充', '页面范围待补充', '改版目标待补充'],
        },
        {
          title: '我的角色',
          text: '我主要负责原站问题梳理、信息层级规划、视觉方向定义、关键界面设计与页面规范输出。',
          noteLabel: '职责范围',
          noteText: '可以继续补充与品牌方、产品方或开发方的协作方式。',
          bullets: ['信息层级梳理', '视觉方向定义', '关键页面设计'],
        },
        {
          title: '用户研究',
          text: '如果后续项目有用户反馈、浏览数据或竞品观察，这一节可以承接改版前的认知问题和浏览摩擦。',
          noteLabel: '研究方式',
          noteText: '可补充页面热区观察、品牌侧反馈、竞品对比与内容走查。',
          bullets: ['研究方式待补充', '问题发现待补充', '结论待补充'],
        },
        {
          title: '设计洞察',
          text: '这一节适合提炼原网站在信息噪音、模块优先级、视觉统一性和内容可读性上的问题。',
          noteLabel: '核心洞察',
          noteText: '视觉改版不只是换风格，更重要的是让内容结构和品牌表达彼此支撑。',
          bullets: ['视觉问题待补充', '结构问题待补充', '品牌问题待补充'],
        },
        {
          title: '设计策略',
          text: '这里可用于说明版式逻辑、配色、字体层级、组件体系和页面节奏如何被重新定义。',
          noteLabel: '策略方向',
          noteText: '通过统一组件语言和更清晰的层级关系，让页面更有秩序感和品牌辨识度。',
          bullets: ['视觉方向待补充', '信息层级待补充', '组件语言待补充'],
        },
        {
          title: '最终方案',
          text: '最终方案部分适合展示首页、模块重构、品牌区块、详情页或专题页等关键页面设计。',
          noteLabel: '展示内容',
          noteText: '后续可放首页改版、内容区块、导航系统与页面前后对比图。',
          bullets: ['首页方案待补充', '关键模块待补充', '前后对比待补充'],
        },
        {
          title: '可用性测试',
          text: '这里用于放改版后的浏览反馈、可读性验证、团队走查或客户确认过程。',
          noteLabel: '验证方式',
          noteText: '可以从浏览效率、阅读节奏和品牌感知几个角度补充验证结果。',
          bullets: ['验证方式待补充', '反馈待补充', '迭代待补充'],
        },
        {
          title: '项目反思',
          text: '最后一节用于总结改版项目中关于品牌、表达与网页体验之间平衡关系的理解。',
          noteLabel: '复盘方向',
          noteText: '适合沉淀你在网页改版、视觉统一和内容表达上的方法论。',
          bullets: ['结果待补充', '团队反馈待补充', '复盘总结待补充'],
        },
      ],
    },
    en: {
      eyebrow: 'Website Redesign / Visual Optimization',
      title: 'Website Visual Optimization Redesign',
      intro:
        'This page sets up the case-study layout first, leaving room for before/after comparisons, visual strategy, and final page showcases.',
      summary: [
        { label: 'Type', value: 'Website redesign' },
        { label: 'Role', value: 'UI design / Experience optimization' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Brand / Product / Engineering' },
      ],
      sections: [
        { title: 'Overview', text: 'Use this for brand context, site goals, and scope.', bullets: ['Brand context TBD', 'Page scope TBD', 'Goals TBD'] },
        { title: 'Design Strategy', text: 'A place for visual direction, hierarchy, and component language.', bullets: ['Visual direction TBD', 'Hierarchy TBD', 'Component language TBD'] },
        { title: 'Key Pages', text: 'Later this can hold homepage, key module, and before/after comparisons.', bullets: ['Homepage showcase', 'Key modules', 'Before/after TBD'] },
        { title: 'Takeaways', text: 'Use this area for outcomes and reflections.', bullets: ['Impact TBD', 'Feedback TBD', 'Reflection TBD'] },
      ],
    },
  },
  'in-progress': {
    zh: {
      eyebrow: '更多作品 / 整理中',
      title: '作品整理中',
      intro: '这个页面保留为后续新增项目的占位框架，等真实内容整理完成后可以继续扩展。',
      summary: [
        { label: '状态', value: '整理中' },
        { label: '内容', value: '更多项目案例' },
        { label: '更新', value: '持续补充' },
        { label: '备注', value: '敬请期待' },
      ],
      sections: [
        { title: '内容规划', text: '后续会在这里继续补充新的项目案例。', bullets: ['项目一待补充', '项目二待补充', '项目三待补充'] },
      ],
    },
    en: {
      eyebrow: 'More Works / In Progress',
      title: 'Works in Progress',
      intro: 'This page stays as a placeholder for future case studies.',
      summary: [
        { label: 'Status', value: 'In progress' },
        { label: 'Content', value: 'More case studies' },
        { label: 'Update', value: 'Ongoing' },
        { label: 'Note', value: 'Coming soon' },
      ],
      sections: [{ title: 'Planning', text: 'New case studies can be added here later.', bullets: ['Case study TBD', 'Case study TBD', 'Case study TBD'] }],
    },
  },
};

function Header({ lang, setLang, t }) {
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.startsWith('/about') || rawPathname.startsWith('/resume') ? '/' : rawPathname;
  const onDetailPage = pathname.startsWith('/projects/');
  const navTargets = onDetailPage ? ['/', '/#resume-preview', '/#work', '/#contact'] : ['#top', '#resume-preview', '#work', '#contact'];
  const homeTarget = onDetailPage ? '/' : '#top';

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href={homeTarget} aria-label="Xushaobo home">
        Xushaobo
      </a>
      <nav className="nav-links">
        {t.nav.map((item, index) => (
          <a key={item} href={navTargets[index]}>
            {item}
          </a>
        ))}
      </nav>
      <button
        className="language-toggle"
        type="button"
        onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        aria-label="Switch language"
      >
        <span className={lang === 'zh' ? 'active' : ''}>中</span>
        <span aria-hidden="true">|</span>
        <span className={lang === 'en' ? 'active' : ''}>EN</span>
      </button>
    </header>
  );
}

function CharacterTitle({ text }) {
  return (
    <span className="character-title" aria-label={text}>
      {text.split('').map((char, index) => (
        <span key={`${char}-${index}`} style={{ '--delay': `${index * 24}ms` }}>
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </span>
  );
}

function DetailBackLink({ href = '/', label = '返回首页', className = 'detail-back' }) {
  return (
    <a className={className} href={href}>
      <ArrowLeft size={16} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  );
}

function CircularBadge({ label, onMouseEnter, onMouseMove, onMouseLeave, onClick, isPressed = false }) {
  const repeated = `${label} + UX + UIUX + DESIGNER + `;
  const badgePathId = useId();

  return (
    <div
      className="circle-badge"
      aria-label={label}
      role="button"
      tabIndex={0}
      aria-pressed={isPressed}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <defs>
          <path id={badgePathId} d="M60 60 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0" />
        </defs>
        <text>
          <textPath href={`#${badgePathId}`}>{repeated}</textPath>
        </text>
      </svg>
      <Globe size={32} strokeWidth={1.8} />
    </div>
  );
}

function PhotoWall({ className = '', eager = false, single = false }) {
  return (
    <div className={className} aria-hidden="true">
      {single ? (
        <figure className="about-photo about-photo-3 about-photo-placeholder">
          <div className="about-photo-placeholder-frame">
            <span className="about-photo-placeholder-line line-1" />
            <span className="about-photo-placeholder-line line-2" />
            <span className="about-photo-placeholder-line line-3" />
            <span className="about-photo-placeholder-card card-1" />
            <span className="about-photo-placeholder-card card-2" />
            <span className="about-photo-placeholder-card card-3" />
          </div>
        </figure>
      ) : null}
      {!single ? (
        <figure className="about-photo about-photo-1">
          <img
            src="/assets/about-photo-main.webp"
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            decoding="async"
          />
        </figure>
      ) : null}
      {!single ? (
        <figure className="about-photo about-photo-2">
          <img
            src="/assets/about-photo-2-newer.webp"
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </figure>
      ) : null}
      {!single ? (
        <figure className="about-photo about-photo-3">
          <img
            src="/assets/about-photo-3-new.webp"
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </figure>
      ) : null}
    </div>
  );
}

function Hero({ t }) {
  const [cursorNote, setCursorNote] = useState({ active: false, x: 0, y: 0, text: '', icon: 'none' });
  const [ideaCardOpen, setIdeaCardOpen] = useState(false);
  const showCursorNote = (event, text, icon = 'none') =>
    setCursorNote({ active: true, x: event.clientX, y: event.clientY, text, icon });

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-text">
        <h1>
          <span className="title-line">
            <CharacterTitle text="PRODUCT /" />
          </span>
          <span className="title-line">
            <CharacterTitle text="UX DESIGNER" />
          </span>
        </h1>
        <p className="hero-name">{t.heroName}</p>
        <p className="hero-intro">{t.heroIntro}</p>
        <a className="hero-link" href="#work">
          {t.heroCta}
          <ArrowUpRight size={18} strokeWidth={1.75} />
        </a>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <PhotoWall className="about-gallery hero-photo-wall is-single" eager single />
      </div>
      <div
        aria-hidden="true"
        className={`hero-cursor-note ${cursorNote.active ? 'is-visible' : ''}`}
        style={{ left: `${cursorNote.x + 18}px`, top: `${cursorNote.y - 18}px` }}
      >
        {cursorNote.icon === 'lightbulb' ? <Lightbulb size={14} strokeWidth={2} /> : null}
        <span>{cursorNote.text}</span>
      </div>
      <CircularBadge
        label="PRODUCT"
        onMouseEnter={(event) => showCursorNote(event, '头脑风暴一下', 'lightbulb')}
        onMouseMove={(event) => showCursorNote(event, '头脑风暴一下', 'lightbulb')}
        onMouseLeave={() => setCursorNote((current) => ({ ...current, active: false }))}
        onClick={() => setIdeaCardOpen((current) => !current)}
        isPressed={ideaCardOpen}
      />
      {ideaCardOpen ? (
        <div className="idea-card-layer" role="presentation" onClick={() => setIdeaCardOpen(false)}>
          <div
            className="idea-card"
            role="dialog"
            aria-modal="false"
            aria-label="想法生成中"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="idea-card-visual" aria-hidden="true">
        <img src="/assets/hero-illustration.webp" alt="" loading="lazy" decoding="async" />
              <div className="idea-card-laptop">
                <span className="idea-card-screen" />
                <span className="idea-card-base" />
                <span className="idea-card-key key-1" />
                <span className="idea-card-key key-2" />
                <span className="idea-card-key key-3" />
              </div>
            </div>
            <p>想法生成中.....</p>
            <span className="idea-card-close-tip">点任意位置关闭</span>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function HomeResumeModule({ t }) {
  return (
    <section className="home-resume section-shell" id="resume-preview">
      <div className="home-resume-sheet">
        <div className="home-resume-copy">
          <p className="home-resume-eyebrow">{t.homeResumeEyebrow}</p>
          <div className="home-resume-heading">
            <h2>{t.homeResumeTitle}</h2>
            {t.homeResumeLead ? <p>{t.homeResumeLead}</p> : null}
          </div>
          <div className="home-resume-tag-list" aria-label="Resume tags">
            {t.homeResumeTags.map((tag) => (
              <span key={tag} className="home-resume-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="home-resume-sections">
            {t.homeResumeSections.map((section) => (
              <section key={section.title} className="home-resume-section">
                <h3>{section.title}</h3>
                {section.paragraphs ? (
                  <div className="home-resume-section-copy">
                    {section.paragraphs.map((item) => (
                      <p key={item.label}>
                        <strong>{item.label}：</strong>
                        <span>{item.text}</span>
                      </p>
                    ))}
                  </div>
                ) : null}
                {section.entries ? (
                  <div className="home-resume-entry-list">
                    {section.entries.map((entry) => (
                      <article
                        key={`${entry.org}-${entry.role}`}
                        className={`home-resume-entry ${section.compactHead ? 'is-compact-head' : ''}`}
                      >
                        <div className={`home-resume-entry-head ${section.compactHead ? 'is-compact-head' : ''}`}>
                          <div>
                            <strong className="home-resume-entry-org">{entry.org}</strong>
                            <span className="home-resume-entry-role">{entry.role}</span>
                          </div>
                          <span className="home-resume-entry-date">{entry.date}</span>
                        </div>
                        {entry.details?.length ? (
                          <div className="home-resume-entry-details">
                            {entry.details.map((detail) => (
                              <p key={detail}>{detail}</p>
                            ))}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
        <aside className="home-resume-side">
          <p className="home-resume-side-kicker">{t.homeResumeEyebrow}</p>
          <a className="resume-download home-resume-download" href="/assets/xushaobo-resume.pdf" download>
            <Download size={16} strokeWidth={1.9} />
            {t.homeResumeDownload}
          </a>
          <p className="home-resume-side-note">{t.homeResumeSideNote}</p>
          <div className="home-resume-facts">
            {t.resumeProfile.map((item) => (
              <div key={item.label} className="home-resume-fact">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function InProgressPage() {
  return (
    <section className="in-progress-page section-shell" id="in-progress">
      <div className="detail-rail">
        <DetailBackLink />
      </div>
      <div className="in-progress-shell">
        <div className="in-progress-copy">
          <p className="in-progress-eyebrow">MORE WORKS / IN PROGRESS</p>
          <h1>作品开发中</h1>
          <p>
            这里会继续补充更多项目案例。当前先放一个默认展示页，用来承接后续的新项目内容与开发进度。
          </p>
          <div className="in-progress-tags">
            <span>项目开发中</span>
            <span>内容持续补充</span>
            <span>默认展示页</span>
          </div>
          <div className="in-progress-status">
            <div>
              <span>当前状态</span>
              <strong>正在开发 / 整理内容</strong>
            </div>
            <div>
              <span>预计更新</span>
              <strong>后续逐步上线</strong>
            </div>
          </div>
        </div>

        <div className="in-progress-visual" aria-hidden="true">
          <div className="in-progress-miner-wrap">
        <img src="/assets/in-progress-miner.webp" alt="" className="in-progress-scene" loading="lazy" decoding="async" />
          </div>
          <p className="in-progress-caption">项目开发中</p>
        </div>
      </div>
    </section>
  );
}

const socialMethods = [
  { title: '半结构化访谈', text: '了解用户使用兴趣社交产品的动机和痛点。' },
  { title: '竞品体验走查', text: '分析 Soul、TT语音、直播类产品的社交路径。' },
  { title: '任务走查', text: '模拟用户从首页到房间、进入互动、发起消息的完整路径。' },
  { title: '用户反馈归纳', text: '整理发现效率、匹配判断、破冰体验、直播参与等问题。' },
];

const socialSegments = [
  { title: '陪伴型用户', text: '无聊、想找人聊天，关注在线状态、回复速度和即时回应。' },
  { title: '兴趣型用户', text: '找同好、聊共同兴趣，关注兴趣标签、话题和动态内容。' },
  { title: '游戏型用户', text: '找搭子、开黑、语音房互动，关注游戏类型、房间人数和房主状态。' },
  { title: '娱乐型用户', text: '看直播、参与活动、围观热闹，关注直播热度、主播状态和活动奖励。' },
];

const socialFlow = [
  '开始进入首页',
  '选择兴趣标签 / 浏览推荐',
  '查看用户卡片或房间卡片',
  '判断兴趣、在线状态、房间氛围',
  '点击打招呼 / 进入房间',
  '系统提供破冰话题或互动引导',
  '消息页承接对话',
  '关注、继续聊天或加入房间',
];

const socialStrategies = [
  {
    number: '策略 1',
    title: '重构发现路径',
    text: '将首页从“功能入口集合”调整为“社交发现入口”，优先展示推荐用户、推荐房间和兴趣圈标签。',
    blocks: ['旧逻辑路径', '新逻辑路径', '最终效果'],
  },
  {
    number: '策略 2',
    title: '增强判断信息',
    text: '在用户点击前补足在线状态、兴趣标签、共同兴趣和房间氛围，减少进入后的无效试错。',
    blocks: ['用户想找人 / 房间', '目标不明确', '目标明确', '首页推荐', '广场探索'],
  },
  {
    number: '策略 3',
    title: '降低破冰压力',
    text: '通过共同兴趣、推荐话题和快捷问候，让用户不用直接进入空聊天。',
    blocks: ['用户卡片', '点击打招呼', '破冰弹窗', '发送问候', '消息页承接'],
  },
  {
    number: '策略 4',
    title: '强化关系承接',
    text: '让消息页承担社交关系入口，把一次轻互动继续转化为聊天、关注或进入房间。',
    blocks: ['打招呼', '对方回复', '正式聊天', '关注 / 进入房间 / 建立关系'],
  },
];

const socialTestBars = [
  { label: '首页发现效率', value: 62 },
  { label: '卡片判断充分度', value: 72 },
  { label: '破冰引导清晰度', value: 56 },
  { label: '消息承接清晰度', value: 50 },
];

const socialOutcomes = [
  { text: '路径理解评分由 3.15/5 提升至 4.18/5。', value: '3.15→4.18' },
  { text: '点击前判断效率提升。', value: '+20%' },
  { text: '测试、访谈与建议参与人次。', value: '30+' },
];

function SocialPhoneMock({ className = '' }) {
  return (
    <div className={`social-phone-mock ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function SocialHeroMock() {
  return (
    <div className="project-cover social-hero-mock" aria-hidden="true">
      <SocialPhoneMock />
      <span className="social-blob social-blob-a" />
      <span className="social-blob social-blob-b" />
      <span className="social-blob social-blob-c" />
      <span className="social-blob social-blob-d" />
    </div>
  );
}

function SocialProjectSection({ section, index }) {
  const sectionId = `project-section-${index + 1}`;

  if (index === 0) {
    return (
      <section id={sectionId} className="project-section-block social-case-block">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
        <div className="social-role-note">
          <strong>我的角色</strong>
          <p>{section.roleText}</p>
        </div>
        <div className="social-problem-layout">
          <div className="social-path-card">
            <SocialPhoneMock />
            <div className="social-path-chain">
              <span>发现内容</span>
              <i />
              <span>判断对象</span>
              <i />
              <span>发起对话</span>
              <i />
              <span>聊不起</span>
            </div>
          </div>
          <div className="social-problem-copy">
            <div className="social-pill-row">
              <span>选择纠结</span>
              <span>社交焦虑</span>
              <span>破冰成本</span>
            </div>
            <h3>问题背景</h3>
            <p>从功能丰富到体验聚焦：兴趣社交产品的核心体验矛盾</p>
            <strong>矛盾一：内容入口多，但用户不知道从哪里开始</strong>
            <strong>矛盾二：可互动对象多，但判断依据不足</strong>
            <strong>矛盾三：可以聊天，但陌生人破冰成本高</strong>
          </div>
        </div>
      </section>
    );
  }

  if (index === 1) {
    return null;
  }

  if (index === 2) {
    return (
      <section id={sectionId} className="project-section-block social-case-block social-research-block">
        <h2>{section.title}</h2>
        <div className="social-research-top">
          <strong>200+问卷显示用户对同兴趣社交需求感兴趣，但当前社交软件聚焦性过于泛导致体验不佳</strong>
          <div className="social-survey-card">
            <div>
              <span>研究对象</span>
              <strong>18-30 岁年轻用户</strong>
            </div>
            <p>在兴趣社交产品中，你最容易在哪一步放弃互动？</p>
            <ul>
              <li>A. 找不到合适的人或房间</li>
              <li>B. 不确定对方 / 房间是否合适</li>
              <li>C. 想互动，但不知道怎么开口</li>
            </ul>
            <span className="social-donut" aria-hidden="true" />
          </div>
        </div>
        <div className="social-method-grid">
          {socialMethods.map((method) => (
            <article key={method.title}>
              <p>{method.text}</p>
              <strong>{method.title}</strong>
            </article>
          ))}
        </div>
        <div className="social-dimensions">
          <div>
            <span>用户为什么进入产品</span>
            <span>用户如何寻找感兴趣的人或房间</span>
            <span>用户如何判断是否互动</span>
            <span>用户为什么放弃聊天</span>
          </div>
          <strong>Research dimensions</strong>
        </div>
      </section>
    );
  }

  if (index === 3) {
    return (
      <section id={sectionId} className="project-section-block social-case-block">
        <div className="social-heading-row">
          <h2>{section.title}</h2>
          <strong>谁在<br />使用</strong>
        </div>
        <div className="social-segment-grid">
          {socialSegments.map((segment) => (
            <article key={segment.title}>
              <h3>{segment.title}</h3>
              <p>{segment.text}</p>
            </article>
          ))}
        </div>
        <p className="social-caption">不同社交动机下的行为差异</p>
        <div className="social-flow-header">
          <strong>Flows</strong>
          <p>{section.noteText}</p>
        </div>
        <div className="social-flow-map">
          {socialFlow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    );
  }

  if (index === 4) {
    return (
      <section id={sectionId} className="project-section-block social-case-block">
        <h2>{section.title}</h2>
        <h3 className="social-question">如何让兴趣社交用户更快找到合适的人 / 房间，并更低压力地完成首次互动？</h3>
        <div className="social-strategy-list">
          {socialStrategies.map((strategy) => (
            <article key={strategy.number} className="social-strategy-item">
              <div>
                <strong>{strategy.number}：</strong>
                <h3>{strategy.title}</h3>
                <p>{strategy.text}</p>
              </div>
              <div className="social-strategy-board">
                {strategy.blocks.map((block) => (
                  <span key={block}>{block}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (index === 5) {
    return (
      <section id={sectionId} className="project-section-block social-case-block">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
        <h3 className="social-function-title">Function Overview</h3>
        <div className="social-function-overview">
          {['首页推荐', '兴趣标签', '用户卡片', '房间卡片', '破冰引导', '消息承接', '关系入口'].map((item, itemIndex) => (
            <span key={item} style={{ '--offset': `${itemIndex % 2 === 0 ? 0 : 30}px` }}>
              {item}
            </span>
          ))}
        </div>
      </section>
    );
  }

  if (index === 6) {
    return (
      <section id={sectionId} className="project-section-block social-case-block">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
        <div className="social-bar-chart">
          {socialTestBars.map((bar) => (
            <div key={bar.label}>
              <span>{bar.label}</span>
              <i style={{ width: `${bar.value}%` }} />
            </div>
          ))}
        </div>
        <div className="social-before-after">
          <div className="social-improvement-header">
            <h3>方案改进</h3>
            <strong>基于首轮用户测试反馈，二轮方案重点聚焦核心社交路径的清晰度</strong>
          </div>
          <div className="social-before-after-stage">
            <div className="social-before-copy">
              <p>首轮方案已完成核心功能搭建，但用户在“发现对象-判断是否合适-发起互动”的过程中仍存在理解成本：首页入口较分散，卡片判断信息不足，打招呼缺少明确上下文。</p>
              <div className="social-before-tags">
                <span>路径分散</span>
                <span>体验断点</span>
                <span>破冰困难</span>
              </div>
            </div>
            <div className="social-before-after-visual" aria-hidden="true">
              <strong>Before</strong>
              <strong>After</strong>
              <i />
              <span className="social-before-card social-before-card-a" />
              <span className="social-before-card social-before-card-b" />
              <span className="social-after-card social-after-card-a" />
              <span className="social-after-card social-after-card-b" />
            </div>
          </div>
          <div className="social-improvement-footer">
            <div className="social-improvement-tags">
              <span>路径收敛</span>
              <span>推荐前置</span>
              <span>关系承接</span>
            </div>
            <p>二轮方案围绕核心社交路径进行收敛优化，通过首页推荐前置、广场探索分工、卡片信息补充和破冰引导设计，让用户更清晰地完成从发现到互动的过程。</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={sectionId} className="project-section-block social-case-block">
      <h2>{section.title}</h2>
      <div className="social-showcase">
        <div className="social-showcase-large" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, itemIndex) => (
            <SocialPhoneMock key={itemIndex} />
          ))}
        </div>
        <div aria-hidden="true" />
        <div aria-hidden="true" />
      </div>
      <div className="social-outcome-grid">
        {socialOutcomes.map((outcome) => (
          <article key={outcome.value}>
            <p>{outcome.text}</p>
            <strong>{outcome.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

const fileToolMetrics = [
  ['项目总数', '24项', '较上周 +2', 'neutral'],
  ['任务进行中', '8项', '3项待处理', 'notice'],
  ['今日生成', '36项', '成功生成33次', 'success'],
  ['生成成功率', '92.4%', '近7日平均', 'neutral'],
  ['异常任务', '5项', '需优先处理', 'danger'],
];

const fileToolTasks = [
  ['BCM_Config_任务', '智能座舱配置生成', '解析失败', '3', '张工', '10 分钟前', '查看异常'],
  ['ADAS_Signal_任务', 'ADAS 测试项目', '待配置', '0', '李工', '30 分钟前', '继续配置'],
  ['Body_Control_任务', '车身域项目', '可生成', '0', '王工', '1 小时前', '开始生成'],
  ['HU_Display_任务', '座舱显示项目', '待校验', '0', '陈工', '2 小时前', '运行校验'],
  ['TBOX_Rule_任务', '车联网项目', '生成完成', '1', '田工', '昨天', '查看报告'],
];

function FileToolDashboard() {
  return (
    <article className="file-tool-html-case" aria-label="文件配置平台系统设计展示">
      <div className="file-tool-wordmark" aria-hidden="true">PROJECT CONFIG</div>
      <div className="file-tool-dashboard-frame">
        <aside className="file-tool-sidebar">
          <strong>文件配置平台系统</strong>
          <nav aria-label="文件配置平台导航">
            <a className="is-active" href="#任务管理"><ClipboardList size={16} />任务管理</a>
            <a href="#文件导入"><FolderInput size={16} />文件导入</a>
            <a href="#规则配置"><SlidersHorizontal size={16} />规则配置</a>
            <a href="#结果报告"><FileText size={16} />结果报告</a>
          </nav>
          <span className="file-tool-return">← 返回主工具</span>
        </aside>

        <div className="file-tool-workspace">
          <header className="file-tool-topbar">
            <label><Search size={15} /><input aria-label="搜索任务" placeholder="搜索" /></label>
            <div>
              <button aria-label="通知"><Bell size={15} /></button>
              <button aria-label="设置"><SlidersHorizontal size={15} /></button>
              <span className="file-tool-user">D</span>
              <strong>DengLu</strong>
              <ChevronDown size={14} />
            </div>
          </header>

          <div className="file-tool-heading">
            <h1>欢迎回来！当前有 3 项任务待处理。</h1>
            <button>继续处理</button>
          </div>

          <div className="file-tool-metrics">
            {fileToolMetrics.map(([label, value, hint, tone]) => (
              <article key={label} className={`file-tool-metric ${tone}`}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{hint}</small>
              </article>
            ))}
          </div>

          <div className="file-tool-dashboard-grid">
            <section className="file-tool-task-panel" id="任务管理">
              <div className="file-tool-panel-title">
                <h2>待处理任务</h2>
                <div><button className="is-selected">全部任务</button><button>我的任务</button><button>异常任务</button></div>
              </div>
              <div className="file-tool-table-wrap">
                <table>
                  <thead>
                    <tr><th>任务名称</th><th>所属项目</th><th>当前阶段</th><th>异常数量</th><th>负责人</th><th>更新时间</th><th>操作</th></tr>
                  </thead>
                  <tbody>
                    {fileToolTasks.map((task) => (
                      <tr key={task[0]}>
                        <td>{task[0]}</td><td>{task[1]}</td><td><span className="file-tool-status">{task[2]}</span></td><td>{task[3]}</td><td>{task[4]}</td><td>{task[5]}</td><td><button>{task[6]}</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="file-tool-pagination"><span>‹</span><b>1</b><span>›</span><small>前往　1　页</small></div>
            </section>

            <aside className="file-tool-alert-panel">
              <div className="file-tool-panel-title"><h2>异常提醒</h2><button>查看全部</button></div>
              <p>当前有 5 项异常，其中 2 项需优先处理</p>
              {fileToolTasks.slice(0, 4).map((task, index) => (
                <div className="file-tool-alert" key={task[0]}>
                  {index === 0 ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
                  <div><strong>{task[0]}</strong><span>{index === 0 ? '解析失败，请与定义文件校验' : '校验参数 2 个字段未完成映射'}</span></div>
                  <button>查看异常</button>
                </div>
              ))}
              <div className="file-tool-alert-chart"><span /><span /><span /><span /><span /></div>
            </aside>
          </div>

          <section className="file-tool-record">
            <div className="file-tool-panel-title"><h2>最近生成记录</h2><div><span>今日生成 36</span><span>成功 33</span><span>警告 2</span></div><button>查看全部</button></div>
            <strong>▌ Batch_20260315_001</strong>
            <p>智能座舱配置生成 · A / B 文件生成</p>
          </section>
        </div>
      </div>
      <span className="file-tool-study">UI/UX STUDY</span>
      <footer className="file-tool-case-meta">
        <span>项目角色：交互设计师</span>
        <span>项目时间：2025.12-2026.05</span>
        <span>设计工具：codex　figma</span>
      </footer>
    </article>
  );
}

const fileToolCaseImages = [
  '/assets/file-tool/01-frame-1750.webp',
  '/assets/file-tool/02-project-background.webp',
  '/assets/file-tool/03-user-interviews.webp',
  '/assets/file-tool/04-pain-points.webp',
  '/assets/file-tool/05-design-insights-v2.webp',
];

function ProjectDetail({ t, lang, slug }) {
  const project = projectPageContent[slug]?.[lang] ?? projectPageContent[slug]?.zh;
  const card = t.cards.find((item) => item.href === `/projects/${slug}`);
  const projectSlugs = ['social-app', 'file-tool', 'web-redesign'];
  const currentIndex = projectSlugs.indexOf(slug);
  const nextSlug = currentIndex >= 0 ? projectSlugs[(currentIndex + 1) % projectSlugs.length] : projectSlugs[0];
  const nextCard = t.cards.find((item) => item.href === `/projects/${nextSlug}`);

  if (!project || !card) return null;

  if (slug === 'file-tool') {
    return (
      <section className="file-tool-svg-page" id="project-detail">
        <div className="file-tool-return-rail">
          <DetailBackLink />
        </div>
        <div className="file-tool-case-gallery">
          {fileToolCaseImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`文件生成后台工具系统设计项目展示 ${index + 1}`}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`project-page section-shell ${slug === 'social-app' ? 'social-detail-page' : ''}`} id="project-detail">
      <div className="detail-rail">
        <DetailBackLink />
      </div>
      <article className="project-shell">
        <div className="project-story">
          <aside className="project-outline-card">
            <p>TABLE OF CONTENTS</p>
            <div className="project-outline">
              {project.sections.map((section, index) => (
                <a key={section.title} href={`#project-section-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, '0')}.</span>
                  <strong>{section.title}</strong>
                </a>
              ))}
            </div>
          </aside>

          <div className={`project-content ${slug === 'social-app' ? 'social-project-content' : ''}`}>
            <header className="project-hero">
              <div className="project-copy">
                <div className="project-title-row">
                  <div>
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h1>{project.title}</h1>
                  </div>
                </div>
                <p className="project-intro">{project.intro}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {slug === 'social-app' ? (
                <SocialHeroMock />
              ) : (
                <div className="project-cover">
                  <img src={card.image} alt="" loading="lazy" decoding="async" />
                </div>
              )}

              <div className="project-summary">
                {project.summary.map((item) => (
                  <div key={item.label} className="project-summary-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </header>

            {project.sections.map((section, index) =>
              slug === 'social-app' ? (
                <SocialProjectSection key={section.title} section={section} index={index} />
              ) : (
                <section key={section.title} id={`project-section-${index + 1}`} className="project-section-block">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {section.noteLabel && section.noteText ? (
                    <div className="project-note">
                      <strong>{section.noteLabel}:</strong>
                      <span>{section.noteText}</span>
                    </div>
                  ) : null}
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-media-card" aria-hidden="true">
                    <img src={card.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="project-placeholder-grid" aria-hidden="true">
                    <div className="project-placeholder-card">
                      <span>01</span>
                      <strong>Key Screen Placeholder</strong>
                    </div>
                    <div className="project-placeholder-card">
                      <span>02</span>
                      <strong>Process / Insight Placeholder</strong>
                    </div>
                  </div>
                </section>
              ),
            )}
          </div>
        </div>

        {nextCard ? (
          <footer className="project-next">
            <a href={nextCard.href}>
              <span>Next Project</span>
              <strong>{nextCard.title}</strong>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </footer>
        ) : null}
      </article>
    </section>
  );
}

function WorkCard({ card, index }) {
  const metaItems = card.meta
    .split('/')
    .map((item) => item.trim())
    .filter(Boolean);
  const imageRight = index >= 2;

  return (
    <a className={`work-card ${card.muted ? 'is-muted' : ''} ${imageRight ? 'is-image-right' : ''}`} href={card.href}>
      <div className="work-image">
        <img
          src={card.image}
          alt=""
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
      <div className="work-content">
        <div className="work-copy-top">
          <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
          <p className="work-summary">{card.subtitle}</p>
        </div>
        <div className="work-title-block">
          <h3>{card.title}</h3>
        </div>
        <div className="work-footer">
          <div className="work-meta-list">
            {metaItems.map((item) => (
              <span key={item} className="work-meta-item">
                {item}
              </span>
            ))}
          </div>
          <span className="work-open" aria-hidden="true">
            <ArrowUpRight size={22} strokeWidth={1.6} />
          </span>
        </div>
      </div>
    </a>
  );
}

function WorkGrid({ t }) {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading">
        <h2>
          <span>{t.selected}</span>
          {t.workTitle}
        </h2>
        <p>{t.workHint}</p>
      </div>
      <div className="work-grid">
        {t.cards.map((card, index) => (
          <WorkCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({ item, icon: Icon, copyAction }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await navigator.clipboard.writeText(item.value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <a className="contact-card" href={item.href}>
      <Icon size={26} strokeWidth={1.6} />
      <span>{item.label}</span>
      <strong>{item.value}</strong>
      <button type="button" onClick={handleCopy}>
        <Copy size={14} strokeWidth={1.7} />
        {copied ? 'Copied' : copyAction}
      </button>
    </a>
  );
}

function Contact({ t }) {
  const icons = [Mail, MessageCircle, Phone];
  const marqueeText = useMemo(
    () => Array.from({ length: 8 }, (_, index) => <span key={index}>{t.marquee}</span>),
    [t.marquee],
  );

  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-illustration" aria-hidden="true">
        <Mail size={112} strokeWidth={1.15} />
        <span />
      </div>
      <div className="contact-copy">
        <h2 className="contact-title-effect">
          <CharacterTitle text={t.contactTitle} />
        </h2>
        <p>{t.contactLead}</p>
      </div>
      <div className="contact-list">
        {t.contactItems.map((item, index) => (
          <ContactCard key={item.label} item={item} icon={icons[index]} copyAction={t.copyAction} />
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div>{marqueeText}</div>
        <div>{marqueeText}</div>
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = useState('zh');
  const t = copy[lang];
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.startsWith('/about') || rawPathname.startsWith('/resume') ? '/' : rawPathname;
  const projectSlug = pathname.startsWith('/projects/') ? pathname.replace('/projects/', '').split('/')[0] : '';
  const isProjectPage = Boolean(projectSlug);

  useEffect(() => {
    if (rawPathname.startsWith('/about')) {
      window.history.replaceState({}, '', '/');
    }
    if (rawPathname.startsWith('/resume')) {
      window.history.replaceState({}, '', '/#resume-preview');
    }
  }, [rawPathname]);

  return (
    <>
      <div className="grid-background" aria-hidden="true" />
      <Header lang={lang} setLang={setLang} t={t} />
      <main className={isProjectPage ? 'page-main' : ''}>
        {projectSlug === 'in-progress' ? (
          <InProgressPage />
        ) : isProjectPage ? (
          <ProjectDetail t={t} lang={lang} slug={projectSlug} />
        ) : (
          <>
            <Hero t={t} />
            <HomeResumeModule t={t} />
            <WorkGrid t={t} />
            <Contact t={t} />
          </>
        )}
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
