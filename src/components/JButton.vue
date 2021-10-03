<template>
  <component
    :is="computedTag"
    :class="classes"
    :style="styles"
    :to="to"
    :target="target"
    :disabled="disabled ? 'disabled' : null"
    v-bind="attrs"
    class="j-button"
    @click="click"
  >
    <span class="j-button__body">
      <slot />
    </span>

    <span class="j-button__loader">
      <j-progress-circle
        :color="textColor"
        :size="20"
        :stroke="2"
        indeterminate
      />
    </span>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {
  colors,
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '@/utils/colors'
import JProgressCircle from '@/components/JProgressCircle.vue'

export default defineComponent({
  name: 'JButton',

  components: {
    JProgressCircle,
  },

  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    noDecoration: {
      type: Boolean,
      default: false,
    },
    nuxt: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string): boolean => {
        return ['large', 'medium', 'small'].includes(val)
      },
    },
    tag: {
      type: String,
      default: 'button',
    },
    target: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },

  emits: ['click'],

  setup(props, context) {
    const computedTag = computed(
      (): string =>
        (props.to && (props.nuxt ? 'nuxt-link' : 'router-link')) ||
        (props.href && 'a') ||
        props.tag ||
        'button'
    )
    const classes = computed((): { [key: string]: boolean } => ({
      'j-button--large': props.size === 'large',
      'j-button--medium': props.size === 'medium',
      'j-button--small': props.size === 'small',
      'j-button--disabled': props.disabled,
      'j-button--outlined': props.outlined,
      'j-button--loading': props.loading,
      'j-button--icon': props.icon,
      'j-button--no-decoration': props.noDecoration,
    }))

    const textColor = computed((): string =>
      props.disabled
        ? colors['gray-200']
        : props.outlined
        ? convertNameToHex(props.color)
        : getContrastColor(props.color)
    )
    const backgroundColor = computed((): string =>
      props.outlined
        ? 'transparent'
        : props.disabled
        ? colors['gray-100']
        : convertNameToHex(props.color)
    )
    const styles = computed((): { [key: string]: string } => ({
      color: textColor.value,
      'background-color': backgroundColor.value,
    }))

    const attrs = computed((): { [key: string]: string } => {
      const res: { [key: string]: string } = {}
      if (props.href) {
        res.href = props.href
      }
      return res
    })

    const click = (e: Event): void => {
      context.emit('click', e)
    }

    return { attrs, classes, computedTag, styles, textColor, click }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
$root: '.j-button';

.j-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 2px 2px 0 2px;
  outline: none;

  &:hover {
    *::before {
      opacity: 0.1;
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    background-color: inherit;
  }

  &::before {
    right: -4px;
    bottom: -4px;
    width: 100%;
    height: 2px;
  }

  &::after {
    right: -4px;
    bottom: -4px;
    width: 2px;
    height: 100%;
  }

  &--large {
    height: 48px;
    padding: 0 24px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  &--medium {
    height: 32px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }

  &--small {
    height: 24px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }

  &--disabled {
    pointer-events: none;
  }

  &--outlined {
    border: solid 2px currentColor;

    &::before,
    &::after {
      background-color: currentColor;
    }
  }

  &--loading {
    & #{$root}__body {
      opacity: 0;
    }

    & #{$root}__loader {
      opacity: 1;
    }
  }

  &--icon {
    padding: 0 0 2px 0;
    line-height: 1;
    border-radius: 50%;

    &#{$root} {
      &--large {
        width: 48px;
        font-size: 20px;
      }

      &--medium {
        width: 32px;
        font-size: 16px;
      }

      &--small {
        width: 24px;
        font-size: 12px;
      }
    }

    &::before,
    &::after {
      display: none;
    }

    & #{$root}__body {
      &::after {
        display: none;
      }
    }
  }

  &--no-decoration {
    &::before,
    &::after {
      display: none;
    }

    & #{$root}__body {
      &::after {
        display: none;
      }
    }
  }
}

.j-button__body {
  border-radius: inherit;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    content: '';
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition-duration: 0.1s;
    transition-property: opacity;
  }

  &::after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    pointer-events: none;
    content: '';
    background-color: currentColor;
  }
}

.j-button__loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
}
</style>
