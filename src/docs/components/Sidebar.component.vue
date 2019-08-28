<template lang="pug">
  .sidebar
    //- Logo
    router-link(:to="{name: 'home'}")
      //- Logo
      img.custom-logo(src="/aidoo.svg")

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
.custom-logo {
  display: block;
  height: 100px;
  margin: 0 auto size(2);
  cursor: pointer;
}

.sidebar__nav {
  li {
    margin: 0;
    list-style: none;
  }

  li > p,
  li > p > a {
    display: block;
    margin-bottom: 0;
    font-size: font-size(eta);
    font-weight: font-weight(bold);
    color: color(gray2);
    text-transform: uppercase;

    &.router-link-active {
      color: color(brand);

      @include hover {
        color: color(brand-darker);
      }
    }
  }

  li > p > a {
    @include hover {
      color: color(brand);
    }
  }

  li > a {
    display: block;
    font-size: font-size(eta);
    color: color(gray3);

    @include hover {
      color: color(brand);
    }

    &.router-link-active {
      color: color(brand);

      @include hover {
        color: color(brand-darker);
      }
    }
  }

  li > p > a,
  li > ul {
    margin-bottom: size(1/2);
  }

  li > ul {
    padding-top: size(1/4);
    border-top: 1px solid color(border);
  }

  li > ul > li > p {
    font-size: font-size(theta);
    color: color(gray4);
    opacity: 0.7;
  }

  li > ul > li > ul {
    padding-top: 0;
    border-top: none;
  }
}

@include media(portrait) {
  .custom-logo {
    height: 80px;
  }
}
</style>
