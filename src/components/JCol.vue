<template>
  <component
    :is="tag"
    :class="classes"
    class="j-col"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'JCol',

  props: {
    cols: {
      type: Number,
      default: 1,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsLg: {
      type: Number,
      default: null,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsMd: {
      type: Number,
      default: null,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsSm: {
      type: Number,
      default: null,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsXl: {
      type: Number,
      default: null,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  computed: {
    classes () {
      const classes = {
        'j-col--no-gap': this.gap,
      }
      const colsXs = this.cols
      const colsSm = this.colsSm
      const colsMd = this.colsMd
      const colsLg = this.colsLg
      const colsXl = this.colsXl
      classes[`j-col--xs-${colsXs}`] = colsXs ? true : null
      classes[`j-col--sm-${colsSm}`] = colsSm ? true : null
      classes[`j-col--md-${colsMd}`] = colsMd ? true : null
      classes[`j-col--lg-${colsLg}`] = colsLg ? true : null
      classes[`j-col--xl-${colsXl}`] = colsXl ? true : null
      return classes
    },
    gap () {
      return !!this.$parent.$props.noGap
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass' as *;
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
