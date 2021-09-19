<template>
  <nav class="j-pagination">
    <ul class="j-pagination__body">
      <li class="j-pagination__item">
        <button
          class="j-pagination__button"
          :class="{ 'j-pagination__button--disabled': page < 2 }"
          @click="prev"
        >
          <span class="j-pagination__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </span>
        </button>
      </li>

      <template v-for="item in generateItems">
        <li
          :key="item.id"
          :class="{
            'j-pagination__item': true,
            'j-pagination__item--current': item.label === page,
          }"
        >
          <component
            :is="item.tag"
            :class="item.class"
            @click="item.tag === 'button' ? input(item.label) : null"
          >
            {{ item.label }}
          </component>
        </li>
      </template>

      <li class="j-pagination__item">
        <button
          class="j-pagination__button"
          :class="{ 'j-pagination__button--disabled': page === length }"
          @click="next"
        >
          <span class="j-pagination__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'JPagination',

  model: {
    prop: 'page',
    event: 'input',
  },

  props: {
    length: {
      type: Number,
      default: 0,
      validator: (val) => {
        return val % 1 === 0 && val >= 0
      },
    },
    page: {
      type: Number,
      default: 0,
      validator: (val) => {
        return val % 1 === 0 && val >= 0
      },
    },
    totalVisible: {
      type: Number,
      default: 0,
      validator: (val) => {
        return val % 1 === 0 && val >= 0
      },
    },
  },

  data() {
    return {
      maxSize: 0,
    }
  },

  computed: {
    items() {
      if (this.totalVisible === 0) {
        return []
      }
      const maxLength = Math.min(
        Math.max(0, this.totalVisible) || this.length,
        Math.max(0, this.maxSize) || this.length,
        this.length
      )
      if (maxLength >= this.length) {
        return this.range(1, this.length)
      } else if (maxLength <= 4) {
        return [this.page]
      }
      const even = maxLength % 2 === 0 ? 1 : 0
      const left = Math.floor(maxLength / 2)
      const right = this.length - left + 1 + even
      if (this.page > left && this.page < right) {
        const start = this.page - left + 2
        const end = this.page + left - 2 - even
        return [1, '...', ...this.range(start, end), '...', this.length]
      } else if (this.page === left) {
        const end = this.page + left - 1 - even
        return [...this.range(1, end), '...', this.length]
      } else if (this.page === right) {
        const start = this.page - left + 1
        return [1, '...', ...this.range(start, this.length)]
      } else {
        return [
          ...this.range(1, left),
          '...',
          ...this.range(right, this.length),
        ]
      }
    },
    generateItems() {
      return this.items.map((item, index) => {
        const isButton = typeof item === 'number'
        return {
          id: index,
          tag: isButton ? 'button' : 'span',
          class: { 'j-pagination__button': isButton },
          label: item,
        }
      })
    },
  },

  mounted() {
    this.$nextTick(this.resize)
  },

  methods: {
    input(val) {
      this.$emit('input', val)
    },
    next() {
      this.input(this.page + 1)
    },
    prev() {
      this.input(this.page - 1)
    },
    range(min, max) {
      const range = []
      for (let i = min; i <= max; i++) {
        range.push(i)
      }
      return range
    },
    resize() {
      const getSize = () => {
        const width =
          this.$el && this.$el.parentElement
            ? this.$el.parentElement.clientWidth
            : window.innerWidth
        this.maxSize = Math.floor((width - 80) / 48)
      }
      let time = 0
      getSize()
      window.addEventListener('resize', () => {
        if (!time) {
          time = setTimeout(() => {
            time = 0
            getSize()
          }, 500)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'src/sass/includes' as *;
$root: '.j-pagination';

.j-pagination {
  display: inline-flex;
  justify-content: center;
  padding-bottom: 4px;
  color: inherit;
}

.j-pagination__body {
  display: flex;
  list-style: none;
}

.j-pagination__item {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  user-select: none;

  & ~ & {
    margin-left: 16px;
  }

  &--current {
    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      display: block;
      width: 100%;
      height: 4px;
      content: '';
      background-color: $color-primary;
    }
  }
}

.j-pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  appearance: none;
  font: inherit;
  color: currentColor;
  cursor: pointer;
  background-color: inherit;
  border: none;
  border-radius: 2px;
  outline: none;
  transition-duration: 0.1s;
  transition-property: background-color;

  &--disabled {
    color: $color-gray-300;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.j-pagination__icon {
  width: 60%;
  height: 60%;

  svg {
    fill: currentColor;
  }
}
</style>
