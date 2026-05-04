// ============================================================
//  PORTFOLIO CONFIG — Edit everything here, nowhere else.
// ============================================================

export const personal = {
  name: 'Abbas Ali',
  initials: 'AA',
  title: 'AI Engineer',
  tagline: 'Open to opportunities',
  summary: 'Specializing in LangGraph and LangChain, building intelligent multi-agent systems, RAG pipelines, and automation workflows that solve complex, real-world problems.',
  summaryHighlights: ['LLMs, Machine Learning,', 'AI Applications'],
  bio: [
    "I'm an AI Engineer with a deep passion for designing and building intelligent systems. My work sits at the intersection of machine learning research and production engineering — turning cutting-edge ideas into reliable, scalable applications.",
    "From training custom ML models to orchestrating multi-agent LLM pipelines with LangGraph, I focus on the full lifecycle: data, modeling, deployment, and monitoring. I care deeply about clean architecture and systems that actually work in the real world.",
    "When I'm not building AI systems, I'm reading papers, exploring new frameworks, and contributing to the open-source community.",
  ],
  location: 'Peshawar, Pakistan',
  email: 'abbasalics03@gmail.com',
  github: 'https://github.com/abbas-cs',
  githubUsername: 'github.com/abbas-cs',
  linkedin: 'https://www.linkedin.com/in/abbasalics/',
  linkedinUsername: 'linkedin.com/in/abbasalics/',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '15+', label: 'AI Projects' },
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'LLM Systems' },
  { value: '100%', label: 'Passion' },
]

export const aboutHighlights = [
  { label: 'ML Systems', color: 'text-blue-500 bg-blue-50' },
  { label: 'LLM Agents', color: 'text-violet-500 bg-violet-50' },
  { label: 'AI Applications', color: 'text-emerald-500 bg-emerald-50' },
  { label: 'Continuous Learner', color: 'text-orange-500 bg-orange-50' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'AI/ML Engineer',
    company: 'Tech Innovations Inc.',
    period: '2023 – Present',
    location: 'Remote',
    description: 'Lead engineer for AI product development, specializing in LLM-powered applications and ML system design.',
    achievements: [
      'Built multi-agent systems using LangGraph that reduced content generation time by 70%',
      'Designed and deployed RAG pipelines serving 10k+ daily queries with 95% relevance score',
      'Established MLOps practices: automated retraining, monitoring, and A/B testing infrastructure',
      'Mentored junior engineers on ML best practices and prompt engineering techniques',
    ],
    accent: '#2563EB',
  },
  {
    id: 2,
    type: 'work',
    title: 'Machine Learning Engineer',
    company: 'DataDriven Labs',
    period: '2021 – 2023',
    location: 'Hybrid',
    description: 'End-to-end ML pipeline development for customer analytics and predictive modeling.',
    achievements: [
      'Developed customer churn prediction system achieving 94% AUC with XGBoost',
      'Built FastAPI microservices for model serving with <50ms p99 latency',
      'Containerized ML workloads using Docker and deployed on AWS ECS',
      'Reduced data preprocessing pipeline runtime from 4 hours to 18 minutes',
    ],
    accent: '#6366F1',
  },
]

export const education = [
  {
    id: 1,
    degree: 'B.S. Computer Science (AI Track)',
    institution: 'State University',
    period: '2017 – 2021',
    location: 'On-site',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with Honors.',
    achievements: [
      'Thesis: "Transformer-based NLP for Automated Document Summarization"',
      'Led university AI/ML research club with 120+ members',
      'Published research on few-shot learning techniques for low-resource NLP',
      "GPA: 3.9 / 4.0 — Dean's List all semesters",
    ],
    accent: '#059669',
  },
  {
    id: 2,
    degree: 'Machine Learning Specialization',
    institution: 'Coursera / Stanford Online',
    period: '2022',
    location: 'Online',
    description: 'Completed Andrew Ng\'s renowned ML specialization covering supervised, unsupervised, and reinforcement learning.',
    achievements: [
      'Completed all 3 courses with distinction',
      'Built capstone projects in regression, classification, and neural networks',
    ],
    accent: '#D97706',
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI Blog Writing Agent',
    description:
      'Multi-agent system using LangGraph that autonomously researches topics, plans structure, and generates publication-ready blog content with human-in-the-loop review.',
    tech: ['LangGraph', 'LangChain', 'OpenAI', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: null,
    emoji: '✍️',
    accent: '#2563EB',
  },
  {
    id: 2,
    title: 'Customer Churn Predictor',
    description:
      'End-to-end ML pipeline with Scikit-learn and XGBoost achieving 94% AUC. Deployed via FastAPI and Docker with automated retraining and model monitoring.',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    emoji: '📊',
    accent: '#6366F1',
  },
  {
    id: 3,
    title: 'LLM Research Assistant',
    description:
      'RAG system with FAISS vector database and sentence embeddings for semantic search across research papers. Supports multi-document Q&A with citation tracking.',
    tech: ['LangChain', 'FAISS', 'HuggingFace', 'Streamlit', 'Python'],
    github: 'https://github.com',
    demo: null,
    emoji: '🔬',
    accent: '#059669',
  },
  {
    id: 4,
    title: 'Intelligent SQL Agent',
    description:
      'Conversational agent that translates natural language into optimized SQL queries, explains query plans, and suggests schema improvements using GPT-4.',
    tech: ['OpenAI', 'LangChain', 'PostgreSQL', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: null,
    emoji: '🗄️',
    accent: '#D97706',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Building Production-Ready RAG Systems: Lessons Learned',
    excerpt: 'After deploying RAG pipelines serving millions of queries, here are the hard-won lessons on chunking strategies, retrieval tuning, and evaluation.',
    date: 'Feb 12, 2025',
    readTime: '8 min read',
    tags: ['RAG', 'LLMs', 'Production'],
    emoji: '🔬',
    accent: '#2563EB',
    url: '#',
  },
  {
    id: 2,
    title: 'LangGraph vs LangChain: When to Use Multi-Agent Orchestration',
    excerpt: 'A practical comparison of when simple chains suffice versus when you need the full power of stateful multi-agent graphs.',
    date: 'Jan 28, 2025',
    readTime: '6 min read',
    tags: ['LangGraph', 'LangChain', 'Agents'],
    emoji: '🤖',
    accent: '#6366F1',
    url: '#',
  },
  {
    id: 3,
    title: 'From Jupyter to Production: MLOps for Small Teams',
    excerpt: 'A pragmatic guide to building ML pipelines that actually ship — without enterprise budgets or a 10-person MLOps team.',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
    tags: ['MLOps', 'Docker', 'FastAPI'],
    emoji: '🚀',
    accent: '#059669',
    url: '#',
  },
  {
    id: 4,
    title: 'Prompt Engineering Patterns That Actually Work in 2025',
    excerpt: 'Beyond "be specific": the prompt engineering techniques I use daily when building LLM applications, with concrete examples.',
    date: 'Dec 18, 2024',
    readTime: '7 min read',
    tags: ['Prompt Engineering', 'LLMs', 'GPT-4'],
    emoji: '✍️',
    accent: '#D97706',
    url: '#',
  },
]
