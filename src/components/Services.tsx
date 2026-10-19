import { Code2, Layout, Smartphone, Wrench } from 'lucide-react'
import { services, type Service } from '../data/services'

const iconMap: Record<Service['icon'], React.FC<{ size: number }>> = {
  code: Code2,
  layout: Layout,
  smartphone: Smartphone,
  wrench: Wrench,
}

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="section-inner">
        <p className="section-label" aria-hidden="true">What I offer</p>
        <h2 id="services-heading" className="section-heading">
          Services
        </h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          Focused frontend expertise — from greenfield builds to targeted improvements on existing products.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div className="service-icon-wrap" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0 0 0.5rem',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
