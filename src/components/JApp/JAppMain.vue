<template>
  <component :is="tag" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'

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

    const styles = computed((): { [key: string]: string } => ({
      padding: `${paddingTop.value}px 0 0 0`,
    }))

    const paddingTop = ref(0)

    onMounted(() => {
      const element = document.querySelector(
        '.j-app > .j-app-header--fixed'
      ) as HTMLElement
      if (element) {
        paddingTop.value = element.offsetHeight
      }
    })
    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-main';

.j-app-main {
  position: relative;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
