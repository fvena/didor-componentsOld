<template lang="pug">
  .az-fieldset
    .az-fieldset__title(v-if="title || $slots.title")
      slot(name="title")
        | {{ title }}
    .az-fieldset__content
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

<style src="./Fieldset.scss" lang="scss"></style>
