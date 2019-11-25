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
  margin-bottom: simple();
}

.demo__title {
  padding: half() half() 0;
  margin-bottom: half();
  font-family: font-family(base);
  font-size: font-size(small1);
  font-weight: font-weight(bold);
  color: color(gray2);
  text-transform: uppercase;
}

.demo__title__wrapper {
  border-bottom: 1px solid color(border);
}

.demo__content--padding {
  padding: 0 half();
}
</style>
