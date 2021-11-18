<template>
  <thead :class="classes">
    <slot>
      <tr>
        <template v-for="item in headers" :key="item.key">
          <th
            :class="{
              'j-table-header__item--sortable': item.sortable,
              'j-table-header__item--active': sortBy === item.key,
              'j-table-header__item--asc': sortOrder === 'asc',
              'j-table-header__item--desc': sortOrder === 'desc',
            }"
            class="j-table-header__item"
            @click="item.sortable ? click(item.key) : null"
          >
            <span class="j-table-header__label">
              {{ item.label }}
            </span>

            <span class="j-table-header__sort">
              <j-icon>arrow_upward</j-icon>
            </span>
          </th>
        </template>
      </tr>
    </slot>
  </thead>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { JIcon } from '@/components/JIcon'

export default defineComponent({
  name: 'JTableHeader',

  components: {
    JIcon,
  },

  props: {
    /**
     * ヘッダーのカラムとなる配列を指定します。
     */
    headers: {
      type: Array,
      default: () => [],
      validator: (
        val: {
          label: string
          key: string
          sortable?: boolean
        }[]
      ): boolean => {
        return val.every((item) => item.label && item.key)
      },
    },
    /**
     * ソートする項目を指定します。
     */
    sortBy: {
      type: String,
      default: () => '',
    },
    /**
     * ソートする順番を指定します。
     * @values asc, desc
     */
    sortOrder: {
      type: String,
      default: () => 'asc',
      validator: (val: string): boolean => {
        return ['asc', 'desc'].includes(val)
      },
    },
  },

  emits: ['click'],

  setup(_, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-table-header': true,
    }))

    const click = (key: string) => {
      context.emit('click', key)
    }

    return { classes, click }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-table-header';

.j-table-header {
  background-color: $color-gray-100;
}

.j-table-header__item {
  height: 48px;
  padding: 0 16px;
  user-select: none;

  &--sortable {
    cursor: pointer;

    .#{$root}__sort {
      opacity: 20%;
    }

    &:hover {
      .#{$root}__sort {
        opacity: 50%;
      }
    }
  }

  &--active {
    &.#{$root}__item--desc {
      .#{$root}__sort {
        transform: rotate(180deg);
      }
    }

    &:hover {
      .#{$root}__sort {
        opacity: 100%;
      }
    }

    .#{$root}__sort {
      opacity: 100%;
    }
  }
}

.j-table-header__label {
  margin-right: 2px;
  vertical-align: middle;
}

.j-table-header__sort {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding-top: 3px;
  font-size: 16px;
  vertical-align: middle;
  pointer-events: none;
  opacity: 0%;
  transition-duration: 0.2s;
  transition-property: opacity transform;
}
</style>
