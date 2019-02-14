<template lang="pug">
  .dynamic-component
    //- component(:is="component")
    //- div(v-html="component")
    //- | {{ component }}
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
