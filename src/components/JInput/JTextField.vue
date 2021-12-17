<template>
  <j-input
    :id="id"
    :class="classes"
    :color="color"
    :label="label"
    :loading="loading"
    :required="required"
  >
    <div class="j-text-field__body">
      <input
        :id="id"
        v-model="inputValue"
        :type="type"
        class="j-text-field__input"
      />
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
    }))

    const inputValue = computed({
      get: (): string | number => {
        return props.value
      },
      set: (val: string | number): void => {
        if (props.type === 'number') {
          val = +val
        }
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

$root: 'j-text-field';

.j-text-field {
  position: inherit;
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
