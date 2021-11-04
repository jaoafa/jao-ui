import { ref } from 'vue'
import { JApp } from '@/components/JApp'
import JPagination from './JPagination.vue'

export default {
  title: 'Components/Pagination',
  component: JPagination,
  argTypes: {
    // props
    color: {},
    length: {},
    page: {
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
    totalVisible: {},
    'v-model': {
      table: {
        disable: true,
      },
    },
    // events
    input: {
      action: 'input',
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
  components: { JApp, JPagination },
  setup() {
    const page = ref(5)
    return { args, page }
  },
  template: `
    <j-app no-stretch>
      <j-pagination v-model:page="page" @input="args.input" v-bind="args" />
    </j-app>
  `,
})
