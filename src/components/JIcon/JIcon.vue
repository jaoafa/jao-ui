<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** 指定された大きさをコンポーネントに適用します */
  size?: number
}
const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  size: undefined,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-icon'> => ({
    'j-icon': true,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    color: props.color ? convertNameToHex(props.color) : 'inherit',
    fontSize: props.size ? `${props.size}px` : 'inherit',
  })
)
</script>

<template>
  <span :class="classes" :style="styles">
    <i class="material-icons j-icon__icon">
      <slot />
    </i>
  </span>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-icon';

.j-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  letter-spacing: normal;
  user-select: none;
}

.j-icon__icon {
  font-size: inherit;
}
</style>
