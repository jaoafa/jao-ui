<template>
  <button :class="classes" @click="click">
    <j-icon :size="20">{{ value ? 'close' : 'menu' }}</j-icon>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { JIcon } from '@/components/JIcon'

export default defineComponent({
  name: 'JAppHeaderButton',

  components: {
    JIcon,
  },

  props: {
    /** 現在の状態を指定します */
    value: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click', 'update:value'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-header-button': true,
    }))
    const click = (e: Event): void => {
      context.emit('click', e)
      context.emit('update:value', !props.value)
    }
    return { classes, click }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header-button';

.j-app-header-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 22px;
  background-color: transparent;
  transition: background-color 0.1s;

  @include breakpoint(md) {
    padding: 0 28px;
  }

  &:last-child {
    margin-right: -16px;
    border-left: solid 1px $color-gray-50;

    @include breakpoint(md) {
      margin-right: -24px;
    }
  }

  &:first-child {
    margin-left: -16px;
    border-right: solid 1px $color-gray-50;

    @include breakpoint(md) {
      margin-left: -24px;
    }
  }

  &:hover {
    background-color: $color-gray-50;
  }
}
</style>
