import JProgressBar from '@/components/JProgressBar.vue'

export default {
  title: 'Components/Progress',
  component: JProgressBar,
  argTypes: {
    // props
    absolute: {
      description: 'コンポーネントに `position:absolute;` を適用します。',
    },
    color: {
      description: '指定された色をコンポーネントに適用します。',
    },
    indeterminate: {
      description: 'アニメーションを適用します。',
    },
    percentage: {
      description: 'パーセントの値を指定します。',
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
  components: { JProgressBar },
  template: `
    <j-progress-bar v-bind="$props" />
    `,
})

export const Bar = Template.bind({})
Bar.args = {
  indeterminate: true,
}
