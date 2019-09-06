<template lang="pug">
  .az-cell-group
    .az-cell-group__title(v-if="title || $slots.title")
      slot(name="title")
        | {{ title }}
    .az-cell-group__content
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style src="./CellGroup.scss" lang="scss"></style>
