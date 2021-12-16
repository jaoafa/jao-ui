<template>
  <j-input
    :class="classes"
    :label="label"
    :loader-color="loaderColor"
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
    /** 指定されたラベルをコンポーネントに適用します */
    label: {
      type: String,
      default: '',
    },
    /** 指定された色をローディングアニメーションに適用します */
    loaderColor: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
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
    /** 指定された色を必須マークに適用します */
    requiredColor: {
      type: String,
      default: 'primary',
      validator: (val: string): boolean => {
        return validateColor(val)
      },
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
