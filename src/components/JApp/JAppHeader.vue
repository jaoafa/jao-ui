<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** 指定された色を装飾に適用します */
  color?: string
  /** コンポーネントの高さを減らします */
  dense?: boolean
  /** 最大幅の制限を削除します */
  fluid?: boolean
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  dense: false,
  fluid: false,
  tag: 'header',
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-app-header'> => ({
    'j-app-header': true,
    'j-app-header--dense': props.dense,
    'j-app-header--fluid': props.fluid,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    'border-color': convertNameToHex(props.color),
  })
)
</script>

<template>
  <component :is="tag" :class="classes" :style="styles">
    <div class="j-app-header__body">
      <slot />
    </div>
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header';

.j-app-header {
  position: relative;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  border-bottom-style: solid;
  border-bottom-width: 3px;

  @include breakpoint(md) {
    border-bottom-width: 6px;
  }

  &--dense {
    .#{$root}__body {
      height: 48px;

      @include breakpoint(md) {
        height: 56px;
      }
    }
  }

  &--fluid {
    .#{$root}__body {
      max-width: none;
    }
  }
}

.j-app-header__body {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: $size-width-max;
  height: 64px;
  padding: 0 16px;
  margin: auto;

  @include breakpoint(md) {
    gap: 24px;
    height: 72px;
    padding: 0 24px;
  }
}
</style>
