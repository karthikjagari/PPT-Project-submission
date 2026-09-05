export interface ProjectShowcaseItem {
  id: string;
  title: string;
  tagline: string;
  tag: string;
  iconName: string;
  gradient: string;
  whatYouBuild: string;
  toolsUsed: string[];
}

export const WEEKLY_RHYTHM = [
  {
    step: '01',
    title: 'LEARN',
    color: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50/60',
    description: 'Discover practical ways to use AI for Boards, revision, doubts and everyday learning.'
  },
  {
    step: '02',
    title: 'APPLY',
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50/60',
    description: 'Use AI to solve real student problems — not just generate answers.'
  },
  {
    step: '03',
    title: 'BUILD',
    color: 'from-red-600 to-rose-700',
    borderColor: 'border-rose-200',
    bgColor: 'bg-rose-50/60',
    description: 'Create exciting AI projects and experiment with what you learn.'
  },
  {
    step: '04',
    title: 'RISE',
    color: 'from-amber-600 to-amber-700',
    borderColor: 'border-amber-300',
    bgColor: 'bg-amber-100/50',
    description: 'Submit your work, participate in challenges and unlock opportunities to win rewards.'
  }
];

export const SHOWCASE_PROJECTS: ProjectShowcaseItem[] = [
  {
    id: 'study-buddy',
    title: 'AI Study Buddy',
    tagline: 'Build an AI tool that helps you learn faster.',
    tag: 'Board Exam Supercharger',
    iconName: 'Sparkles',
    gradient: 'from-amber-100 to-amber-50',
    whatYouBuild: 'A personalized revision assistant that converts complex NCERT chapters into flashcards, quizzes, and instant doubt clarifications.',
    toolsUsed: ['Claude / ChatGPT', 'Custom Prompts', 'Notion AI']
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    tagline: 'Create your own website and put your work online.',
    tag: 'College Portfolio',
    iconName: 'Globe',
    gradient: 'from-rose-50 to-orange-50',
    whatYouBuild: 'Your own high-converting student portfolio showcasing your projects, school achievements, and skills ready for college admissions.',
    toolsUsed: ['v0.dev', 'Bolt / Lovable', 'Vercel']
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    tagline: 'Turn data into an interactive dashboard.',
    tag: 'Data & Insights',
    iconName: 'BarChart3',
    gradient: 'from-amber-50 to-yellow-50',
    whatYouBuild: 'Visual charts analyzing your study hours, mock exam trends, or local neighborhood metrics with interactive filters.',
    toolsUsed: ['Claude Artifacts', 'Python / React', 'Tailwind']
  },
  {
    id: 'ai-creator',
    title: 'AI Creator',
    tagline: 'Use AI to create something completely your own.',
    tag: 'Creative GenAI',
    iconName: 'Palette',
    gradient: 'from-red-50 to-pink-50',
    whatYouBuild: 'Stunning multimedia visuals, YouTube script architectures, or interactive storytelling games powered by modern generative engines.',
    toolsUsed: ['Midjourney / Flux', 'Suno AI', 'Runway']
  },
  {
    id: 'automation-bots',
    title: 'Automation & Bots',
    tagline: 'Build tools that actually do things for you.',
    tag: 'Workflow Automation',
    iconName: 'Cpu',
    gradient: 'from-orange-50 to-amber-50',
    whatYouBuild: 'Automated study schedule alerts, WhatsApp revision bots, and smart web scouters that alert you to college application deadlines.',
    toolsUsed: ['Make.com', 'Telegram Bot API', 'Zapier']
  },
  {
    id: 'ai-playground',
    title: 'AI Playground',
    tagline: 'Experiment with AI and discover what is possible.',
    tag: 'Next-Gen Research',
    iconName: 'Compass',
    gradient: 'from-amber-100 to-rose-50',
    whatYouBuild: 'Voice agents, smart PDF conversationalists, and micro-tools that solve real everyday friction points.',
    toolsUsed: ['OpenAI APIs', 'Hugging Face', 'FastAPI']
  }
];

export const WHY_IT_MATTERS = {
  boardExams: [
    'Understand difficult concepts with interactive analogical breakdowns',
    'Create customized, realistic revision timetables that stick',
    'Simplify bulky 50-page chapters into crisp 5-minute memory sheets',
    'Generate targeted board-pattern practice questions & numerical problems',
    'Instant 24/7 doubt clearing without waiting for coaching centers',
    'Revise smarter so you have free time for your passions'
  ],
  futureCareers: [
    'First-hand fluency in AI & deep technology before university starts',
    'Real-world portfolio projects that set your college applications apart',
    'Exposure to high-growth emerging fields (AI Engineering, Product, Design)',
    'Practical problem-solving mindset valued by top global institutions',
    'Network with ambitious Class 12 peers across India',
    'Direct mentorship from AI practitioners and tech founders'
  ]
};

export const REWARDS_LIST = [
  {
    id: 'ipad',
    title: 'Apple iPad Air / 10th Gen',
    category: 'Grand Winner Showcase',
    badge: 'Top Monthly Builder',
    description: 'The ultimate portable powerhouse for Class 12 notes, sketching diagrams, and building AI tools.',
    icon: 'Tablet',
    color: 'border-amber-300 bg-gradient-to-br from-amber-50 via-white to-amber-100/40 text-amber-950'
  },
  {
    id: 'smartwatch',
    title: 'Smartwatch (Apple / Galaxy / Amazfit)',
    category: 'Weekly MVP Award',
    badge: 'Consistent Builder',
    description: 'Track your focus hours, pomodoro study sessions, and stay connected with a premium wearable.',
    icon: 'Watch',
    color: 'border-rose-300 bg-gradient-to-br from-rose-50 via-white to-rose-100/40 text-rose-950'
  },
  {
    id: 'headphones',
    title: 'Active Noise-Cancelling Headphones',
    category: 'Focus Gear',
    badge: 'Deep Work Gear',
    description: 'Block out distractions and dive into uninterrupted study and coding sprints.',
    icon: 'Headphones',
    color: 'border-sky-300 bg-gradient-to-br from-sky-50 via-white to-sky-100/40 text-sky-950'
  },
  {
    id: 'smartphone',
    title: '5G Smartphone / Tech Peripherals',
    category: 'Innovation Star',
    badge: 'High Impact Build',
    description: 'Awarded for exceptional creativity in the "Build for India" post-workshop challenge.',
    icon: 'Smartphone',
    color: 'border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/40 text-emerald-950'
  },
  {
    id: 'certificates',
    title: 'Verified NIAT Excellence Certificates',
    category: 'Credentialing',
    badge: 'College Portfolio',
    description: 'Official digital credential verified by NIAT highlighting your AI proficiency for college applications.',
    icon: 'Award',
    color: 'border-purple-300 bg-gradient-to-br from-purple-50 via-white to-purple-100/40 text-purple-950'
  },
  {
    id: 'trophy',
    title: 'NIAT Young AI Innovator Trophy & Badges',
    category: 'Championship Recognition',
    badge: 'Hall of Fame',
    description: 'Physical memento awarded at national batch convocations recognizing standout innovators.',
    icon: 'Trophy',
    color: 'border-yellow-400 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 text-yellow-950'
  }
];

export const FAQS = [
  {
    q: 'Who can participate in this project challenge?',
    a: 'Any Class 12 student who attended our one-day offline AI Workshop. It is completely free to submit your project!'
  },
  {
    q: 'Do I need prior coding knowledge to build the project?',
    a: 'Not at all! As shown in the workshop, you will use intuitive generative AI tools like Gamma.app, ChatGPT, and Gemini to generate ideas, structures, and presentations.'
  },
  {
    q: 'How much time will the weekend Bootcamp take each week?',
    a: 'We understand you have Board exams and coaching. The Weekend AI Bootcamp is designed for just 90 to 120 minutes on Saturday and Sunday afternoons, packed with practical, high-impact building.'
  },
  {
    q: 'Can I submit more than one project?',
    a: 'Yes! If you have multiple ideas across the 3 themes (Build for India, Fix My Student Life, Everyday Solutions), feel free to submit additional links.'
  },
  {
    q: 'What if I encounter an error sharing my Google Slides link?',
    a: 'Make sure your presentation in Google Drive is set to "Anyone with the link can view". Check Slide 06 in the viewer above for the step-by-step export flow.'
  }
];
