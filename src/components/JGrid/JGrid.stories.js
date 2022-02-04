import { JApp, JAppMain } from '@/components/JApp'
import { JSheet } from '@/components/JSheet'
import JContainer from './JContainer.vue'
import JRow from './JRow.vue'
import JCol from './JCol.vue'
import JSpacer from './JSpacer.vue'

export default {
  title: 'Components/Grid',
  component: JContainer,
  subcomponents: { JRow, JCol, JSpacer },
  argTypes: {
    // props
    color: {
      description: '指定された色をコンポーネントに適用します。',
      control: {
        type: null,
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    fluid: {
      description: '最大幅の制限を削除します。',
      control: {
        type: null,
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    id: {
      description: 'コンポーネントに id 属性を追加します。',
      control: {
        type: null,
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tag: {
      description: '指定されたタグをコンポーネントに適用します。',
      control: {
        type: null,
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
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JSheet, JContainer, JRow, JCol, JSpacer },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-row>
          <j-col :cols="4">
            <j-sheet color="gray-100" width="100%" height="50px" flat />
          </j-col>
          <j-col :cols="4">
            <j-sheet color="gray-100" width="100%" height="50px" flat />
          </j-col>
          <j-col :cols="4">
            <j-sheet color="gray-100" width="100%" height="50px" flat />
          </j-col>
        </j-row>
      </j-app-main>
    </j-app>
  `,
})
