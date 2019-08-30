<template lang="pug">
  .az-CheckboxGroup(:class="classObject")
    slot
</template>

<script>
export default {
  props: {
    cell: {
      type: Boolean,
      default: false,
    },
    maxOptions: {
      required: false,
    },
  },
  computed: {
    /**
     * Devuelve un listado con las clases que dependen de la configuración
     */
    classObject() {
      return [this.disabled ? 'az-checkbox--disabled' : ''];
    },
  },
};
</script>

<style src="./CheckboxGroup.scss" lang="scss"></style>
