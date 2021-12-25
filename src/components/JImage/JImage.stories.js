import { JApp, JAppMain } from '@/components/JApp'
import JImage from './JImage.vue'
import SampleImage from '@/assets/sample.png'

export default {
  title: 'Components/Image',
  component: JImage,
  argTypes: {
    // props
    alt: {},
    contain: {},
    height: {
      control: {
        type: 'text',
      },
    },
    maxHeight: {
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      control: {
        type: 'text',
      },
    },
    minHeight: {
      control: {
        type: 'text',
      },
    },
    minWidth: {
      control: {
        type: 'text',
      },
    },
    sizes: {},
    src: {},
    srcset: {},
    width: {
      control: {
        type: 'text',
      },
    },
    // events
    // slots
  },
  args: {
    src: SampleImage,
    width: '400px',
    height: '240px',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JImage },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-image v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
