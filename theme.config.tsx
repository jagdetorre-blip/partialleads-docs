import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><strong>PartialLeads</strong> Docs</span>,
  project: { link: 'https://partialleads.com' },
  docsRepositoryBase: 'https://partialleads.com',
  footer: { text: '© Ausome Software Publishing' },
  useNextSeoProps() {
    return { titleTemplate: '%s – PartialLeads Docs' }
  },
}

export default config
