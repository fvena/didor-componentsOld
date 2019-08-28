<template lang="pug">
div(:class="classObject")
  slot
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return [this.fluid ? 'container-fluid' : 'container'];
    },
  },
};
</script>
