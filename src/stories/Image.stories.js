import JApp from '@/components/JApp.vue'
import JImage from '@/components/JImage.vue'
import SampleImage from '@/stories/assets/sample.png'

export default {
  title: 'Components/Image',
  component: JImage,
  argTypes: {
    // props
    alt: {
      description: '画像の代替テキストを設定します。',
    },
    contain: {
      description:
        '画像が指定された大きさに収まらない場合にトリミングされないようにします。',
    },
    height: {
      description: '指定された高さを画像に適用します。',
      control: {
        type: 'text',
      },
    },
    maxHeight: {
      description: '指定された高さの最大値を画像に適用します。',
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      description: '指定された幅の最大値を画像に適用します。',
      control: {
        type: 'text',
      },
    },
    minHeight: {
      description: '指定された高さの最小値を画像に適用します。',
      control: {
        type: 'text',
      },
    },
    minWidth: {
      description: '指定された幅の最小値を画像に適用します。',
      control: {
        type: 'text',
      },
    },
    sizes: {
      description:
        '`srcset` で複数の画像サイズが与えられている場合に、画像の表示サイズを指定するためのカンマ区切りの文字列を画像に適用します。',
    },
    src: {
      description: '画像のURLを適用します。この項目は必須です。',
    },
    srcset: {
      description:
        '使用可能なソース画像のセットを示すカンマ区切りのリストです。',
    },
    width: {
      description: '指定された幅を画像に適用します。',
      control: {
        type: 'text',
      },
    },
    // events
    // slots
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JApp, JImage },
  template: `
    <j-app no-stretch>
      <j-image v-bind="$props" />
    </j-app>
    `,
})

export const Default = Template.bind({})
Default.args = {
  height: '240px',
  src: SampleImage,
  width: '400px',
}
