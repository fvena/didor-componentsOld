<template lang="pug">
  button.az-button(
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="classObject")
    span(v-if="$slots.default")
      slot

  //- button.az-button(
  //-   @click="handleClick"
  //-   :disabled="buttonDisabled || loading"
  //-   :autofocus="autofocus"
  //-   :type="nativeType"
  //-   :class="[
  //-     type ? 'el-button--' + type : '',
  //-     buttonSize ? 'el-button--' + buttonSize : '',
  //-     {
  //-       'is-disabled': buttonDisabled,
  //-       'is-loading': loading,
  //-       'is-plain': plain,
  //-       'is-round': round,
  //-       'is-circle': circle
  //-     }
  //-   ]")
  //-   i.az-icon-loading(v-if="loading")
  //-   i(:class="icon" v-if="icon && !loading")
  //-   span(v-if="$slots.default")
  //-     slot
</template>

<script>
export default {
  name: 'AzButton',
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    ghost: Boolean,
    square: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    bottomAction: Boolean,
    autofocus: Boolean,
    tag: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    classObject() {
      return [
        this.type ? `az-button--${this.type}` : '',
        this.buttonSize ? `az-button--${this.buttonSize}` : '',
        {
          'is-disabled': this.buttonDisabled,
          'is-loading': this.loading,
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
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

<style src="./Button.scss" lang="scss" scoped></style>
