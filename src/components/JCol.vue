<template>
  <div
    :class="classes"
    class="j-col"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JCol',

  props: {
    cols: {
      default: 1,
      type: Number,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsSm: {
      default: null,
      type: Number,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsMd: {
      default: null,
      type: Number,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsLg: {
      default: null,
      type: Number,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
    colsXl: {
      default: null,
      type: Number,
      validator: (val) => {
        return val >= 1 && val <= 12
      },
    },
  },

  computed: {
    classes () {
      const classes = {}
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
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass' as *;
$root: '.j-col';

.j-col {
  @for $val from 1 through 12 {
    &--xs-#{$val} {
      grid-column: span $val;
    }
  }

  @include breakpoint(sm) {
    @for $val from 1 through 12 {
      &--sm-#{$val} {
        grid-column: span $val;
      }
    }
  }

  @include breakpoint(md) {
    @for $val from 1 through 12 {
      &--md-#{$val} {
        grid-column: span $val;
      }
    }
  }

  @include breakpoint(lg) {
    @for $val from 1 through 12 {
      &--lg-#{$val} {
        grid-column: span $val;
      }
    }
  }

  @include breakpoint(xl) {
    @for $val from 1 through 12 {
      &--xl-#{$val} {
        grid-column: span $val;
      }
    }
  }
}
</style>
