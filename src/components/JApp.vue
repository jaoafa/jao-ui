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

<style lang="scss">
@use 'src/sass/includes' as *;
@use 'src/sass/styles.scss';
$root: '.j-app';

.j-app {
  position: relative;
  font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
}
</style>
