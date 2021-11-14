<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'JRow',

  props: {
    /**
     * 上下方向の配置を指定します。
     * @values start, center, end, baseline, stretch
     */
    align: {
      type: String,
      default: 'start',
      validator: (val: string): boolean => {
        return ['start', 'center', 'end', 'baseline', 'stretch'].includes(val)
      },
    },
    /**
     * 左右方向の配置を指定します。
     * @values start, center, end, space-between, space-around
     */
    justify: {
      type: String,
      default: 'start',
      validator: (val: string): boolean => {
        return [
          'start',
          'center',
          'end',
          'space-between',
          'space-around',
        ].includes(val)
      },
    },
    /**
     * アイテム間の隙間を削除します。
     */
    noGap: {
      type: Boolean,
      default: false,
    },
    /**
     * 指定されたタグをコンポーネントに適用します。
     */
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-row': true,
      'j-row--align-start': props.align === 'start',
      'j-row--align-center': props.align === 'center',
      'j-row--align-end': props.align === 'end',
      'j-row--align-baseline': props.align === 'baseline',
      'j-row--align-stretch': props.align === 'stretch',
      'j-row--justify-start': props.justify === 'start',
      'j-row--justify-center': props.justify === 'center',
      'j-row--justify-end': props.justify === 'end',
      'j-row--justify-between': props.justify === 'space-between',
      'j-row--justify-around': props.justify === 'space-around',
      'j-row--no-gap': props.noGap,
    }))

    return { classes }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-row';

.j-row {
  display: flex;
  flex-wrap: wrap;
  margin: -12px;

  &--align-start {
    align-items: flex-start;
  }

  &--align-center {
    align-items: center;
  }

  &--align-end {
    align-items: flex-end;
  }

  &--align-baseline {
    align-items: baseline;
  }

  &--align-stretch {
    align-items: stretch;
  }

  &--justify-start {
    justify-content: flex-start;
  }

  &--justify-center {
    justify-content: center;
  }

  &--justify-end {
    justify-content: flex-end;
  }

  &--justify-between {
    justify-content: space-between;
  }

  &--justify-around {
    justify-content: space-around;
  }

  &--no-gap {
    margin: 0;
  }
}
</style>
