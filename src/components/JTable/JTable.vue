<template>
  <div :class="classes">
    <div class="j-table__wrapper">
      <table>
        <j-table-header
          v-if="!hideHeader"
          :headers="headers"
          :sort-by="sortBy"
          :sort-order="sortOrder"
          @click="toggleSort"
        >
          <slot name="head" />
        </j-table-header>

        <tbody class="j-table__body">
          <template v-if="loading">
            <tr>
              <td :colspan="headers.length">
                <div class="j-table__empty">
                  <span>読み込み中...</span>
                  <j-progress-circle :size="20" :stroke="2" indeterminate />
                </div>
              </td>
            </tr>
          </template>

          <template v-else>
            <slot name="body">
              <template v-if="items.length">
                <template v-for="(item, index) in computedItems">
                  <slot name="item" :item="item">
                    <tr :key="index">
                      <template v-for="column in headers" :key="column.key">
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
      v-if="!hideFooter"
      :page="currentPage"
      :item-per-page="itemPerPage"
      :item-length="items.length"
      @input="togglePage"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { JProgressCircle } from '@/components/JProgress'
import JTableHeader from './JTableHeader.vue'
import JTableFooter from './JTableFooter.vue'

type HeaderItem = {
  label: string
  key: string
  sortable?: boolean
}

export default defineComponent({
  name: 'JTable',

  components: {
    JProgressCircle,
    JTableFooter,
    JTableHeader,
  },

  props: {
    /**
     * ヘッダーのカラムとなる配列を指定します。
     */
    headers: {
      type: Array as PropType<HeaderItem[]>,
      default: () => [],
    },
    /**
     * 表のフッターを非表示にします。
     */
    hideFooter: {
      type: Boolean,
      default: false,
    },
    /**
     * 表のヘッダーを非表示にします。
     */
    hideHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * 表に表示する項目を配列で指定します。
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * 1ページあたりに表示する項目の数を指定します。
     */
    itemPerPage: {
      type: Number,
      default: 10,
      validator: (val: number): boolean => {
        return val % 1 === 0 && val > 0
      },
    },
    /**
     * ローディングアニメーションを表示します。
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * 現在選択しているページ番号を指定します。
     */
    page: {
      type: Number,
      default: 1,
      validator: (val: number): boolean => {
        return val % 1 === 0 && val > 0
      },
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-table': true,
    }))

    const sortBy = ref('')
    const sortOrder = ref('asc')
    const currentPage = ref(props.items.length ? props.page : 0)

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

    const togglePage = (key: number): void => {
      console.log('test')
      currentPage.value = key
    }

    return {
      classes,
      computedItems,
      currentPage,
      sortBy,
      sortOrder,
      toggleSort,
      togglePage,
    }
  },
})
</script>

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
