<template>
  <component :is="tag" :class="classes" :style="styles">
    <div class="j-app-header__body">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'

export default defineComponent({
  name: 'JAppHeader',

  props: {
    /** 指定された色を装飾に適用します */
    color: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
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
    const styles = computed((): { [key: string]: string } => ({
      'border-color': convertNameToHex(props.color),
    }))
    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header';

.j-app-header {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  border-bottom-style: solid;
  border-bottom-width: 3px;

  @include breakpoint(md) {
    border-bottom-width: 6px;
  }

  &--fluid {
    .#{$root}__body {
      max-width: none;
    }
  }
}

.j-app-header__body {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: $size-width-max;
  height: 64px;
  padding: 0 16px;
  margin: auto;

  @include breakpoint(md) {
    gap: 24px;
    height: 72px;
    padding: 0 24px;
  }
}
</style>
