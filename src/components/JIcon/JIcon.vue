<template>
  <span :class="classes" :style="styles">
    <i class="material-icons j-icon__icon">
      <slot />
    </i>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'

export default defineComponent({
  name: 'JIcon',

  props: {
    /**
     * 指定された色をコンポーネントに適用します。
     */
    color: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    /**
     * 指定された大きさをコンポーネントに適用します。
     */
    size: {
      type: Number,
      default: undefined,
      validator: (val: number): boolean => {
        return val >= 0
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-icon': true,
    }))

    const styles = computed((): { [key: string]: string } => ({
      color: props.color ? convertNameToHex(props.color) : 'inherit',
      'font-size': props.size ? `${props.size}px` : 'inherit',
    }))

    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-icon';

.j-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  letter-spacing: normal;
  user-select: none;
}

.j-icon__icon {
  font-size: inherit;
}
</style>
