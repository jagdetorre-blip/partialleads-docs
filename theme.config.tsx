import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
      PartialLeads{' '}
      <span style={{ fontWeight: 500, opacity: 0.55 }}>Docs</span>
    </span>
  ),
  project: { link: 'https://partialleads.com' },
  docsRepositoryBase: 'https://github.com/jagdetorre-blip/partialleads-docs',
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
  },
  color: {
    hue: 217,
    saturation: 91,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    content: (
      <span style={{ fontSize: '0.85rem', opacity: 0.65 }}>
        PartialLeads by Ausome Software Publishing
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="PartialLeads Docs" />
      <meta
        property="og:description"
        content="Documentation for PartialLeads — capture partial form submissions and route them to ad platforms in real time."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  ),
  useNextSeoProps() {
    return { titleTemplate: '%s – PartialLeads Docs' }
  },
  feedback: { content: null },
  editLink: { content: null },
}

export default config
