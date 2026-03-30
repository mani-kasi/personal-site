export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}

export type AboutBlock = {
  label: string
  description: string
}

export type ExperienceItem = {
  company: string
  role: string
  date: string
  summary: string
  logo: string
}

export type TechStackItem = {
  label: string
  icon: string
}

export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  techStack: string[]
  image: string
  githubUrl: string
}

export const siteContent = {
  resumeHref: '/manikasi_resume.pdf',
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ] satisfies NavItem[],
  hero: {
    greeting: "Hey! I'm",
    name: 'Mani Kasi',
    typingPhrases: ['Software Developer', 'Creative Builder', 'Hybrid Athlete (slow runner and weak lifter :) )'],
    profileImage: '/me.jpg',
    email: 'manikasi@cmail.carleton.ca',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mani-kasi-479291252/' },
      { label: 'GitHub', href: 'https://github.com/mani-kasi' },
      { label: 'Email', href: 'mailto:manikasi@cmail.carleton.ca' },
    ] satisfies SocialLink[],
  },
  aboutBlocks: [
    {
      label: 'Who I am',
      description:
        "I’m a Computer Science student at Carleton University with a minor in Business. Some things I do for fun are watching anime, lifting, running, and mfor tore recently learning the guitar!",
    },
    {
      label: 'Academic Journey',
      description:
        'Throughout my academic journey and recent co-op experience, I have gained hands-on experience in software development, where I shipped production UI features at Ciena (Ember + TypeScript) and previously worked in C on protocol tooling at Ross Video.',
    },
    {
      label: 'Outside of School',
      description:
        'I’m currently building a clothing brand (SEVR) and documenting the process online. Recently, when my 2D mockups didn’t match the real sample as expected, I built a full-stack 3D Pattern Visualizer to preview patterns on a pants model and validate designs before ordering future samples to save costs and time.',
    },
  ] satisfies AboutBlock[],
  aboutPortraitImage: '/about-pic.png',
  techStack: [
    { label: 'TypeScript', icon: 'typescript' },
    { label: 'JavaScript', icon: 'javascript' },
    { label: 'C/C++', icon: 'cplusplus' },
    { label: 'Java', icon: 'java' },
    { label: 'Python', icon: 'python' },
    { label: 'HTML', icon: 'html5' },
    { label: 'CSS', icon: 'css3' },
    { label: 'React', icon: 'react' },
    { label: 'Node', icon: 'nodedotjs' },
    { label: 'MongoDB', icon: 'mongodb' },
  ] satisfies TechStackItem[],
  experienceItems: [
    {
      company: 'Warner Bros. Discovery',
      role: 'Software Developer Co-op',
      date: 'May 2026 – Present',
      summary:
        'Super excited to start at WBD this summer!',
      logo: '/experience/warner-bros-discovery.webp',
    },
    {
      company: 'Ciena',
      role: 'Software Developer, Front-End UI/UX Co-op',
      date: 'Sept 2024 – Apr 2025',
      summary:
        'Shipped polished production UI features and improved front-end workflows in an Ember + TypeScript environment.',
      logo: '/experience/ciena.png',
    },
    {
      company: 'Ross Video',
      role: 'Software Developer Co-op – C',
      date: 'Sept 2023 – Dec 2023',
      summary:
        'Built and maintained protocol tooling in C, with a focus on reliability and developer efficiency.',
      logo: '/experience/ross-video.png',
    },
    {
      company: 'ULM Promotions',
      role: 'Managing Partner',
      date: 'June 2023 – Nov 2024',
      summary:
        'Assisted with promotional and digital content work, supporting brand presence and day-to-day campaign execution.',
      logo: '/experience/ulm-promotions.jpeg',
    },
  ] satisfies ExperienceItem[],
  projectItems: [
    {
      title: 'Pattern Visualizer',
      subtitle: 'Full-Stack 3D Web App',
      description:
        'A full-stack 3D app built for my clothing brand (SEVR) to preview fabric patterns on a pants model with tiling, scale and lighting controls, plus export and sharing features.',
      techStack: [
        'React',
        'TypeScript',
        'React Three Fiber',
        'Node',
        'Express',
        'Supabase',
        'PostgreSQL',
      ],
      image: '/projects/pattern-visualizer.gif',
      githubUrl: 'https://github.com/your-username/pattern-visualizer',
    },
    {
      title: 'Terrain Amplification Pipeline',
      subtitle: 'Graphics / Terrain Processing Project',
      description:
        'A terrain processing pipeline exploring multi-scale amplification and erosion-style operators on heightfields, with a focus on controllable parameters and visual quality.',
      techStack: ['C++', 'OpenGL'],
      image: '/projects/terrain-pipeline.gif',
      githubUrl: 'https://github.com/your-username/terrain-amplification-pipeline',
    },
    {
      title: 'Neurofeedback EEG Simulator',
      subtitle: 'Simulation Project',
      description:
        'A neurofeedback EEG device simulator built with C++ and Qt to demonstrate core user flows and real-time brainwave visualization.',
      techStack: ['C++', 'Qt', 'Linux'],
      image: '/projects/eeg-simulator.png',
      githubUrl: 'https://github.com/your-username/neurofeedback-eeg-simulator',
    },
  ] satisfies ProjectItem[],
  contact: {
    heading: 'GET IN TOUCH',
    description:
      'Feel free to reach out for opportunities, collaborations, or just to connect!',
    primaryCta: {
      label: 'Contact Me!',
      href: 'mailto:manikasi@cmail.carleton.ca',
    },
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mani-kasi-479291252/' },
      { label: 'GitHub', href: 'https://github.com/mani-kasi' },
    ] satisfies SocialLink[],
  },
}
