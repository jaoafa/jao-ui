import { JApp, JAppMain } from '@/components/JApp'
import JProgressBar from './JProgressBar.vue'

export default {
  title: 'Components/ProgressBar',
  component: JProgressBar,
  argTypes: {
    // props
    absolute: {
      description: 'コンポーネントに position:absolute; を適用します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
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
  components: { JApp, JAppMain, JProgressBar },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-progress-bar v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
