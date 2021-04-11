<template>
  <div class="jao-ui-sample">
    <p>The counter was {{ changedBy }} to <b>{{ counter }}</b>.</p>
    <button @click="increment">
      Click +1
    </button>
    <button @click="decrement">
      Click -1
    </button>
    <button @click="increment(5)">
      Click +5
    </button>
    <button @click="decrement(5)">
      Click -5
    </button>
    <button @click="reset">
      Reset
    </button>
  </div>
</template>

<script>

export default /* #__PURE__ */{
  name: 'JaoUiSample', // vue component name
  data () {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    }
  },
  computed: {
    changedBy () {
      const { message } = this
      if (!message.action) return 'initialized'
      return `${message.action} ${message.amount || ''}`.trim()
    },
  },
  methods: {
    increment (arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg
      this.counter += amount
      this.message.action = 'incremented by'
      this.message.amount = amount
    },
    decrement (arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg
      this.counter -= amount
      this.message.action = 'decremented by'
      this.message.amount = amount
    },
    reset () {
      this.counter = this.initCounter
      this.message.action = 'reset'
      this.message.amount = null
    },
  },
}
</script>

<style lang="scss" scoped>
.jao-ui-sample {
  display: block;
  width: 400px;
  padding: 25px;
  margin: 25px auto;
  text-align: center;
  background: #eaeaea;
  border: 1px solid #ccc;
}

.jao-ui-sample p {
  margin: 0 0 1em;
}
</style>
