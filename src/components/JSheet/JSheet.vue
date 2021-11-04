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
    /**
     * 指定された色をコンポーネントに適用します。
     */
    color: {
      type: String,
      default: 'white',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    /**
     * コンポーネントの外側の影を削除します。
     */
    flat: {
      type: Boolean,
      default: false,
    },
    /**
     * 指定された高さをコンポーネントに適用します。
     */
    height: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された高さの最大値をコンポーネントに適用します。
     */
    maxHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された幅の最大値をコンポーネントに適用します。
     */
    maxWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された高さの最小値をコンポーネントに適用します。
     */
    minHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定された幅の最小値をコンポーネントに適用します。
     */
    minWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /**
     * 指定されたタグをコンポーネントに適用します。
     */
    tag: {
      type: String,
      default: 'div',
    },
    /**
     * コンポーネントの角を角丸にしないようにします。
     */
    tile: {
      type: Boolean,
      default: false,
    },
    /**
     * 指定された幅をコンポーネントに適用します。
     */
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
