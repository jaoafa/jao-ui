import { JApp, JAppMain } from '@/components/JApp'
import JProgressCircle from './JProgressCircle.vue'

export default {
  title: 'Components/ProgressCircle',
  component: JProgressCircle,
  argTypes: {
    // props
    color: {
      description: '指定された色をコンポーネントに適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    indeterminate: {
      description: 'アニメーションを適用します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    percentage: {
      description: 'パーセントの値を指定します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    size: {
      description: 'コンポーネントの大きさを指定します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    stroke: {
      description: '図形の線の太さを指定します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    // events
    // slots
  },
  args: {
    indeterminate: true,
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JProgressCircle },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-progress-circle v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
