<template lang="pug">
  .demo
    .demo__title(v-if="title")
      .demo__title__wrapper {{ title }}
    .demo__content(:class="{'demo__content--padding': padding}")
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  margin-bottom: $space;
}

.demo__title {
  padding: size(1/2) size(1/2) 0;
  margin-bottom: size(1/2);
  font-family: font-family(base);
  font-size: font-size(eta);
  font-weight: font-weight(bold);
  color: color(gray2);
  text-transform: uppercase;
}

.demo__title__wrapper {
  border-bottom: 1px solid color(border);
}

.demo__content--padding {
  padding: 0 size(1/2);
}
</style>
