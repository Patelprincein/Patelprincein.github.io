export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type ProjectMeta = {
  title: string
  summary: string
  stack: string[]
  repo: string
  live?: string
  highlight?: string
}

export type ExperienceMeta = {
  company: string
  role: string
  period: string
  bullets: string[]
  location?: string
}

export type BlogIntro = {
  title: string
  description: string
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning Now' },
  { id: 'github', label: 'Live Repos' },
  { id: 'blog', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const siteConfig = {
  name: 'Prince Patel',
  role: 'Python Developer & Ethical Hacking Learner',
  location: 'Fredericton, Canada',
  hero: {
    marquee: ['Python', 'Automation', 'Ethical Hacking', 'Backend Development', 'API Workflows'],
    title: 'Exploring the intersection of software engineering, automation, and cybersecurity.',
    subtitle:
      'Building Python tools, API workflows, GitHub repo preview utilities, and beginner-friendly cybersecurity setups using Kali Linux, automation frameworks, and practical scripting.',
    description:
      'Focused on becoming a strong Python developer with a growing interest in ethical hacking. Currently learning Kali Linux through WSL + RealVNC, automating workflows using Postman and n8n, and building small but meaningful tools that help users interact with GitHub and understand system behavior. Passionate about software that solves real problems through clarity, security, and automation.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Get In Touch', href: '#contact' },
    portrait: '/assets/profile-placeholder.svg',
  },
  learningNow: {
    lastUpdated: 'Feb 2025',
    focusAreas: [
      'Python scripting + backend tooling',
      'Django fundamentals',
      'React + Vue basics',
      'Node.js/Express essentials',
      'Kali Linux (WSL install, RealVNC usage)',
      'API testing & workflow automation with Postman',
      'n8n automation workflows',
      'Networking fundamentals (Cisco Networking Academy modules)',
    ],
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/PatelPrinceIn', icon: 'FiGithub' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prince-patel', icon: 'FiLinkedin' },
    { label: 'Email', href: 'mailto:Patelprince.in@gmail.com', icon: 'FiMail' },
    { label: 'TryHackMe', href: 'https://tryhackme.com/p/PrincePatel', icon: 'SiTryhackme' },
  ] satisfies SocialLink[],
  about: {
    paragraphs: [
      'I’m a Computer Science student at the University of New Brunswick, focused primarily on Python development and beginner-level cybersecurity. My current learning path includes building backend tools, exploring automation, setting up Kali Linux through WSL, and learning how ethical hacking concepts apply to real-world systems.',
      'My projects span Python utilities, API-driven automation, an n8n-powered GitHub repo preview tool, and early JavaFX apps that taught me UI structure and event-driven programming. I enjoy experimenting, debugging, breaking things safely, and learning how software interacts with networks and users.',
      'I’ve completed Cybersecurity and Networking Essentials courses through Cisco Networking Academy, giving me a structured foundation in protocols, security basics, and threat awareness. I’ve also submitted two bug reports to YouTube’s VRP — one business logic flaw (marked infeasible) and one URL redirection issue (marked duplicate), which helped me understand real-world vulnerability reporting.',
    ],
    stats: [
      { label: 'Python Tools', value: '6+' },
      { label: 'JavaFX Projects (Early Work)', value: '3' },
      { label: 'Security Courses Completed', value: 'Cisco Cybersecurity + Networking' },
      { label: 'Bug Reports to YouTube', value: '2' },
      { label: 'Kali Linux Workspace', value: 'Running on WSL + RealVNC' },
    ],
  },
  skills: {
    categories: [
      {
        title: 'Programming Languages',
        items: ['Python', 'Java', 'JavaScript', 'C', 'Racket', 'SQL'],
      },
      {
        title: 'Frameworks & Platforms',
        items: ['Django (learning)', 'React (learning)', 'Vue (learning)', 'Node.js/Express (learning)', 'n8n', 'Postman', 'JavaFX (past experience)'],
      },
      {
        title: 'Security & Tooling',
        items: ['Kali Linux (WSL + VNC workflow)', 'Linux basics', 'Cisco Networking Academy security fundamentals', 'Wireshark basics', 'Burp Suite basics'],
      },
      {
        title: 'Other Skills',
        items: ['Git/GitHub', 'API testing', 'Shell scripting fundamentals'],
      },
    ],
    heatmap: [
      { subject: 'Frontend', value: 50 },
      { subject: 'Backend', value: 75 },
      { subject: 'AI/ML', value: 65 },
      { subject: 'Security', value: 90 },
      { subject: 'DevOps', value: 60 },
    ],
  },
  projects: {
    featured: [
      {
        title: 'Git Repo Previewer',
        summary:
          'Workflow where users submit any GitHub repo URL and instantly receive a structured preview. Uses n8n, a Python webhook handler, and Postman for API validation to help users quickly inspect unknown repos.',
        stack: ['Python', 'n8n', 'Postman', 'Webhooks'],
        repo: 'https://github.com/PatelPrinceIn/git-repo-previewer',
        highlight: 'Automation + repo insights',
      },
      {
        title: 'Python FER Toolkit',
        summary: 'Facial Expression Recognition utility built for automation experiments and learning machine learning basics with OpenCV.',
        stack: ['Python', 'OpenCV', 'FER'],
        repo: 'https://github.com/PatelPrinceIn/python-fer-toolkit',
        highlight: 'Automation-ready FER scripts',
      },
      {
        title: 'Kali Linux Workspace',
        summary: 'Configured Kali Linux to run inside Windows using WSL and RealVNC for exploring ethical hacking fundamentals (networking, scanning, enumeration, security basics).',
        stack: ['WSL', 'Kali Linux', 'RealVNC'],
        repo: 'https://github.com/PatelPrinceIn/kali-workspace-docs',
        highlight: 'Beginner-friendly security lab',
      },
      {
        title: 'Early JavaFX Projects',
        summary: 'Clockscape, Expense Tracker, and a Clean Calculator — foundational JavaFX apps that taught UI structure and event-driven programming.',
        stack: ['JavaFX', 'Java', 'CSS'],
        repo: 'https://github.com/PatelPrinceIn/javafx-clockscape',
        highlight: 'Early UI engineering practice',
      },
    ] satisfies ProjectMeta[],
    gallery: [
      {
        title: 'Git Repo Previewer',
        summary: 'Automation-driven GitHub repo insights delivered via n8n and Python.',
        stack: ['Python', 'n8n', 'Postman'],
        repo: 'https://github.com/PatelPrinceIn/git-repo-previewer',
      },
      {
        title: 'Kali Workspace',
        summary: 'WSL + RealVNC configuration notes for practical Kali Linux usage on Windows.',
        stack: ['WSL', 'Kali Linux', 'RealVNC'],
        repo: 'https://github.com/PatelPrinceIn/kali-workspace-docs',
      },
      {
        title: 'FER Toolkit',
        summary: 'Automation-ready OpenCV workflow for facial expression recognition.',
        stack: ['Python', 'OpenCV', 'FER'],
        repo: 'https://github.com/PatelPrinceIn/python-fer-toolkit',
      },
      {
        title: 'Clockscape',
        summary: 'JavaFX clock with world-time support and polished animations from early UI explorations.',
        stack: ['JavaFX', 'Java'],
        repo: 'https://github.com/PatelPrinceIn/javafx-clockscape',
      },
      {
        title: 'Cipher Canvas',
        summary: 'TypeScript playground for understanding block ciphers through visualization.',
        stack: ['TypeScript', 'Vite', 'WebCrypto'],
        repo: 'https://github.com/PatelPrinceIn/cipher-canvas',
      },
    ] satisfies ProjectMeta[],
  },
  blog: {
    title: 'Notes & field reports',
    description:
      'Short, honest writeups from my learning journey — Python scripting experiments, Kali Linux setup notes, automation workflows with n8n/Postman, and beginner ethical hacking reflections.',
  } satisfies BlogIntro,
  experience: [
    {
      company: 'University of New Brunswick',
      role: 'BSc in Computer Science',
      period: '2023 - Present',
      location: 'Fredericton, Canada',
      bullets: [
        'Coursework: Python, Java, databases, algorithms, networking, AI basics, Linux fundamentals, cybersecurity introductions.',
        'Built Python tools, experimented with automation, and explored backend fundamentals.',
        'Set up Kali Linux in WSL and RealVNC to apply coursework to ethical hacking practice.',
      ],
    },
    {
      company: 'Independent Learning',
      role: 'Python & Security Builder',
      period: '2021 - Present',
      bullets: [
        'Built Python tools, experimented with OpenCV, and practiced API workflows.',
        'Completed Cisco Cybersecurity and Networking courses; explored Kali Linux tooling.',
        'Submitted two findings to YouTube VRP (business logic flaw, URL redirection issue) to learn real-world reporting.',
      ],
    },
  ] satisfies ExperienceMeta[],
  contact: {
    emails: ['e4ukw@unb.ca', 'Patelprince.in@gmail.com'],
    availability: 'Open for Python development and beginner security roles starting Summer 2025.',
  },
  metadata: {
    siteUrl: 'https://patelprincein.github.io/',
    title: 'Prince Patel | Software & Security',
    description:
      'Portfolio for Prince Patel — UNB CS student blending full-stack engineering with ethical hacking, ML experiments, and open-source labs.',
    keywords: [
      'Prince Patel',
      'UNB Computer Science',
      'Software Engineer Portfolio',
      'Ethical Hacking Student',
      'JavaFX Developer',
      'Security Labs',
    ],
    ogImage: '/assets/og-image.svg',
    analytics: {
      provider: 'Plausible',
      scriptUrl: 'https://plausible.io/js/script.js',
      domain: 'patelprincein.github.io',
    },
  },
  theme: {
    defaultMode: 'system',
    accent: '#38bdf8',
  },
}

export type SiteConfig = typeof siteConfig
