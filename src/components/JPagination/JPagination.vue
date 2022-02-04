<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { ComponentTagClasses } from '@/types'
import { convertNameToHex } from '@/utils/colors'
import { JIcon } from '@/components/JIcon'

// props
type Props = {
  /** 指定された色を現在選択しているページ番号に適用します */
  color?: string
  /** ページ番号の最大値を指定します */
  length?: number
  /** 現在選択しているページ番号を指定します */
  page?: number
  /** 表示するページ番号の数を指定します */
  totalVisible?: number
}
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  length: 0,
  page: 0,
  totalVisible: 0,
})

// emit
type Emits = {
  (e: 'input', value: Required<Props>['page']): void
  (e: 'update:page', value: Required<Props>['page']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-pagination'> => ({
    'j-pagination': true,
  })
)

const root = ref<HTMLElement>()
const maxSize = ref(0)
const resize = (): void => {
  const getSize = (): void => {
    const width =
      root.value && root.value.parentElement
        ? root.value.parentElement.clientWidth
        : window.innerWidth
    maxSize.value = Math.floor((width - 80) / 48)
  }
  let time = 0
  getSize()
  window.addEventListener('resize', () => {
    if (!time) {
      time = window.setTimeout(() => {
        time = 0
        getSize()
      }, 100)
    }
  })
}
onMounted(() => {
  nextTick(resize)
})

const range = (min: number, max: number): number[] => {
  const range: number[] = []
  for (let i: number = min; i <= max; i++) {
    range.push(i)
  }
  return range
}

const items = computed((): (string | number)[] => {
  // 最大表示数に 0 が指定されている場合
  if (props.totalVisible === 0) {
    return []
  }
  const maxLength = Math.min(
    Math.max(0, props.totalVisible) || props.length,
    Math.max(0, maxSize.value) || props.length,
    props.length
  )
  if (maxLength >= props.length) {
    return range(1, props.length)
  } else if (maxLength <= 4) {
    return [props.page]
  }
  const even = maxLength % 2 === 0 ? 1 : 0
  const left = Math.floor(maxLength / 2)
  const right = props.length - left + 1 + even
  if (props.page > left && props.page < right) {
    const start = props.page - left + 2
    const end = props.page + left - 2 - even
    return [1, '...', ...range(start, end), '...', props.length]
  } else if (props.page === left) {
    const end = props.page + left - 1 - even
    return [...range(1, end), '...', props.length]
  } else if (props.page === right) {
    const start = props.page - left + 1
    return [1, '...', ...range(start, props.length)]
  } else {
    return [...range(1, left), '...', ...range(right, props.length)]
  }
})
const generatedItems = computed(() => {
  return items.value.map((item, index) => {
    const isButton = typeof item === 'number'
    return {
      id: index,
      tag: isButton ? 'button' : 'span',
      class: { 'j-pagination__button': isButton },
      label: item,
    }
  })
})

const convertedColor = computed((): string => convertNameToHex(props.color))

const input = (val: number): void => {
  emit('input', val)
  emit('update:page', val)
}
const next = (): void => {
  input(props.page + 1)
}
const prev = (): void => {
  input(props.page - 1)
}
</script>

<template>
  <nav ref="root" :class="classes">
    <ul class="j-pagination__body">
      <li class="j-pagination__item">
        <button
          class="j-pagination__button"
          :class="{ 'j-pagination__button--disabled': props.page <= 1 }"
          @click="prev"
        >
          <span class="j-pagination__icon">
            <j-icon>chevron_left</j-icon>
          </span>
        </button>
      </li>

      <template v-for="item in generatedItems" :key="item.id">
        <li class="j-pagination__item">
          <component
            :is="item.tag"
            :class="item.class"
            @click="
              typeof item.label === 'number' ? input(item.label) : undefined
            "
          >
            {{ item.label }}
          </component>
          <span
            v-show="item.label === props.page"
            :style="{ backgroundColor: convertedColor }"
            class="j-pagination__current"
          ></span>
        </li>
      </template>

      <li class="j-pagination__item">
        <button
          class="j-pagination__button"
          :class="{
            'j-pagination__button--disabled': props.page === props.length,
          }"
          @click="next"
        >
          <span class="j-pagination__icon">
            <j-icon>chevron_right</j-icon>
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-pagination';

.j-pagination {
  display: inline-flex;
  justify-content: center;
  padding-bottom: 4px;
  color: inherit;
}

.j-pagination__body {
  display: flex;
  list-style: none;
}

.j-pagination__item {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  user-select: none;

  & ~ & {
    margin-left: 16px;
  }
}

.j-pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  appearance: none;
  font: inherit;
  color: currentcolor;
  cursor: pointer;
  background-color: inherit;
  border: none;
  border-radius: 2px;
  outline: none;
  transition-duration: 0.1s;
  transition-property: background-color;

  &--disabled {
    color: $color-gray-300;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 10%);
  }
}

.j-pagination__current {
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
  width: 100%;
  height: 4px;
  content: '';
}

.j-pagination__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
  padding-top: 2px;
  font-size: 22px;
}
</style>
