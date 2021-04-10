<template>
  <div class="app">
    <div class="container">
      <div class="container__body">
        <j-button size="large">
          Button
        </j-button>
        <j-button size="medium">
          Button
        </j-button>
        <j-button size="small">
          Button
        </j-button>
      </div>
    </div>
    <div class="container">
      <div class="container__body">
        <j-button
          size="large"
          outlined
        >
          Button
        </j-button>
        <j-button
          size="medium"
          outlined
        >
          Button
        </j-button>
        <j-button
          size="small"
          outlined
        >
          Button
        </j-button>
      </div>
    </div>
    <div class="container">
      <div class="container__body">
        <j-button
          size="large"
          icon
        >
          A
        </j-button>
        <j-button
          size="medium"
          icon
        >
          A
        </j-button>
        <j-button
          size="small"
          icon
        >
          A
        </j-button>
      </div>
    </div>
    <div class="container">
      <div class="container__body">
        <j-button
          size="large"
          icon
          outlined
        >
          A
        </j-button>
        <j-button
          size="medium"
          icon
          outlined
        >
          A
        </j-button>
        <j-button
          size="small"
          icon
          outlined
        >
          A
        </j-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ServeDev',
})
</script>

<style lang="scss" scoped>
.app {
  padding: 24px;
}

.container {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 8px;

  & ~ & {
    margin-top: 16px;
  }

  &__body {
    display: flex;
    gap: 16px;
    align-items: center;
  }
}
</style>
