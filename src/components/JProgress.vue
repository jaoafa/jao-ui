<template>
  <div
    :class="classes"
    class="j-progress"
  >
    <svg
      :width="size"
      :height="size"
      :viewbox="`0 0 ${size} ${size}`"
      xmlns="http://www.w3.org/2000/svg"
      class="j-progress__svg"
      style="transform: rotate(-90deg);"
    >
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="_color"
        :stroke-width="stroke"
        :stroke-dasharray="indeterminate ? null : circumference"
        :stroke-dashoffset="indeterminate ? null : offset"
        fill="transparent"
        class="j-progress__circle"
      />
    </svg>
  </div>
</template>

<script>
import {
  validateColor,
  convertNameToHex,
} from '@/utils/colors'

export default {
  name: 'JProgress',
  props: {
    type: {
      default: 'circle',
      type: String,
      validator: (val) => {
        return ['circle'].includes(val)
      },
    },
    color: {
      default: 'primary',
      type: String,
      validator: (val) => {
        return validateColor(val)
      },
    },
    size: {
      default: 32,
      type: Number,
      validator: (val) => {
        return val > 0
      },
    },
    stroke: {
      default: 4,
      type: Number,
      validator: (val) => {
        return val > 0
      },
    },
    percentage: {
      default: 0,
      type: Number,
      validator: (val) => {
        return val >= 0 && val <= 100
      },
    },
    indeterminate: {
      default: false,
      type: Boolean,
    },
  },
  data () {
    return {
      dashOffset: 0,
    }
  },
  computed: {
    _color () {
      return convertNameToHex(this.color)
    },
    classes () {
      return {
        'j-progress--circle': this.type === 'circle',
        'j-progress--line': this.type === 'line',
        'j-progress--indeterminate': this.indeterminate,
      }
    },
    radius () {
      return (this.size / 2) - this.stroke
    },
    circumference () {
      return this.radius * 2 * Math.PI
    },
    offset () {
      const length = this.circumference
      return length * (1 - this.percentage / 100)
    },
  },
}
</script>

<style lang="scss" scoped>
.j-progress {
  $root: #{&};

  display: inline-flex;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;

  &--circle {
    &#{$root}--indeterminate {
      & #{$root}__svg {
        animation: progress-circle-turn 1.6s linear infinite;
      }

      & #{$root}__circle {
        stroke-dasharray: calc(80% * 3.14);
        animation: progress-circle-dash 1.2s ease-in-out infinite;
      }
    }
  }
}

.j-progress__svg {
  stroke-linecap: round;
  transition-timing-function: inherit;
  transition-duration: inherit;
}

.j-progress__circle {
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
