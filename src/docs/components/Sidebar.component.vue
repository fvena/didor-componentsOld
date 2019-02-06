<template lang="pug">
  nav.sidebar-nav
    slot
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar-nav {
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
