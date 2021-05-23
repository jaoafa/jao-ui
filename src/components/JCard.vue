<template>
  <component
    :is="_tag"
    :class="classes"
    :style="styles"
    class="j-card"
    @click="click"
  >
    <slot />
  </component>
</template>

<script>
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
      return {}
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
