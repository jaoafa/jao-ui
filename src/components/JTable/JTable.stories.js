import { JApp, JAppMain } from '@/components/JApp'
import JTable from './JTable.vue'
import JTableHeader from './JTableHeader.vue'
import JTableFooter from './JTableFooter.vue'

export default {
  title: 'Components/Table',
  component: JTable,
  subcomponents: { JTableHeader, JTableFooter },
  argTypes: {
    // props
    headers: {
      description: 'ヘッダーのカラムとなる配列を指定します。',
      table: {
        type: {
          summary: 'array',
          detail: '{\n  label: string\n  key: string\n  sortable: boolean\n}',
        },
        defaultValue: {
          summary: '[]',
        },
      },
    },
    hideFooter: {
      description: '表のフッターを非表示にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    hideHeader: {
      description: '表のヘッダーを非表示にします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    items: {
      description: '表に表示する項目を配列で指定します。',
      table: {
        type: {
          summary: 'array',
        },
      },
    },
    itemPerPage: {
      description: '1ページあたりに表示する項目の数を指定します。',
      table: {
        type: {
          summary: 'number',
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
    page: {
      description: '現在選択しているページ番号を指定します。',
      table: {
        type: {
          summary: 'number',
        },
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
    body: {
      description: 'テーブルの `tbody` を置き換えるスロットです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    default: {
      table: {
        disable: true,
      },
    },
    head: {
      description: 'テーブルの `thead` を置き換えるスロットです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    item: {
      description: 'テーブルの行を置き換えるスロットです。',
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'item.<name>': {
      description: 'テーブルの特定の列を置き換えるスロットです。',
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    headers: [
      {
        label: '名前',
        key: 'name',
        sortable: true,
      },
      {
        label: 'Minecraft',
        key: 'minecraft',
        sortable: true,
      },
      {
        label: 'Discord',
        key: 'discord',
        sortable: true,
      },
      {
        label: '役割',
        key: 'role',
        sortable: false,
      },
    ],
    items: [
      {
        name: 'Zakuro',
        minecraft: 'X4Z',
        discord: 'zakuro#4096',
        role: 'サーバの運営',
      },
      {
        name: 'Hiratake',
        minecraft: 'Hirotaisou2012',
        discord: 'Hiratake#2012',
        role: 'サーバの運営',
      },
      {
        name: 'Tomachi',
        minecraft: 'mine_book000',
        discord: 'tomachi#0310',
        role: 'サーバの運営',
      },
      {
        name: 'Omelet',
        minecraft: 'X9Z',
        discord: 'Omelet#2896',
        role: 'サーバの運営',
      },
    ],
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JTable },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-table v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
