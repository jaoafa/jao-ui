<template>
  <j-input
    :id="id"
    :class="classes"
    :color="color"
    :error="error"
    :error-messages="errorMessages"
    :hint="hint"
    :label="label"
    :loading="loading"
    :required="required"
    :success="success"
    :success-messages="successMessages"
  >
    <div class="j-textarea__body">
      <slot name="prepend" />
      <div class="j-textarea__slot">
        <slot name="prepend-inner" />
        <textarea
          :id="id"
          v-model="inputValue"
          :disabled="disabled"
          :readonly="readonly"
          :rows="rows"
          class="j-textarea__input"
        />
        <slot name="append" />
      </div>
      <slot name="append-outer" />
    </div>

    <template v-if="counter" #footer-append>
      <span class="j-textarea__counter">
        {{ inputValue.length }} {{ counterLength ? `/ ${counterLength}` : '' }}
      </span>
    </template>
  </j-input>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { nanoid } from 'nanoid'
import { validateColor } from '@/utils/colors'
import JInput from './JInput.vue'

export default defineComponent({
  name: 'JTextarea',

  components: {
    JInput,
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
    /** 文字数カウンタを表示します */
    counter: {
      type: Boolean,
      default: false,
    },
    /** 指定された長さを文字数カウンタに適用します */
    counterLength: {
      type: Number,
      default: undefined,
    },
    /** 入力を無効にします */
    disabled: {
      type: Boolean,
      default: false,
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
    /** 指定されたラベルをコンポーネントに適用します */
    label: {
      type: String,
      default: '',
    },
    /** ローディングアニメーションを表示します */
    loading: {
      type: Boolean,
      default: false,
    },
    /** 読み取り専用状態にします */
    readonly: {
      type: Boolean,
      default: false,
    },
    /** 必須マークを表示します */
    required: {
      type: Boolean,
      default: false,
    },
    /** 表示サイズ変更を有効にします */
    resize: {
      type: Boolean,
      default: false,
    },
    /** コンポーネントを指定された行数分表示できる高さに設定します */
    rows: {
      type: Number,
      default: 3,
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
    /** 現在入力している値を指定します */
    value: {
      type: String,
      default: '',
    },
  },

  emits: ['input', 'update:value'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-textarea': true,
      'j-textarea--disabled': props.disabled,
      'j-textarea--error': props.error,
      'j-textarea--readonly': props.readonly,
      'j-textarea--resize': props.resize,
      'j-textarea--success': props.success,
    }))

    const inputValue = computed({
      get: (): string => {
        return props.value
      },
      set: (val: string): void => {
        context.emit('input', val)
        context.emit('update:value', val)
      },
    })

    const id = ref<string>('')
    onMounted(() => {
      id.value = nanoid()
    })

    return { classes, inputValue, id }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-textarea';

.j-textarea {
  position: relative;

  &--disabled {
    pointer-events: none;

    .#{$root}__slot {
      background-color: $color-gray-50;
    }

    .#{$root}__input {
      color: $color-gray-400;
    }
  }

  &--error {
    .#{$root}__slot {
      border-color: $color-error;
    }

    .#{$root}__counter {
      color: $color-error;
    }
  }

  &--resize {
    .#{$root}__input {
      resize: vertical;
    }
  }

  &--success {
    .#{$root}__slot {
      border-color: $color-success;
    }

    .#{$root}__counter {
      color: $color-success;
    }
  }
}

.j-textarea__body {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 13px;
}

.j-textarea__slot {
  display: flex;
  flex: 1 1;
  align-items: center;
  overflow: hidden;
  border: solid 1px $color-gray-200;
  border-radius: 2px;
}

.j-textarea__input {
  flex: 1 1;
  padding: 4px 8px;
  font: inherit;
  color: inherit;
  resize: none;
  outline: none;
}

.j-textarea__counter {
  font-size: 10px;
}
</style>
