<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { ComponentTagClasses } from '@/types'

// types
type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

// props
type Props = {
  /** デフォルトの行数を 1～12 の数字で設定します */
  cols?: Cols
  /** 画面幅が 992px～1200px であるときの行数を 1～12 の数字で設定します */
  colsLg?: Cols
  /** 画面幅が 768px～991px であるときの行数を 1～12 の数字で設定します */
  colsMd?: Cols
  /** 画面幅が 576px～767px であるときの行数を 1～12 の数字で設定します */
  colsSm?: Cols
  /** 画面幅が 1200px 以上であるときの行数を 1～12 の数字で設定します */
  colsXl?: Cols
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
}
const props = withDefaults(defineProps<Props>(), {
  cols: undefined,
  colsLg: undefined,
  colsMd: undefined,
  colsSm: undefined,
  colsXl: undefined,
  tag: 'div',
})

// class
const classes = computed((): ComponentTagClasses<'j-col'> => {
  const res: ComponentTagClasses<'j-col'> = {
    'j-col': true,
    'j-col--no-gap': gap.value,
  }
  if (props.cols) {
    const colsXs = props.cols
    res[`j-col--xs-${colsXs}`] = !!colsXs
  }
  if (props.colsSm) {
    const colsSm = props.colsSm
    res[`j-col--sm-${colsSm}`] = !!colsSm
  }
  if (props.colsMd) {
    const colsMd = props.colsMd
    res[`j-col--md-${colsMd}`] = !!colsMd
  }
  if (props.colsLg) {
    const colsLg = props.colsLg
    res[`j-col--lg-${colsLg}`] = !!colsLg
  }
  if (props.colsXl) {
    const colsXl = props.colsXl
    res[`j-col--xl-${colsXl}`] = !!colsXl
  }
  return res
})

const instance = getCurrentInstance()
const gap = computed((): boolean =>
  instance && instance.parent ? !!instance.parent.props.noGap : false
)
</script>

<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;
@use 'sass:math';

$root: 'j-col';

.j-col {
  flex: 1 auto 0;
  max-width: 100%;
  padding: 12px;

  &--no-gap {
    padding: 0;
  }

  @for $val from 1 through 12 {
    &--xs-#{$val} {
      flex: 0 0 (math.div($val, 12) * 100%);
      max-width: math.div($val, 12) * 100%;
    }
  }

  @include breakpoint(sm) {
    @for $val from 1 through 12 {
      &--sm-#{$val} {
        flex: 0 0 (math.div($val, 12) * 100%);
        max-width: math.div($val, 12) * 100%;
      }
    }
  }

  @include breakpoint(md) {
    @for $val from 1 through 12 {
      &--md-#{$val} {
        flex: 0 0 (math.div($val, 12) * 100%);
        max-width: math.div($val, 12) * 100%;
      }
    }
  }

  @include breakpoint(lg) {
    @for $val from 1 through 12 {
      &--lg-#{$val} {
        flex: 0 0 (math.div($val, 12) * 100%);
        max-width: math.div($val, 12) * 100%;
      }
    }
  }

  @include breakpoint(xl) {
    @for $val from 1 through 12 {
      &--xl-#{$val} {
        flex: 0 0 (math.div($val, 12) * 100%);
        max-width: math.div($val, 12) * 100%;
      }
    }
  }
}
</style>
