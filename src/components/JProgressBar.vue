<template>
  <div :class="classes" :style="styles">
    <div class="j-progress-bar__background" />
    <div
      :style="{ width: indeterminate ? null : `${percentage}%` }"
      class="j-progress-bar__determinate"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { convertNameToHex, validateColor } from '@/utils/colors'

export default defineComponent({
  name: 'JProgressBar',

  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (val: number): boolean => {
        return val >= 0 && val <= 100
      },
    },
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
      'j-progress-bar': true,
      'j-progress-bar--absolute': props.absolute,
      'j-progress-bar--indeterminate': props.indeterminate,
    }))

    const styles = computed((): { [key: string]: string } => ({
      color: convertedColor.value,
      height: `${props.stroke}px`,
    }))

    const convertedColor = computed((): string => convertNameToHex(props.color))

    return { classes, styles }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

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
