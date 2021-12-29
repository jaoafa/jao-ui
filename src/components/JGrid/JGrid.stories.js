import { JApp, JAppMain } from '@/components/JApp'
import { JSheet } from '@/components/JSheet'
import JContainer from './JContainer.vue'
import JRow from './JRow.vue'
import JCol from './JCol.vue'

export default {
  title: 'Components/Grid',
  component: JContainer,
  subcomponents: { JRow, JCol },
  argTypes: {
    // props
    color: {
      control: {
        type: null,
      },
    },
    fluid: {
      control: {
        type: null,
      },
    },
    id: {
      control: {
        type: null,
      },
    },
    tag: {
      control: {
        type: null,
      },
    },
    // events
    // slots
    default: {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JSheet, JContainer, JRow, JCol },
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
