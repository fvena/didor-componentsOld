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
  margin-bottom: quarter();
  font-family: font-family(base);
  font-size: font-size(theta);
  font-weight: font-weight(bold);
  color: color(gray4);
  text-transform: uppercase;
}
</style>
