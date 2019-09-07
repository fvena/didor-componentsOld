<template lang="pug">
.row(
  :class="classObject")
  slot
</template>

<script>
import ResponsiveClass from '../mixins/responsiveClass';

export default {
  mixins: [ResponsiveClass],
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
    dir: {
      type: String,
      default: '',
      validator: value => ['row', 'row-reverse', 'column', 'column-resverse', ''].indexOf(value) !== -1,
    },
    hwrap: {
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
      const baseClass = 'row';
      const responsiveProperties = ['dir', 'hgutter', 'vgutter'];
      const responsiveClass = this.getResponsiveClass(baseClass, responsiveProperties);

      const propertiesClass = [
        this.align ? `row--align-${this.align}` : '',
        this.valign ? `row--valign-${this.valign}` : '',
        this.dir ? `row--dir-${this.dir}` : '',
        this.hwrap ? `row--hwrap-${this.hwrap}` : '',
        this.vwrap ? `row--vwrap-${this.vwrap}` : '',
        this.hgutter ? `row--hgutter-${this.hgutter}` : '',
        this.vgutter ? `row--vgutter-${this.vgutter}` : '',
        {
          'row--inline': this.inline,
          'row--grid': this.grid,
        },
      ];

      return propertiesClass.concat(responsiveClass);
    },
  },
};
</script>
