import { navLinks, siteConfig } from '../../config/siteConfig'

const JsonLd = () => {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.metadata.siteUrl,
    sameAs: siteConfig.socials.map((social) => social.href),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
      addressCountry: 'Canada',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.metadata.title,
    url: siteConfig.metadata.siteUrl,
    description: siteConfig.metadata.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    inLanguage: 'en-CA',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: navLinks.map((link, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: link.label,
      item: `${siteConfig.metadata.siteUrl}#${link.id}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

export default JsonLd
