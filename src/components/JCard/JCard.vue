<template>
  <j-sheet
    :class="classes"
    :color="color"
    :flat="flat"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    :min-width="minWidth"
    :min-height="minHeight"
    :style="styles"
    :tag="computedTag"
    :target="target"
    :tile="tile"
    :to="to"
    :width="width"
    v-bind="attrs"
    @click="click"
  >
    <slot />
  </j-sheet>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getContrastColor, validateColor } from '@/utils/colors'
import { validateSize } from '@/utils/sizes'
import { JSheet } from '@/components/JSheet'

export default defineComponent({
  name: 'JCard',

  components: {
    JSheet,
  },

  props: {
    /** 指定された色をコンポーネントに適用します */
    color: {
      type: String,
      default: 'white',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    /** コンポーネントの外側の影を削除します */
    flat: {
      type: Boolean,
      default: false,
    },
    /** 指定された高さをコンポーネントに適用します */
    height: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /** コンポーネントをアンカーにして href 属性を追加します */
    href: {
      type: String,
      default: undefined,
    },
    /** 指定された高さの最大値をコンポーネントに適用します */
    maxHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /** 指定された幅の最大値をコンポーネントに適用します */
    maxWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /** 指定された高さの最小値をコンポーネントに適用します */
    minHeight: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /** 指定された幅の最小値をコンポーネントに適用します */
    minWidth: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    /** コンポーネントを <nuxt-link> にします */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /** 指定されたタグをコンポーネントに適用します */
    tag: {
      type: String,
      default: 'div',
    },
    /** 指定された値を target 属性としてコンポーネントに追加します */
    target: {
      type: String,
      default: undefined,
    },
    /** コンポーネントの角を角丸にしないようにします */
    tile: {
      type: Boolean,
      default: false,
    },
    /** コンポーネントを <router-link> にし、指定された値を to として適用します */
    to: {
      type: String,
      default: undefined,
    },
    /** 指定された幅をコンポーネントに適用します */
    width: {
      type: String,
      default: undefined,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
  },

  emits: ['click'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-card': true,
      'j-card--link': link.value,
      'j-card--tile': props.tile,
    }))

    const styles = computed((): { [key: string]: string } => ({
      color: getContrastColor(props.color),
    }))

    const attrs = computed((): { [key: string]: string } => {
      const res: { [key: string]: string } = {}
      if (props.href) {
        res.href = props.href
      }
      return res
    })

    const computedTag = computed(
      (): string =>
        (props.to && (props.nuxt ? 'nuxt-link' : 'router-link')) ||
        (props.href && 'a') ||
        props.tag ||
        'div'
    )

    const link = computed((): boolean => !!(props.to || props.href))

    const click = (e: Event): void => {
      context.emit('click', e)
    }

    return { attrs, classes, computedTag, styles, click }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-card';

.j-card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  overflow-wrap: break-word;
  white-space: normal;
  transition-duration: 0.1s;
  transition-property: box-shadow, opacity;

  &--link {
    cursor: pointer;

    &:not(.#{$root}--tile) {
      &:hover {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 8%),
          0 2px 5px 0 rgba(0, 0, 0, 12%);
        opacity: 0.85;
      }
    }
  }
}
</style>
