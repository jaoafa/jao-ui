<template>
  <nav ref="root" :class="classes">
    <j-app-header-button
      :value="!!current.length"
      class="j-app-header-navigation__toggle"
      @click="mobileExpanded"
    />

    <ul :style="styles" class="j-app-header-navigation__list">
      <template v-for="item in computedItems" :key="item.id">
        <li class="j-app-header-navigation__item">
          <component
            :is="item.tag"
            :to="item.to"
            v-bind="item.attrs"
            class="j-app-header-navigation__label"
          >
            {{ item.label }}
            <j-icon
              v-if="item.tag === 'span'"
              class="j-app-header-navigation__icon"
            >
              chevron_right
            </j-icon>
          </component>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  ref,
} from 'vue'
import { JIcon } from '@/components/JIcon'
import JAppHeaderButton from './JAppHeaderButton.vue'

type NavigationItem = {
  children?: NavigationItem[]
  href?: undefined
  id: string
  label: string
  to?: undefined
}

type GeneratedNavigationItem = Omit<NavigationItem, 'children' | 'href'> & {
  attrs: { [key: string]: string }
  children?: GeneratedNavigationItem[]
  tag: string
}

export default defineComponent({
  name: 'JAppHeaderNavigation',

  components: {
    JAppHeaderButton,
    JIcon,
  },

  props: {
    /** 現在の表示状態を指定します */
    current: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /** コンポーネントに表示する項目を配列で指定します */
    items: {
      type: Array as PropType<NavigationItem[]>,
      default: () => [],
    },
    /** リンクを <nuxt-link> にします */
    nuxt: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:current'],

  setup(props, context) {
    const classes = computed((): { [key: string]: boolean } => ({
      'j-app-header-navigation': true,
    }))

    const styles = computed((): { [key: string]: string } => ({
      top: `${headerHeight.value + 3}px`,
      'min-height': props.current.length
        ? `calc(100vh - ${headerHeight.value + 3}px)`
        : '0px',
    }))

    const computedItems = computed(() => {
      const generateItem = (
        items: NavigationItem[]
      ): GeneratedNavigationItem[] => {
        return items.map((item) => {
          const res: { [key: string]: string } = {}
          if (item.href) {
            res.href = item.href
          }
          return {
            attrs: res,
            children: item.children && generateItem(item.children),
            id: item.id,
            label: item.label,
            tag: !(item.href || item.to)
              ? 'span'
              : !item.to
              ? 'a'
              : props.nuxt
              ? 'nuxt-link'
              : 'router-link',
            to: item.to,
          }
        })
      }
      return generateItem(props.items)
    })

    const mobileExpanded = () => {
      if (props.current.length) {
        context.emit('update:current', [])
      } else {
        context.emit('update:current', ['root'])
      }
    }

    const root = ref<HTMLElement>()
    const headerHeight = ref<number>(0)
    const resize = (): void => {
      const getSize = (): void => {
        headerHeight.value = root.value?.offsetHeight || 0
      }
      let time = 0
      getSize()
      window.addEventListener('resize', () => {
        if (!time) {
          time = window.setTimeout(() => {
            time = 0
            getSize()
          }, 100)
        }
      })
    }
    onMounted(() => {
      nextTick(resize)
    })

    return { classes, styles, root, computedItems, mobileExpanded }
  },
})
</script>

<style lang="scss">
@use 'src/styles/includes' as *;

$root: 'j-app-header-navigation';

.j-app-header-navigation {
  height: 100%;

  &:last-child {
    .#{$root}__toggle {
      margin-right: -16px;
      border-right: none;
      border-left: solid 1px $color-gray-50;
    }
  }
}

.j-app-header-navigation__toggle {
  @include breakpoint(md) {
    display: none;
  }
}

.j-app-header-navigation__list {
  position: absolute;
  left: 0;
  z-index: 50;
  width: 100%;
  max-height: 0;
  overflow: auto;
  font-size: 14px;
  font-weight: 700;
  list-style: none;
  background-color: $color-white;
  transition: min-height 0.2s;

  @include breakpoint(md) {
    position: static;
    display: flex;
    align-items: center;
    height: 100%;
    min-height: auto !important;
    max-height: none;
    font-size: 13px;
  }
}

.j-app-header-navigation__item {
  display: flex;
}

.j-app-header-navigation__label {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  color: inherit;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.1s;

  @include breakpoint(md) {
    text-decoration: none;
  }

  &:hover {
    background-color: $color-gray-50;
  }
}

.j-app-header-navigation__icon {
  @include breakpoint(md) {
    transform: rotate(90deg);
  }
}
</style>
