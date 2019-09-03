<template lang="pug">
  .az-feedback__scale(:style="{'transform': style}")
    .az-feedback(:class="classObject")
      .az-feedback__spinner
        svg
          circle(cx="50%" cy="50%" r="50px")
      .az-feedback__successMark
      .az-feedback__errorMark
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    scale: {
      type: Number,
      default: 0.5,
    },
  },
  computed: {
    classObject() {
      return [
        this.isLoading ? 'az-feedback--loading' : '',
        this.isSuccess ? 'az-feedback--success' : '',
        this.isError ? 'az-feedback--error' : '',
      ];
    },

    style() {
      return `scale(${this.scale})`;
    },
  },
};
</script>

<style src="./Feedback.scss" lang="scss"></style>
