import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '50+', label: 'Projects delivered' },
  { value: '100%', label: 'Remote-first' },
]

const skills = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Zustand']

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const emailHref = siteConfig.links.email || null

  return (
    <section
      id="home"
      aria-label="Introduction"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 1.5rem 5rem',
      }}
    >
      {/* Background Image: right aligned, mirrored (scaleX(-1)) to look into text, height 100% */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '55%',
          maxWidth: '750px',
          minWidth: '320px',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="/darshaka.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            transform: 'scaleX(-1)', // Mirrored so you look inward toward the headline & content
            filter: 'grayscale(35%) contrast(1.1) brightness(0.65)',
            opacity: 0.55,
          }}
        />

        {/* Seamless left-to-right fade overlay so the photo melts into the dark background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, var(--color-bg) 0%, rgba(9, 10, 15, 0.85) 30%, rgba(9, 10, 15, 0.25) 70%, rgba(9, 10, 15, 0.7) 100%)',
          }}
        />

        {/* Top and bottom fade masks to integrate with navbar and next section */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, var(--color-bg) 0%, transparent 15%, transparent 80%, var(--color-bg) 100%)',
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--color-border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '680px' }}>
          {/* Eyebrow */}
          <p className="hero-eyebrow">
            Available for freelance &amp; contracts
          </p>

          {/* Main headline */}
          <h1 className="hero-title">
            I build digital experiences<br />
            that feel <span className="highlight">effortless.</span>
          </h1>

          {/* Supporting text */}
          <p className="hero-desc">
            I'm {siteConfig.name}, a Senior Frontend Engineer with 10+ years of experience, focused on
            building modern, scalable web applications with React, TypeScript and Next.js.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
            <button
              onClick={() => scrollTo('#work')}
              className="btn btn-primary"
              aria-label="Explore my selected projects"
            >
              Explore my work
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            {emailHref ? (
              <a
                href={emailHref}
                className="btn btn-secondary"
                aria-label="Send me an email"
              >
                <Mail size={16} aria-hidden="true" />
                Get in touch
              </a>
            ) : (
              <button
                onClick={() => scrollTo('#contact')}
                className="btn btn-secondary"
                aria-label="Go to the contact section"
              >
                <Mail size={16} aria-hidden="true" />
                Get in touch
              </button>
            )}
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
            {skills.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="stat-grid" style={{ marginTop: '2.75rem' }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-pill">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
