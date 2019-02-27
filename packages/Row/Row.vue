<template lang="pug">
.row(
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
        this.align ? `row--${this.align}` : '',
        this.valign ? `row--${this.valign}` : '',
        this.direction ? `row--${this.direction}` : '',
        this.wrap ? `row--${this.wrap}` : '',
        this.vwrap ? `row--wrap-${this.vwrap}` : '',
        this.hgutter ? `row--hgutter-${this.hgutter}` : '',
        this.vgutter ? `row--vgutter-${this.vgutter}` : '',
        {
          'row--inline': this.inline,
          'row--grid': this.grid,
        },
      ];
    },
  },
};
</script>

<style src="./Row.scss" lang="scss"></style>
