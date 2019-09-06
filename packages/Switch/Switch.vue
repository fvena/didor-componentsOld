<template lang="pug">
  .az-switch(
    :class="switchClass"
    :style="switchStyle"
    role="switch"
    :aria-checked="String(checked)"
    @click="onClick")
    .az-switch__node
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      required: false,
    },
    activeValue: {
      type: [String, Boolean],
      default: true,
    },
    inactiveColor: {
      type: String,
      required: false,
    },
    inactiveValue: {
      type: [String, Boolean],
      default: false,
    },
    size: {
      type: String,
      required: false,
      validator: value => ['small', 'large'].indexOf(value) !== -1,
    },
  },

  computed: {
    checked() {
      return this.value === this.activeValue;
    },

    switchClass() {
      return [
        this.disabled ? 'az-switch--disabled' : '',
        this.checked ? 'az-switch--on' : '',
        this.size ? `az-switch--${this.size}` : '',
      ];
    },

    switchStyle() {
      return {
        backgroundColor: this.checked ? this.activeColor : this.inactiveColor,
      };
    },
  },

  methods: {
    onClick() {
      if (!this.disabled) {
        const newValue = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    },
  },
};
</script>

<style src="./Switch.scss" lang="scss"></style>
