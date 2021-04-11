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
          disabled
        >
          Button
        </j-button>
        <j-button
          size="medium"
          disabled
        >
          Button
        </j-button>
        <j-button
          size="small"
          disabled
        >
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
          outlined
          disabled
        >
          Button
        </j-button>
        <j-button
          size="medium"
          outlined
          disabled
        >
          Button
        </j-button>
        <j-button
          size="small"
          outlined
          disabled
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
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="medium"
          icon
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="small"
          icon
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
      </div>
    </div>
    <div class="container">
      <div class="container__body">
        <j-button
          size="large"
          disabled
          icon
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="medium"
          disabled
          icon
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="small"
          disabled
          icon
        >
          <font-awesome-icon icon="bomb" />
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
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="medium"
          icon
          outlined
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="small"
          icon
          outlined
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
      </div>
    </div>
    <div class="container">
      <div class="container__body">
        <j-button
          size="large"
          icon
          disabled
          outlined
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="medium"
          icon
          disabled
          outlined
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
        <j-button
          size="small"
          icon
          disabled
          outlined
        >
          <font-awesome-icon icon="bomb" />
        </j-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBomb)

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FontAwesomeIcon,
  },
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
