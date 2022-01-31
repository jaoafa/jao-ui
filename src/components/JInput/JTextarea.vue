<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from 'vue'
import { nanoid } from 'nanoid'
import { ComponentTagClasses } from '@/types'
import JInput from './JInput.vue'

// props
type Props = {
  /** 指定された色を装飾に適用します */
  color?: string
  /** 文字数カウンタを表示します */
  counter?: boolean
  /** 指定された長さを文字数カウンタに適用します */
  counterLength?: number
  /** 入力を無効にします */
  disabled?: boolean
  /** エラー表示にします */
  error?: boolean
  /** 指定されたテキストをエラーメッセージとして表示します */
  errorMessages?: string[]
  /** 指定されたテキストをヒントメッセージとして表示します */
  hint?: string[]
  /** 指定されたラベルをコンポーネントに適用します */
  label?: string
  /** ローディングアニメーションを表示します */
  loading?: boolean
  /** 読み取り専用状態にします */
  readonly?: boolean
  /** 必須マークを表示します */
  required?: boolean
  /** 表示サイズ変更を有効にします */
  resize?: boolean
  /** コンポーネントを指定された行数分表示できる高さに設定します */
  rows?: number
  /** 成功表示にします */
  success?: boolean
  /** 指定されたテキストを成功メッセージとして表示します */
  successMessages?: string[]
  /** 現在入力している値を指定します */
  value?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  counter: false,
  counterLength: undefined,
  disabled: false,
  error: false,
  errorMessages: () => [],
  hint: () => [],
  label: undefined,
  loading: false,
  readonly: false,
  required: false,
  resize: false,
  rows: 3,
  success: false,
  successMessages: () => [],
  value: '',
})

// emit
type Emits = {
  (e: 'input', value: Required<Props>['value']): void
  (e: 'update:value', value: Required<Props>['value']): void
  (e: 'click:prepend'): void
  (e: 'click:prepend-inner'): void
  (e: 'click:append'): void
  (e: 'click:append-outer'): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-textarea'> => ({
    'j-textarea': true,
    'j-textarea--disabled': props.disabled,
    'j-textarea--error': props.error,
    'j-textarea--readonly': props.readonly,
    'j-textarea--resize': props.resize,
    'j-textarea--success': props.success,
  })
)

const inputValue = computed({
  get: (): string => props.value,
  set: (val: string): void => {
    emit('input', val)
    emit('update:value', val)
  },
})

const id = ref<string>('')
onMounted(() => (id.value = nanoid()))

const slots = useSlots()
const isSlots = computed((): { [key: string]: boolean } => ({
  prepend: !!slots.prepend,
  prependInner: !!slots['prepend-inner'],
  append: !!slots.append,
  appendOuter: !!slots['append-outer'],
}))

const clickPrepend = (): void => {
  emit('click:prepend')
}
const clickPrependInner = (): void => {
  emit('click:prepend-inner')
}
const clickAppend = (): void => {
  emit('click:append')
}
const clickAppendOuter = (): void => {
  emit('click:append-outer')
}
</script>

<template>
  <j-input
    :id="id"
    :class="classes"
    :color="props.color"
    :error="props.error"
    :error-messages="props.errorMessages"
    :hint="props.hint"
    :label="props.label"
    :loading="props.loading"
    :required="props.required"
    :success="props.success"
    :success-messages="props.successMessages"
  >
    <div class="j-textarea__body">
      <span
        v-if="isSlots.prepend"
        class="j-textarea__prepend"
        @click="clickPrepend"
      >
        <slot name="prepend" />
      </span>

      <div class="j-textarea__slot">
        <span
          v-if="isSlots.prependInner"
          class="j-textarea__prepend-inner"
          @click="clickPrependInner"
        >
          <slot name="prepend-inner" />
        </span>

        <textarea
          :id="id"
          v-model="inputValue"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :required="props.required"
          :rows="props.rows"
          class="j-textarea__input"
        />

        <span
          v-if="isSlots.append"
          class="j-textarea__append"
          @click="clickAppend"
        >
          <slot name="append" />
        </span>
      </div>

      <span
        v-if="isSlots.appendOuter"
        class="j-textarea__append-outer"
        @click="clickAppendOuter"
      >
        <slot name="append-outer" />
      </span>
    </div>

    <template v-if="props.counter" #footer-append>
      <span class="j-textarea__counter">
        {{ inputValue.length }}
        {{ props.counterLength ? `/ ${props.counterLength}` : '' }}
      </span>
    </template>
  </j-input>
</template>

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
