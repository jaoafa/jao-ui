import { JApp, JAppMain } from '@/components/JApp'
import JIcon from './JIcon.vue'

export default {
  title: 'Components/Icon',
  component: JIcon,
  argTypes: {
    // props
    color: {},
    size: {},
    // events
    // slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    default: 'home',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JIcon },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-icon v-bind="args">${args.default}</j-icon>
      </j-app-main>
    </j-app>
  `,
})
