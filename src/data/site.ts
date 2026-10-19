/**
 * Site-wide configuration.
 */

export interface SiteLinks {
  upwork: string
  email: string
  github: string
  linkedin: string
}

export interface SiteConfig {
  name: string
  initials: string
  title: string
  tagline: string
  links: SiteLinks
}

export const siteConfig: SiteConfig = {
  /** Your full display name */
  name: 'Darshaka Lanka',

  /** Shown in the navbar logo area */
  initials: 'DL',

  /** Your professional title */
  title: 'Senior Frontend Developer',

  /** One-line tagline used under the name */
  tagline: 'I build digital experiences that feel effortless.',

  /**
   * Social & contact links.
   * If a field is empty (""), it is safely hidden from the UI.
   */
  links: {
    upwork: 'https://www.upwork.com/freelancers/~01ec7a2813e79f8a68',
    email: 'mailto:dwlanka.pro@gmail.com',
    github: 'https://github.com/Dlanka',
    linkedin: 'https://www.linkedin.com/in/darshaka-lanka-2150b8102',
  },
}
