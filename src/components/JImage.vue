<template>
  <div :class="classes" :style="styles" class="j-image">
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
      />
    </transition>

    <transition>
      <div v-show="!isLoaded" class="j-image__loader">
        <j-progress-circle :size="40" :indeterminate="true" color="gray-300" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { validateSize } from '@/utils/sizes'
import JProgressCircle from '@/components/JProgressCircle.vue'

export default defineComponent({
  name: 'JImage',

  components: {
    JProgressCircle,
  },

  props: {
    alt: {
      type: String,
      default: '',
    },
    contain: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    maxHeight: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    maxWidth: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minHeight: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    minWidth: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
    sizes: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: '',
      require: true,
    },
    srcset: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
      validator: (val: string): boolean => {
        return validateSize(val)
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-image--contain': props.contain,
    }))
    const styles = computed((): { [key: string]: string } => ({
      width: props.width,
      height: props.height,
      'max-width': props.maxWidth,
      'max-height': props.maxHeight,
      'min-width': props.minWidth,
      'min-height': props.minHeight,
    }))
    const isLoaded = ref(false)
    const onLoad = (): void => {
      isLoaded.value = true
    }
    return { classes, styles, isLoaded, onLoad }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
$root: '.j-image';

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
