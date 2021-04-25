<template>
  <thead
    :style="styles"
    class="j-table-header"
  >
    <tr>
      <template v-for="item in headers">
        <th :key="item.key">
          <span>{{ item.label }}</span>
        </th>
      </template>
    </tr>
  </thead>
</template>

<script>
import {
  colors,
} from '@/utils/colors'

export default {
  name: 'JTableHeader',
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
  },
  computed: {
    styles () {
      return {
        'background-color': this.colors['gray-200'],
      }
    },
    colors () {
      return colors
    },
  },
}
</script>

<style lang="scss" scoped>
.j-table-header {
  th {
    height: 48px;
    padding: 0 16px;
  }
}
</style>
