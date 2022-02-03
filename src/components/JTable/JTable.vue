<script setup lang="ts">
import { computed, ref } from 'vue'
import { ComponentTagClasses } from '@/types'
import { JProgressCircle } from '@/components/JProgress'
import JTableHeader from './JTableHeader.vue'
import JTableFooter from './JTableFooter.vue'

// types
type HeaderItem = {
  label: string
  key: string
  sortable?: boolean
}

// props
type Props = {
  /** ヘッダーのカラムとなる配列を指定します */
  headers?: HeaderItem[]
  /** 表のフッターを非表示にします */
  hideFooter?: boolean
  /** 表のヘッダーを非表示にします */
  hideHeader?: boolean
  /** 表に表示する項目を配列で指定します */
  items?: { [key: string]: any }[]
  /** 1ページあたりに表示する項目の数を指定します */
  itemPerPage?: number
  /** ローディングアニメーションを表示します */
  loading?: boolean
  /** 現在選択しているページ番号を指定します */
  page?: number
}
const props = withDefaults(defineProps<Props>(), {
  headers: () => [],
  hideFooter: false,
  hideHeader: false,
  items: () => [],
  itemPerPage: 10,
  loading: false,
  page: undefined,
})

// emit
type Emits = {
  (e: 'input', value: Required<Props>['page']): void
  (e: 'update:page', value: Required<Props>['page']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-table'> => ({
    'j-table': true,
  })
)

const sortBy = ref<Required<Props>['headers'][number]['key']>('')
const sortOrder = ref<'asc' | 'desc'>('asc')

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

const computedItems = computed(() => {
  const items = [...props.items]
  const itemPerPage = props.itemPerPage
  const sortFunction = (a: any, b: any) => {
    a = a[sortBy.value] ? a[sortBy.value] : ''
    b = b[sortBy.value] ? b[sortBy.value] : ''
    if (a < b) {
      return sortOrder.value === 'asc' ? -1 : 1
    } else if (a > b) {
      return sortOrder.value === 'asc' ? 1 : -1
    } else {
      return 0
    }
  }
  if (sortBy.value) {
    items.sort(sortFunction)
  }
  return items.slice(
    itemPerPage * (currentPage.value - 1),
    itemPerPage * currentPage.value
  )
})

const toggleSort = (key: string): void => {
  if (sortBy.value !== key) {
    sortBy.value = key
    sortOrder.value = 'asc'
  } else {
    if (sortOrder.value === 'asc') {
      sortOrder.value = 'desc'
    } else {
      sortBy.value = ''
    }
  }
}
</script>

<template>
  <div :class="classes">
    <div class="j-table__wrapper">
      <table>
        <j-table-header
          v-if="!props.hideHeader"
          :headers="props.headers"
          :sort-by="sortBy"
          :sort-order="sortOrder"
          @click="toggleSort"
        >
          <slot name="head" />
        </j-table-header>

        <tbody class="j-table__body">
          <template v-if="props.loading">
            <tr>
              <td :colspan="props.headers.length">
                <div class="j-table__empty">
                  <span>読み込み中...</span>
                  <j-progress-circle :size="20" :stroke="2" indeterminate />
                </div>
              </td>
            </tr>
          </template>

          <template v-else>
            <slot name="body">
              <template v-if="props.items.length">
                <template v-for="(item, index) in computedItems">
                  <slot name="item" :item="item">
                    <tr :key="index">
                      <template
                        v-for="column in props.headers"
                        :key="column.key"
                      >
                        <td>
                          <slot :name="`item.${column.key}`" :item="item">
                            <span>{{
                              item[column.key] ? item[column.key] : ''
                            }}</span>
                          </slot>
                        </td>
                      </template>
                    </tr>
                  </slot>
                </template>
              </template>

              <template v-else>
                <tr>
                  <td :colspan="headers.length">
                    <div class="j-table__empty">
                      <span>表示する項目がありません</span>
                    </div>
                  </td>
                </tr>
              </template>
            </slot>
          </template>
        </tbody>
      </table>
    </div>

    <j-table-footer
      v-if="!props.hideFooter"
      v-model:page="currentPage"
      :item-length="props.items.length"
      :item-per-page="props.itemPerPage"
    />
  </div>
</template>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-table';

.j-table {
  max-width: 100%;
  font-size: 13px;
  color: $color-gray-800;
  text-align: left;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    height: 48px;
    padding: 0 16px;
  }
}

.j-table__wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}

.j-table__body {
  tr {
    &:nth-of-type(2n) {
      background-color: $color-gray-50;
    }
  }
}

.j-table__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-gray-300;

  * ~ * {
    margin-left: 8px;
  }
}
</style>
