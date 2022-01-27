import { JApp, JAppMain } from '@/components/JApp'
import JBreadcrumbs from './JBreadcrumbs.vue'

export default {
  title: 'Components/JBreadcrumbs',
  component: JBreadcrumbs,
  argTypes: {
    // props
    items: {
      description: 'パンくずリストに表示する項目を配列で指定します。',
      table: {
        type: {
          summary: 'array',
          detail:
            '{\n  disabled?: boolean\n  href?: string\n  label: string\n  nuxt?: boolean\n  to?: string\n}',
        },
        defaultValue: {
          summary: '[]',
        },
      },
    },
    nuxt: {
      description: 'リンクを <nuxt-link> にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    // events
    // slots
  },
  args: {
    items: [
      { label: 'Dashboard', href: '/' },
      { label: 'Page1', href: '/category' },
      { label: 'Page2', href: '/category/page', disabled: true },
    ],
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JBreadcrumbs },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-breadcrumbs v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
