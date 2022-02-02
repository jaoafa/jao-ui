<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** コンポーネントの外側の影を削除します */
  flat?: boolean
  /** 指定された高さをコンポーネントに適用します */
  height?: string
  /** 指定された高さの最大値をコンポーネントに適用しま */
  maxHeight?: string
  /** 指定された幅の最大値をコンポーネントに適用します */
  maxWidth?: string
  /** 指定された高さの最小値をコンポーネントに適用します */
  minHeight?: string
  /** 指定された幅の最小値をコンポーネントに適用します */
  minWidth?: string
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
  /** コンポーネントの角を角丸にしないようにします */
  tile?: boolean
  /** 指定された幅をコンポーネントに適用します */
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  flat: false,
  height: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  minHeight: undefined,
  minWidth: undefined,
  tag: 'div',
  tile: false,
  width: undefined,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-sheet'> => ({
    'j-sheet': true,
    'j-sheet--flat': props.flat,
    'j-sheet--tile': props.tile,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    backgroundColor: convertNameToHex(props.color),
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
  })
)
</script>

<template>
  <component :is="props.tag" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-sheet';

.j-sheet {
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 8%), 0 4px 10px 0 rgba(0, 0, 0, 12%);

  &--flat {
    box-shadow: none;
  }

  &--tile {
    border-radius: 0;
  }
}
</style>
