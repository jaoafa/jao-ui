<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'

// props
type Props = {
  /** 指定されたタグをコンポーネントに適用します */
  tag: string
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'aside',
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-app-sidebar'> => ({
    'j-app-sidebar': true,
  })
)
</script>

<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-sidebar';

.j-app-sidebar {
  position: relative;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
