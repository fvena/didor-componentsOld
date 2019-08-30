<template lang="pug">
  .az-input(:class="classObject")
    //- Left Icon Block
    .az-input__left-icon(
      v-if="leftIcon || $slots.leftIcon"
      @click="onClickLeftIcon")
      slot(name="leftIcon")
        az-icon(:name="leftIcon")

    //- Label Block
    label.az-input__label(
      :style="{width: labelWidth, 'text-align': labelAlign}"
      v-if="label || $slots.label")
      slot(name="label")
        | {{ label }}

    //- Input block
    .az-input__value
      .az-input__body
        //- Input type text
        input.az-input__control(
          v-bind="$attrs"
          v-if="type!=='textarea'"
          :type="fieldType"
          :value="value"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :style="{'text-align': inputAlign}"
          @input="onInput"
          @keypress="onKeypress"
          @focus="onFocus"
          @blur="onBlur")

        //- Input type textarea
        textarea.az-input__control(
          v-bind="$attrs"
          v-if="type==='textarea'"
          ref="textarea"
          :type="fieldType"
          :value="value"
          :placeholder="placeholder"
          :rows="rows"
          :disabled="disabled"
          :readonly="readonly"
          :style="{'text-align': inputAlign}"
          @input="onInput"
          @keypress="onKeypress"
          @focus="onFocus"
          @blur="onBlur")

        //- Clear button
        .az-input__clear(
          v-if="showClear"
          @click="onClear")
          az-icon(name="clear")

        //- Show Password button
        .az-input__password(
          v-if="showPassword"
          @click="onTogglePassword")
          az-icon(:name="iconPassword")

        //- Right Icon Block
        .az-input__right-icon(
          v-if="rightIcon || $slots.rightIcon"
          @click="onClickRightIcon")
          slot(name="rightIcon")
            az-icon(:name="rightIcon")

      //- Error Message
      .az-input__error-message(
        v-if="errorMessage || $slots.errorMessage"
        :style="{'text-align': errorAlign}")
        slot(name="errorMessage")
          | {{ errorMessage }}

      //- Info Message
      .az-input__info-message(
        v-if="infoMessage || $slots.infoMessage"
        :style="{'text-align': infoAlign}")
        slot(name="infoMessage")
          | {{ infoMessage }}
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      focused: false,
      fieldType: this.type,
      iconPassword: 'password',
    };
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: [String, Number],
      default: '90px',
    },
    labelAlign: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    inputAlign: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    errorAlign: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    infoAlign: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    leftIcon: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: String,
      default: '',
    },
    rows: {
      type: [String, Number],
      default: 2,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    infoMessage: {
      type: String,
      default: '',
    },
  },

  computed: {
    /**
     * Devuelve un listado con las clases que dependen de la configuración
     */
    classObject() {
      return [this.required ? 'az-input--required' : '', this.error ? 'az-input--error' : ''];
    },

    /**
     * Indica si debe mostrarse el botón de limpiar campo
     */
    showClear() {
      return (
        this.clearable && this.focused && this.value !== '' && !this.disabled && !this.readonly
      );
    },

    /**
     * Indica si se muestra el valor de la contraseña
     */
    showPassword() {
      return this.type === 'password';
    },
  },

  watch: {
    /**
     * Llama al evento adjustSize cuando cambia el valor del campo
     * para actualizar el tamaño del textarea cuando se ha configurado
     */
    value() {
      this.$nextTick(this.adjustSize);
    },
  },

  mounted() {
    this.$nextTick(this.adjustSize);
  },

  methods: {
    /**
     * Evento cuando cambia el valor del input
     */
    onInput(event) {
      this.$emit('input', event.target.value);
    },

    /**
     * Evento cuando el campo input recibe el foco
     */
    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // hack para safari
      if (this.readonly) {
        this.blur();
      }
    },

    /**
     * Evento cuando el campo input pierde el foco
     */
    onBlur(event) {
      this.$emit('blur', event);

      // Al pulsar el botón de limpiar, el input pierde el foco
      // este evento se genera antes que el de hacer click,
      // por lo que el botón clear desaparece sin lanzar el evento
      // añado un retardo para que el botón clear exista lo suficiente
      // para lanzar el evento
      setTimeout(() => {
        this.focused = false;
      }, 300);
    },

    /**
     * Evento cuando se hace click en el icono izquierdo
     */
    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    /**
     * Evento cuando se hace click en el icono derecho
     */
    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },

    /**
     * Evento cuando se hace click en el botón de limpiar
     */
    onClear(event) {
      event.preventDefault();
      this.$emit('input', '');
      this.$emit('clear', event);
    },

    /**
     * Evento cuando se hace click en el botón mostrar contraseña
     */
    onTogglePassword() {
      this.fieldType = this.fieldType === 'text' ? 'password' : 'text';
      this.iconPassword = this.iconPassword === 'password' ? 'password-hide' : 'password';
    },

    /**
     * Evento cuando se hace introduce un valor
     *
     * Cuando el tipo de campo es un número, solo permite escribir números
     */
    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        // prettier-ignore
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45; // eslint-ignore-line

        if (!isValidKey) {
          event.preventDefault();
        }
      }
    },

    /**
     * Método que actualiza la altura del textarea cuando tiene la propidad autosize
     */
    adjustSize() {
      const { textarea } = this.$refs;

      if (!(this.type === 'textarea' && this.autosize) || !textarea) {
        return;
      }

      textarea.style.height = 'auto';

      const height = textarea.scrollHeight;

      console.log('height', height);

      if (height) {
        textarea.style.height = `${height}px`;
      }
    },
  },
};
</script>

<style src="./Input.scss" lang="scss"></style>
