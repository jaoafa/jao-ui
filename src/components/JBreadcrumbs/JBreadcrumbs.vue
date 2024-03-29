<script setup lang="ts">
import { computed } from 'vue'
import { ComponentTagClasses } from '@/types'
import { JIcon } from '@/components/JIcon'

// types
type BreadcrumbsItem = {
  disabled?: boolean
  href?: string
  label: string
  to?: string
}
type GeneratedBreadcrumbsItem = Omit<
  BreadcrumbsItem,
  'disabled' | 'href' | 'nuxt'
> & {
  attrs: { [key: string]: string }
  id: number
  tag: string
}

// props
type Props = {
  /** パンくずリストに表示する項目を配列で指定します */
  items: BreadcrumbsItem[]
  /** リンクを <nuxt-link> にします */
  nuxt: boolean
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  nuxt: false,
})

// class
const classes = computed(
  (): ComponentTagClasses<'j-breadcrumbs'> => ({
    'j-breadcrumbs': true,
  })
)

const computedItems = computed((): GeneratedBreadcrumbsItem[] => {
  return props.items.map((item, id) => {
    const attrs: GeneratedBreadcrumbsItem['attrs'] = {}
    if (item.href) {
      attrs.href = item.href
    }
    return {
      attrs,
      id,
      label: item.label,
      tag:
        item.disabled || !(item.href || item.to)
          ? 'span'
          : !item.to
          ? 'a'
          : props.nuxt
          ? 'nuxt-link'
          : 'router-link',
      to: item.to,
    }
  })
})
</script>

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

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-breadcrumbs';

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
    & .#{$root}__label {
      font-weight: 700;
    }
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
