import { JApp, JAppMain } from '@/components/JApp'
import JButton from './JButton.vue'

export default {
  title: 'Components/Button',
  component: JButton,
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
    disabled: {
      description: 'コンポーネントをクリックできないようにします。',
      table: {
        type: {
          summary: 'boolean',
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
    icon: {
      description: 'コンポーネントをアイコンとして指定し、形状を円形にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    loading: {
      description: 'ローディングアニメーションを表示します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    noDecoration: {
      description: '装飾を削除します。',
      table: {
        type: {
          summary: 'boolean',
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
    outlined: {
      description: '背景を透明にし、枠線を追加します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    size: {
      description: '指定された大きさをコンポーネントに適用します。',
      options: ['large', 'medium', 'small'],
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'string',
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
    to: {
      description:
        'コンポーネントを <router-link> にし、指定された値を to として適用します。',
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
    size: 'medium',
    default: 'Button',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JButton },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-button @click="args.click" v-bind="args">
          ${args.default}
        </j-button>
      </j-app-main>
    </j-app>
  `,
})
