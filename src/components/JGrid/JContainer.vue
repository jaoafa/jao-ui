<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** 最大幅の制限を削除します */
  fluid?: boolean
  /** コンポーネントに id 属性を追加します */
  id?: string
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'transparent',
  fluid: false,
  id: undefined,
  tag: 'div',
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-container'> => ({
    'j-container': true,
    'j-container--fluid': props.fluid,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    backgroundColor: convertNameToHex(props.color),
  })
)
</script>

<template>
  <component :is="props.tag" :id="props.id" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-container';

.j-container {
  width: 100%;
  max-width: $size-width-max;
  padding: 16px;
  margin: auto;

  @include breakpoint(md) {
    padding: 24px;
  }

  &--fluid {
    max-width: none;
  }
}
</style>
