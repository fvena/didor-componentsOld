<template lang="pug">
  svg.az-icon(
    class="className"
    :width="size"
    :height="size"
    :class="classObject"
    xmlns="http://www.w3.org/2000/svg")

    title(v-if="title") {{ title }}

    use.az-icon__use(
      ref="use"
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink")
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: '1rem',
    },
    dir: {
      type: String,
      default: '',
    },
    stroke: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconPath() {
      return `./icons/icons.svg#${this.name}`;
    },
    classObject() {
      return [
        this.dir ? `az-icon--${this.dir}` : '',
        {
          'az-icon--stroke': this.buttonDisabled,
        },
      ];
    },
  },
  created() {
    console.log(this.$refs);
  },
};
</script>

<style src="./Icon.scss" lang="scss"></style>
