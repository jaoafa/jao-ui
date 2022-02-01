<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** コンポーネントに position:absolute; を適用します */
  absolute?: boolean
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** アニメーションを適用します */
  indeterminate?: boolean
  /** パーセントの値を指定します */
  percentage?: number
  /** 図形の線の太さを指定します */
  stroke?: number
}
const props = withDefaults(defineProps<Props>(), {
  absolute: false,
  color: 'primary',
  indeterminate: false,
  percentage: 0,
  stroke: 4,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-progress-bar'> => ({
    'j-progress-bar': true,
    'j-progress-bar--absolute': props.absolute,
    'j-progress-bar--indeterminate': props.indeterminate,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    color: convertedColor.value,
    height: `${props.stroke}px`,
  })
)

const convertedColor = computed((): string => convertNameToHex(props.color))
</script>

<template>
  <div :class="classes" :style="styles">
    <div class="j-progress-bar__background" />
    <div
      :style="{
        width: props.indeterminate ? undefined : `${props.percentage}%`,
      }"
      class="j-progress-bar__determinate"
    />
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-progress-bar';

.j-progress-bar {
  position: relative;
  width: 100%;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;

  &--absolute {
    position: absolute;
  }

  &--indeterminate {
    & .#{$root}__determinate {
      animation: progress-bar 1s linear infinite;
    }
  }
}

.j-progress-bar__background {
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.25;
  transition: inherit;
}

.j-progress-bar__determinate {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: currentColor;
  transition: inherit;
}

@keyframes progress-bar {
  0% {
    left: 0;
    width: 0;
  }

  35% {
    left: 0;
    width: 50%;
  }

  65% {
    left: 50%;
    width: 50%;
  }

  100% {
    left: 100%;
    width: 0;
  }
}
</style>
