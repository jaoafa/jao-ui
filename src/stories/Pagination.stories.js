import JApp from '@/components/JApp.vue'
import JPagination from '@/components/JPagination.vue'

export default {
  title: 'Components/Pagination',
  component: JPagination,
  argTypes: {
    // props
    color: {
      description: '指定された色を現在選択しているページ番号に適用します。',
    },
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
    'update:page': {
      table: {
        disable: true,
      },
    },
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JApp, JPagination },
  template: `
    <j-app no-stretch>
      <j-pagination @input="input" v-bind="$props" />
    </j-app>
    `,
})

export const Default = Template.bind({})
Default.args = {
  page: 5,
  length: 20,
  totalVisible: 10,
}
