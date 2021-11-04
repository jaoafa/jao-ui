import { JApp } from '@/components/JApp'
import JSheet from './JSheet.vue'

export default {
  title: 'Components/Sheet',
  component: JSheet,
  argTypes: {
    // props
    color: {},
    flat: {},
    height: {},
    maxHeight: {},
    maxWidth: {},
    minHeight: {},
    minWidth: {},
    tag: {},
    tile: {},
    width: {},
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
    default: 'Sheet Content',
  },
}

export const Basic = (args) => ({
  components: { JApp, JSheet },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-sheet v-bind="args">
        ${args.default}
      </j-sheet>
    </j-app>
  `,
})
