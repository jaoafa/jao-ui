<template>
  <div :class="classes">
    <svg
      :width="size"
      :height="size"
      :viewbox="`0 0 ${size} ${size}`"
      xmlns="http://www.w3.org/2000/svg"
      class="j-progress-circle__svg"
      style="transform: rotate(-90deg)"
    >
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="convertedColor"
        :stroke-width="stroke"
        :stroke-dasharray="indeterminate ? null : circumference"
        :stroke-dashoffset="indeterminate ? null : offset"
        fill="transparent"
        class="j-progress-circle__circle"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'

export default defineComponent({
  name: 'JProgressCircle',

  props: {
    /**
     * 指定された色をコンポーネントに適用します。
     */
    color: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    /**
     * アニメーションを適用します。
     */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    /**
     * パーセントの値を指定します。
     */
    percentage: {
      type: Number,
      default: 0,
      validator: (val: number): boolean => {
        return val >= 0 && val <= 100
      },
    },
    /**
     * コンポーネントの大きさを指定します。
     */
    size: {
      type: Number,
      default: 32,
      validator: (val: number): boolean => {
        return val > 0
      },
    },
    /**
     * 図形の線の太さを指定します。
     */
    stroke: {
      type: Number,
      default: 4,
      validator: (val: number): boolean => {
        return val > 0
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-progress-circle': true,
      'j-progress-circle--indeterminate': props.indeterminate,
    }))

    const convertedColor = computed((): string => convertNameToHex(props.color))

    const radius = computed((): number => props.size / 2 - props.stroke)

    const circumference = computed((): number => radius.value * 2 * Math.PI)

    const offset = computed(
      (): number => circumference.value * (1 - props.percentage / 100)
    )

    return { circumference, classes, convertedColor, offset, radius }
  },
})
</script>

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
