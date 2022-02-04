<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'

// props
type Props = {
  /** 上下方向の配置を指定します */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  /** 左右方向の配置を指定します */
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  /** アイテム間の隙間を削除します */
  noGap?: boolean
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
}
const props = withDefaults(defineProps<Props>(), {
  align: 'start',
  justify: 'start',
  noGap: false,
  tag: 'div',
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-row'> => ({
    'j-row': true,
    'j-row--align-start': props.align === 'start',
    'j-row--align-center': props.align === 'center',
    'j-row--align-end': props.align === 'end',
    'j-row--align-baseline': props.align === 'baseline',
    'j-row--align-stretch': props.align === 'stretch',
    'j-row--justify-start': props.justify === 'start',
    'j-row--justify-center': props.justify === 'center',
    'j-row--justify-end': props.justify === 'end',
    'j-row--justify-between': props.justify === 'space-between',
    'j-row--justify-around': props.justify === 'space-around',
    'j-row--no-gap': props.noGap,
  })
)
</script>

<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-row';

.j-row {
  display: flex;
  flex-wrap: wrap;
  margin: -12px;

  &--align-start {
    align-items: flex-start;
  }

  &--align-center {
    align-items: center;
  }

  &--align-end {
    align-items: flex-end;
  }

  &--align-baseline {
    align-items: baseline;
  }

  &--align-stretch {
    align-items: stretch;
  }

  &--justify-start {
    justify-content: flex-start;
  }

  &--justify-center {
    justify-content: center;
  }

  &--justify-end {
    justify-content: flex-end;
  }

  &--justify-between {
    justify-content: space-between;
  }

  &--justify-around {
    justify-content: space-around;
  }

  &--no-gap {
    margin: 0;
  }
}
</style>
