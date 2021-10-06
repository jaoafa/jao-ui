<template>
  <span :style="styles" class="j-icon">
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
    color: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    size: {
      type: Number,
      default: null,
      validator: (val: number): boolean => {
        return val >= 0
      },
    },
  },

  setup(props) {
    const styles = computed((): { [key: string]: string } => ({
      color: props.color ? convertNameToHex(props.color) : 'inherit',
      'font-size': `${props.size}px`,
    }))
    return { styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
$root: '.j-icon';

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
