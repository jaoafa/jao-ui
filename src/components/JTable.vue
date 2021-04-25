<template>
  <div
    :style="styles"
    class="j-table"
  >
    <div class="j-table__wrapper">
      <table>
        <thead
          v-if="!hideHeader && !loading"
          class="j-table__header"
        >
          <tr :style="{ 'background-color': colors['gray-200'] }">
            <template v-for="item in headers">
              <th :key="item.key">
                <span>{{ item.label }}</span>
              </th>
            </template>
          </tr>
        </thead>
        <tbody class="j-table__body">
          <template v-if="!loading">
            <template v-for="(item, index) in items">
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
  </div>
</template>

<script>
import JProgress from '@/components/JProgress'
import {
  colors,
} from '@/utils/colors'

export default {
  name: 'JTable',
  components: {
    JProgress,
  },
  props: {
    headers: {
      default: () => [],
      type: Array,
      validator: (val) => {
        return val.every((item) => {
          return (
            item.label &&
            item.key
          )
        })
      },
    },
    items: {
      default: () => [],
      type: Array,
    },
    hideHeader: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    styles () {
      return {
        color: this.colors['gray-800'],
      }
    },
    colors () {
      return colors
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
