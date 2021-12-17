<template>
  <j-input
    :class="classes"
    :color="color"
    :label="label"
    :loading="loading"
    :required="required"
  ></j-input>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
  },

  setup() {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-text-field': true,
    }))
    return { classes }
  },
})
</script>
