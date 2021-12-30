<template>
  <div :class="classes">
    <div v-show="label" class="j-input__header">
      <component :is="id ? 'label' : 'span'" :for="id" class="j-input__label">
        {{ label }}
      </component>
      <span v-show="required" :style="requiredStyles" class="j-input__required">
        必須
      </span>
      <j-progress-circle
        v-show="loading"
        :color="color"
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

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import {
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '@/utils/colors'
import { JProgressCircle } from '@/components/JProgress'

export default defineComponent({
  name: 'JInput',

  components: {
    JProgressCircle,
  },

  props: {
    /** 指定された色を装飾に適用します */
    color: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
    },
    /** エラー表示にします */
    error: {
      type: Boolean,
      default: false,
    },
    /** 指定されたテキストをエラーメッセージとして表示します */
    errorMessages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /** 指定されたテキストをヒントメッセージとして表示します */
    hint: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /** 指定された id をラベルに適用します */
    id: {
      type: String,
      default: undefined,
    },
    /** 指定されたラベルをコンポーネントに適用します */
    label: {
      type: String,
      default: undefined,
    },
    /** ローディングアニメーションを表示します */
    loading: {
      type: Boolean,
      default: false,
    },
    /** 必須マークを表示します */
    required: {
      type: Boolean,
      default: false,
    },
    /** 成功表示にします */
    success: {
      type: Boolean,
      default: false,
    },
    /** 指定されたテキストを成功メッセージとして表示します */
    successMessages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-input': true,
      'j-input--error': props.error,
      'j-input--success': props.success,
    }))

    const requiredStyles = computed((): { [key: string]: string } => ({
      color: getContrastColor(convertNameToHex(props.color)),
      'background-color': convertNameToHex(props.color),
    }))

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

    const showFooter = computed((): boolean => {
      return (
        !!props.hint.length ||
        !!props.errorMessages.length ||
        !!props.successMessages.length ||
        !!context.slots['footer-prepend'] ||
        !!context.slots['footer-append']
      )
    })

    return { classes, requiredStyles, messages, showFooter }
  },
})
</script>

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
