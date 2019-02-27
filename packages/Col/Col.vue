<template lang="pug">
.col(
  :class="classObject"
)
  slot
</template>

<script>
export default {
  props: {
    cols: {
      type: [String, Number],
      default: null,
    },
    palm: {
      type: [String, Number],
      default: null,
    },
    lap: {
      type: [String, Number],
      default: null,
    },
    small: {
      type: [String, Number],
      default: null,
    },
    desk: {
      type: [String, Number],
      default: null,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: [String, Number],
      default: null,
    },
    offsetPalm: {
      type: [String, Number],
      default: null,
    },
    offsetLap: {
      type: [String, Number],
      default: null,
    },
    offsetSmall: {
      type: [String, Number],
      default: null,
    },
    offsetDesk: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    classObject() {
      return [
        this.cols > 0 ? `col--${this.cols}` : '',
        this.palm > 0 ? `col--palm${this.palm}` : '',
        this.lap > 0 ? `col--lap${this.lap}` : '',
        this.small > 0 ? `col--small${this.small}` : '',
        this.desk > 0 ? `col--desk${this.desk}` : '',
        this.offset > 0 ? `col--offset-${this.offset}` : '',
        this.offsetPalm > 0 ? `col--offset-palm${this.offsetPalm}` : '',
        this.offsetLap > 0 ? `col--offset-lap${this.offsetLap}` : '',
        this.offsetSmall > 0 ? `col--offset-small${this.offsetSmall}` : '',
        this.offsetDesk > 0 ? `col--offset-desk${this.offsetDesk}` : '',
        {
          'col--auto': this.auto,
          'col--expand': this.expand,
        },
      ];
    },
  },
};
</script>

<style src="./Col.scss" lang="scss"></style>
