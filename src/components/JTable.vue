<template>
  <div
    :style="styles"
    class="j-table"
  >
    <div class="j-table__wrapper">
      <table>
        <j-table-header
          v-if="!hideHeader && !loading"
          :headers="headers"
          :sort-by="sortBy"
          :sort-order="sortOrder"
          @click="toggleSort"
        />
        <tbody class="j-table__body">
          <template v-if="!loading">
            <template v-for="(item, index) in _items">
              <tr
                :key="index"
                :style="{
                  'background-color': (index % 2 === 0) ? null : colors['gray-50']
                }"
              >
                <template v-for="column in headers">
                  <td :key="column.key">
                    <span>{{ item[column.key] ? item[column.key] : '' }}</span>
                  </td>
                </template>
              </tr>
            </template>
          </template>
          <template v-else>
            <tr>
              <td>
                <div
                  class="j-table__progress"
                  :style="{ color: colors['gray-300'] }"
                >
                  <span>読み込み中...</span>
                  <j-progress
                    :size="20"
                    :stroke="2"
                    indeterminate
                  />
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <j-table-footer
      v-if="!hideFooter && !loading"
      :page="currentPage"
      :item-per-page="itemPerPage"
      :item-length="items.length"
      @input="togglePage"
    />
  </div>
</template>

<script>
import JProgress from '@/components/JProgress'
import JTableFooter from '@/components/JTableFooter'
import JTableHeader from '@/components/JTableHeader'
import {
  colors,
} from '@/utils/colors'

export default {
  name: 'JTable',
  components: {
    JProgress,
    JTableFooter,
    JTableHeader,
  },
  props: {
    headers: {
      default: () => [],
      type: Array,
    },
    items: {
      default: () => [],
      type: Array,
    },
    hideHeader: {
      default: false,
      type: Boolean,
    },
    hideFooter: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    page: {
      default: 1,
      type: Number,
      validator: (val) => {
        return (val % 1 === 0) && (val > 0)
      },
    },
    itemPerPage: {
      default: 10,
      type: Number,
      validator: (val) => {
        return (val % 1 === 0) && (val > 0)
      },
    },
  },
  data () {
    return {
      sortBy: '',
      sortOrder: 'asc',
      currentPage: 1,
    }
  },
  computed: {
    _items () {
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
        }
        else if (a > b) {
          return sortOrder ? 1 : -1
        }
        else {
          return 0
        }
      }
      if (sortBy) {
        items.sort(sortFunction)
      }
      return items.slice(itemPerPage * (page - 1), itemPerPage * page)
    },
    styles () {
      return {
        color: this.colors['gray-800'],
      }
    },
    colors () {
      return colors
    },
  },
  created () {
    this.currentPage = this.page
    if (!this.items.length) {
      this.currentPage = 0
    }
  },
  methods: {
    toggleSort (key) {
      if (this.sortBy !== key) {
        this.sortBy = key
        this.sortOrder = 'asc'
      }
      else {
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc'
        }
        else {
          this.sortBy = ''
        }
      }
    },
    togglePage (key) {
      this.currentPage = key
    },
  },
}
</script>

<style lang="scss" scoped>
.j-table {
  $root: #{&};

  max-width: 100%;
  font-size: 13px;
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

.j-table__progress {
  display: flex;
  align-items: center;
  justify-content: center;

  * ~ * {
    margin-left: 8px;
  }
}
</style>
