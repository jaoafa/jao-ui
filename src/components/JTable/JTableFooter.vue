<template>
  <div :class="classes">
    <div class="j-table-footer__caption">
      {{ caption }} 全{{ itemLength }}件
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

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { JPagination } from '@/components/JPagination'

export default defineComponent({
  name: 'JTableFooter',

  components: {
    JPagination,
  },

  props: {
    /**
     * 表に表示する項目の配列の長さを指定します。
     */
    itemLength: {
      type: Number,
      default: 0,
    },
    /**
     * 1ページあたりに表示する項目の数を指定します。
     */
    itemPerPage: {
      type: Number,
      default: 10,
    },
    /**
     * 現在選択しているページ番号を指定します。
     */
    page: {
      type: Number,
      default: 1,
    },
  },

  emits: ['input', 'update:page'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-table-footer': true,
    }))

    const length = computed((): number =>
      Math.ceil(props.itemLength / props.itemPerPage)
    )

    const caption = computed((): string => {
      if (props.itemLength) {
        return (
          props.itemPerPage * (props.page - 1) +
          1 +
          '-' +
          (props.itemPerPage * props.page > props.itemLength
            ? props.itemLength
            : props.itemPerPage * props.page)
        )
      } else {
        return ''
      }
    })

    const currentPage = computed({
      get: (): number => props.page,
      set: (val: number): void => {
        context.emit('input', val)
        context.emit('update:page', val)
      },
    })

    return { classes, caption, currentPage, length }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

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