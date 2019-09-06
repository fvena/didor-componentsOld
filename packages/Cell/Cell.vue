<template lang="pug">
  .az-cell(:class="classObject" @click="onClick")
    //- Left Icon Block
    .az-cell__left-icon(v-if="leftIcon || $slots.leftIcon")
      slot(name="leftIcon")
        az-icon(:name="leftIcon")

    //- Title Block
    .az-cell__title(
      :style="{width: titleWidth, 'text-align': titleAlign}"
      v-if="title || $slots.title || label || $slots.label")
      slot(name="title")
        | {{ title }}
      .az-cell__label(v-if="label || $slots.label")
        slot(name="label")
          | {{ label }}

    //- Input block
    .az-cell__value
      .az-cell__body(:style="{'justify-content': valueAlignFlex}")
        slot
          | {{ value }}

        //- Link Icon Block
        .az-cell__link-icon(v-if="isLink && !$slots.rightIcon")
          az-icon(:name="arrowDirection" :scale="arrowScale")

        //- Right Icon Block
        .az-cell__right-icon(v-if="(!isLink && rightIcon) || $slots.rightIcon")
          slot(name="rightIcon")
            az-icon(:name="rightIcon")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    titleWidth: {
      type: [String, Number],
      default: '90px',
    },
    titleAlign: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    label: {
      type: String,
      required: false,
    },
    value: {
      type: [String, Number],
      required: false,
    },
    valueAlign: {
      type: String,
      default: 'right',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1,
    },
    leftIcon: {
      type: String,
      required: false,
    },
    rightIcon: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    to: {
      type: [String, Object],
      required: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String,
      default: 'right',
      validator: value => ['left', 'right', 'up', 'down'].indexOf(value) !== -1,
    },
  },
  computed: {
    /**
     * Devuelve un listado con las clases que dependen de la configuración
     */
    classObject() {
      return [this.isLink ? 'az-cell--link' : ''];
    },

    valueAlignFlex() {
      if (!this.title && !this.$slots.title && !this.label && !this.$slots.label) {
        return 'flex-start';
      }

      switch (this.valueAlign) {
        case 'right':
          return 'flex-end';
        case 'center':
          return 'center';
        default:
          return 'flex-start';
      }
    },

    arrowScale() {
      return this.arrowDirection === 'up' || this.arrowDirection === 'down' ? '1' : '1.2';
    },
  },

  methods: {
    /**
     * Evento cuando se hace click en la celda
     */
    onClick(event) {
      if (this.url) {
        window.open(this.url, '_system');
        return;
      }

      if (this.to) {
        this.$router.push(this.to);
        return;
      }

      this.$emit('click', event);
    },
  },
};
</script>

<style src="./Cell.scss" lang="scss"></style>
