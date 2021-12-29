<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JAppSidebar',

  props: {
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'aside',
    },
  },

  setup() {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-sidebar': true,
    }))
    return { classes }
  },
})
</script>

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
