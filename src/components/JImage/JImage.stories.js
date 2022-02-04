import { JApp, JAppMain } from '@/components/JApp'
import JImage from './JImage.vue'
import SampleImage from '@/assets/sample.png'

export default {
  title: 'Components/Image',
  component: JImage,
  argTypes: {
    // props
    alt: {
      description: '画像の代替テキストを設定します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    contain: {
      description:
        '画像が指定された大きさに収まらない場合にトリミングされないようにします。',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    height: {
      description: '指定された高さをコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxHeight: {
      description: '指定された高さの最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    maxWidth: {
      description: '指定された幅の最大値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    minHeight: {
      description: '指定された高さの最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    minWidth: {
      description: '指定された幅の最小値をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    sizes: {
      description:
        'srcset で複数の画像サイズが与えられている場合に画像の表示サイズを指定するためのカンマ区切りの文字列をコンポーネントに適用します。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    src: {
      description: '画像のURLを適用します。この項目は必須です。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    srcset: {
      description:
        '使用可能なソース画像のセットを示すカンマ区切りのリストです。',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    width: {
      description: '指定された幅をコンポーネントに適用します。',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    // events
    load: {
      description: '画像が読み込まれたときに発生するイベントです。',
      action: 'load',
      table: {
        category: 'events',
      },
    },
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
        <j-image v-bind="args" @load="args.load" />
      </j-app-main>
    </j-app>
  `,
})
