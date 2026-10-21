import { ExternalLink } from 'lucide-react'
import { webProjects, emailProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="projects-heading">
      <div className="section-inner">
        {/* Main Section Header */}
        <p className="section-label" aria-hidden="true">Selected work</p>
        <h2 id="projects-heading" className="section-heading">
          Projects I'm proud of
        </h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          A selection of personal and freelance projects demonstrating real-world React, TypeScript, and responsive email development.
        </p>

        {/* Sub-section 1: Web Applications */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.01em',
                  margin: '0 0 0.25rem',
                }}
              >
                Web Applications
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                Production-focused web apps built with modern React, TypeScript, and Next.js.
              </p>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
              }}
            >
              03 Projects
            </span>
          </div>

          {/* Web Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Sub-section 2: Email Template & Signature Development */}
        <div
          style={{
            paddingTop: '3.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <p
                  className="section-label"
                  style={{
                    marginBottom: '0.35rem',
                    color: 'var(--color-accent)',
                  }}
                >
                  Specialized Development
                </p>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.01em',
                    margin: '0 0 0.25rem',
                  }}
                >
                  Email Template &amp; Signature Development
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    maxWidth: '640px',
                  }}
                >
                  Responsive HTML emails built with MJML and corporate HTML email signatures tested for bulletproof rendering across Gmail, Outlook, Apple Mail, and mobile clients.
                </p>
              </div>

              <a
                href="https://dlanka-emails.pages.dev"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  gap: '0.4rem',
                }}
              >
                <span>All Email Work</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Email Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {emailProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
