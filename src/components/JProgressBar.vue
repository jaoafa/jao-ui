<template>
  <div
    :class="classes"
    :style="styles"
    class="j-progress-bar"
  >
    <div class="j-progress-bar__background" />
    <div
      :style="{ width: indeterminate ? null : `${percentage}%` }"
      class="j-progress-bar__determinate"
    />
  </div>
</template>

<script>
import {
  convertNameToHex,
  validateColor,
} from '@/utils/colors'

export default {
  name: 'JProgressBar',

  props: {
    absolute: {
      default: false,
      type: Boolean,
    },
    color: {
      default: 'primary',
      type: String,
      validator: (val) => {
        return validateColor(val)
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

  computed: {
    _color () {
      return convertNameToHex(this.color)
    },
    classes () {
      return {
        'j-progress-bar--absolute': this.absolute,
        'j-progress-bar--indeterminate': this.indeterminate,
      }
    },
    styles () {
      return {
        color: this._color,
        height: `${this.stroke}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass' as *;
$root: '.j-progress-bar';

.j-progress-bar {
  position: relative;
  width: 100%;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;

  &--absolute {
    position: absolute;
  }

  &--indeterminate {
    & #{$root}__determinate {
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
