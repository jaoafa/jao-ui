import JCard from '@/components/JCard.vue'

export default {
  title: 'Components/Card',
  component: JCard,
  argTypes: {
    // props
    color: {
      description: '指定された色をカードに適用します。',
    },
    height: {
      description: '指定された高さをカードに適用します。',
      control: {
        type: 'text',
      },
    },
    href: {
      description: 'タグを `<a>` にし、 `href` 属性を追加します。',
    },
    maxHeight: {
      description: '指定された高さの最大値をカードに適用します。',
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      description: '指定された幅の最大値をカードに適用します。',
      control: {
        type: 'text',
      },
    },
    minHeight: {
      description: '指定された高さの最小値をカードに適用します。',
      control: {
        type: 'text',
      },
    },
    minWidth: {
      description: '指定された幅の最小値をカードに適用します。',
      control: {
        type: 'text',
      },
    },
    nuxt: {
      description: 'タグを `<nuxt-link>` にします。',
    },
    tag: {
      description: '指定されたタグをカードに適用します。',
    },
    target: {
      description:
        '指定された値を `target` 属性としてコンポーネントに追加します。',
    },
    to: {
      description: 'カードを `<router-link>` にし、 `to` Prop を適用します。',
    },
    width: {
      description: '指定された幅をカードに適用します。',
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
      description: 'カードの中に表示するコンテンツです。',
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
  components: { JCard },
  template: `
    <j-card @click="click" v-bind="$props">
      Card Content
    </j-card>
    `,
})

export const Default = Template.bind({})
Default.args = {}
