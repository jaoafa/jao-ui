import { JApp, JAppMain } from '@/components/JApp'
import JInput from './JInput.vue'

export default {
  title: 'Components/Input',
  component: JInput,
  argTypes: {
    // props
    color: {
      description: '指定された色を装飾に適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    error: {
      description: 'エラー表示にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessages: {
      description: '指定されたテキストをエラーメッセージとして表示します。',
      table: {
        type: {
          summary: 'string[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
    },
    hint: {
      description: '指定されたテキストをヒントメッセージとして表示します。',
      table: {
        type: {
          summary: 'string[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
    },
    id: {
      description: '指定された id をラベルに適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      description: '指定されたラベルをコンポーネントに適用します。',
      table: {
        type: {
          summary: 'string',
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
    required: {
      description: '必須マークを表示します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    success: {
      description: '成功表示にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    successMessages: {
      description: '指定されたテキストを成功メッセージとして表示します。',
      table: {
        type: {
          summary: 'string[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
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
    'footer-append': {
      description: 'フッターの右側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'footer-prepend': {
      description: 'フッターの左側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    label: 'Input',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JInput },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-input v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
