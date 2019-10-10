<template lang="pug">
  transition(name="az-popup-fade")
    .az-popup(
      v-show="value"
      tabindex="-1"
      :style="style"
      :class="[className]"
      @keyup.esc="onEsc")

      //- Modal Mask
      .az-popup__mask(v-if="mask" @click="onClickMask")

      //- Modal Body
      transition(:name="`az-popup-${animation}`")
        .az-popup__dialog(v-show="value" :style="dialogStyle")

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
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    duration: {
      type: Number,
      default: 300,
    },
    animation: {
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
    className: {
      type: String,
      default: '',
    },
    zIndex: [Number, String],
    lockScroll: {
      type: Boolean,
      default: true,
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
      this[type](); // Lanza el evento => this.open() o this.close()
      this.$emit(type); // Emite un evento 'open' o 'close'
    },
  },

  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`,
      };
    },

    dialogStyle() {
      return {
        width: '80%',
        height: '40%',
        animationDuration: `${this.duration}ms`,
      };
    },
  },

  methods: {
    open() {
      if (this.opened) return;

      // // cover default zIndex
      // if (this.zIndex !== undefined) {
      //   context.zIndex = this.zIndex;
      // }

      this.opened = true;

      if (this.lockScroll) {
        document.body.classList.add('van-overflow-hidden');
      }
    },

    close() {
      if (!this.opened) return;

      if (this.lockScroll) {
        document.body.classList.remove('van-overflow-hidden');
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
    if (this.value) {
      this.open();
    }
  },

  beforeDestroy() {
    this.close();

    // if (this.getContainer && this.$parent && this.$parent.$el) {
    //   this.$parent.$el.appendChild(this.$el);
    // }
  },
};
</script>

<style src="./Dialog.scss" lang="scss"></style>
