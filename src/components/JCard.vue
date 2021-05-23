<template>
  <component
    :is="_tag"
    :class="classes"
    :href="href"
    :style="styles"
    :to="to"
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
    color: {
      default: 'white',
      type: String,
      validator: (val) => {
        return validateColor(val)
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
      return {}
    },
    styles () {
      return {
        color: this.textColor,
        'background-color': this.backgroundColor,
      }
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
}
</style>
