<template lang="pug">
.az-loading(:style="{'font-size': size}")
  .az-loading--bars(v-if="type === 'bars'")
    .az-loading__bar
    .az-loading__bar
    .az-loading__bar
    .az-loading__bar
    .az-loading__bar

  .az-loading--circle(v-if="type === 'circle'")
    svg.az-loading__svg(viewBox="0 0 66 66")
      circle.az-loading__path(fill="none" cx="33" cy="33" r="30")

  .az-loading--star(v-if="type === 'star'")
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item
    .az-loading__item

  .az-loading--blobs(v-if="type === 'blobs'")
    .az-loading__blob.az-loading__blob--top
    .az-loading__blob.az-loading__blob--bottom
    .az-loading__blob.az-loading__blob--left
    .az-loading__blob.az-loading__blob--move

  .az-loading--square(v-if="type === 'square'")
    .az-loading__square__shadow
    .az-loading__square__box
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'star',
      validator: value => ['bars', 'circle', 'star', 'blobs', 'square'].indexOf(value) !== -1,
    },
    color: {
      type: String,
      default: 'var(--color-brand)',
    },
    size: {
      type: String,
      default: '1rem',
    },
  },
  watch: {
    color(val) {
      this.$el.style.setProperty('--color-az-loading', val);
    },
  },
  mounted() {
    this.$el.style.setProperty('--color-az-loading', this.color);
  },
};
</script>

<style src="./Loading.scss" lang="scss"></style>
