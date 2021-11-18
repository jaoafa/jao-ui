<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'JCol',

  props: {
    /**
     * デフォルトの行数を 1～12 の数字で設定します。
     */
    cols: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    /**
     * 画面幅が 992px～1200px であるときの行数を 1～12 の数字で設定します。
     */
    colsLg: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    /**
     * 画面幅が 768px～991px であるときの行数を 1～12 の数字で設定します。
     */
    colsMd: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    /**
     * 画面幅が 576px～767px であるときの行数を 1～12 の数字で設定します。
     */
    colsSm: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    /**
     * 画面幅が 1200px 以上であるときの行数を 1～12 の数字で設定します。
     */
    colsXl: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    /**
     * 指定されたタグをコンポーネントに適用します。
     */
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => {
      const res: { [key: string]: boolean } = {
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

    return { classes }
  },
})
</script>

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
