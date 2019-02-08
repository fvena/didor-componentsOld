<template lang="pug">
  div.az-button
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
    type: {
      type: String,
      default: 'default',
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
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style src="./Toast.scss" lang="scss" scoped></style>
