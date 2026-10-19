import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="projects-heading">
      <div className="section-inner">
        {/* Header */}
        <p className="section-label" aria-hidden="true">Selected work</p>
        <h2 id="projects-heading" className="section-heading">
          Projects I'm proud of
        </h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          A selection of personal and freelance projects demonstrating real-world React and TypeScript development.
        </p>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
