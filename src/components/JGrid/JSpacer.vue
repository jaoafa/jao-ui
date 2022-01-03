<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JSpacer',

  props: {
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup() {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-spacer': true,
    }))
    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-spacer';

.j-spacer {
  flex-grow: 1;
}
</style>
