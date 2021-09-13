<template>
  <component
    :is="tag"
    :class="classes"
    class="j-row"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'JRow',

  props: {
    align: {
      type: String,
      default: 'start',
      validator: (val) => {
        return ['start', 'center', 'end', 'baseline', 'stretch']
          .includes(val)
      },
    },
    justify: {
      type: String,
      default: 'start',
      validator: (val) => {
        return ['start', 'center', 'end', 'space-between', 'space-around']
          .includes(val)
      },
    },
    noGap: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  computed: {
    classes () {
      return {
        'j-row--align-start': this.align === 'start',
        'j-row--align-center': this.align === 'center',
        'j-row--align-end': this.align === 'end',
        'j-row--align-baseline': this.align === 'baseline',
        'j-row--align-stretch': this.align === 'stretch',
        'j-row--justify-start': this.justify === 'start',
        'j-row--justify-center': this.justify === 'center',
        'j-row--justify-end': this.justify === 'end',
        'j-row--justify-between': this.justify === 'space-between',
        'j-row--justify-around': this.justify === 'space-around',
        'j-row--no-gap': this.noGap,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass' as *;
$root: '.j-row';

.j-row {
  display: flex;
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
