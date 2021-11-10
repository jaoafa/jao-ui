import { JApp } from '@/components/JApp'
import JProgressBar from './JProgressBar.vue'

export default {
  title: 'Components/ProgressBar',
  component: JProgressBar,
  argTypes: {
    // props
    absolute: {},
    color: {},
    indeterminate: {},
    percentage: {},
    stroke: {},
    // events
    // slots
  },
  args: {
    indeterminate: true,
  },
}

export const Basic = (args) => ({
  components: { JApp, JProgressBar },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-progress-bar v-bind="args" />
    </j-app>
  `,
})