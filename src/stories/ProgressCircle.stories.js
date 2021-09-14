import JApp from '@/components/JApp.vue'
import JProgressCircle from '@/components/JProgressCircle.vue'

export default {
  title: 'Components/Progress',
  component: JProgressCircle,
  argTypes: {
    // props
    color: {
      description: '指定された色をコンポーネントに適用します。',
    },
    indeterminate: {
      description: 'アニメーションを適用します。',
    },
    percentage: {
      description: 'パーセントの値を指定します。',
    },
    size: {
      description: 'コンポーネントの大きさを指定します。',
    },
    stroke: {
      description: '図形の線の太さを指定します。',
    },
    // events
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JApp, JProgressCircle },
  template: `
    <j-app>
      <j-progress-circle v-bind="$props" />
    </j-app>
    `,
})

export const Circle = Template.bind({})
Circle.args = {
  indeterminate: true,
}
