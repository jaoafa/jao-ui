<template>
  <div :class="classes" :style="styles">
    <transition>
      <img
        v-show="isLoaded"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        class="j-image__body"
        loading="lazy"
        @load="onLoad"
      />
    </transition>

    <transition>
      <div v-show="!isLoaded" class="j-image__loader">
        <j-progress-circle :size="40" :indeterminate="true" color="gray-300" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { validateSize } from '@/utils/sizes'
import { JProgressCircle } from '@/components/JProgress'

export default defineComponent({
  name: 'JImage',

  components: {
    JProgressCircle,
  },

  props: {
    /**
     * 画像の代替テキストを設定します。
     */
    alt: {
      type: String,
      default: '',
    },
    /**
     * 画像が指定された大きさに収まらない場合にトリミングされないようにします。
     */
    contain: {
      type: Boolean,
      default: false,
    },
    /**
     * 指定された高さをコンポーネントに適用します。
     */
    height: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された高さの最大値をコンポーネントに適用します。
     */
    maxHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された幅の最大値をコンポーネントに適用します。
     */
    maxWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された高さの最小値をコンポーネントに適用します。
     */
    minHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された幅の最小値をコンポーネントに適用します。
     */
    minWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * srcset で複数の画像サイズが与えられている場合に
     * 画像の表示サイズを指定するためのカンマ区切りの文字列をコンポーネントに適用します。
     */
    sizes: {
      type: String,
      default: undefined,
    },
    /**
     * 画像のURLを適用します。この項目は必須です。
     */
    src: {
      type: String,
      default: '',
      require: true,
    },
    /**
     * 使用可能なソース画像のセットを示すカンマ区切りのリストです。
     */
    srcset: {
      type: String,
      default: undefined,
    },
    /**
     * 指定された幅をコンポーネントに適用します。
     */
    width: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-image': true,
      'j-image--contain': props.contain,
    }))

    const styles = computed((): { [key: string]: string } => {
      const res: { [key: string]: string } = {}
      if (props.width) {
        res.width = props.width
      }
      if (props.height) {
        res.height = props.height
      }
      if (props.maxWidth) {
        res['max-width'] = props.maxWidth
      }
      if (props.maxHeight) {
        res['max-height'] = props.maxHeight
      }
      if (props.minWidth) {
        res['min-width'] = props.minWidth
      }
      if (props.minHeight) {
        res['min-height'] = props.minHeight
      }
      return res
    })

    const isLoaded = ref(false)

    const onLoad = (): void => {
      isLoaded.value = true
    }

    return { classes, styles, isLoaded, onLoad }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-image';

.j-image {
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 2px;
  object-fit: cover;

  &--contain {
    object-fit: contain;
  }
}

.j-image__body {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;

  &.v-enter-active,
  &.v-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0%;
  }
}

.j-image__loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e7e9;

  &.v-enter-active,
  &.v-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0%;
  }
}
</style>
