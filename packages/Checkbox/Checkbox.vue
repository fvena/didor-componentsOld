<template lang="pug">
  .az-checkbox(:class="classObject" @click="onInput")
    .az-checkbox__input
    .az-checkbox__label
      slot
</template>

<script>
export default {
  props: ['checked', 'value'],
  model: {
    prop: 'checked',
    event: 'input',
  },
  computed: {
    /**
     * Devuelve un listado con las clases que dependen de la configuración
     */
    classObject() {
      return [
        this.disabled ? 'az-checkbox--disabled' : '',
        this.isChecked ? 'az-checkbox--checked' : '',
      ];
    },

    isGroup() {
      return Array.isArray(this.checked);
    },

    isChecked() {
      if (this.isGroup) return this.checked.includes(this.value);
      return this.checked;
    },
  },
  methods: {
    /**
     * Evento lanzado cuando se modifica el valor del checkbox
     */
    onInput() {
      if (!this.isGroup) {
        this.$emit('input', !this.checked);
        return;
      }

      // Creo un nuevo array para no hacer una mutación en la propiedad checked
      const checkedList = [].concat(this.checked);

      if (checkedList.includes(this.value)) {
        checkedList.splice(checkedList.indexOf(this.value), 1);
      } else {
        // Compruebo si existe un número máximo de opciones definidas en el grupo
        // y si ya se ha superado
        const maxOptions = this.$parent.$options.propsData.maxOptions;
        const options = this.checked.length;

        if (maxOptions && maxOptions <= options) return;

        checkedList.push(this.value);
      }

      this.$emit('input', checkedList);
    },
  },
};
</script>

<style src="./Checkbox.scss" lang="scss"></style>
