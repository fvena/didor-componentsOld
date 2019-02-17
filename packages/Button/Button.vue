<template lang="pug">
  button.az-button(
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="classObject")
    //- Loading spinner
    az-loading(:type="loadingType")
    //- i(:class="icon" v-if="icon && !loading")
    span(v-if="$slots.default && !loading")
      slot
    span(v-if="loading") Cargando
</template>

<script>
export default {
  name: 'AzButton',
  props: {
    autofocus: Boolean,
    block: Boolean,
    circle: Boolean,
    disabled: Boolean,
    ghost: Boolean,
    // icon: {
    //   type: String,
    //   default: '',
    // },
    loading: Boolean,
    loadingType: String,
    plain: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit', 'reset'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      default: 'normal',
    },
    square: Boolean,
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classObject() {
      return [
        this.type ? `az-button--${this.type}` : '',
        this.size ? `az-button--${this.size}` : '',
        {
          'az-button--disabled': this.buttonDisabled,
          'az-button--loading': this.loading,
          'az-button--block': this.block,
          'az-button--ghost': this.ghost,
          'az-button--plain': this.plain,
          'az-button--square': this.square,
          'az-button--circle': this.circle,
        },
      ];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style src="./Button.scss" lang="scss"></style>
