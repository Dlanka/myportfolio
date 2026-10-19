import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="card group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)',
      }}
      aria-label={`Project: ${project.name}`}
    >
      {/* Real Screenshot Preview */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          aspectRatio: '16 / 9.5',
          background: 'var(--color-surface-2)',
        }}
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.name} interface`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
            transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="project-image"
          loading="lazy"
        />

        {/* Ambient top & bottom subtle dark vignetting for premium contrast */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(9, 10, 15, 0.15) 0%, transparent 25%, transparent 75%, rgba(9, 10, 15, 0.45) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle accent bar at top of preview */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: project.accent,
            opacity: 0.85,
            zIndex: 1,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        {/* Name + live link */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h3>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} live demo (opens in new tab)`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'opacity var(--transition-base), transform var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '0.8'
              el.style.transform = 'translateX(2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.opacity = '1'
              el.style.transform = 'translateX(0)'
            }}
          >
            Live demo
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.25rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={{
                color: project.accent,
                borderColor: `${project.accent}28`,
                background: `${project.accent}0a`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
