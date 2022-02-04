<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { convertNameToHex, getContrastColor } from '@/utils/colors'
import { JProgressCircle } from '@/components/JProgress'

// props
type Props = {
  /** 指定された色を装飾に適用します */
  color?: string
  /** エラー表示にします */
  error?: boolean
  /** 指定されたテキストをエラーメッセージとして表示します */
  errorMessages?: string[]
  /** 指定されたテキストをヒントメッセージとして表示します */
  hint?: string[]
  /** 指定された id をラベルに適用します */
  id?: string
  /** 指定されたラベルをコンポーネントに適用します */
  label?: string
  /** ローディングアニメーションを表示します */
  loading?: boolean
  /** 必須マークを表示します */
  required?: boolean
  /** 成功表示にします */
  success?: boolean
  /** 指定されたテキストを成功メッセージとして表示します */
  successMessages?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  error: false,
  errorMessages: () => [],
  hint: () => [],
  id: undefined,
  label: undefined,
  loading: false,
  required: false,
  success: false,
  successMessages: () => [],
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-input'> => ({
    'j-input': true,
    'j-input--error': props.error,
    'j-input--success': props.success,
  })
)

// style
const requiredMarkStyles = computed(
  (): ComponentTagStyles => ({
    color: getContrastColor(convertNameToHex(props.color)),
    backgroundColor: convertNameToHex(props.color),
  })
)

const messages = computed(
  (): {
    hint: { id: number; text: string }[]
    success: { id: number; text: string }[]
    error: { id: number; text: string }[]
  } => ({
    hint: props.hint.map((item, index) => ({ id: index, text: item })),
    success: props.successMessages.map((item, index) => ({
      id: index,
      text: item,
    })),
    error: props.errorMessages.map((item, index) => ({
      id: index,
      text: item,
    })),
  })
)

const slots = useSlots()
const showFooter = computed((): boolean => {
  return (
    !!props.hint.length ||
    !!props.errorMessages.length ||
    !!props.successMessages.length ||
    !!slots['footer-prepend'] ||
    !!slots['footer-append']
  )
})
</script>

<template>
  <div :class="classes">
    <div v-show="props.label" class="j-input__header">
      <component
        :is="props.id ? 'label' : 'span'"
        :for="props.id"
        class="j-input__label"
      >
        {{ props.label }}
      </component>
      <span
        v-show="props.required"
        :style="requiredMarkStyles"
        class="j-input__required"
      >
        必須
      </span>
      <j-progress-circle
        v-show="props.loading"
        :color="props.color"
        :size="18"
        :stroke="2"
        indeterminate
      />
    </div>

    <div class="j-input__body">
      <slot />
    </div>

    <div v-show="showFooter" class="j-input__footer">
      <slot name="footer-prepend" />
      <div class="j-input__message">
        <template v-for="hintMessage in messages.hint" :key="hintMessage.id">
          <p class="j-input__hint">{{ hintMessage.text }}</p>
        </template>
        <template
          v-for="successMessage in messages.success"
          :key="successMessage.id"
        >
          <p class="j-input__success">{{ successMessage.text }}</p>
        </template>
        <template v-for="errorMessage in messages.error" :key="errorMessage.id">
          <p class="j-input__error">{{ errorMessage.text }}</p>
        </template>
      </div>
      <slot name="footer-append" />
    </div>
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-input';

.j-input {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 4px;
  max-width: 100%;

  &--error {
    .#{$root}__label {
      color: $color-error;
    }
  }

  &--success {
    .#{$root}__label {
      color: $color-success;
    }
  }
}

.j-input__header {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}

.j-input__label {
  font-size: 14px;
  user-select: none;
}

.j-input__required {
  padding: 0 8px 2px 6px;
  font-size: 10px;
  border-radius: 2px;
}

.j-input__footer {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.j-input__message {
  flex: 1 1;
  font-size: 10px;
}

.j-input__success {
  color: $color-success;
}

.j-input__error {
  color: $color-error;
}
</style>
