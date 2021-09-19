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
    :tag="_tag"
    :target="target"
    :tile="tile"
    :to="to"
    :width="width"
    v-bind="attrs"
    class="j-card"
    @click="click"
  >
    <slot />
  </j-sheet>
</template>

<script>
import JSheet from '@/components/JSheet'
import { getContrastColor, validateColor } from '@/utils/colors'
import { validateSize } from '@/utils/sizes'

export default {
  name: 'JCard',

  components: {
    JSheet,
  },

  props: {
    color: {
      type: String,
      default: 'white',
      validator: (val) => {
        return validateColor(val)
      },
    },
    flat: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    href: {
      type: String,
      default: null,
    },
    maxHeight: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxWidth: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    minHeight: {
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
    minWidth: {
      type: [Number, String],
      default: null,
      validator: (val) => {
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
      type: [Number, String],
      default: null,
      validator: (val) => {
        return validateSize(val)
      },
    },
  },

  computed: {
    _tag() {
      return (
        (this.to && (this.nuxt ? 'nuxt-link' : 'router-link')) ||
        (this.href && 'a') ||
        this.tag ||
        'div'
      )
    },
    classes() {
      return {
        'j-card--link': this.link,
        'j-card--tile': this.tile,
      }
    },
    styles() {
      return {
        color: getContrastColor(this.color),
      }
    },
    attrs() {
      const res = {}
      if (this.href) {
        res.href = this.href
      }
      return res
    },
    link() {
      return !!(this.to || this.href)
    },
  },

  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
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
        box-shadow:
          0 1px 4px 0 rgba(0, 0, 0, 0.08),
          0 2px 5px 0 rgba(0, 0, 0, 0.12);
        opacity: 0.85;
      }
    }
  }
}
</style>
