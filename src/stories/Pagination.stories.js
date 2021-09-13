import JPagination from '@/components/JPagination.vue'

export default {
  title: 'Components/Pagination',
  component: JPagination,
  argTypes: {
    // props
    length: {
      description: 'ページ番号の最大値を指定します。',
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
    },
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JPagination },
  template:
    `
    <j-pagination @input="input" v-bind="$props" />
    `,
  computed: {
    propsWithoutPage () {
      const { page, ...all } = this.$props
      return all
    },
  },
})

export const Default = Template.bind({})
Default.args = {
  page: 5,
  length: 20,
  totalVisible: 10,
}
