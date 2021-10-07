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
import JSheet from '@/components/JSheet.vue'

export default defineComponent({
  name: 'JCard',

  components: {
    JSheet,
  },

  props: {
    color: {
      type: String,
      default: 'white',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    flat: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    href: {
      type: String,
      default: null,
    },
    maxHeight: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    maxWidth: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minHeight: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minWidth: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    nuxt: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
    target: {
      type: String,
      default: null,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
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

$root: '.j-card';

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

    &:not(#{$root}--tile) {
      &:hover {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08),
          0 2px 5px 0 rgba(0, 0, 0, 0.12);
        opacity: 0.85;
      }
    }
  }
}
</style>
