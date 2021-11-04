import { JApp } from '@/components/JApp'
import JTable from './JTable.vue'

export default {
  title: 'Components/Table',
  component: JTable,
  argTypes: {
    // props
    headers: {},
    hideFooter: {},
    hideHeader: {},
    items: {},
    itemPerPage: {},
    loading: {},
    page: {},
    // events
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
  components: { JApp, JTable },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-table v-bind="args" />
    </j-app>
  `,
})
