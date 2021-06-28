<template>
  <component
    :is="_tag"
    :class="classes"
    :style="styles"
    :to="to"
    :target="target"
    v-bind="attrs"
    class="j-card"
    @click="click"
  >
    <slot />
  </component>
</template>

<script>
import {
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '@/utils/colors'
import { validateSize } from '@/utils/sizes'

export default {
  name: 'JCard',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
    href: {
      default: null,
      type: String,
    },
    to: {
      default: null,
      type: String,
    },
    nuxt: {
      default: false,
      type: Boolean,
    },
    target: {
      default: null,
      type: String,
    },
    color: {
      default: 'white',
      type: String,
      validator: (val) => {
        return validateColor(val)
      },
    },
    width: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    height: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
  },

  computed: {
    _tag () {
      return (this.to && (this.nuxt ? 'nuxt-link' : 'router-link')) ||
        (this.href && 'a') ||
        this.tag ||
        'div'
    },
    classes () {
      return {
        'j-card--link': this.link,
      }
    },
    styles () {
      return {
        width: this.width,
        height: this.height,
        color: this.textColor,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight,
        'min-width': this.minWidth,
        'min-height': this.minHeight,
        'background-color': this.backgroundColor,
      }
    },
    attrs () {
      const res = {}
      if (this.href) {
        res.href = this.href
      }
      return res
    },
    link () {
      return !!(this.to || this.href)
    },
    textColor () {
      return getContrastColor(this.color)
    },
    backgroundColor () {
      return convertNameToHex(this.color)
    },
  },

  methods: {
    click (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/_' as *;
$root: '.j-card';

.j-card {
  position: relative;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-decoration: none;
  overflow-wrap: break-word;
  white-space: normal;
  border-radius: 2px;
  box-shadow:
    0 2px 8px 0 rgba(0, 0, 0, 0.08),
    0 4px 10px 0 rgba(0, 0, 0, 0.12);
  transition-duration: 0.1s;
  transition-property: box-shadow, opacity;

  &--link {
    cursor: pointer;

    &:hover {
      box-shadow:
        0 1px 4px 0 rgba(0, 0, 0, 0.08),
        0 2px 5px 0 rgba(0, 0, 0, 0.12);
      opacity: 0.85;
    }
  }
}
</style>
