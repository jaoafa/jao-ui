<template>
  <div class="j-table-footer">
    <div class="j-table-footer__caption">
      {{ caption }} 全{{ itemLength }}件
    </div>

    <div class="j-table-footer__pagination">
      <j-pagination v-model="currentPage" :length="length" :total-visible="0" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import JPagination from '@/components/JPagination'

export default Vue.extend({
  name: 'JTableFooter',

  components: {
    JPagination,
  },

  model: {
    prop: 'page',
    event: 'input',
  },

  props: {
    itemLength: {
      type: Number,
      default: 0,
    },
    itemPerPage: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    length() {
      return Math.ceil(this.itemLength / this.itemPerPage)
    },
    caption() {
      const page = this.page
      const itemPerPage = this.itemPerPage
      const itemLength = this.itemLength
      if (itemLength) {
        return (
          itemPerPage * (page - 1) +
          1 +
          '-' +
          (itemPerPage * page > itemLength ? itemLength : itemPerPage * page)
        )
      } else {
        return ''
      }
    },
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
$root: '.j-table-footer';

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
