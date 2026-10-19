import { skills } from '../data/services'
import { siteConfig } from '../data/site'

interface ExperienceItem {
  period: string
  role: string
  company: string
  points: string[]
  keyProject?: {
    name: string
    details: string[]
  }
}

const experiences: ExperienceItem[] = [
  {
    period: 'Sep 2022 — Mar 2026',
    role: 'Senior Frontend Developer',
    company: 'Futura Tech Labs (PVT) Ltd',
    points: [
      'Led frontend development for enterprise SaaS platform and designed scalable UI architecture from scratch.',
      'Integrated React Query, TanStack Table, and Zustand for robust state management and efficient server caching.',
      'Ensured full mobile responsiveness, accessibility, and modular component architecture.',
    ],
    keyProject: {
      name: 'Ziksa LMS',
      details: [
        'Built entire frontend from zero level and developed a reusable UI component library.',
        'Implemented authentication (login/signup), onboarding workflows, course summary & creation system.',
        'Ensured comprehensive mobile responsiveness across all device viewports.',
      ],
    },
  },
  {
    period: 'Jun 2019 — Apr 2022',
    role: 'Frontend Developer',
    company: 'LAYOUTindex (PVT) LTD',
    points: [
      'Developed responsive web applications using React, Next.js, and Laravel.',
      'Built cross-platform mobile applications using React Native.',
      'Converted Figma designs into pixel-perfect, accessible user interfaces.',
      'Improved website performance, rendering efficiency, and loading speed for production systems.',
    ],
  },
  {
    period: 'Jul 2015 — Dec 2017',
    role: 'Frontend Developer',
    company: 'Infoseek (PVT) LTD',
    points: [
      'Contributed to the development of Mint HRM, a comprehensive cloud-based HR system.',
      'Revamped user interfaces utilizing HTML5, SCSS, jQuery, and Webpack.',
      'Built reusable UI components and significantly improved UX consistency across modules.',
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio & Skills */}
          <div>
            <p className="section-label" aria-hidden="true">About me</p>
            <h2 id="about-heading" className="section-heading">
              A frontend developer who cares about the craft
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <p style={{ margin: 0, fontSize: '1.0625rem', color: 'var(--color-text-primary)', lineHeight: 1.7, fontWeight: 500 }}>
                I'm {siteConfig.name}, a Senior Frontend Engineer with 10+ years of hands-on experience building scalable, high-performance web and mobile applications using React, Next.js, TypeScript, and modern JavaScript ecosystems.
              </p>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                My core expertise centers around crafting modular, reusable UI systems, architecting frontend state solutions (Zustand, TanStack Query), and translating complex product requirements into intuitive, fluid digital experiences. Having steered frontend foundations for enterprise-level SaaS platforms, I know how to balance rapid feature delivery with long-term code maintainability.
              </p>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                I treat UI development as an engineering discipline where performance, accessibility (a11y), responsive nuances, and pixel fidelity matter equally. Whether collaborating with cross-functional distributed teams or owning an application from zero to production, I prioritize clear technical communication, developer ergonomics, and measurable user value.
              </p>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                Available for selective freelance engagements, greenfield builds, and technical advisory. If you are building an ambitious product or need a dependable senior engineer to elevate your frontend, let's talk.
              </p>
            </div>

            {/* Skills */}
            <div style={{ marginTop: '2.5rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1rem',
                }}
              >
                Core Technologies &amp; Architecture
              </p>
              <div className="skill-grid">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      color: 'var(--color-accent)',
                      borderColor: 'rgba(184,161,255,0.2)',
                      background: 'rgba(184,161,255,0.06)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience timeline */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              Work Experience
            </p>

            <ol
              role="list"
              style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
            >
              {experiences.map((item, i) => (
                <li
                  key={item.company}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingBottom: i < experiences.length - 1 ? '2.5rem' : '0',
                  }}
                >
                  {/* Timeline stem */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        border: '2px solid var(--color-bg)',
                        marginTop: 5,
                        flexShrink: 0,
                        boxShadow: '0 0 10px rgba(184,161,255,0.4)',
                      }}
                    />
                    {i < experiences.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          background: 'var(--color-border)',
                          marginTop: 6,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        margin: '0 0 0.25rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.period}
                    </p>
                    <h3
                      style={{
                        margin: '0 0 0.125rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        fontSize: '1.0625rem',
                      }}
                    >
                      {item.role}
                    </h3>
                    <p
                      style={{
                        margin: '0 0 0.75rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                      }}
                    >
                      {item.company}
                    </p>

                    <ul
                      style={{
                        margin: '0 0 0.75rem',
                        paddingLeft: '1.125rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {item.points.map((pt, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.55,
                          }}
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {item.keyProject && (
                      <div
                        style={{
                          marginTop: '0.75rem',
                          padding: '0.875rem 1rem',
                          borderRadius: 8,
                          background: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span
                            className="tag"
                            style={{
                              fontSize: '0.625rem',
                              padding: '0.15rem 0.5rem',
                              color: 'var(--color-accent)',
                              borderColor: 'rgba(184,161,255,0.3)',
                              background: 'rgba(184,161,255,0.08)',
                            }}
                          >
                            Key Project
                          </span>
                          <span
                            style={{
                              fontSize: '0.875rem',
                              fontWeight: 700,
                              color: 'var(--color-text-primary)',
                            }}
                          >
                            {item.keyProject.name}
                          </span>
                        </div>
                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: '1.125rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.3rem',
                          }}
                        >
                          {item.keyProject.details.map((detail, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: '0.8125rem',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.5,
                              }}
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
