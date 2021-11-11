<template>
  <div :class="classes">
    <ol class="j-breadcrumbs__body">
      <template v-for="item in computedItems" :key="item.id">
        <li class="j-breadcrumbs__item">
          <j-icon v-if="item.id !== 0">chevron_right</j-icon>
          <component
            :is="item.tag"
            :to="item.to"
            v-bind="item.attrs"
            class="j-breadcrumbs__label"
          >
            {{ item.label }}
          </component>
        </li>
      </template>
    </ol>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { JIcon } from '@/components/JIcon'

type BreadcrumbsItem = {
  disabled?: boolean
  href?: string
  label: string
  nuxt?: boolean
  to?: string
}

export default defineComponent({
  name: 'JBreadcrumbs',

  components: {
    JIcon,
  },

  props: {
    /**
     * パンくずリストに表示する項目を配列で指定します。
     */
    items: {
      type: Array as PropType<BreadcrumbsItem[]>,
      default: () => [],
    },
  },

  setup(props) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-breadcrumbs': true,
    }))
    const computedItems = computed(() => {
      return props.items.map((item, index) => {
        const res: { [key: string]: string } = {}
        if (item.href) {
          res.href = item.href
        }
        return {
          attrs: res,
          id: index,
          label: item.label,
          tag:
            item.disabled || !(item.href || item.to)
              ? 'span'
              : !item.to
              ? 'a'
              : item.nuxt
              ? 'nuxt-link'
              : 'router-link',
          to: item.to,
        }
      })
    })
    return { classes, computedItems }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

.j-breadcrumbs {
  width: 100%;
}

.j-breadcrumbs__body {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 13px;
  list-style: none;
}

.j-breadcrumbs__item {
  display: inline-flex;
  align-items: baseline;

  &:last-child {
    font-weight: 700;
  }

  & ~ & {
    margin-left: 4px;
  }
}

.j-breadcrumbs__label {
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  &:not(:first-child) {
    margin-left: 4px;
  }
}
</style>
