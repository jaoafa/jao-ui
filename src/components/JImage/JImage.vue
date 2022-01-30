<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { JProgressCircle } from '@/components/JProgress'

// props
type Props = {
  /** 画像の代替テキストを設定します */
  alt?: string
  /** 画像が指定された大きさに収まらない場合にトリミングされないようにします */
  contain?: boolean
  /** 指定された高さをコンポーネントに適用します */
  height?: string
  /** 指定された高さの最大値をコンポーネントに適用します */
  maxHeight?: string
  /** 指定された幅の最大値をコンポーネントに適用します */
  maxWidth?: string
  /** 指定された高さの最小値をコンポーネントに適用します */
  minHeight?: string
  /** 指定された幅の最小値をコンポーネントに適用します */
  minWidth?: string
  /**
   * srcset で複数の画像サイズが与えられている場合に
   * 画像の表示サイズを指定するためのカンマ区切りの文字列をコンポーネントに適用します
   */
  sizes?: string
  /** 画像のURLを適用します。この項目は必須です */
  src: string
  /** 使用可能なソース画像のセットを示すカンマ区切りのリストです */
  srcset?: string
  /** 指定された幅をコンポーネントに適用します */
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  alt: '',
  contain: false,
  height: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  minHeight: undefined,
  minWidth: undefined,
  sizes: undefined,
  src: '',
  srcset: undefined,
  width: undefined,
})

// emit
type Emits = {
  (e: 'load'): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-image'> => ({
    'j-image': true,
    'j-image--contain': props.contain,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
  })
)

const isLoaded = ref(false)
const loadImage = (): void => {
  const image = new Image()
  image.onload = (): void => {
    isLoaded.value = true
    emit('load')
  }
  image.src = props.src
}
onMounted(() => {
  loadImage()
})
</script>

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
      />
    </transition>

    <transition>
      <div v-show="!isLoaded" class="j-image__loader">
        <j-progress-circle :size="40" color="gray-300" indeterminate />
      </div>
    </transition>
  </div>
</template>

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
    opacity: 0;
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
    opacity: 0;
  }
}
</style>
