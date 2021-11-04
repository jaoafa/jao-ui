import { JApp } from '@/components/JApp'
import JProgressCircle from './JProgressCircle.vue'

export default {
  title: 'Components/ProgressCircle',
  component: JProgressCircle,
  argTypes: {
    // props
    color: {},
    indeterminate: {},
    percentage: {},
    size: {},
    stroke: {},
    // events
    // slots
  },
  args: {
    indeterminate: true,
  },
}

export const Basic = (args) => ({
  components: { JApp, JProgressCircle },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-progress-circle v-bind="args" />
    </j-app>
  `,
})
