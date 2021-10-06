import JApp from '@/components/JApp.vue'
import JIcon from '@/components/JIcon.vue'

export default {
  title: 'Components/Icon',
  component: JIcon,
  argTypes: {
    // props
    color: {
      description: '指定された色をアイコンに適用します。',
    },
    size: {
      description: '指定された大きさをアイコンに適用します。',
    },
    // events
    // slots
    default: {
      description: '表示するアイコンの名前です。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JApp, JIcon },
  template: `
    <j-app no-stretch>
      <j-icon v-bind="$props">home</j-icon>
    </j-app>
    `,
})
export const Default = Template.bind({})
Default.args = {}
