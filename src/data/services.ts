export interface Service {
  id: string
  title: string
  description: string
  icon: 'code' | 'layout' | 'smartphone' | 'wrench'
}

export const services: Service[] = [
  {
    id: 'react-ts',
    title: 'React / TypeScript Development',
    description:
      'Building scalable, maintainable frontend applications using React and TypeScript. From architecture design to component implementation, with a focus on performance and code quality.',
    icon: 'code',
  },
  {
    id: 'figma-to-react',
    title: 'Figma to Responsive React UI',
    description:
      'Translating high-fidelity Figma designs into pixel-perfect, fully responsive React interfaces — faithful to the design while built for real-world edge cases.',
    icon: 'layout',
  },
  {
    id: 'responsive-ui',
    title: 'Responsive Design & UI Improvements',
    description:
      'Auditing and improving existing interfaces for responsiveness, accessibility, and visual consistency across all screen sizes and devices.',
    icon: 'smartphone',
  },
  {
    id: 'maintenance',
    title: 'Frontend Bug Fixing & Maintenance',
    description:
      'Diagnosing and resolving bugs in existing React codebases, improving stability, performance, and developer experience across the codebase.',
    icon: 'wrench',
  },
]

export const skills: string[] = [
  'React',
  'TypeScript',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'TanStack Query',
  'TanStack Table',
  'Zustand',
  'React Native',
  'REST APIs',
  'Component Architecture',
  'Responsive UI',
]
