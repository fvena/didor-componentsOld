<template lang="pug">
.az-col(
  :class="classObject"
)
  slot
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      default: null,
    },
    palm: {
      type: Number,
      default: null,
    },
    lap: {
      type: Number,
      default: null,
    },
    small: {
      type: Number,
      default: null,
    },
    desk: {
      type: Number,
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
      type: Number,
      default: null,
    },
    offsetPalm: {
      type: Number,
      default: null,
    },
    offsetLap: {
      type: Number,
      default: null,
    },
    offsetSmall: {
      type: Number,
      default: null,
    },
    offsetDesk: {
      type: Number,
      default: null,
    },
  },
  computed: {
    classObject() {
      return [
        this.cols > 0 ? `az-col--${this.cols}` : '',
        this.palm > 0 ? `az-col--palm${this.palm}` : '',
        this.lap > 0 ? `az-col--lap${this.lap}` : '',
        this.small > 0 ? `az-col--small${this.small}` : '',
        this.desk > 0 ? `az-col--desk${this.desk}` : '',
        this.offset > 0 ? `az-col--offset-${this.offset}` : '',
        this.offsetPalm > 0 ? `az-col--offset-palm${this.offsetPalm}` : '',
        this.offsetLap > 0 ? `az-col--offset-lap${this.offsetLap}` : '',
        this.offsetSmall > 0 ? `az-col--offset-small${this.offsetSmall}` : '',
        this.offsetDesk > 0 ? `az-col--offset-desk${this.offsetDesk}` : '',
        {
          'az-col--auto': this.auto,
          'az-col--expand': this.expand,
        },
      ];
    },
  },
};
</script>

<style src="./Col.scss" lang="scss"></style>
