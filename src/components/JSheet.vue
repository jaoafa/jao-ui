<template>
  <component :is="tag" :class="classes" :style="styles" class="j-sheet">
    <slot />
  </component>
</template>

<script>
import { convertNameToHex, validateColor } from '@/utils/colors'
import { validateSize } from '@/utils/sizes'

export default {
  name: 'JSheet',

  props: {
    color: {
      type: String,
      default: 'white',
      validator: (val) => {
        return validateColor(val)
      },
    },
    flat: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxHeight: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxWidth: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    minHeight: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    minWidth: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
    tile: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
  },

  computed: {
    classes() {
      return {
        'j-sheet--flat': this.flat,
        'j-sheet--tile': this.tile,
      }
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight,
        'min-width': this.minWidth,
        'min-height': this.minHeight,
        'background-color': convertNameToHex(this.color),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
$root: '.j-sheet';

.j-sheet {
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.12);

  &--flat {
    box-shadow: none;
  }

  &--tile {
    border-radius: 0;
  }
}
</style>
