import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/site'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    // Small delay lets menu close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
        <nav className="navbar-inner" aria-label="Primary navigation">
          {/* Logo */}
          <a
            href="#"
            aria-label={`${siteConfig.name} — home`}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: 'var(--color-accent-glow)',
                border: '1px solid rgba(184,161,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                flexShrink: 0,
              }}
            >
              {siteConfig.initials}
            </span>
            <span
              style={{
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: 'var(--color-text-primary)',
              }}
            >
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul
            role="list"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              margin: 0,
              padding: 0,
              listStyle: 'none',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-base)',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-secondary)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.125rem', fontSize: '0.875rem' }}
              >
                Hire me
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              padding: '0.5rem',
            }}
            className="show-mobile"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            style={{ marginTop: '0.5rem' }}
          >
            Hire me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 680px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 679px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
