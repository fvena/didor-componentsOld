<template lang="pug">
  .az-tabBar(:class="tabBarClass" :style="tabBarStyle")
    slot
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    activeColor: {
      type: String,
      required: false,
    },
    inactiveColor: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    safeArea: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    value: 'setActiveItem',
  },

  computed: {
    tabBarClass() {
      return [this.fixed ? 'az-tabBar--fixed' : '', this.safeArea ? 'az-tabBar--safeArea' : ''];
    },

    tabBarStyle() {
      return {
        'z-index': this.zIndex,
      };
    },
  },

  methods: {
    setActiveItem() {
      this.$children.forEach((item, index) => {
        if (item.to) return;
        item.active = (item.name || index) === this.value;
      });
    },

    onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    },
  },

  mounted() {
    this.setActiveItem();
  },
};
</script>

<style src="./TabBar.scss" lang="scss"></style>
