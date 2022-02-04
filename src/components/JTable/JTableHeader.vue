<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'
import { JIcon } from '@/components/JIcon'

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
  /** ソートする項目を指定します */
  sortBy?: string
  /** ソートする順番を指定します */
  sortOrder?: 'asc' | 'desc'
}
const props = withDefaults(defineProps<Props>(), {
  headers: () => [],
  sortBy: '',
  sortOrder: 'asc',
})

// emit
type Emits = {
  (e: 'click', value: Required<Props>['sortBy']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-table-header'> => ({
    'j-table-header': true,
  })
)

const handleClick = (key: string): void => {
  emit('click', key)
}
</script>

<template>
  <thead :class="classes">
    <slot>
      <tr>
        <template v-for="item in props.headers" :key="item.key">
          <th
            :class="{
              'j-table-header__item--sortable': item.sortable,
              'j-table-header__item--active': props.sortBy === item.key,
              'j-table-header__item--asc': props.sortOrder === 'asc',
              'j-table-header__item--desc': props.sortOrder === 'desc',
            }"
            class="j-table-header__item"
            @click="item.sortable ? handleClick(item.key) : undefined"
          >
            <span class="j-table-header__label">{{ item.label }}</span>
            <span class="j-table-header__sort">
              <j-icon>arrow_upward</j-icon>
            </span>
          </th>
        </template>
      </tr>
    </slot>
  </thead>
</template>

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
      opacity: 0.2;
    }

    &:hover {
      .#{$root}__sort {
        opacity: 0.5;
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
        opacity: 1;
      }
    }

    .#{$root}__sort {
      opacity: 1;
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
  opacity: 0;
  transition-duration: 0.2s;
  transition-property: opacity transform;
}
</style>
