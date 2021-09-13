<template>
  <div class="j-app">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JApp',
}
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
$root: '.j-app';

.j-app {
  position: relative;
}
</style>

<style lang="scss">
@use 'src/sass/styles.scss';
</style>
