<template lang="pug">
  div
    | {{ article }}
</template>

<script>
export default {
  props: {
    article: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
