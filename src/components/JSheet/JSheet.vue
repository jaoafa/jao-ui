<template>
  <component :is="tag" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'
import { validateSize } from '@/utils/sizes'

export default defineComponent({
  name: 'JSheet',

  props: {
    color: {
      type: String,
      default: 'white',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    flat: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    maxHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    maxWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
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
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-sheet': true,
      'j-sheet--flat': props.flat,
      'j-sheet--tile': props.tile,
    }))

    const styles = computed((): { [key: string]: string } => {
      const res: { [key: string]: string } = {
        'background-color': convertNameToHex(props.color),
      }
      if (props.width) {
        res.width = props.width
      }
      if (props.height) {
        res.height = props.height
      }
      if (props.maxWidth) {
        res['max-width'] = props.maxWidth
      }
      if (props.maxHeight) {
        res['max-height'] = props.maxHeight
      }
      if (props.minWidth) {
        res['min-width'] = props.minWidth
      }
      if (props.minHeight) {
        res['min-height'] = props.minHeight
      }
      return res
    })

    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: '.j-sheet';

.j-sheet {
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 8%), 0 4px 10px 0 rgba(0, 0, 0, 12%);

  &--flat {
    box-shadow: none;
  }

  &--tile {
    border-radius: 0;
  }
}
</style>
