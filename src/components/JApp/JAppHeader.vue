<template>
  <component :is="tag" :class="classes"></component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JAppHeader',

  props: {
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'header',
    },
  },

  setup() {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-header': true,
    }))
    return { classes }
  },
})
</script>
