export const profile = {
  name: "Mahim Vyas",
  monogram: "MV",
  roles: [
    "AI/ML Engineer",
    "Multi-Agent Systems",
    "Edge AI in the Browser",
    "Full-Stack Developer",
  ],
  intro:
    "Undergraduate AI/ML engineer building local-first, multi-agent, and browser-native AI systems.",
  summary:
    "Experienced across Node.js backends, LLM/agent orchestration, and edge AI in the browser (WebLLM, Transformers.js), with a broader technical background spanning deep learning (GANs, VAEs, Transformers, GNNs), high-performance parallel computing (MPI, CUDA), and full-stack web development.",
  email: "mahimvyas205@gmail.com",
  phone: "+91-7073423234",
  phoneHref: "tel:+917073423234",
  location: "Pune, Maharashtra, India",
  links: {
    github: "https://github.com/MahimVyas",
    linkedin: "https://www.linkedin.com/in/mahimvyas",
    codechef: "https://www.codechef.com/users/mahimvyas",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const facts = [
  {
    icon: "graduation",
    label: "Studying",
    value: "B.Tech AI & ML · D. Y. Patil International University",
    sub: "Expected May 2027 · CGPA 7.11/10",
  },
  {
    icon: "map",
    label: "Based in",
    value: "Pune, Maharashtra, India",
    sub: "IST · UTC +5:30",
  },
  {
    icon: "cpu",
    label: "Focus",
    value: "LLMs · Multi-Agent Systems · Edge AI",
    sub: "Local-first, privacy-first execution",
  },
];

export type SkillGroup = {
  icon: "code" | "brain" | "server" | "layout" | "key";
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    icon: "code",
    title: "Languages",
    items: ["Python", "Java", "JavaScript"],
  },
  {
    icon: "brain",
    title: "AI / Machine Learning",
    items: [
      "LLMs",
      "Multi-Agent Systems",
      "WebLLM",
      "ViT",
      "Deep Learning",
      "GANs",
      "VAEs",
      "Transformers",
      "GNNs",
    ],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    items: ["Node.js", "API Development", "Web APIs", "Docker"],
  },
  {
    icon: "layout",
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "PostCSS",
      "Lucide React",
    ],
  },
  {
    icon: "key",
    title: "Auth & Data",
    items: ["NextAuth.js", "Google OAuth 2.0"],
  },
];

export type Project = {
  title: string;
  date: string;
  featured?: boolean;
  tech: string[];
  bullets: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "AutoTriage-ITSM",
    date: "2026",
    featured: true,
    tech: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "React 18",
      "OpenAI/Gemini",
    ],
    bullets: [
      "Built an enterprise AI ITSM engine featuring a 4-stage pipeline: regex PII redaction, tiered SLM/LLM triage, hybrid RAG (pgvector + BM25 via RRF), and async SLA escalations.",
      "Implemented human-in-the-loop agent overrides with full audit logging across 3 role-based dashboards (Employee, Support Agent, Admin).",
    ],
    live: "https://mahimvyas.github.io/AutoTriage-ITSM/",
    repo: "https://github.com/MahimVyas/AutoTriage-ITSM",
  },
  {
    title: "Fieldnote",
    date: "Apr – May 2026",
    tech: ["Node.js", "Docker", "Multi-Agent Systems", "Web APIs", "LLMs"],
    bullets: [
      "Developed a local-first, multi-agent research workbench that gathers web, literature, YouTube, and file evidence to generate traceable evidence briefs.",
      "Orchestrated pure Node.js multi-agent execution with zero cloud LLM/API key dependencies.",
    ],
    live: "https://mahimvyas.github.io/Fieldnote/",
  },
  {
    title: "ODM",
    date: "2026",
    tech: [
      "Next.js 15",
      "WebLLM",
      "Transformers.js",
      "NextAuth.js",
      "WebGPU",
      "IndexedDB",
    ],
    bullets: [
      "Engineered a zero-latency, privacy-first Edge AI application running LLMs and Vision Transformers in-browser via WebAssembly and WebGPU/CPU.",
      "Handled client-side state and authentication using Dexie.js (IndexedDB) and NextAuth.js without sensitive data leaving the user device.",
    ],
    live: "https://odm-llm.vercel.app/",
  },
];

export const experience = [
  {
    role: "Research Intern – Classical Indian Astronomy & Quantum Computing",
    org: "PCCOE",
    location: "Pune, India",
    meta: "Ended Aug 2026",
    bullets: [
      "Researched classical Indian astronomical models (Sūrya-Siddhānta, Kuṭṭaka algorithm) alongside quantum computing implementations in Python and Qiskit, validated against a Meeus analytical reference.",
    ],
    // The resume carries a placeholder link for the paper — wire in the real URL when available.
    paperLink: null as string | null,
  },
];

export const education = [
  {
    school: "D. Y. Patil International University",
    degree:
      "B.Tech, Computer Science and Engineering – AI & ML (CGPA: 7.11 / 10)",
    location: "Akurdi, Pune, India",
    date: "Expected May 2027",
  },
  {
    school: "MDS Senior Secondary School",
    degree:
      "Higher Secondary (12th): 70.60% | Secondary (10th): 76.60% (CBSE)",
    location: "Udaipur, Rajasthan, India",
    date: "2021 – 2023",
  },
];

export const interests = [
  {
    icon: "zap",
    title: "On-Device AI & Edge Computing",
    body: "Experimenting with WebGPU, Wasm runtime optimizations, and browser-native model quantization for privacy-first, zero-cloud execution.",
  },
  {
    icon: "rocket",
    title: "Micro-SaaS & Process Automation",
    body: "Prototyping lightweight B2B utilities and AI-augmented engines to eliminate repetitive administrative workflows.",
  },
];
