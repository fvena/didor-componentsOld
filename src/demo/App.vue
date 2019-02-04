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
