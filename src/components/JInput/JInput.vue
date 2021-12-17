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

    <div class="j-input__footer"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-input': true,
    }))

    const requiredStyles = computed((): { [key: string]: string } => ({
      color: getContrastColor(convertNameToHex(props.color)),
      'background-color': convertNameToHex(props.color),
    }))

    return { classes, requiredStyles }
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
  gap: 8px;
  max-width: 100%;
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
</style>
