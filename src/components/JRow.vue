<template>
  <div
    :class="classes"
    :style="styles"
    class="j-row"
  >
    <slot />
  </div>
</template>

<script>
import {
  validateSize,
} from '@/utils/sizes'

export default {
  name: 'JRow',
  props: {
    gapRow: {
      default: '24px',
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    gapColumn: {
      default: '24px',
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    noGap: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    classes () {
      return {}
    },
    styles () {
      return {
        gap: this.noGap ? null : `${this.gapRow} ${this.gapColumn}`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/_' as *;
$root: '.j-row';

.j-row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
}
</style>
