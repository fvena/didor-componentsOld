<template lang="pug">
  nav.app-nav
    ul
      li
        p
          router-link(to="/") {{ $t("messages.homeLink") }}
      li
        p
          router-link(to="/about") {{ $t("messages.aboutLink") }}
      li
        p {{ $t("messages.language") }}
        ul
          li(v-for="languageItem in languages")
            a(
              :class="{select: languageItem === language}"
              @click="setLanguage(languageItem)") {{ languageItem }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      language: 'globalModule/getLanguage',
      languages: 'globalModule/getLanguages',
    }),
  },
  methods: {
    ...mapActions({
      setLanguage: 'globalModule/setLanguage',
    }),
  },
};
</script>

<style lang="scss" scoped>
$header-height: triple($space);
$header-height-media: double($space);

.app-nav {
  li {
    position: relative;
    margin: 0;
    list-style: none;

    a {
      color: var(--color-gray3);
    }

    a:hover {
      color: var(--color-brand);
    }
  }

  > ul {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;

    > li > p,
    > li > a {
      height: $header-height;
      padding: 0 halve($space);
      line-height: $header-height;
      color: var(--color-gray3);
      cursor: pointer;
    }

    > li:last-of-type p,
    > li:last-of-type a {
      padding-right: halve($space);
    }

    > li:hover ul {
      display: block;
    }

    > li ul {
      position: absolute;
      top: double($space) + quarter($space);
      right: 0;
      z-index: 1;
      display: none;
      min-width: 100%;
      max-height: calc(100vh - #{double($space)});
      padding: halve($space) 0;
      overflow-y: auto;
      text-align: left;
      background-color: var(--color-gray8);
      border: 1px solid var(--color-border);
      border-bottom-color: var(--color-border);
      border-radius: $border-radius;
    }

    > li ul li {
      @include fontsize(eta);

      min-width: 100%;
      white-space: nowrap;

      a {
        width: max-content;
        padding: 0 halve($space);
        cursor: pointer;
      }
    }
  }
}

@include media(portrait) {
  .app-nav {
    > ul {
      > li > p,
      > li > a {
        height: $header-height-media;
        line-height: $header-height-media;
      }
    }
  }
}

@include media(palm) {
  .app-nav {
    display: none;
  }
}
</style>
