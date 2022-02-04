import { JApp, JAppMain } from '@/components/JApp'
import JSheet from './JSheet.vue'

export default {
  title: 'Components/Sheet',
  component: JSheet,
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
    tag: {
      description: '指定されたタグをコンポーネントに適用します。',
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
    default: 'Sheet Content',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JSheet },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-sheet v-bind="args">
          ${args.default}
        </j-sheet>
      </j-app-main>
    </j-app>
  `,
})
