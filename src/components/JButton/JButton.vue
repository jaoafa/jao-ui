<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { colors, convertNameToHex, getContrastColor } from '@/utils/colors'
import { JProgressCircle } from '@/components/JProgress'

// props
type Props = {
  /** 指定された色をコンポーネントに適用します */
  color?: string
  /** コンポーネントをクリックできないようにします */
  disabled?: boolean
  /** コンポーネントをアンカーにして href 属性を追加します */
  href?: string
  /** コンポーネントをアイコンとして指定し、形状を円形にします */
  icon?: boolean
  /** ローディングアニメーションを表示します */
  loading?: boolean
  /** 装飾を削除します */
  noDecoration?: boolean
  /** コンポーネントを <nuxt-link> にします */
  nuxt?: boolean
  /** 背景を透明にし、枠線を追加します */
  outlined?: boolean
  /** 指定された大きさをコンポーネントに適用します */
  size?: 'large' | 'medium' | 'small'
  /** 指定されたタグをコンポーネントに適用します */
  tag?: string
  /** 指定された値を target 属性としてコンポーネントに追加します */
  target?: string
  /** コンポーネントを <router-link> にし、指定された値を to として適用します */
  to?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  disabled: false,
  href: undefined,
  icon: false,
  loading: false,
  noDecoration: false,
  nuxt: false,
  outlined: false,
  size: 'medium',
  tag: 'button',
  target: undefined,
  to: undefined,
})

// emit
type Emits = {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-button'> => ({
    'j-button': true,
    'j-button--large': props.size === 'large',
    'j-button--medium': props.size === 'medium',
    'j-button--small': props.size === 'small',
    'j-button--disabled': props.disabled,
    'j-button--outlined': props.outlined,
    'j-button--loading': props.loading,
    'j-button--icon': props.icon,
    'j-button--no-decoration': props.noDecoration,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    backgroundColor: backgroundColor.value,
    color: textColor.value,
  })
)

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

const computedTag = computed(
  (): string =>
    (props.to && (props.nuxt ? 'nuxt-link' : 'router-link')) ||
    (props.href && 'a') ||
    props.tag ||
    'button'
)

const attrs = computed((): { [key: string]: string } => {
  const res: { [key: string]: string } = {}
  if (props.href) {
    res.href = props.href
  }
  return res
})

const handleClick = (): void => {
  emit('click')
}
</script>

<template>
  <component
    :is="computedTag"
    :class="classes"
    :style="styles"
    :to="props.to"
    :target="props.target"
    :disabled="props.disabled"
    v-bind="attrs"
    @click="handleClick"
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

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-button';

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
  border-radius: 2px 2px 0;
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
    border: solid 2px currentcolor;

    &::before,
    &::after {
      background-color: currentcolor;
    }
  }

  &--loading {
    & .#{$root}__body {
      opacity: 0;
    }

    & .#{$root}__loader {
      opacity: 1;
    }
  }

  &--icon {
    padding: 0;
    line-height: 1;
    border-radius: 50%;

    &.#{$root} {
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

    & .#{$root}__body {
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

    & .#{$root}__body {
      &::after {
        display: none;
      }
    }
  }
}

.j-button__body {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    content: '';
    background-color: currentcolor;
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
    background-color: currentcolor;
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
