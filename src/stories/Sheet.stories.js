import JApp from '@/components/JApp.vue'
import JSheet from '@/components/JSheet.vue'

export default {
  title: 'Components/Sheet',
  component: JSheet,
  argTypes: {
    // props
    color: {
      description: '指定された色をコンポーネントに適用します。',
    },
    flat: {
      description: 'コンポーネントの外側の影を削除します。',
    },
    height: {
      description: '指定された高さをコンポーネントに適用します。',
    },
    maxHeight: {
      description: '指定された高さの最大値をコンポーネントに適用します。',
    },
    maxWidth: {
      description: '指定された幅の最大値をコンポーネントに適用します。',
    },
    minHeight: {
      description: '指定された高さの最小値をコンポーネントに適用します。',
    },
    minWidth: {
      description: '指定された幅の最小値をコンポーネントに適用します。',
    },
    tag: {
      description: '指定されたタグをコンポーネントに適用します。',
    },
    tile: {
      description: 'コンポーネントの角を角丸にしないようにします。',
    },
    width: {
      description: '指定された幅をコンポーネントに適用します。',
    },
    // events
    // slots
    default: {
      description: 'コンポーネントの中に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JApp, JSheet },
  template: `
    <j-app no-stretch>
      <j-sheet v-bind="$props" />
    </j-app>
  `,
})

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  width: '320px',
  height: '160px',
}
