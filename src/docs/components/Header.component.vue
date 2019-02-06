<template lang="pug">
  nav.header-nav
    v-runtime-template(:template="navbarLinks")
    ul
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
import MarkdownService from '@/services/markdown.service';
import VRuntimeTemplate from 'v-runtime-template';

export default {
  components: {
    VRuntimeTemplate,
  },
  computed: {
    ...mapGetters({
      language: 'globalModule/getLanguage',
      languages: 'globalModule/getLanguages',
    }),
  },
  data() {
    return {
      navbarLinks: '',
    };
  },
  methods: {
    ...mapActions({
      setLanguage: 'globalModule/setLanguage',
    }),
    /**
     * Get Section links
     * Replace '<a>' tags by '<router-link>' and remove extension file
     */
    async getMainNav() {
      const navbarPath = '_navbar.md';
      const navbarLinks = await MarkdownService.getMarkdown(navbarPath);
      // prettier-ignore
      const navbarRouterLinks = navbarLinks.replace(
        /<\s*a href="\/(.*?)">(.*?)<\s*\/\s*a>/gi,
        '<router-link to="/$1">$2</router-link>',
      );
      this.navbarLinks = navbarRouterLinks;
    },
  },
  /**
   * Get links the first time that component is loaded
   */
  created() {
    this.getMainNav();
  },
};
</script>

<style lang="scss">
$header-height: triple($space);
$header-height-media: double($space);

.header-nav {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;

  li {
    position: relative;
    margin: 0;
    list-style: none;

    a {
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
  .header-nav {
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
  .header-nav {
    display: none;
  }
}
</style>
