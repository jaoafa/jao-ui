import JTable from '@/components/JTable.vue'

export default {
  title: 'Components/Table',
  component: JTable,
  argTypes: {
    // props
    headers: {
      description: 'ヘッダーのカラムとなる配列を指定します。<br>`label` : カラムの表示名(必須)<br> `key` : カラムのキー(必須)<br> `sortable` : ソート可能項目であるか',
    },
    hideFooter: {
      description: '表のフッターを非表示にします。',
    },
    hideHeader: {
      description: '表のヘッダーを非表示にします。',
    },
    items: {
      description: '表に表示する項目を配列で指定します。',
    },
    itemPerPage: {
      description: '1ページあたりに表示する項目の数を指定します。',
    },
    loading: {
      description: 'ローディングアニメーションを表示します。',
    },
    page: {
      description: '現在選択しているページ番号を指定します。',
    },
    // events
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JTable },
  template:
    `
    <j-table v-bind="$props" />
    `,
})

export const Default = Template.bind({})
Default.args = {
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
}
