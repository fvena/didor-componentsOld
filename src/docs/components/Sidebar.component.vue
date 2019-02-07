<template lang="pug">
  .sidebar
    //- Logo
    router-link(:to="{name: 'home'}")
      Logo

    //- Menu
    nav.sidebar__nav
      slot
</template>

<script>
import Logo from '@/components/Logo.component.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.sidebar__nav {
  li {
    margin: 0;
    list-style: none;
  }

  li > p,
  li > p > a {
    @include fontsize(eta);

    display: block;
    margin-bottom: 0;
    font-weight: $content-font-bold;
    color: var(--color-gray2);
    text-transform: uppercase;

    &.router-link-active {
      color: var(--color-brand);

      &:hover {
        color: var(--color-brand-darker);
      }
    }
  }

  li > p > a:hover {
    color: var(--color-brand);
  }

  li > a {
    @include fontsize(eta);

    display: block;
    color: var(--color-gray3);

    &:hover {
      color: var(--color-brand);
    }

    &.router-link-active {
      color: var(--color-brand);

      &:hover {
        color: var(--color-brand-darker);
      }
    }
  }

  li > p > a,
  li > ul {
    margin-bottom: halve($space);
  }

  li > ul {
    padding-top: quarter($space);
    border-top: 1px solid var(--color-border);
  }

  li > ul > li > p {
    @include fontsize(theta);

    color: var(--color-gray4);
    opacity: 0.7;
  }

  li > ul > li > ul {
    padding-top: 0;
    border-top: none;
  }
}
</style>
