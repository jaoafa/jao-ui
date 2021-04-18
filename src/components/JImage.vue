<template>
  <div
    :class="classes"
    :style="styles"
    class="j-image"
  >
    <transition>
      <img
        v-show="isLoaded"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        class="j-image__body"
        loading="lazy"
        @load="onLoad"
      >
    </transition>
    <transition>
      <div
        v-show="!isLoaded"
        class="j-image__loader"
      >
        <j-progress
          :size="40"
          :indeterminate="true"
          color="gray-300"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import JProgress from '@/components/JProgress'

const sizeUnits = Object.freeze([
  'cm',
  'mm',
  'q',
  'in',
  'pc',
  'pt',
  'px',
  'em',
  'ex',
  'ch',
  'rem',
  'lh',
  'vw',
  'vh',
  'vmin',
  'vmax',
  '%',
])

const validateSize = (val) => {
  // number
  if (typeof val === 'number' && val - val === 0) {
    return true
  }
  // string
  else if (
    val &&
    new RegExp('^\\d+\\.?\\d+(' + sizeUnits.join('|') + ')$', 'g').test(val)
  ) {
    return true
  }
  // error
  else {
    return false
  }
}

export default {
  name: 'JImage',
  components: {
    JProgress,
  },
  props: {
    src: {
      default: '',
      type: String,
      require: true,
    },
    srcset: {
      default: null,
      type: String,
    },
    sizes: {
      default: null,
      type: String,
    },
    alt: {
      default: '',
      type: String,
    },
    width: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    height: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    contain: {
      default: false,
      type: Boolean,
    },
  },
  data () {
    return {
      isLoaded: false,
    }
  },
  computed: {
    classes () {
      return {
        'j-image--contain': this.contain,
      }
    },
    styles () {
      return {
        width: this.width,
        height: this.height,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight,
        'min-width': this.minWidth,
        'min-height': this.minHeight,
      }
    },
  },
  methods: {
    onLoad () {
      this.isLoaded = true
    },
  },
}
</script>

<style lang="scss" scoped>
.j-image {
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 2px;
  object-fit: cover;

  &--contain {
    object-fit: contain;
  }
}

.j-image__body {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;

  &.v-enter-active,
  &.v-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }
}

.j-image__loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e7e9;

  &.v-enter-active,
  &.v-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }
}
</style>
