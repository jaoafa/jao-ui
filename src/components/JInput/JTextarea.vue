<template>
  <j-input
    :id="id"
    :class="classes"
    :label="label"
    :loading="loading"
    :required="required"
  >
    <div class="j-textarea__body">
      <textarea :id="id" v-model="inputValue" class="j-textarea__input" />
    </div>
  </j-input>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
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
}
</style>
