export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}

export type Affiliation = {
  role: string
  org: string
}

export type HeroContent = {
  eyebrow: string
  headline: [string, string]
  tagline: string
  paragraphs: string[]
  affiliations: Affiliation[]
  portrait: {
    src: string
    alt: string
    treatment: 'duotone' | 'none'
  }
  links: SocialLink[]
}

export type ExperienceItem = {
  company: string
  role: string
  date: string
  summary: string
  technologies?: string[]
}

export type ProjectMedia = {
  src?: string
  video?: string
  alt: string
  caption: string
  ratio: '4/3' | '16/10' | '16/9'
  play?: {
    href: string
    label: string
    linkLabel: string
  }
}

export type ProjectItem = {
  number: string
  title: string
  category: string
  description: string[]
  tagsLabel: string
  tags: string[]
  media: ProjectMedia
  links: SocialLink[]
  story?: {
    eyebrow: string
    title: string
    href: string
  }
}

export type OffTheClockContent = {
  headline: string
  description: string
  video: {
    title: string
    description: string
    href: string
    thumbnail?: string
  }
}

export type ContactContent = {
  headline: string
  description: string
  email: string
  socialLinks: SocialLink[]
}

const email = 'manikasi@cmail.carleton.ca'
const linkedIn = 'https://www.linkedin.com/in/mani-kasi-479291252/'
const gitHub = 'https://github.com/mani-kasi'
const resumeHref = '/manikasi_resume.pdf'

export const siteContent = {
  resumeHref,
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'off-the-clock', label: 'Outside of work' },
    { id: 'contact', label: 'Contact' },
  ] satisfies NavItem[],

  hero: {
    eyebrow: '',
    headline: ['Hey, I’m', 'Mani Kasi'],
    tagline: 'I like turning ideas into things people can use.',
    paragraphs: [
      'I’m a Computer Science student at Carleton University with a minor in Business, interested in software development, design, and building things that solve real problems.',
      'From developing production software to creating a clothing brand on the side, I enjoy taking ideas from an initial concept to something tangible.',
    ],
    affiliations: [
      { role: 'Computer Science (Graduating Aug 2027)', org: 'Carleton University' },
      { role: 'Software Developer Co-op', org: 'Warner Bros. Discovery' },
    ],
    portrait: {
      src: '/me.jpg',
      alt: 'Portrait of Mani Kasi',
      treatment: 'none',
    },
    links: [
      { label: 'LinkedIn', href: linkedIn },
      { label: 'GitHub', href: gitHub },
      { label: 'Email', href: `mailto:${email}` },
      { label: 'Resume', href: resumeHref },
    ],
  } satisfies HeroContent,

  experienceItems: [
    {
      company: 'Warner Bros. Discovery',
      role: 'Software Developer Co-op',
      date: 'May 2026 – Present',
      summary:
        'Contributing to Android development for HBO, working on product features, bug fixes, and collaborative software development within a production codebase.',
      technologies: ['Android', 'Kotlin', 'Software Development'],
    },
    {
      company: 'Ciena',
      role: 'Software Developer, Front-End UI/UX Co-op',
      date: 'September 2024 – April 2025',
      summary:
        'Developed and shipped production UI features for Navigator Network Control, working with Ember and TypeScript to improve front-end functionality and user experience.',
      technologies: ['Ember', 'TypeScript', 'JavaScript'],
    },
    {
      company: 'Ross Video',
      role: 'Software Developer Co-op — C',
      date: 'September 2023 – December 2023',
      summary:
        'Built and maintained C-based protocol tooling and simulator workflows, focusing on reliability and developer testing.',
      technologies: ['C', 'VBScript', 'Docklight'],
    },
    {
      company: 'ULM Promotions',
      role: 'Managing Partner',
      date: 'June 2023 – November 2024',
      summary: 'Supported promotional campaigns, digital content, and day-to-day business operations.',
    },
  ] satisfies ExperienceItem[],

  projectItems: [
    {
      number: '01',
      title: 'Pattern Visualizer',
      category: 'Full-stack web app / Creative development',
      description: [
        'I built a 3D pattern visualization tool for my clothing brand, SEVR, to preview fabric designs on a pants model before committing to physical samples. The app includes controls for pattern scale, tiling, lighting, and exporting designs.',
      ],
      tagsLabel: 'Built with',
      tags: ['React', 'TypeScript', 'React Three Fiber', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
      media: {
        src: '/projects/pattern-visualizer.gif',
        alt: 'Screenshot of the Pattern Visualizer app showing a 3D pants model with a custom fabric pattern applied',
        caption: '',
        ratio: '16/9',
      },
      links: [
        { label: 'GitHub repository', href: 'https://github.com/mani-kasi/pattern-visualizer' },
      ],
      story: {
        eyebrow: '(TikTok, 20k views)',
        title: 'Why I built this.',
        href: 'https://www.tiktok.com/@mannywithani/video/7597881905840753927',
      },
    },
    {
      number: '02',
      title: 'Terrain Amplification Pipeline',
      category: 'Graphics / Terrain processing',
      description: [
        'A terrain processing pipeline exploring multi-scale amplification and erosion-style operators on heightfields, with an emphasis on controllable parameters and visual quality.',
      ],
      tagsLabel: 'Built with',
      tags: ['C++', 'OpenGL'],
      media: {
        // Existing asset from the current site (public/projects/terrain-pipeline.gif).
        // For a lighter page, export a short muted loop to public/projects/terrain-pipeline.mp4
        // and set `video: '/projects/terrain-pipeline.mp4'` — the GIF then becomes the poster.
        src: '/projects/terrain-pipeline.gif',
        alt: 'Looping capture of the terrain amplification pipeline rendering an amplified heightfield',
        caption: '',
        ratio: '16/10',
      },
      links: [
        {
          label: 'GitHub repository',
          href: 'https://github.com/mani-kasi/Terrain-Amplification-Pipeline',
        },
      ],
    },
    {
      number: '03',
      title: 'Notedown',
      category: 'Product design / Team project',
      description: [
        'A collaborative product design competition project developed with two teammates. We explored an assigned problem through brainstorming, user research and interviews, refined our direction through a pivot, and developed an MVP.',
        'The experience introduced me to product design and the process of translating user insights into a tangible solution.',
      ],
      tagsLabel: 'Process',
      tags: ['Brainstorming', 'User research', 'Interviews', 'Pivot', 'MVP'],
      media: {
        alt: 'YouTube thumbnail for the NoteDown MVP demo video',
        caption: '',
        ratio: '16/9',
        play: {
          href: 'https://www.youtube.com/watch?v=DaAfSbBw4b0',
          label: 'Watch the NoteDown demo on YouTube',
          linkLabel: 'Watch the demo video',
        },
      },
      links: [],
    },
  ] satisfies ProjectItem[],

  offTheClock: {
    headline: 'What I do outside of software',
    description:
      'Outside of software, I’m usually making videos, running or more recently, bouldering! I enjoy fashion design, videography, and experimenting with creative projects.',
    video: {
      title: 'My New York City Recap — Mini Vlog',
      description:
        'A little travel montage I put together of my recent trip, capturing some of my favourite moments from exploring the city!',
      href: 'https://www.youtube.com/watch?v=plhLZa835uI',
    },
  } satisfies OffTheClockContent,

  contact: {
    headline: 'Have something interesting in mind?',
    description:
      'I’m always open to interesting projects, conversations, and opportunities. Feel free to reach out!',
    email,
    socialLinks: [
      { label: 'LinkedIn', href: linkedIn },
      { label: 'GitHub', href: gitHub },
    ],
  } satisfies ContactContent,
}
