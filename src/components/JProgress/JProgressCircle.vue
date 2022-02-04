<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'
import { convertNameToHex } from '@/utils/colors'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** アニメーションを適用します */
  indeterminate?: boolean
  /** パーセントの値を指定します */
  percentage?: number
  /** コンポーネントの大きさを指定します */
  size?: number
  /** 図形の線の太さを指定します */
  stroke?: number
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  indeterminate: false,
  percentage: 0,
  size: 32,
  stroke: 4,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-progress-circle'> => ({
    'j-progress-circle': true,
    'j-progress-circle--indeterminate': props.indeterminate,
  })
)

const convertedColor = computed((): string => convertNameToHex(props.color))
const radius = computed((): number => props.size / 2 - props.stroke)
const circumference = computed((): number => radius.value * 2 * Math.PI)
const offset = computed(
  (): number => circumference.value * (1 - props.percentage / 100)
)
</script>

<template>
  <div :class="classes">
    <svg
      :width="props.size"
      :height="props.size"
      :viewbox="`0 0 ${props.size} ${props.size}`"
      xmlns="http://www.w3.org/2000/svg"
      class="j-progress-circle__svg"
      style="transform: rotate(-90deg)"
    >
      <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        :stroke="convertedColor"
        :stroke-width="props.stroke"
        :stroke-dasharray="props.indeterminate ? undefined : circumference"
        :stroke-dashoffset="props.indeterminate ? undefined : offset"
        fill="transparent"
        class="j-progress-circle__circle"
      />
    </svg>
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-progress-circle';

.j-progress-circle {
  display: inline-flex;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;

  &--indeterminate {
    & .#{$root}__svg {
      animation: progress-circle-turn 1.6s linear infinite;
    }

    & .#{$root}__circle {
      stroke-dasharray: calc(80% * 3.14);
      animation: progress-circle-dash 1.2s ease-in-out infinite;
    }
  }
}

.j-progress-circle__svg {
  stroke-linecap: round;
  transition-timing-function: inherit;
  transition-duration: inherit;
}

.j-progress-circle__circle {
  transition-timing-function: inherit;
  transition-duration: inherit;
}

@keyframes progress-circle-turn {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1turn);
  }
}

@keyframes progress-circle-dash {
  0% {
    stroke-dashoffset: calc(80% * 3.14);
  }

  100% {
    stroke-dashoffset: calc(-80% * 3.14);
  }
}
</style>
