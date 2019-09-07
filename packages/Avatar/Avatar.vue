<template lang="pug">
  .az-avatar(@click="onClick" :style="avatarStyle" :class="avatarClass")
    az-icon.az-avatar__icon(:name="iconName")
    .az-avatar__initials(v-if="name" :style="avatarInitialStyle") {{ initials }}
    .az-avatar__image(v-if="src" :style="avatarImageStyle")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: '5rem',
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
    textColor: {
      type: String,
      default: 'var(--color-gray4)',
    },
    iconName: {
      type: String,
      default: 'user-fill',
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    initials() {
      if (!this.name) return '';
      return this.name
        .split(' ')
        .map(x => x.charAt(0))
        .join('')
        .substr(0, 2)
        .toUpperCase();
    },

    avatarClass() {
      return [this.isLink ? 'az-avatar--link' : ''];
    },

    avatarStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
        width: this.size,
        height: this.size,
        lineHeight: this.size,
        fontSize: this.size,
      };
    },

    avatarImageStyle() {
      return {
        backgroundImage: `url(${this.src})`,
      };
    },

    avatarInitialStyle() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick(event) {
      this.$emit('clic', event);
    },
  },
};
</script>

<style src="./Avatar.scss" lang="scss"></style>
