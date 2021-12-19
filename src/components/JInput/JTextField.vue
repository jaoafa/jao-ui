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
    <div class="j-text-field__body">
      <span
        v-if="slots.prepend"
        class="j-text-field__prepend"
        @click="clickPrepend"
      >
        <slot name="prepend" />
      </span>

      <div class="j-text-field__slot">
        <span
          v-if="slots.prependInner"
          class="j-text-field__prepend-inner"
          @click="clickPrependInner"
        >
          <slot name="prepend-inner" />
        </span>

        <input
          :id="id"
          v-model="inputValue"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :type="type"
          class="j-text-field__input"
        />

        <span
          v-if="slots.append"
          class="j-text-field__append"
          @click="clickAppend"
        >
          <slot name="append" />
        </span>
      </div>

      <span
        v-if="slots.appendOuter"
        class="j-text-field__append-outer"
        @click="clickAppendOuter"
      >
        <slot name="append-outer" />
      </span>
    </div>

    <template v-if="counter" #footer-append>
      <span class="j-text-field__counter">
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
    /**
     * 指定された値を type 属性としてコンポーネントに適用します
     * @values text, number
     */
    type: {
      type: String as PropType<'text' | 'number' | 'password'>,
      default: 'text',
      validator: (val: string): boolean => {
        return ['text', 'number', 'password'].includes(val)
      },
    },
    /** 現在入力している値を指定します */
    value: {
      type: [String, Number],
      default: '',
    },
  },

  emits: [
    'input',
    'click:prepend',
    'click:prepend-inner',
    'click:append',
    'click:append-outer',
    'update:value',
  ],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-text-field': true,
      'j-text-field--disabled': props.disabled,
      'j-text-field--error': props.error,
      'j-text-field--readonly': props.readonly,
      'j-text-field--success': props.success,
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

    const slots = computed((): { [key: string]: boolean } => ({
      prepend: !!context.slots.prepend,
      prependInner: !!context.slots['prepend-inner'],
      append: !!context.slots.append,
      appendOuter: !!context.slots['append-outer'],
    }))

    const clickPrepend = (e: Event): void => {
      context.emit('click:prepend', e)
    }
    const clickPrependInner = (e: Event): void => {
      context.emit('click:prepend-inner', e)
    }
    const clickAppend = (e: Event): void => {
      context.emit('click:append', e)
    }
    const clickAppendOuter = (e: Event): void => {
      context.emit('click:append-outer', e)
    }

    return {
      classes,
      inputValue,
      id,
      slots,
      clickPrepend,
      clickPrependInner,
      clickAppend,
      clickAppendOuter,
    }
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

  &--success {
    .#{$root}__slot {
      border-color: $color-success;
    }

    .#{$root}__counter {
      color: $color-success;
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

.j-text-field__slot {
  display: flex;
  flex: 1 1;
  align-items: center;
  overflow: hidden;
  border: solid 1px $color-gray-200;
  border-radius: 2px;
}

.j-text-field__input {
  flex: 1 1;
  padding: 4px 8px;
  font: inherit;
  line-height: 1;
  color: inherit;
  outline: none;
}

.j-text-field__counter {
  font-size: 10px;
}
</style>
