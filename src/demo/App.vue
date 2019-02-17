<template lang="pug">
  .dynamic-component
    component(:is="component")
</template>

<script>
export default {
  data() {
    return {
      component: window.name,
    };
  },
};
</script>

<style lang="scss">
.demo__subtitle {
  @include fontsize(theta);

  margin-bottom: quarter($space);
  font-family: $content-font-family;
  font-weight: $content-font-bold;
  color: var(--color-gray4);
  text-transform: uppercase;
}
</style>
