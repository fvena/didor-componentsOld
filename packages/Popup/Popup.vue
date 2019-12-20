<template lang="pug">
  transition(name="az-popup-none")
    .az-popup(
      v-show="value"
      tabindex="-1"
      :style="popupStyle"
      :class="popupClass"
      @keyup.esc="onEsc")

      //- Modal Mask
      transition(name="az-popup-fade")
        .az-popup__mask(v-show="mask && value" :style="popupStyle" @click="onClickMask")

      //- Modal Body
      transition(:name="`az-popup-${animation}`")
        .az-popup__dialog(v-show="value" :style="dialogStyle")

          //- Botón cerrar
          span.az-popup__close(v-if="closeButton" @click="$emit('hide')")

          //- Contenido
          .az-popup__content
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
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.duration : 300;
      },
    },
    transition: {
      type: String,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.transition : 'zoom';
      },
    },
    mask: {
      type: Boolean,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.mask : true;
      },
    },
    closeButton: {
      type: Boolean,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.closeButton : true;
      },
    },
    closeOnEsc: {
      type: Boolean,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.closeOnEsc : false;
      },
    },
    closeOnClickMask: {
      type: Boolean,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.closeOnClickMask : false;
      },
    },
    zIndex: {
      type: Number,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.zIndex : 100;
      },
    },
    lockScroll: {
      type: Boolean,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.lockScroll : true;
      },
    },
    container: {
      type: String,
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.container : null;
      },
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
      default() {
        return this.$DIDOR ? this.$DIDOR.popup.bounce : false;
      },
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
    popupClass() {
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
