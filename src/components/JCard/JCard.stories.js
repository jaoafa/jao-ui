import { JApp } from '@/components/JApp'
import JCard from './JCard.vue'

export default {
  title: 'Components/Card',
  component: JCard,
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
      control: {
        type: 'text',
      },
    },
    href: {
      description: 'タグを `<a>` にし、 `href` 属性を追加します。',
    },
    maxHeight: {
      description: '指定された高さの最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      description: '指定された幅の最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
    },
    minHeight: {
      description: '指定された高さの最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
    },
    minWidth: {
      description: '指定された幅の最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
    },
    nuxt: {
      description: 'タグを `<nuxt-link>` にします。',
    },
    tag: {
      description: '指定されたタグをコンポーネントに適用します。',
    },
    target: {
      description:
        '指定された値を `target` 属性としてコンポーネントに追加します。',
    },
    tile: {
      description: 'コンポーネントの角を角丸にしないようにします。',
    },
    to: {
      description:
        'コンポーネントを `<router-link>` にし、 `to` Prop を適用します。',
    },
    width: {
      description: '指定された幅をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
    },
    // events
    click: {
      description: 'コンポーネントがクリックされたときに発生するイベントです。',
      action: 'click',
    },
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
  components: { JApp, JCard },
  template: `
    <j-app no-stretch>
      <j-card @click="click" v-bind="$props">
        Card Content
      </j-card>
    </j-app>
    `,
})

export const Default = Template.bind({})
Default.args = {}
