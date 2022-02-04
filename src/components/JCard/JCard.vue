<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { getContrastColor } from '@/utils/colors'
import { JSheet } from '@/components/JSheet'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** コンポーネントの外側の影を削除します */
  flat?: boolean
  /** 指定された高さをコンポーネントに適用します */
  height?: string
  /** コンポーネントをアンカーにして href 属性を追加します */
  href?: string
  /** 指定された高さの最大値をコンポーネントに適用します */
  maxHeight?: string
  /** 指定された幅の最大値をコンポーネントに適用します */
  maxWidth?: string
  /** 指定された高さの最小値をコンポーネントに適用します */
  minHeight?: string
  /** 指定された幅の最小値をコンポーネントに適用します */
  minWidth?: string
  /** コンポーネントを <nuxt-link> にします */
  nuxt?: boolean
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
  /** 指定された値を target 属性としてコンポーネントに追加します */
  target?: string
  /** コンポーネントの角を角丸にしないようにします */
  tile?: boolean
  /** コンポーネントを <router-link> にし、指定された値を to として適用します */
  to?: string
  /** 指定された幅をコンポーネントに適用します */
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  flat: false,
  height: undefined,
  href: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  minHeight: undefined,
  minWidth: undefined,
  nuxt: false,
  tag: 'div',
  target: undefined,
  tile: false,
  to: undefined,
  width: undefined,
})

// emit
type Emits = {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-card'> => ({
    'j-card': true,
    'j-card--link': link.value,
    'j-card--tile': props.tile,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    color: getContrastColor(props.color),
  })
)

const link = computed((): boolean => !!(props.to || props.href))
const attrs = computed((): { [key: string]: string } => {
  const res: { [key: string]: string } = {}
  if (props.href) {
    res.href = props.href
  }
  return res
})

const computedTag = computed(
  (): string =>
    (props.to && (props.nuxt ? 'nuxt-link' : 'router-link')) ||
    (props.href && 'a') ||
    props.tag ||
    'div'
)

const handleClick = (): void => {
  emit('click')
}
</script>

<template>
  <j-sheet
    :class="classes"
    :color="props.color"
    :flat="props.flat"
    :height="props.height"
    :max-width="props.maxWidth"
    :max-height="props.maxHeight"
    :min-width="props.minWidth"
    :min-height="props.minHeight"
    :style="styles"
    :tag="computedTag"
    :target="props.target"
    :tile="props.tile"
    :to="props.to"
    :width="props.width"
    v-bind="attrs"
    @click="handleClick"
  >
    <slot />
  </j-sheet>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-card';

.j-card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  overflow-wrap: break-word;
  white-space: normal;
  transition-duration: 0.1s;
  transition-property: box-shadow, opacity;

  &--link {
    cursor: pointer;

    &:not(.#{$root}--tile) {
      &:hover {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 8%),
          0 2px 5px 0 rgba(0, 0, 0, 12%);
        opacity: 0.85;
      }
    }
  }
}
</style>
