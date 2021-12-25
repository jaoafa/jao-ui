import { JApp, JAppMain } from '@/components/JApp'
import JBreadcrumbs from './JBreadcrumbs.vue'

export default {
  title: 'Components/JBreadcrumbs',
  component: JBreadcrumbs,
  argTypes: {
    // props
    items: {
      table: {
        type: {
          detail:
            '{\n  disabled: boolean\n  href: string\n  label: string\n  nuxt: boolean\n  to: string\n}',
        },
        defaultValue: {
          summary: '[]',
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
