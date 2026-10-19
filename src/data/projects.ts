export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tags: string[]
  liveUrl: string
  /** Set to "" if no real repo URL — hides GitHub link */
  repoUrl: string
  /** Accent colour used for the card's visual highlights */
  accent: string
  /** Path to screenshot in public/ folder */
  image: string
}

export const projects: Project[] = [
  {
    id: 'financeos',
    name: 'FinanceOS',
    description:
      'A finance dashboard project showcasing modern interface design and data presentation.',
    longDescription:
      'A comprehensive financial management interface built with React and TypeScript. Features real-time data visualisations, responsive table layouts, and a clean dark-themed design system.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dashboard', 'Data Viz'],
    liveUrl: 'https://financeos-live.vercel.app/',
    repoUrl: '',
    accent: '#4ade80',
    image: '/financeos.png',
  },
  {
    id: 'nexus-cloud',
    name: 'Nexus Cloud',
    description:
      'A SaaS workspace onboarding experience focused on clear user flows and responsive interface design.',
    longDescription:
      'A polished SaaS onboarding flow designed to reduce friction and guide new users through workspace setup. Emphasises clear information hierarchy, step indicators, and accessible form design.',
    tags: ['React', 'TypeScript', 'Next.js', 'SaaS', 'UI/UX'],
    liveUrl: 'https://nexus-workspace-onboarding.vercel.app/',
    repoUrl: '',
    accent: '#60a5fa',
    image: '/nexus-cloud.png',
  },
  {
    id: 'bakecost',
    name: 'BakeCost',
    description:
      'A cake pricing calculator project focused on forms, cost calculations, and usability.',
    longDescription:
      'A practical pricing tool for bakers that handles ingredient costs, portion sizing, and markup calculations. Demonstrates form-heavy UX design, input validation, and real-time computed outputs.',
    tags: ['React', 'TypeScript', 'Forms', 'Calculator', 'UX'],
    liveUrl: 'https://cakepricer.vercel.app/',
    repoUrl: '',
    accent: '#fb923c',
    image: '/bakecost.png',
  },
]
