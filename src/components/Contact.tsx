import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

interface ContactLinkProps {
  href: string
  label: string
  sublabel: string
  icon: React.ReactNode
  primary?: boolean
}

function ContactLink({ href, label, sublabel, icon, primary }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem 1.5rem',
        borderRadius: 12,
        border: `1px solid ${primary ? 'rgba(184,161,255,0.3)' : 'var(--color-border)'}`,
        background: primary ? 'rgba(184,161,255,0.06)' : 'var(--color-surface)',
        textDecoration: 'none',
        transition: 'border-color var(--transition-base), box-shadow var(--transition-base), background var(--transition-base)',
        flex: 1,
        minWidth: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--color-accent-dim)'
        el.style.boxShadow = '0 0 20px rgba(184,161,255,0.1)'
        el.style.background = 'rgba(184,161,255,0.08)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = primary ? 'rgba(184,161,255,0.3)' : 'var(--color-border)'
        el.style.boxShadow = 'none'
        el.style.background = primary ? 'rgba(184,161,255,0.06)' : 'var(--color-surface)'
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: primary ? 'rgba(184,161,255,0.15)' : 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-accent)',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>
          {label}
        </p>
        <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
          {sublabel}
        </p>
      </div>
      <ArrowUpRight size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} aria-hidden="true" />
    </a>
  )
}

/* ─── Upwork SVG icon ──────────────────────────────────────────────────────── */
function UpworkIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  )
}

export default function Contact() {
  const { email, upwork } = siteConfig.links

  const availableLinks: ContactLinkProps[] = []

  if (upwork) {
    availableLinks.push({
      href: upwork,
      label: 'Hire me on Upwork',
      sublabel: 'upwork.com',
      icon: <UpworkIcon size={20} />,
      primary: true,
    })
  }

  if (email) {
    availableLinks.push({
      href: email,
      label: 'Send me an email',
      sublabel: email.replace('mailto:', ''),
      icon: <Mail size={20} />,
    })
  }

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="contact-glow" aria-hidden="true" />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label" aria-hidden="true" style={{ justifyContent: 'center', display: 'flex' }}>
            Let's work together
          </p>
          <h2 id="contact-heading" className="section-heading">
            Ready to start a project?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            I'm currently open to new freelance projects. Whether you need a product built from the ground up or
            an existing codebase improved, reach out and let's talk.
          </p>

          {availableLinks.length > 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              {availableLinks.map((link) => (
                <ContactLink key={link.href} {...link} />
              ))}
            </div>
          ) : (
            /* Shown only when all links are unconfigured */
            <div
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                padding: '1.5rem',
                maxWidth: 480,
                margin: '0 auto',
              }}
              role="note"
              aria-label="Contact configuration needed"
            >
              <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                <strong style={{ color: 'var(--color-accent)' }}>Configuration needed:</strong>{' '}
                Add your Upwork profile URL and email address to{' '}
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    background: 'var(--color-bg)',
                    padding: '0.1em 0.4em',
                    borderRadius: 4,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  src/data/site.ts
                </code>{' '}
                to enable contact links.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
