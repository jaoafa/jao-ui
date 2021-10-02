<template>
  <thead class="j-table-header">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
                />
              </svg>
            </span>
          </th>
        </template>
      </tr>
    </slot>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JTableHeader',

  props: {
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
    sortBy: {
      type: String,
      default: () => '',
    },
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
    const click = (key: string) => {
      context.emit('click', key)
    }
    return { click }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;
$root: '.j-table-header';

.j-table-header {
  background-color: $color-gray-100;
}

.j-table-header__item {
  height: 48px;
  padding: 0 16px;
  user-select: none;

  &--sortable {
    cursor: pointer;

    #{$root}__sort {
      opacity: 0.2;
    }

    &:hover {
      #{$root}__sort {
        opacity: 0.5;
      }
    }
  }

  &--active {
    &#{$root}__item--desc {
      #{$root}__sort {
        transform: rotate(180deg);
      }
    }

    &:hover {
      #{$root}__sort {
        opacity: 1;
      }
    }

    #{$root}__sort {
      opacity: 1;
    }
  }
}

.j-table-header__label {
  vertical-align: middle;
}

.j-table-header__sort {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  pointer-events: none;
  opacity: 0;
  transition-duration: 0.2s;
  transition-property: opacity transform;

  & > svg {
    fill: currentColor;
  }
}
</style>
