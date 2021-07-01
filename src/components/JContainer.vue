<template>
  <div
    :id="id"
    :class="classes"
    :style="styles"
    class="j-container"
  >
    <div class="j-container__body">
      <slot />
    </div>
  </div>
</template>

<script>
import {
  convertNameToHex,
  validateColor,
} from '@/utils/colors'

export default {
  name: 'JContainer',

  props: {
    fluid: {
      default: false,
      type: Boolean,
    },
    color: {
      default: 'transparent',
      type: String,
      validator: (val) => {
        return validateColor(val) || val === 'transparent'
      },
    },
    id: {
      default: null,
      type: String,
    },
  },

  computed: {
    classes () {
      return {
        'j-container--fluid': this.fluid,
      }
    },
    styles () {
      return {
        'background-color': convertNameToHex(this.color),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/_' as *;
$root: '.j-container';

.j-container {
  width: 100%;

  &--fluid {
    & #{$root}__body {
      max-width: none;
    }
  }
}

.j-container__body {
  width: 100%;
  max-width: $size-width-max;
  padding: 16px;
  margin: auto;

  @include breakpoint(md) {
    padding: 24px;
  }
}
</style>
