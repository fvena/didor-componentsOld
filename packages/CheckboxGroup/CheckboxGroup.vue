<template lang="pug">
  .az-checkbox-group(:class="classObject")
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
      return [this.cell ? 'az-checkbox-group--cell' : ''];
    },
  },
};
</script>

<style src="./CheckboxGroup.scss" lang="scss"></style>
