<template>
  <component
    :is="_tag"
    :class="classes"
    :style="styles"
    class="j-button"
  >
    <span class="j-button__body">
      <slot />
    </span>
  </component>
</template>

<script>
const colors = Object.freeze({
  primary: '#ffb41d',
  'primary-lighten': '#fff8e2',
  'primary-900': '#fd7217',
  'primary-800': '#fe9119',
  'primary-700': '#fea11b',
  'primary-600': '#ffb41d',
  'primary-500': '#ffc122',
  'primary-400': '#ffca34',
  'primary-300': '#ffd556',
  'primary-200': '#ffe086',
  'primary-100': '#ffecb5',
  'primary-50': '#fff8e2',

  secondary: '#e91e62',
  'secondary-lighten': '#fce4ec',
  'secondary-900': '#880d4e',
  'secondary-800': '#ad1356',
  'secondary-700': '#c2185a',
  'secondary-600': '#d81b5f',
  'secondary-500': '#e91e62',
  'secondary-400': '#ec4079',
  'secondary-300': '#f06291',
  'secondary-200': '#f48fb0',
  'secondary-100': '#f8bbd0',
  'secondary-50': '#fce4ec',

  black: '#000',
  white: '#fff',
  'gray-1000': '#05081a',
  'gray-900': '#1e2131',
  'gray-800': '#373948',
  'gray-700': '#50535f',
  'gray-600': '#696b76',
  'gray-500': '#82848d',
  'gray-400': '#9b9ca3',
  'gray-300': '#b4b5bb',
  'gray-200': '#cdced1',
  'gray-100': '#e6e7e9',
  'gray-50': '#f2f2f3',

  discord: '#7289da',
  twitter: '#1da1f2',
  facebook: '#1877f2',
  line: '#06c755',
  instagram: '#e1306c',
  youtube: '#ff0000',
})

const validateColor = (val) => {
  // hex
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)) {
    return true
  }
  // rgba
  else if (
    /^rgba\(((\d|[1-9]\d|1\d{1,2}|2[0-4]\d|25[0-5]),){3}([0-1]|0*\.\d+)\)$/i
      .test(val.replace(/ /g, ''))
  ) {
    return true
  }
  // color name
  else if (val in colors) {
    return true
  }
  // error
  else {
    return false
  }
}

const convertNameToHex = (val) => {
  return val in colors ? colors[val] : val
}

const convertHEXtoRGBA = (val) => {
  const r = val.length === 7 ? val.slice(1, 3) : val.slice(1, 2).repeat(2)
  const g = val.length === 7 ? val.slice(3, 5) : val.slice(2, 3).repeat(2)
  const b = val.length === 7 ? val.slice(5, 7) : val.slice(3, 4).repeat(2)
  return 'rgba(' +
    parseInt(r, 16) + ', ' +
    parseInt(g, 16) + ', ' +
    parseInt(b, 16) + ', 1)'
}

const getContrastColor = (val) => {
  if (val.startsWith('#')) {
    val = convertHEXtoRGBA(val)
  }
  const arr = [...val.matchAll(/[0-9]+/g)]
  return (((arr[0] * 299) + (arr[1] * 587) + (arr[2] * 114)) / 1000) < 128
    ? colors.white
    : colors['gray-800']
}

export default {
  name: 'JButton',
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
    outlined: {
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
    _color () {
      return convertNameToHex(this.color)
    },
    classes () {
      return {
        'j-button--large': this.size === 'large',
        'j-button--medium': this.size === 'medium',
        'j-button--small': this.size === 'small',
        'j-button--outlined': this.outlined,
      }
    },
    styles () {
      return {
        color: this.outlined ? this._color : getContrastColor(this._color),
        'background-color': this.outlined ? 'transparent' : this._color,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.j-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  font-family: 'Noto Sans JP', sans-serif;
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
    color: #ffb41d;
  }

  &--small {
    height: 24px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }

  &--outlined {
    border: solid 2px currentColor;

    &::before,
    &::after {
      background-color: currentColor;
    }
  }
}

.j-button__body {
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
</style>
