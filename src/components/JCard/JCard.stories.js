import { JApp, JAppMain } from '@/components/JApp'
import JCard from './JCard.vue'

export default {
  title: 'Components/Card',
  component: JCard,
  argTypes: {
    // props
    color: {
      description: '指定された色をコンポーネントに適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    flat: {
      description: 'コンポーネントの外側の影を削除します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    height: {
      description: '指定された高さをコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    href: {
      description: 'コンポーネントをアンカーにして href 属性を追加します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxHeight: {
      description: '指定された高さの最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxWidth: {
      description: '指定された幅の最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    minHeight: {
      description: '指定された高さの最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    minWidth: {
      description: '指定された幅の最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    nuxt: {
      description: 'コンポーネントを <nuxt-link> にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    tag: {
      description: '指定されたタグをコンポーネントに適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    target: {
      description:
        '指定された値を target 属性としてコンポーネントに追加します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tile: {
      description: 'コンポーネントの角を角丸にしないようにします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    to: {
      description:
        'コンポーネントを <router-link> にし、指定された値を to として適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    width: {
      description: '指定された幅をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    // events
    click: {
      description: 'コンポーネントがクリックされたときに発生するイベントです。',
      action: 'click',
      table: {
        category: 'events',
      },
    },
    // slots
    default: {
      description: 'コンポーネントの中に表示するコンテンツです。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    default: 'Card Content',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JCard },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-card @click="args.click" v-bind="args">
          ${args.default}
        </j-card>
      </j-app-main>
    </j-app>
  `,
})
