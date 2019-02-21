<template lang="pug">
.az-row(
  :class="classObject"
)
  slot
</template>

<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: '',
      validator: value => ['left', 'center', 'right', 'between', 'around', 'evenly', ''].indexOf(value) !== -1,
    },
    valign: {
      type: String,
      default: '',
      validator: value => ['stretch', 'top', 'middle', 'bottom', 'baseline', ''].indexOf(value) !== -1,
    },
    direction: {
      type: String,
      default: '',
      validator: value => ['row', 'row-reverse', 'column', 'column-resverse', ''].indexOf(value) !== -1,
    },
    wrap: {
      type: String,
      default: '',
      validator: value => ['nowrap', 'wrap', 'wrap-reverse', ''].indexOf(value) !== -1,
    },
    vwrap: {
      type: String,
      default: '',
      validator: value => ['stretch', 'top', 'middle', 'bottom', 'between', 'around', ''].indexOf(value) !== -1,
    },
    hgutter: {
      type: String,
      default: '',
      validator: value => ['none', 'small', 'default', 'large', ''].indexOf(value) !== -1,
    },
    vgutter: {
      type: String,
      default: '',
      validator: value => ['none', 'small', 'default', 'large', ''].indexOf(value) !== -1,
    },
    grid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return [
        this.align ? `az-row--${this.align}` : '',
        this.valign ? `az-row--${this.valign}` : '',
        this.direction ? `az-row--${this.direction}` : '',
        this.wrap ? `az-row--${this.wrap}` : '',
        this.vwrap ? `az-row--wrap-${this.vwrap}` : '',
        this.hgutter ? `az-row--hgutter-${this.hgutter}` : '',
        this.vgutter ? `az-row--vgutter-${this.vgutter}` : '',
        {
          'az-row--inline': this.inline,
          'az-row--grid': this.grid,
        },
      ];
    },
  },
};
</script>

<style src="./Row.scss" lang="scss"></style>
