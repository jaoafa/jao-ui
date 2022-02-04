<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'
import { JIcon } from '@/components/JIcon'

// props
type Props = {
  /** 現在の状態を指定します */
  value?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  value: false,
})

// emit
type Emits = {
  (e: 'click'): void
  (e: 'update:value', value: Required<Props>['value']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-app-header-button'> => ({
    'j-app-header-button': true,
  })
)

const handleClick = (): void => {
  emit('click')
  emit('update:value', !props.value)
}
</script>

<template>
  <button :class="classes" @click="handleClick">
    <j-icon :size="20">{{ props.value ? 'close' : 'menu' }}</j-icon>
  </button>
</template>

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
