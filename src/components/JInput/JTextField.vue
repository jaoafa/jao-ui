<template>
  <j-input
    :id="id"
    :class="classes"
    :color="color"
    :error="error"
    :error-messages="errorMessages"
    :label="label"
    :loading="loading"
    :required="required"
  >
    <div class="j-text-field__body">
      <slot name="prepend" />
      <input
        :id="id"
        v-model="inputValue"
        :disabled="disabled"
        :readonly="readonly"
        :type="type"
        class="j-text-field__input"
      />
      <slot name="append" />
    </div>
  </j-input>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { nanoid } from 'nanoid'
import { validateColor } from '@/utils/colors'
import JInput from './JInput.vue'

export default defineComponent({
  name: 'JTextField',

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
    /** 指定された値を type 属性としてコンポーネントに適用します */
    type: {
      type: String as PropType<'text' | 'number'>,
      default: 'text',
      validator: (val: string): boolean => {
        return ['text', 'number'].includes(val)
      },
    },
    /** 現在入力している値を指定します */
    value: {
      type: [String, Number],
      default: '',
    },
  },

  emits: ['input', 'update:value'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-text-field': true,
      'j-text-field--disabled': props.disabled,
      'j-text-field--error': props.error,
      'j-text-field--readonly': props.readonly,
    }))

    const inputValue = computed({
      get: (): string | number => {
        return props.value
      },
      set: (val: string | number): void => {
        if (props.type === 'number') {
          val = +val
        }
        if (!props.readonly) {
          context.emit('input', val)
          context.emit('update:value', val)
        }
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

$root: 'j-text-field';

.j-text-field {
  position: inherit;

  &--disabled {
    pointer-events: none;

    .#{$root}__input {
      color: $color-gray-400;
      background-color: $color-gray-50;
    }
  }

  &--error {
    .#{$root}__input {
      border-color: $color-error;
    }
  }
}

.j-text-field__body {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 13px;
}

.j-text-field__input {
  flex: 1 1;
  padding: 4px 8px;
  font: inherit;
  line-height: 1;
  color: inherit;
  border: solid 1px $color-gray-200;
  border-radius: 2px;
  outline: none;
}
</style>
