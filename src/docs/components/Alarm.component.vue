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
  padding: $space $space $space quadruple($space);
  margin: double($space) 0;
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
  color: var(--color-success-darker);
  background-color: var(--color-success-lighter);

  code {
    color: var(--color-success-dark);
  }
}

.note {
  color: var(--color-brand-darker);
  background-color: var(--color-brand-lighter);

  code {
    color: var(--color-brand-dark);
  }
}

.warn {
  color: var(--color-error-darker);
  background-color: var(--color-error-lighter);

  code {
    color: var(--color-error-dark);
  }
}
</style>
