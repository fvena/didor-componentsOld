<template lang="pug">
  .az-checkbox(:class="classObject" @click="onInput")
    .az-checkbox__cell
      svg(viewBox="0 0 44 44")
        path(d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)")
    .az-checkbox__input
      .az-checkbox__base
      .az-checkbox__mark
    .az-checkbox__label
      slot
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    checked: {
      type: [Boolean, Array],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
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
      if (this.disabled) return;

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
