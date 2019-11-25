<template lang="pug">
  .collapse(:class="{'collapse--open': isOpen}")
    .collapse__header(@click.prevent="toggle")
      | {{ title }}
      svg.collapse__icon(width="16" height="9")
        polyline(points="2,8 8,2 14,8")

    transition(
      name="collapse"
      @before-enter="start"
      @enter="end"
      @before-leave="end"
      @leave="start")
      .collapse__body(v-if="isOpen")
        .collapse__content
          slot
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    start(el) {
      el.style.height = '0';
    },
    end(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
  },
};
</script>

<style lang="scss">
.collapse {
  margin-bottom: simple();
}

.collapse--open {
  .collapse__icon {
    transform: rotate(180deg);
  }
}

.collapse__header {
  position: relative;
  width: 100%;
  height: simple();
  padding-right: simple();
  overflow: hidden;
  line-height: simple();
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 1px solid color(border);
}

.collapse__icon {
  position: absolute;
  top: 11px;
  right: quarter();
  fill: none;
  stroke: color(brand);
  stroke-width: 2;
  transition: all 0.4s ease-in-out;
  transform: rotate(0deg);
}

.collapse__body {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

.collapse__content {
  padding-top: half();

  p:last-child {
    margin-bottom: 0;
  }
}
</style>
