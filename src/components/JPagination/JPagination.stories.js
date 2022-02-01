import { ref } from 'vue'
import { JApp, JAppMain } from '@/components/JApp'
import JPagination from './JPagination.vue'

export default {
  title: 'Components/Pagination',
  component: JPagination,
  argTypes: {
    // props
    color: {
      description: '指定された色を現在選択しているページ番号に適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    length: {
      description: 'ページ番号の最大値を指定します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    page: {
      description: '現在選択しているページ番号を指定します。',
      table: {
        category: 'props',
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '0',
        },
      },
    },
    totalVisible: {
      description: '表示するページ番号の数を指定します。',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    'v-model': {
      table: {
        disable: true,
      },
    },
    // events
    input: {
      description: 'ページが選択されたときに発生するイベントです。',
      action: 'input',
      table: {
        category: 'events',
      },
    },
    'update:page': {
      table: {
        disable: true,
      },
    },
    // slots
  },
  args: {
    length: 20,
    totalVisible: 10,
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JPagination },
  setup() {
    const page = ref(5)
    return { args, page }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-pagination v-model:page="page" @input="args.input" v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
