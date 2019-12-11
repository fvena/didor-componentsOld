<template lang="pug">
  transition(name="az-popup-none")
    .az-popup(
      v-show="value"
      tabindex="-1"
      :style="popupStyle"
      @keyup.esc="onEsc")

      //- Modal Mask
      transition(name="az-popup-fade")
        .az-popup__mask(v-show="mask && value" :style="popupStyle" @click="onClickMask")

      //- Modal Body
      transition(:name="`az-popup-${animation}`")
        .az-popup__dialog(v-show="value" :style="dialogStyle" :class="dialogClass")

          //- Botón cerrar
          span.az-popup__close(v-if="closeButton" @click="$emit('hide')")

          //- Contenido
          slot
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    duration: {
      type: Number,
      default: 300,
    },
    transition: {
      type: String,
      default: 'zoom',
    },
    mask: {
      type: Boolean,
      default: true,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
    closeOnEsc: {
      type: Boolean,
      default: false,
    },
    closeOnClickMask: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 100,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    container: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      default: '',
      validator: value => ['top', 'right', 'bottom', 'left', ''].indexOf(value) !== -1,
    },
    full: {
      type: Boolean,
      default: false,
    },
    bounce: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      opened: false,
    };
  },

  watch: {
    value(val) {
      const type = val ? 'open' : 'close';
      this[type](); // Llama al método => this.open() o this.close()
      this.$emit(type); // Emite un evento 'open' o 'close'
    },
  },

  computed: {
    dialogClass() {
      return [this.position ? `az-popup--${this.position}` : '', this.full ? 'az-popup--full' : ''];
    },

    popupStyle() {
      return {
        animationDuration: `${this.duration}ms`,
        'z-index': this.zIndex,
      };
    },

    dialogStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
        animationDuration: `${this.duration}ms`,
        transitionTimingFunction: this.bounce
          ? 'cubic-bezier(0.4, 0, 0, 1.5)'
          : 'cubic-bezier(0.55, 0, 0.1, 1)',
        animationTimingFunction: this.bounce
          ? 'cubic-bezier(0.4, 0, 0, 1.5)'
          : 'cubic-bezier(0.55, 0, 0.1, 1)',
      };
    },

    animation() {
      return this.position ? this.position : this.transition;
    },
  },

  methods: {
    open() {
      if (this.opened) return;

      this.opened = true;

      if (this.lockScroll) {
        document.body.classList.add('az-overflow-hidden');
      }
    },

    close() {
      if (!this.opened) return;

      if (this.lockScroll) {
        document.body.classList.remove('az-overflow-hidden');
      }

      this.opened = false;
      this.$emit('input', false);
    },

    onEsc() {
      if (this.value && this.closeOnEsc) {
        this.$emit('hide');
      }
    },

    onClickMask() {
      this.$emit('clickMask');
      if (this.closeOnClickMask) {
        this.$emit('hide');
      }
    },
  },

  mounted() {
    if (this.container) {
      const element = document.querySelector(this.container);
      if (element) {
        element.appendChild(this.$el);
      } else {
        console.error(`az-popup: No se ha encontrado el elemento: ${this.container}`);
      }
    }

    if (this.value) {
      this.open();
    }
  },

  beforeDestroy() {
    this.close();
  },
};
</script>

<style src="./Popup.scss" lang="scss"></style>
