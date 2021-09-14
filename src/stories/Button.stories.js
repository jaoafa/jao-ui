import JApp from '@/components/JApp.vue'
import JButton from '@/components/JButton.vue'

export default {
  title: 'Components/Button',
  component: JButton,
  argTypes: {
    // props
    color: {
      description: '指定された色をボタンに適用します。',
    },
    disabled: {
      description: 'ボタンをクリックできないようにします。',
    },
    href: {
      description: 'タグを `<a>` にし、 `href` 属性を追加します。',
    },
    icon: {
      description: 'ボタンをアイコンとして指定し、形状を円形にします。',
    },
    loading: {
      description: 'ローディングアニメーションを表示します。',
    },
    nuxt: {
      description: 'タグを `<nuxt-link>` にします。',
    },
    outlined: {
      description: '背景を透明にし、枠線を追加します。',
    },
    size: {
      description:
        '指定された大きさをボタンに適用します。 `large` 、 `medium` 、 `small` の3サイズがあります。',
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    tag: {
      description: '指定されたタグをボタンに適用します。',
    },
    target: {
      description:
        '指定された値を `target` 属性としてコンポーネントに追加します。',
    },
    to: {
      description: 'ボタンを `<router-link>` にし、 `to` Prop を適用します。',
    },
    // events
    click: {
      description: 'コンポーネントがクリックされたときに発生するイベントです。',
      action: 'click',
    },
    // slots
    default: {
      description: 'ボタンのテキストです。',
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
  components: { JApp, JButton },
  template: `
    <j-app>
      <j-button @click="click" v-bind="$props">
        Button
      </j-button>
    </j-app>
    `,
})

export const Default = Template.bind({})
Default.args = {}
