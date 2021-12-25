<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JAppMain',

  props: {
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'main',
    },
  },

  setup() {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-main': true,
    }))
    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-main';

.j-app-main {
  position: relative;
  flex: 1 0 auto;
  max-width: 100%;
}
</style>
