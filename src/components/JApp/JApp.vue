<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'

// props
type Props = {
  /** コンポーネントの高さを auto にします */
  noStretch?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  noStretch: false,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-app'> => ({
    'j-app': true,
    'j-app--no-stretch': props.noStretch,
  })
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;
@use 'src/styles/main';

$root: 'j-app';

.j-app {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
  font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
  line-height: 1.8;
  color: $color-gray-900;

  &--no-stretch {
    height: auto;
  }
}
</style>
