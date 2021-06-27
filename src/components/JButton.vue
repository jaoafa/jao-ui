<template>
  <component
    :is="_tag"
    :class="classes"
    :to="to"
    :target="target"
    :style="styles"
    :disabled="disabled ? 'disabled' : null"
    v-bind="attrs"
    class="j-button"
    @click="click"
  >
    <span class="j-button__body">
      <slot />
    </span>
    <span class="j-button__loader">
      <j-progress
        :color="textColor"
        :size="20"
        :stroke="2"
        indeterminate
      />
    </span>
  </component>
</template>

<script>
import JProgress from '@/components/JProgress'
import {
  colors,
  validateColor,
  convertNameToHex,
  getContrastColor,
} from '@/utils/colors'

export default {
  name: 'JButton',

  components: {
    JProgress,
  },

  props: {
    tag: {
      default: 'button',
      type: String,
    },
    href: {
      default: null,
      type: String,
    },
    to: {
      default: null,
      type: String,
    },
    nuxt: {
      default: false,
      type: Boolean,
    },
    target: {
      default: null,
      type: String,
    },
    size: {
      default: 'medium',
      type: String,
      validator: (val) => {
        return ['large', 'medium', 'small'].includes(val)
      },
    },
    color: {
      default: 'primary',
      type: String,
      validator: (val) => {
        return validateColor(val)
      },
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    outlined: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    _tag () {
      return (this.to && (this.nuxt ? 'nuxt-link' : 'router-link')) ||
        (this.href && 'a') ||
        this.tag ||
        'button'
    },
    classes () {
      return {
        'j-button--large': this.size === 'large',
        'j-button--medium': this.size === 'medium',
        'j-button--small': this.size === 'small',
        'j-button--disabled': this.disabled,
        'j-button--outlined': this.outlined,
        'j-button--loading': this.loading,
        'j-button--icon': this.icon,
      }
    },
    styles () {
      return {
        color: this.textColor,
        'background-color': this.backgroundColor,
      }
    },
    attrs () {
      const res = {}
      if (this.href) {
        res.href = this.href
      }
      return res
    },
    textColor () {
      const color = this.color
      return this.disabled
        ? colors['gray-200']
        : this.outlined
          ? convertNameToHex(color)
          : getContrastColor(color)
    },
    backgroundColor () {
      const color = convertNameToHex(this.color)
      return this.outlined
        ? 'transparent'
        : this.disabled
          ? colors['gray-100']
          : color
    },
  },

  methods: {
    click (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/_' as *;
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

    *::after {
      display: none;
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
