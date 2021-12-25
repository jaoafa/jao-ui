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
    /** 最大幅の制限を削除します */
    fluid: {
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
      'j-app-header--fluid': props.fluid,
    }))
    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header';

.j-app-header {
  grid-row: 1 / 2;
  grid-column: 1 / 3;

  &--fluid {
    .#{$root}__body {
      max-width: none;
    }
  }
}

.j-app-header__body {
  width: 100%;
  max-width: $size-width-max;
  padding: 0 16px;
  margin: auto;

  @include breakpoint(md) {
    padding: 0 24px;
  }
}
</style>
