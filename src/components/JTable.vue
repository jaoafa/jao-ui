<template>
  <div class="j-table">
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
            <template v-if="items.length">
              <template v-for="(item, index) in _items">
                <tr :key="index">
                  <template v-for="column in headers">
                    <td :key="column.key">
                      <span>{{
                        item[column.key] ? item[column.key] : ''
                      }}</span>
                    </td>
                  </template>
                </tr>
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

<script>
import JProgressCircle from '@/components/JProgressCircle'
import JTableFooter from '@/components/JTableFooter'
import JTableHeader from '@/components/JTableHeader'

export default {
  name: 'JTable',

  components: {
    JProgressCircle,
    JTableFooter,
    JTableHeader,
  },

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemPerPage: {
      type: Number,
      default: 10,
      validator: (val) => {
        return val % 1 === 0 && val > 0
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Number,
      default: 1,
      validator: (val) => {
        return val % 1 === 0 && val > 0
      },
    },
  },

  data() {
    return {
      sortBy: '',
      sortOrder: 'asc',
      currentPage: 1,
    }
  },

  computed: {
    _items() {
      const items = [...this.items]
      const sortBy = this.sortBy
      const sortOrder = this.sortOrder === 'asc'
      const page = this.currentPage
      const itemPerPage = this.itemPerPage
      const sortFunction = (a, b) => {
        a = a[sortBy] ? a[sortBy] : ''
        b = b[sortBy] ? b[sortBy] : ''
        if (a < b) {
          return sortOrder ? -1 : 1
        } else if (a > b) {
          return sortOrder ? 1 : -1
        } else {
          return 0
        }
      }
      if (sortBy) {
        items.sort(sortFunction)
      }
      return items.slice(itemPerPage * (page - 1), itemPerPage * page)
    },
  },

  created() {
    this.currentPage = this.page
    if (!this.items.length) {
      this.currentPage = 0
    }
  },

  methods: {
    toggleSort(key) {
      if (this.sortBy !== key) {
        this.sortBy = key
        this.sortOrder = 'asc'
      } else {
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc'
        } else {
          this.sortBy = ''
        }
      }
    },
    togglePage(key) {
      this.currentPage = key
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
$root: '.j-table';

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
