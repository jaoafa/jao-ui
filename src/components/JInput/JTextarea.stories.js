import { ref } from 'vue'
import { JApp, JAppMain } from '@/components/JApp'
import JTextarea from './JTextarea.vue'

export default {
  title: 'Components/Textarea',
  component: JTextarea,
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
    counter: {
      description: '文字数カウンタを表示します。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    counterLength: {
      description: '指定された長さを文字数カウンタに適用します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    disabled: {
      description: '入力を無効にします。',
      table: {
        type: {
          summary: 'boolean',
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
    readonly: {
      description: '読み取り専用状態にします。',
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
    resize: {
      description: '表示サイズ変更を有効にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    rows: {
      description:
        'コンポーネントを指定された行数分表示できる高さに設定します。',
      table: {
        type: {
          summary: 'number',
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
    value: {
      description: '現在入力している値を指定します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    // events
    'click:append': {
      description: 'append の内容がクリックされたときに発生するイベントです。',
      action: 'click:append',
      table: {
        category: 'events',
      },
    },
    'click:append-outer': {
      description:
        'append-outer の内容がクリックされたときに発生するイベントです。',
      action: 'click:append-outer',
      table: {
        category: 'events',
      },
    },
    'click:prepend': {
      description: 'prepend の内容がクリックされたときに発生するイベントです。',
      action: 'click:prepend',
      table: {
        category: 'events',
      },
    },
    'click:prepend-inner': {
      description:
        'prepend-inner の内容がクリックされたときに発生するイベントです。',
      action: 'click:prepend-inner',
      table: {
        category: 'events',
      },
    },
    input: {
      description: 'テキストが入力されたときに発生するイベントです。',
      action: 'input',
      table: {
        category: 'events',
      },
    },
    'update:value': {
      table: {
        disable: true,
      },
    },
    // slots
    append: {
      description: 'コンポーネント内側の右側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'append-outer': {
      description: 'コンポーネント外側の右側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    prepend: {
      description: 'コンポーネント外側の左側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'prepend-inner': {
      description: 'コンポーネント内側の左側に表示するコンテンツです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    label: 'Textarea',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JTextarea },
  setup() {
    const value = ref('')
    return { args, value }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-textarea
          v-model:value="value"
          v-bind="args"
          @input="args.input"
          @click:prepend="args['click:prepend']"
          @click:prepend-inner="args['click:prepend-inner']"
          @click:append="args['click:append']"
          @click:append-outer="args['click:append-outer']"
        />
      </j-app-main>
    </j-app>
  `,
})
