<template>
  <component :is="tag" :class="classes">
    <div class="j-app-header__body">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JAppHeader',

  props: {
    /** コンポーネントを上部に固定します */
    fixed: {
      type: Boolean,
      default: false,
    },
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'header',
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-header': true,
      'j-app-header--fixed': props.fixed,
    }))
    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header';

.j-app-header {
  &--fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 50;
  }
}
</style>
