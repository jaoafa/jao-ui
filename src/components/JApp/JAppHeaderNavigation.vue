<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { ComponentTagClasses, ComponentTagStyles } from '@/types'
import { JIcon } from '@/components/JIcon'
import JAppHeaderButton from './JAppHeaderButton.vue'

// types
type NavigationItem = {
  children?: NavigationItem[]
  href?: string
  id: string
  label: string
  to?: string
}
type GeneratedNavigationItem = Omit<NavigationItem, 'children' | 'href'> & {
  attrs: { [key: string]: string }
  children?: GeneratedNavigationItem[]
  tag: string
}

// props
type Props = {
  /** コンポーネントに表示する項目を配列で指定します */
  items?: NavigationItem[]
  /** リンクを <nuxt-link> にします */
  nuxt?: boolean
  /** 現在の表示状態を指定します */
  value?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  nuxt: false,
  value: () => [],
})

// emit
type Emits = {
  (e: 'update:value', value: Required<Props>['value']): void
}
const emit = defineEmits<Emits>()

// class
const classes = computed(
  (): ComponentTagClasses<'j-app-header-navigation'> => ({
    'j-app-header-navigation': true,
  })
)

// style
const styles = computed(
  (): ComponentTagStyles => ({
    top: `${headerHeight.value + 3}px`,
    transform: props.value.length >= 2 ? 'translateX(-100vw)' : 'translateX(0)',
    minHeight: props.value.length
      ? `calc(100vh - ${headerHeight.value + 3}px)`
      : 0,
  })
)
const childrenStyles = computed(
  (): ComponentTagStyles => ({
    top: `${headerHeight.value + 6}px`,
    transform: `translateY(-${headerHeight.value + 6}px)`,
  })
)

// get header height
const root = ref<HTMLElement>()
const headerHeight = ref<number>(0)
const resize = (): void => {
  const getSize = (): void => {
    headerHeight.value = root.value?.offsetHeight || 0
  }
  let time = 0
  window.addEventListener('resize', () => {
    if (!time) {
      time = window.setTimeout(() => {
        time = 0
        getSize()
      }, 100)
    }
  })
  getSize()
}
onMounted(() => {
  nextTick(resize)
})

const computedItems = computed((): GeneratedNavigationItem[] => {
  const generateItems = (
    items: NavigationItem[]
  ): GeneratedNavigationItem[] => {
    return items.map((item) => {
      const attrs: GeneratedNavigationItem['attrs'] = {}
      if (item.href) {
        attrs.href = item.href
      }
      return {
        attrs,
        children: item.children && generateItems(item.children),
        id: item.id,
        label: item.label,
        tag: !(item.href || item.to)
          ? 'span'
          : !item.to
          ? 'a'
          : props.nuxt
          ? 'nuxt-link'
          : 'router-link',
      }
    })
  }
  return generateItems(props.items)
})

const handleClick = (): void => {
  if (props.value.length) {
    emit('update:value', [])
  } else {
    emit('update:value', ['root'])
  }
}

const updateValue = (val?: string) => {
  switch (props.value.length) {
    case 0:
      if (val) {
        emit('update:value', ['root', val])
      }
      break
    case 1:
      if (val) {
        emit('update:value', [...props.value, val])
      }
      break
    case 2:
      if (val) {
        emit('update:value', [...props.value.slice(0, -1), val])
      } else {
        emit('update:value', [...props.value.slice(0, -1)])
      }
  }
}
</script>

<template>
  <nav ref="root" :class="classes">
    <j-app-header-button
      :value="!!props.value.length"
      class="j-app-header-navigation__toggle"
      @click="handleClick"
    />

    <ul :style="styles" class="j-app-header-navigation__list">
      <template v-for="item in computedItems" :key="item.id">
        <li class="j-app-header-navigation__item">
          <component
            :is="item.tag"
            :to="item.to"
            v-bind="item.attrs"
            class="j-app-header-navigation__label"
            @click="
              item.tag !== 'span'
                ? undefined
                : props.value.length === 2 &&
                  props.value.slice(-1)[0] === item.id
                ? updateValue()
                : updateValue(item.id)
            "
          >
            {{ item.label }}
            <j-icon
              v-if="item.tag === 'span'"
              class="j-app-header-navigation__icon"
            >
              chevron_right
            </j-icon>
          </component>

          <ul
            v-if="item.children"
            v-show="props.value[1] === item.id"
            :style="childrenStyles"
            class="j-app-header-navigation__children"
          >
            <li class="j-app-header-navigation__item">
              <span
                class="j-app-header-navigation__label"
                @click="updateValue()"
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
                    v-for="grandChildItem in childItem.children"
                    :key="grandChildItem.id"
                  >
                    <li class="j-app-header-navigation__item">
                      <component
                        :is="grandChildItem.tag"
                        :to="grandChildItem.to"
                        v-bind="grandChildItem.attrs"
                        class="j-app-header-navigation__label"
                      >
                        {{ grandChildItem.label }}
                      </component>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>

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
    transform: none !important;
  }

  @include breakpoint(xl) {
    padding: 24px calc(24px + (100vw - #{$size-width-max}) / 2);
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
