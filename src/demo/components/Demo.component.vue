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
  @include fontsize(eta);

  padding: halve($space) halve($space) 0;
  margin-bottom: halve($space);
  font-weight: $content-font-family;
  font-weight: $content-font-bold;
  color: var(--color-gray2);
  text-transform: uppercase;
}

.demo__title__wrapper {
  border-bottom: 1px solid var(--color-border);
}

.demo__content--padding {
  padding: 0 halve($space);
}
</style>
