<template lang="pug">
  .alarm(:class="alarm")
    .alarm__icon(v-if="tip") 😉
    .alarm__icon(v-if="note") 🤓
    .alarm__icon(v-if="warn") 😱
    slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'note',
    },
  },
  computed: {
    alarm() {
      return this.type !== 'note' && this.type !== 'tip' && this.type !== 'warn'
        ? 'note'
        : this.type;
    },
    note() {
      return this.alarm === 'note';
    },
    tip() {
      return this.alarm === 'tip';
    },
    warn() {
      return this.alarm === 'warn';
    },
  },
};
</script>

<style lang="scss" scoped>
.alarm {
  position: relative;
  padding: simple() simple() simple() quadruple();
  margin: double() 0;
  border-radius: $border-radius;

  p:last-of-type {
    margin-bottom: 0;
  }

  code {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

.alarm__icon {
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  font-size: 2.4rem;
}

.tip {
  color: color(success-darker);
  background-color: color(success-lighter);

  code {
    color: color(success-dark);
  }
}

.note {
  color: color(brand-darker);
  background-color: color(brand-lighter);

  code {
    color: color(brand-dark);
  }
}

.warn {
  color: color(danger-darker);
  background-color: color(danger-lighter);

  code {
    color: color(danger-dark);
  }
}
</style>
