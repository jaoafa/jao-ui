<template>
  <div :class="classes" class="j-app">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JApp',

  props: {
    noStretch: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        'j-app--no-stretch': this.noStretch,
      }
    },
  },
}
</script>

<style lang="scss">
@use 'src/sass/includes' as *;
@use 'src/sass/styles.scss';
$root: '.j-app';

.j-app {
  position: relative;
  min-height: 100vh;
  font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
  line-height: 1.8;
  color: $color-gray-900;

  &--no-stretch {
    min-height: auto;
  }
}
</style>
