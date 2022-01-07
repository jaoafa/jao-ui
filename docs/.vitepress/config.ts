import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/jao-ui/' : '/',
  lang: 'ja',
  title: '💣 jao UI Library',
  description: 'jao UI Components with Vue.js.',
  themeConfig: {
    repo: 'jaoafa/jao-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'GitHubで編集を提案',
    lastUpdated: '最終更新',
    nav: [
      {
        text: 'Storybook',
        link: '/storybook/',
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/jaoafa/jao-ui/releases',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          link: '/',
          children: [{ text: 'Getting Started', link: '/getting-started' }],
        },
        {
          text: 'Components',
          children: [
            { text: 'App', link: '/components/app' },
            { text: 'AppHeader', link: '/components/app-header' },
            { text: 'AppMain', link: '/components/app-main' },
            { text: 'AppSidebar', link: '/components/app-sidebar' },
            { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
            { text: 'Button', link: '/components/button' },
            { text: 'Card', link: '/components/card' },
            { text: 'Col', link: '/components/col' },
            { text: 'Containier', link: '/components/container' },
            { text: 'Icon', link: '/components/icon' },
            { text: 'Image', link: '/components/image' },
            { text: 'Input', link: '/components/input' },
            { text: 'Pagination', link: '/components/pagination' },
            { text: 'ProgressBar', link: '/components/progress-bar' },
            { text: 'ProgressCircle', link: '/components/progress-circle' },
            { text: 'Row', link: '/components/row' },
            { text: 'Sheet', link: '/components/sheet' },
            { text: 'Spacer', link: '/components/spacer' },
            { text: 'Table', link: '/components/table' },
            { text: 'TableHeader', link: '/components/table-header' },
            { text: 'TableFooter', link: '/components/table-footer' },
            { text: 'TextField', link: '/components/text-field' },
            { text: 'Textarea', link: '/components/textarea' },
          ],
        },
        {
          text: 'Utilities',
          children: [
            { text: 'Spacing', link: '/utilities/spacing' },
            { text: 'Typography', link: '/utilities/typography' },
          ],
        },
      ],
    },
  },
})
