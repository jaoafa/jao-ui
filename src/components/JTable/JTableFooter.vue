<script setup lang="ts">
import { computed, ref } from 'vue'
import { ComponentTagClasses } from '@/types'
import { JPagination } from '@/components/JPagination'

// props
type Props = {
  /** 表に表示する項目の配列の長さを指定します */
  itemLength?: number
  /** 1ページあたりに表示する項目の数を指定します */
  itemPerPage?: number
  /** 現在選択しているページ番号を指定します */
  page?: number
}
const props = withDefaults(defineProps<Props>(), {
  itemLength: 0,
  itemPerPage: 10,
  page: 1,
})

// emit
type Emits = {
  (e: 'input', value: Required<Props>['page']): void
  (e: 'update:page', value: Required<Props>['page']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-table-footer'> => ({
    'j-table-footer': true,
  })
)

const length = computed((): number =>
  Math.ceil(props.itemLength / props.itemPerPage)
)
const caption = computed((): string => {
  return props.itemLength
    ? props.itemPerPage * (props.page - 1) +
        1 +
        '-' +
        (props.itemPerPage * props.page > props.itemLength
          ? props.itemLength
          : props.itemPerPage * props.page)
    : ''
})

const current = ref<Required<Props>['page']>(props.page || 1)
const currentPage = computed({
  get: (): Required<Props>['page'] => props.page || current.value,
  set: (val: Required<Props>['page']): void => {
    emit('input', val)
    emit('update:page', val)
    if (!props.page) {
      current.value = val
    }
  },
})
</script>

<template>
  <div :class="classes">
    <div class="j-table-footer__caption">
      {{ caption }} 全{{ props.itemLength }}件
    </div>

    <div class="j-table-footer__pagination">
      <j-pagination
        v-model:page="currentPage"
        :length="length"
        :total-visible="0"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-table-footer';

.j-table-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  padding: 0 16px;
  margin-top: 4px;
  background-color: $color-gray-100;
  border-radius: 2px;
}

.j-table-footer__pagination {
  padding: 4px 0 0 8px;
}
</style>
