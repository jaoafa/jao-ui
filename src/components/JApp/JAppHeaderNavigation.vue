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
            @click="item.tag === 'span' ? selectCategory(item.id) : undefined"
          >
            {{ item.label }}
            <j-icon
              v-if="item.tag === 'span'"
              class="j-app-header-navigation__icon"
            >
              chevron_right
            </j-icon>
          </component>

          <transition>
            <ul
              v-if="item.children"
              v-show="current[1] === item.id"
              :style="childrenStyles"
              class="j-app-header-navigation__children"
            >
              <li class="j-app-header-navigation__item">
                <span
                  class="j-app-header-navigation__label"
                  @click="selectCategory()"
                >
                  <j-icon class="j-app-header-navigation__icon">
                    chevron_left
                  </j-icon>
                </span>
              </li>

              <template v-for="childItem in item.children" :key="childItem.id">
                <li class="j-app-header-navigation__item">
                  <component
                    :is="childItem.tag"
                    :to="childItem.to"
                    v-bind="childItem.attrs"
                    class="j-app-header-navigation__label"
                  >
                    {{ childItem.label }}
                  </component>

                  <ul
                    v-if="childItem.children"
                    class="j-app-header-navigation__grandchildren"
                  >
                    <template
                      v-for="grandchildItem in childItem.children"
                      :key="grandchildItem.id"
                    >
                      <li class="j-app-header-navigation__item">
                        <component
                          :is="grandchildItem.tag"
                          :to="grandchildItem.to"
                          v-bind="grandchildItem.attrs"
                          class="j-app-header-navigation__label"
                        >
                          {{ grandchildItem.label }}
                        </component>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </ul>
          </transition>
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
      transform:
        props.current.length >= 2 ? 'translateX(-100vw)' : 'translateX(0)',
      'min-height': props.current.length
        ? `calc(100vh - ${headerHeight.value + 3}px)`
        : '0px',
    }))

    const childrenStyles = computed((): { [key: string]: string } => ({
      top: `${headerHeight.value + 6}px`,
      transform: `translateY(-${headerHeight.value + 6}px)`,
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

    const selectCategory = (val?: string) => {
      if (val && props.current.length < 2) {
        if (props.current.length) {
          context.emit('update:current', [...props.current, val])
        } else {
          context.emit('update:current', ['root', val])
        }
      } else {
        context.emit('update:current', [...props.current.slice(0, -1)])
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

    return {
      classes,
      styles,
      childrenStyles,
      root,
      computedItems,
      mobileExpanded,
      selectCategory,
    }
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
  width: 200vw;
  max-height: 0;
  overflow: auto;
  font-size: 14px;
  font-weight: 700;
  list-style: none;
  background-color: $color-white;
  transition: min-height 0.2s, transform 0.2s;

  @include breakpoint(md) {
    position: static;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: auto !important;
    max-height: none;
    font-size: 13px;
    transition: none;
    transform: none !important;
  }
}

.j-app-header-navigation__children {
  position: absolute;
  left: 100vw;
  z-index: 50;
  width: 100vw;
  list-style: none;
  background-color: $color-white;

  @include breakpoint(md) {
    left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
    padding: 24px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 12%);
    opacity: 1;
    transition: opacity 0.1s;
    transform: none !important;
  }

  @include breakpoint(xl) {
    padding: 24px calc(24px + (100vw - #{$size-width-max}) / 2);
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
  }

  & > :first-child {
    @include breakpoint(md) {
      display: none;
    }
  }
}

.j-app-header-navigation__grandchildren {
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: $color-gray-700;
  list-style: none;

  @include breakpoint(md) {
    font-size: 13px;
  }
}

.j-app-header-navigation__item {
  width: 100vw;

  @include breakpoint(md) {
    width: auto;
  }
}

.j-app-header-navigation__label {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  color: inherit;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  transition: background-color 0.1s;

  @include breakpoint(md) {
    height: 40px;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    background-color: $color-gray-50;
  }
}

.j-app-header-navigation__icon {
  @include breakpoint(md) {
    transform: rotate(90deg);
  }
}
</style>
