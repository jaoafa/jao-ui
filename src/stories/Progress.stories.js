import JProgress from '@/components/JProgress.vue'

export default {
  title: 'Components/Progress',
  component: JProgress,
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
    type: {
      description: '図形の形状を指定します。',
      control: {
        type: 'select',
        options: [
          'circle',
        ],
      },
    },
    // events
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JProgress },
  template:
    `
    <j-progress v-bind="$props" />
    `,
})

export const Circular = Template.bind({})
Circular.args = {
  indeterminate: true,
}
