import {
  Project,
  Skill,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ServiceItem,
  HeroStat,
  AIJourneyNode,
  QuickProfileCard,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Pradipsinh Jadeja',
  shortName: 'PJ',
  title: 'Python & Django Developer | AI/LLM Developer',
  headline: "Python & Django Developer building AI-powered applications.",
  location: 'Ahmedabad, India',
  email: 'pradipsinh0906@gmail.com',
  phone: '+91 97121 82021',
  phoneHref: 'tel:+919712182021',
  linkedIn: 'https://www.linkedin.com/in/pradipsinh-jadeja/',
  github: 'https://github.com/pradipsinh0906-prog/',
  resumeUrl: '/resume/Pradipsinh_Jadeja_Resume.pdf',
  bioSummary:
    "I build scalable web applications and intelligent software solutions using Python, Django, APIs, databases and modern AI technologies including RAG and AI agents.",
  aboutDescription:
    "I'm a software developer with experience in backend and web application development. My core experience includes Python, Django, PHP, Magento 2, APIs and databases. Alongside this, I build with modern AI technologies — RAG pipelines, prompt engineering, AI agents, Pydantic-based structured outputs, and n8n automation.",
  aboutFocusNote:
    "This portfolio showcases practical, production-ready engineering projects rather than only tutorials — demonstrating end-to-end architecture, clean APIs, database modeling, and real LLM integration.",
};

export const HERO_STATS: HeroStat[] = [
  {
    value: '1+',
    label: 'Years Professional Experience',
    highlight: 'Industry Delivery',
  },
  {
    value: 'Python',
    label: 'Primary Development',
    highlight: 'Core Language',
  },
  {
    value: 'Django',
    label: 'Web Framework',
    highlight: 'MVT & REST APIs',
  },
  {
    value: 'AI / LLM',
    label: 'Current Focus',
    highlight: 'RAG & Agents',
  },
];

export const QUICK_PROFILE_CARDS: QuickProfileCard[] = [
  {
    title: 'Backend Development',
    subtitle: 'Python & Django',
    description: 'Scalable REST APIs, session management, and robust role-based access control.',
    iconName: 'Server',
  },
  {
    title: 'Web Development',
    subtitle: 'Full Stack Applications',
    description: 'Clean Django MVT pattern with responsive HTML5, CSS3, Bootstrap, and JavaScript.',
    iconName: 'Layout',
  },
  {
    title: 'Database',
    subtitle: 'MySQL / PostgreSQL',
    description: 'Schema normalization, query optimization, indexing, and ORM relationship modeling.',
    iconName: 'Database',
  },
  {
    title: 'AI Development',
    subtitle: 'RAG, AI Agents, LLM Applications',
    description: 'Prompt engineering, structured outputs, LangChain chains, and document retrieval.',
    iconName: 'Cpu',
  },
];

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 'Core', iconName: 'Terminal' },
  { name: 'PHP', category: 'Programming', level: 'Strong', iconName: 'Code' },
  { name: 'JavaScript', category: 'Programming', level: 'Strong', iconName: 'FileCode' },
  { name: 'C', category: 'Programming', level: 'Working Knowledge', iconName: 'Binary' },
  { name: 'C++', category: 'Programming', level: 'Working Knowledge', iconName: 'Cpu' },

  // Backend
  { name: 'Django', category: 'Backend', level: 'Core', iconName: 'Server' },
  { name: 'Django REST Framework', category: 'Backend', level: 'Strong', iconName: 'Layers' },
  { name: 'Magento 2', category: 'Backend', level: 'Strong', iconName: 'ShoppingBag' },
  { name: 'REST APIs', category: 'Backend', level: 'Strong', iconName: 'Network' },

  // Frontend
  { name: 'HTML', category: 'Frontend', level: 'Strong', iconName: 'Layout' },
  { name: 'CSS', category: 'Frontend', level: 'Strong', iconName: 'Palette' },
  { name: 'JavaScript', category: 'Frontend', level: 'Strong', iconName: 'Sparkles' },
  { name: 'Bootstrap', category: 'Frontend', level: 'Strong', iconName: 'Columns' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Working Knowledge', iconName: 'Boxes' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Strong', iconName: 'Database' },
  { name: 'PostgreSQL', category: 'Database', level: 'Strong', iconName: 'HardDrive' },
  { name: 'SQLite', category: 'Database', level: 'Working Knowledge', iconName: 'FolderGit2' },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Strong', iconName: 'GitBranch' },
  { name: 'GitHub', category: 'Tools', level: 'Strong', iconName: 'Github' },
  { name: 'Bitbucket', category: 'Tools', level: 'Working Knowledge', iconName: 'FolderTree' },
  { name: 'Jira', category: 'Tools', level: 'Working Knowledge', iconName: 'CheckSquare' },

  // AI / Emerging
  { name: 'AI/ML', category: 'AI', level: 'Working Knowledge', iconName: 'Brain' },
  { name: 'LLM Applications', category: 'AI', level: 'Working Knowledge', iconName: 'Zap' },
  { name: 'RAG', category: 'AI', level: 'Working Knowledge', iconName: 'Search' },
  { name: 'Prompt Engineering', category: 'AI', level: 'Working Knowledge', iconName: 'MessageSquareCode' },
  { name: 'Pydantic', category: 'AI', level: 'Working Knowledge', iconName: 'ShieldCheck' },
  { name: 'AI Agents', category: 'AI', level: 'Working Knowledge', iconName: 'Bot' },
  { name: 'n8n Automation', category: 'AI', level: 'Working Knowledge', iconName: 'Workflow' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infinite-soft-tech',
    role: 'Python & Django Developer Intern',
    company: 'Infinite Soft Tech',
    location: 'Ahmedabad, India',
    period: 'Dec 2025 – Apr 2026',
    responsibilities: [
      'Built full-stack web applications using Python, Django, HTML, CSS, Bootstrap, and JavaScript',
      'Developed authentication systems — login, signup, and role-based access control',
      'Designed and implemented REST APIs for frontend-backend communication',
      'Modeled relational databases using SQLite and MySQL',
      'Deployed Django applications to Render and PythonAnywhere',
      'Maintained version-controlled codebases on GitHub with proper branching strategies',
    ],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'SQLite', 'MySQL', 'Git'],
  },
  {
    id: 'kitchen365',
    role: 'Software Engineer',
    company: 'Kitchen365',
    location: 'Ahmedabad, India',
    period: 'Feb 2024 – Dec 2025',
    responsibilities: [
      'Led development of custom Magento 2 modules and feature enhancements for e-commerce clients',
      'Executed customizations across cart, checkout, product, customer, and admin modules',
      'Built and managed API integrations with third-party services',
      'Optimized MySQL queries and managed database architecture for high-performance sites',
      'Conducted bug fixing, performance tuning, and production support',
    ],
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'REST API', 'Git'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-reviewer',
    title: 'AI Resume Reviewer',
    category: 'AI / Python',
    featured: true,
    badge: 'Primary Featured Project',
    description:
      'A Python application that reads a resume and returns structured, LLM-based feedback through a custom scoring interface instead of a plain text dump.',
    technologies: ['Python', 'LangChain', 'Groq', 'PyPDF2', 'Streamlit'],
    github: 'https://github.com/pradipsinh0906-prog/',
    features: [
      'Reliable JSON parsing via multi-strategy fallback extraction',
      'Custom UI with gradient score cards',
      'Groq-backed LLM inference',
      'PDF resume parsing',
    ],
    problem:
      'Standard resume analyzers either dump massive unformatted blobs of LLM output or fail entirely when the model does not strictly emit valid JSON syntax, leaving job candidates frustrated.',
    solution:
      'Built an end-to-end Python analyzer with LangChain and ultra-fast Groq Llama 3 inference. Implemented an extraction pipeline that parses PDF contents, validates candidate credentials, and formats the output into categorized scorecards.',
    challenges: [
      'Handling unstructured multi-column PDF layouts where raw text extraction jumbles headers and bullet points.',
      'Enforcing strict JSON output structure across varied prompt completions through multi-strategy fallback extraction.',
      'Achieving sub-second response times without incurring heavy inference API costs.',
    ],
    learned: [
      'Advanced prompt framing techniques with few-shot schema examples.',
      'Resilient parsing algorithms using fallback regex patterns when strict JSON.parse fails.',
      'Building responsive developer interfaces with Streamlit components.',
    ],
    mockupSnippet: 'SCORE: 88/100 • ATS Compliant • Skills Match 92%',
  },
  {
    id: 'blog-application',
    title: 'Blog Application',
    category: 'Django / Web',
    featured: false,
    description:
      'A full-featured blog platform built with Django, including complete CRUD operations on posts, secure authentication, and a comment system for reader interaction.',
    technologies: ['Django', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/pradipsinh0906-prog/',
    features: [
      'Full CRUD on posts',
      'Secure login, signup, logout',
      'Comment system',
      'Responsive UI',
    ],
    problem:
      'Content management platforms require strict boundary controls between authors and readers, alongside normalized database schemas that scale cleanly.',
    solution:
      'Implemented a clean Django MVT architecture with custom user models, class-based views, CSRF protection, and relational database associations between posts, authors, and comments.',
    challenges: [
      'Enforcing strict authorization so users can only edit or delete their own posts while maintaining global read access.',
      'Avoiding the N+1 query problem when listing posts alongside author usernames and comment counts.',
    ],
    learned: [
      'Django ORM optimization using select_related and prefetch_related.',
      'Form validation, password hashing security, and flash messaging.',
      'Template inheritance and modular partial views.',
    ],
    mockupSnippet: 'Django MVT • RBAC Auth • Clean CRUD',
  },
  {
    id: 'weather-application',
    title: 'Weather Application',
    category: 'API / Django / Web',
    featured: false,
    description:
      'A real-time weather application that fetches live data from external weather APIs, with city-based search.',
    technologies: ['Python', 'Weather API', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/pradipsinh0906-prog/',
    features: [
      'City-based search',
      'Real-time temperature, humidity, feels-like, and min/max conditions',
      'API integration',
      'Responsive interface',
    ],
    problem:
      'Users need immediate weather metrics without page reload delays, with resilient handling for misspelled city names or upstream API throttling.',
    solution:
      'Built a Python service that consumes REST weather endpoints, cleans and normalizes meteorological metrics, and dynamically renders current climate metrics.',
    challenges: [
      'Handling 404/500 API responses gracefully when external weather services experience rate limits or invalid city queries.',
      'Formatting varied measurement units (Metric vs Imperial) smoothly.',
    ],
    learned: [
      'Consuming external REST APIs via Python requests with timeout safeguards.',
      'Defensive JSON deserialization and key verification.',
      'Dynamic styling based on temperature and climate criteria.',
    ],
    mockupSnippet: 'Ahmedabad: 32°C • Humidity 46% • Status 200 OK',
  },
  {
    id: 'reels-downloader',
    title: 'ReelsDownloader',
    category: 'Django / Automation',
    featured: false,
    description:
      'A Django-based application to download social media videos via URL input, with third-party API integration and robust error handling.',
    technologies: ['Django', 'Python', 'Third-party APIs'],
    github: 'https://github.com/pradipsinh0906-prog/',
    features: [
      'URL-based video download',
      'Third-party API integration',
      'Robust error handling',
      'Optimized backend',
    ],
    problem:
      'Extracting video media streams from social platforms fails frequently due to URL format fluctuations, private account policies, or dead links.',
    solution:
      'Developed a Django service that validates URL syntax with regular expressions, queries extraction endpoints, catches private or broken links, and streams media payloads.',
    challenges: [
      'Differentiating between valid public video links and restricted/private account URLs before hitting upstream extraction endpoints.',
      'Streaming large binary video files through Django view responses efficiently.',
    ],
    learned: [
      'StreamingHttpResponse usage for memory-efficient binary file delivery.',
      'Regular expression pattern matching for diverse URL variations.',
      'Clean user feedback states for network timeouts and access denials.',
    ],
    mockupSnippet: 'Stream: 1080p MP4 • Fast URL Download',
  },
];

export const AI_JOURNEY_NODES: AIJourneyNode[] = [
  {
    step: 1,
    title: 'Python Core & Systems',
    status: 'Core Foundation',
    description:
      'Strong foundational mastery of object-oriented programming, data structures, generators, asynchronous logic, and systems programming.',
    tech: ['Python 3.12', 'OOP', 'File I/O', 'Virtualenvs'],
  },
  {
    step: 2,
    title: 'Web & API Backend',
    status: 'Production Tested',
    description:
      'Production-tested architecture using Django, Django REST Framework, authentication systems, and database modeling.',
    tech: ['Django', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    step: 3,
    title: 'LLMs & Prompt Engineering',
    status: 'Applied via AI-Assisted Development',
    description:
      'Applying foundation models via Groq and LangChain with few-shot prompt framing in practical applications.',
    tech: ['Groq Llama 3', 'LangChain', 'Prompt Design'],
    proofPoint: 'AI Resume Reviewer project',
  },
  {
    step: 4,
    title: 'RAG Architectures',
    status: 'Applied via AI-Assisted Development',
    description:
      'Implementing retrieval-augmented generation pipelines with document chunking, embeddings, and structured information extraction.',
    tech: ['LangChain', 'Vector Search', 'Document Parsing'],
    proofPoint: 'AI Resume Reviewer project',
  },
  {
    step: 5,
    title: 'Pydantic & Structured Outputs',
    status: 'Applied via AI-Assisted Development',
    description:
      'Guaranteed schema validation to force LLM outputs into deterministic, validated Python data models.',
    tech: ['Pydantic v2', 'JSON Schema', 'Type Hints'],
    proofPoint: 'AI Resume Reviewer project',
  },
  {
    step: 6,
    title: 'AI Agents & Tool Calling',
    status: 'Familiar With',
    description:
      'Understanding agentic loops where models reason, choose tools (calculators, web scrapers, database queries), and act autonomously.',
    tech: ['Agentic Workflows', 'Tool Execution', 'State Graphs'],
  },
  {
    step: 7,
    title: 'Automation & Orchestration',
    status: 'Familiar With',
    description:
      'Connecting webhook-driven workflows, asynchronous message queues, and automation pipelines with n8n.',
    tech: ['n8n', 'Webhooks', 'Event Triggers', 'ETL Pipelines'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Python Backend',
    description:
      'Architecture and development of high-performance server-side services, data transformation scripts, and modular Python packages.',
    iconName: 'Server',
    tags: ['Python', 'OOP', 'Data Pipelines', 'Async'],
  },
  {
    title: 'Django Applications',
    description:
      'Full-stack web applications utilizing Django MVT pattern, secure user authentication, role permissions, and customized admin consoles.',
    iconName: 'Layout',
    tags: ['Django', 'MVT', 'Auth & RBAC', 'Admin Modules'],
  },
  {
    title: 'REST APIs',
    description:
      'Designing and deploying clean, documented RESTful endpoints with Django REST Framework, JWT/session authentication, and serialization.',
    iconName: 'Network',
    tags: ['DRF', 'JSON API', 'JWT', 'Serialization'],
  },
  {
    title: 'AI-Powered Applications',
    description:
      'Building smart applications with LLM integration, custom prompt chaining, document RAG, and structured output parsing.',
    iconName: 'Cpu',
    tags: ['LangChain', 'Groq', 'RAG', 'Prompt Engineering'],
  },
  {
    title: 'Database-Driven Systems',
    description:
      'Relational database modeling, query tuning, indexing, and migration management with MySQL, PostgreSQL, and SQLite.',
    iconName: 'Database',
    tags: ['MySQL', 'PostgreSQL', 'SQLite', 'ORM Tuning'],
  },
  {
    title: 'Automation Workflows',
    description:
      'Automating repetitive business processes, media extraction, external API consumption, and webhook integrations.',
    iconName: 'Workflow',
    tags: ['Automation', 'APIs', 'Regex', 'n8n'],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Rudra Goswami College of Computer Application',
    location: 'Ahmedabad, India',
    period: '2024 – 2026',
    field: 'Computer Science & Software Engineering',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Rudra Goswami College of Computer Application',
    location: 'Ahmedabad, India',
    period: '2021 – 2024',
    field: 'Computer Applications & Database Systems',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'C++ Language Certification',
    year: '2023',
    issuer: 'Authorized Institute of Technical Education',
  },
  {
    title: 'C Language Certification',
    year: '2022',
    issuer: 'Authorized Institute of Technical Education',
  },
];
