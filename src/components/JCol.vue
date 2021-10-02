<template>
  <component :is="tag" :class="classes" class="j-col">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'JCol',

  props: {
    cols: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    colsLg: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    colsMd: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    colsSm: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    colsXl: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 1 && val <= 12
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props) {
    const instance = getCurrentInstance()
    const gap = computed((): boolean =>
      instance && instance.parent ? !!instance.parent.props.noGap : false
    )
    const classes = computed((): { [key: string]: boolean } => {
      const res: { [key: string]: boolean } = {
        'j-col--no-gap': gap.value,
      }
      const colsXs = props.cols
      const colsSm = props.colsSm
      const colsMd = props.colsMd
      const colsLg = props.colsLg
      const colsXl = props.colsXl
      res[`j-col--xs-${colsXs}`] = !!colsXs
      res[`j-col--sm-${colsSm}`] = !!colsSm
      res[`j-col--md-${colsMd}`] = !!colsMd
      res[`j-col--lg-${colsLg}`] = !!colsLg
      res[`j-col--xl-${colsXl}`] = !!colsXl
      return res
    })
    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
@use 'sass:math';
$root: '.j-col';

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
