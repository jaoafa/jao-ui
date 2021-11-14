<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JApp',

  props: {
    /**
     * コンポーネントの高さを auto にします。
     */
    noStretch: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app': true,
      'j-app--no-stretch': props.noStretch,
    }))

    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
@use 'src/styles/main';

$root: 'j-app';

.j-app {
  position: relative;
  min-height: 100vh;
  font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
  line-height: 1.8;
  color: $color-gray-900;

  &--no-stretch {
    min-height: auto;
  }
}
</style>
