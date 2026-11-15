export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  note?: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  badge?: string;
  description: string;
  isFirstPrize?: boolean;
}

export interface CommunityEvent {
  title: string;
  organization: string;
  dateOrYear?: string;
  type: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Yeshwanth KM",
  initials: "YK",
  headline: "Computer Science & Engineering (AI & ML) Student | Aspiring Software Developer | Tech Enthusiast",
  introParagraphs: [
    "I am a second-year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Rajalakshmi Institute of Technology.",
    "I am passionate about technology, software development, and exploring emerging technologies. I enjoy participating in hackathons, attending developer community events, experimenting with AI-assisted development tools, and turning innovative ideas into practical applications.",
    "I continuously work on improving my programming fundamentals and technical skills while exploring new opportunities to learn, collaborate, and build."
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "yeshwanth2307@gmail.com",
  github: "https://github.com/YeshwanthKM",
  linkedin: "https://www.linkedin.com/in/yeshwanth-km/",
};

export const ABOUT_ME = {
  title: "About Me",
  paragraphs: [
    "I am Yeshwanth KM, currently pursuing my B.E. in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Rajalakshmi Institute of Technology.",
    "I am passionate about exploring technology, learning new concepts, and building practical applications. My interests include software development, artificial intelligence, web technologies, and problem-solving.",
    "I actively participate in hackathons, technical events, and developer community activities. I have attended several Google Developer Groups (GDG) events, including DevFest, community meetups, workshops, and bootcamps.",
    "I enjoy experimenting with AI-assisted development tools like Antigravity to transform ideas into functional applications while continuously strengthening my programming fundamentals."
  ],
  stats: [
    { label: "Current Education", value: "B.E. CSE (AI & ML)" },
    { label: "College", value: "Rajalakshmi Inst. of Tech" },
    { label: "Location", value: "Chennai, India" },
    { label: "Year of Graduation", value: "2029" },
  ]
};

export const EDUCATION = {
  institution: "Rajalakshmi Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  currentYear: "2nd Year",
  expectedGraduation: "2029",
  location: "Chennai, Tamil Nadu, India",
  highlights: [
    "Focusing on foundational Computer Science principles and algorithm design",
    "Specialized coursework in AI and Machine Learning fundamentals",
    "Active participant in collegiate technical symposiums and hackathons",
    "Engaged in hands-on practical development and project-based learning"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", tag: "Academic Learning", iconName: "code" },
      { name: "Python", tag: "School & College", iconName: "python" },
      { name: "Java", tag: "Currently Learning", iconName: "java" },
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Antigravity", tag: "AI-Assisted Development", iconName: "bot" },
      { name: "GitHub", tag: "Version Control & Hosting", iconName: "github" },
    ]
  },
  {
    category: "Areas of Interest",
    skills: [
      { name: "AI & Machine Learning", tag: "Core Interest", iconName: "brain" },
      { name: "Software Development", tag: "Building Applications", iconName: "laptop" },
      { name: "Web Development", tag: "Frontend & Interfaces", iconName: "globe" },
      { name: "Problem Solving", tag: "Logic & Algorithms", iconName: "puzzle" },
      { name: "Emerging Technologies", tag: "Continuous Learning", iconName: "sparkles" },
    ]
  }
];

export const CURRENTLY_LEARNING = [
  { title: "Java Programming", desc: "Core language syntax, memory management, and OOP paradigm" },
  { title: "Programming Fundamentals", desc: "Strengthening core logic, algorithms, and computational thinking" },
  { title: "Object-Oriented Programming", desc: "Encapsulation, inheritance, polymorphism, and modular design" },
  { title: "AI & ML Concepts", desc: "Understanding machine learning pipelines, models, and data workflows" },
  { title: "Application Building", desc: "Translating architectural ideas into functional, practical software" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "CropSync – Farmer-Buyer Marketplace",
    category: "Smart India Hackathon 2026 Project",
    description: "CropSync is a digital agricultural marketplace designed to connect farmers and Farmer Producer Organizations (FPOs) directly with consumers and bulk buyers. The platform aims to reduce dependency on intermediaries, improve market access, and help farmers receive better value for their produce.",
    features: [
      "Direct farmer-to-buyer marketplace",
      "Agricultural product listings and order management",
      "Minimum Support Price (MSP) validation",
      "Farmer and buyer dashboards",
      "Logistics coordination"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Supabase"],
    githubUrl: "https://github.com/YeshwanthKM/smart-agritrade",
    note: "Practical development experience built for Smart India Hackathon 2026"
  },
  {
    id: 2,
    title: "TypeNull – AI-Powered Application Validation & Document Authentication",
    category: "Smart India Hackathon 2026 Project",
    description: "TypeNull is an AI-assisted application validation and document authentication platform designed around AICTE approval workflows. It aims to identify document inconsistencies, detect potential manipulation, verify digital signatures, and support regulatory compliance checks.",
    features: [
      "Document text extraction and OCR",
      "PDF structural analysis and forensic checks",
      "Digital signature verification",
      "Cross-document consistency validation",
      "Evidence-based validation reports"
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Supabase"],
    githubUrl: "https://github.com/YeshwanthKM/TypeNull",
    note: "AICTE workflow validation and cryptographic forensic analysis platform"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "First Prize – Website Building Challenge 2026",
    organization: "GeeksforGeeks Campus Club, Rajalakshmi Institute of Technology",
    year: "2026",
    badge: "🏆 1ST PRIZE WINNER",
    description: "Secured First Prize in the Website Building Challenge 2026 hosted by the GeeksforGeeks Campus Club at RIT. Built an exceptional, responsive web solution recognized for clean user experience, structural efficiency, and robust implementation.",
    isFirstPrize: true
  },
  {
    title: "Smart India Hackathon 2026",
    organization: "Ministry of Education / AICTE Initiative",
    year: "2026",
    badge: "SIH PARTICIPANT",
    description: "Participated in Smart India Hackathon 2026, engineering innovative technology-driven solutions tackling real-world agricultural commerce and regulatory compliance problem statements.",
    isFirstPrize: false
  },
  {
    title: "Active Hackathon Participation",
    organization: "Collegiate & Developer Ecosystem",
    year: "Ongoing",
    badge: "COMPETITIVE BUILDER",
    description: "Actively participating in technical competitions and hackathons to rapidly prototype solutions, explore emerging tooling, and solve practical engineering challenges.",
    isFirstPrize: false
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    title: "GDG DevFest Mangalore 2025",
    organization: "Google Developer Groups Mangalore",
    dateOrYear: "2025",
    type: "DevFest Flagship Conference",
    description: "Attended full-day technical sessions, tech talks on developer ecosystems, cloud architectures, and machine learning tracks."
  },
  {
    title: "GDG DevFest Chennai 2026",
    organization: "Google Developer Groups Chennai",
    dateOrYear: "2026",
    type: "DevFest Conference",
    description: "Engaged with the regional developer community, attending keynotes and developer demonstrations on modern software engineering."
  },
  {
    title: "GDG Community Meetups & Workshops",
    organization: "Google Developer Groups",
    dateOrYear: "Ongoing",
    type: "Community Meetups",
    description: "Participating in local tech meetups, code sprints, and interactive hands-on developer workshops across Chennai."
  },
  {
    title: "Developer Bootcamps & Technical Workshops",
    organization: "Various Developer Communities",
    dateOrYear: "2025 – 2026",
    type: "Skill-Building Bootcamps",
    description: "Engaging in hands-on developer workshops focusing on programming fundamentals, web technologies, and modern developer tooling."
  }
];

export const NAV_LINKS = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Education", path: "#education" },
  { title: "Projects", path: "#projects" },
  { title: "Achievements", path: "#achievements" },
  { title: "Community", path: "#community" },
  { title: "Contact", path: "#contact" }
];
