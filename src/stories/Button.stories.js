import JButton from '@/components/JButton.vue'

export default {
  title: 'Components/Button',
  component: JButton,
  argTypes: {
    // props
    color: {
      description: '指定された色をボタンに適用します。',
      defaultValue: 'primary',
    },
    disabled: {
      description: 'ボタンをクリックできないようにします。',
      defaultValue: false,
    },
    icon: {
      description: 'ボタンをアイコンとして指定し、形状を円形にします。',
      defaultValue: false,
    },
    loading: {
      description: 'ローディングアニメーションを表示します。',
      defaultValue: false,
    },
    nuxt: {
      description: 'タグを `<nuxt-link>` にします。',
      defaultValue: false,
    },
    outlined: {
      description: '背景を透明にし、枠線を追加します。',
      defaultValue: false,
    },
    size: {
      description: '指定された大きさをボタンに適用します。 `large` 、 `medium` 、 `small` の3サイズがあります。',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: [
          'large',
          'medium',
          'small',
        ],
      },
    },
    tag: {
      description: '指定されたタグをボタンに適用します。',
      defaultValue: 'button',
    },
    href: {
      description: 'タグを `<a>` にし、 `href` 属性を追加します。',
    },
    target: {
      description: '指定された値を `target` 属性としてコンポーネントに追加します。',
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
      description: 'デフォルトのスロットです。',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
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
  components: { JButton },
  template:
    `
    <j-button @click="click" v-bind="$props">
      ${args.default}
    </j-button>
    `,
})

export const Default = Template.bind({})
Default.args = {}
