<template>
  <component :is="tag" :id="id" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'

export default defineComponent({
  name: 'JContainer',

  props: {
    /** 指定された色をコンポーネントに適用します */
    color: {
      type: String,
      default: 'transparent',
      validator: (val: string): boolean => {
        return validateColor(val) || val === 'transparent'
      },
    },
    /** 最大幅の制限を削除します */
    fluid: {
      type: Boolean,
      default: false,
    },
    /** コンポーネントに id 属性を追加します */
    id: {
      type: String,
      default: undefined,
    },
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-container': true,
      'j-container--fluid': props.fluid,
    }))

    const styles = computed((): { [key: string]: string } => ({
      'background-color': convertNameToHex(props.color),
    }))

    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-container';

.j-container {
  width: 100%;
  max-width: $size-width-max;
  padding: 16px;
  margin: auto;

  @include breakpoint(md) {
    padding: 24px;
  }

  &--fluid {
    max-width: none;
  }
}
</style>
