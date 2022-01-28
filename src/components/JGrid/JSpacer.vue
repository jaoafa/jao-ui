<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'

// props
type Props = {
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-spacer'> => ({
    'j-spacer': true,
  })
)
</script>

<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-spacer';

.j-spacer {
  flex-grow: 1;
}
</style>
