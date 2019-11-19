<template lang="pug">
  .header(:class="{'header--github': github, 'header--toggle-sidebar': sidebarShow}")
    //- Toggle sidebar button
    button.sidebar-toggle(@click="toggleSidebar()")
      .sidebar-toggle-button
        span
        span
        span

    //- Navigation header
    nav.header__nav
      slot

      ul(v-if="showLanguages")
        li
          p {{ $t("messages.language") }}
          ul
            li(v-for="languageItem in languages")
              a(
                :class="{select: languageItem === language}"
                @click="setLanguage(languageItem)") {{ languageItem }}

    //- Github Link
    Github-Octo(v-if="github" :githubUrl="github")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GithubOcto from '@/components/GithubOcto.component.vue';
import docsConfig from '../../../docs/docs.config';

export default {
  components: {
    GithubOcto,
  },
  computed: {
    ...mapGetters({
      language: 'globalModule/getLanguage',
      languages: 'globalModule/getLanguages',
      sidebarShow: 'globalModule/getSidebarState',
    }),
  },
  data() {
    return {
      github: docsConfig.gitRepoLink,
      showLanguages: docsConfig.languages,
    };
  },
  methods: {
    ...mapActions({
      setLanguage: 'globalModule/setLanguage',
      toggleSidebar: 'globalModule/toggleSidebar',
    }),
  },
};
</script>

<style lang="scss">
$header-height: triple();
$header-height-media: double();
$sidebar-width: 240px;
$sidebar-width-large: 300px;

.header {
  height: $header-height;
}

.header--github {
  padding-right: $header-height;
}

.header.header--toggle-sidebar {
  .sidebar-toggle {
    left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  top: 0;
  left: $sidebar-width;
  z-index: 10;
  width: double();
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0;
  outline: none;
  transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) left;

  @include hover {
    color: color(brand);
  }

  &::before {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 100%;
    content: '';
    background-color: rgba(255, 255, 255, 0.9);
    transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) width;
  }
}

.sidebar-toggle-button {
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: middle;
}

.sidebar-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin-bottom: 4px;
  background-color: color(brand);
}

.header__nav {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;

  li {
    position: relative;
    margin: 0;
    list-style: none;

    a {
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
  }

  > ul {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;

    > li > p,
    > li > a {
      height: $header-height;
      padding: 0 halve();
      line-height: $header-height;
      color: color(gray3);
      cursor: pointer;
    }

    > li:last-of-type p,
    > li:last-of-type a {
      padding-right: halve();
    }

    > li {
      @include hover {
        ul {
          display: block;
        }
      }
    }

    > li ul {
      position: absolute;
      top: double() + quarter();
      right: 0;
      z-index: $z-index-dropdown;
      display: none;
      min-width: 100%;
      max-height: calc(100vh - #{double()});
      padding: halve() 0;
      overflow-y: auto;
      text-align: left;
      background-color: #ffffff;
      border: 1px solid color(border);
      border-bottom-color: color(border);
      border-radius: $border-radius;
    }

    > li ul li {
      min-width: 100%;
      font-size: font-size(small1);
      white-space: nowrap;

      a {
        width: max-content;
        padding: 0 halve();
        cursor: pointer;
      }
    }
  }
}

@include media(screen) {
  .sidebar-toggle {
    left: $sidebar-width-large;
  }
}

@include media(portrait) {
  .header {
    height: $header-height-media;
  }

  .header--github {
    padding-right: $header-height-media;
  }

  .sidebar-toggle {
    left: 0;
    height: $header-height-media;
    line-height: $header-height-media;
  }

  .header__nav {
    > ul {
      > li > p,
      > li > a {
        height: $header-height-media;
        line-height: $header-height-media;
      }
    }
  }

  .header.header--toggle-sidebar {
    .sidebar-toggle {
      left: $sidebar-width-large;
    }
  }
}

@include media(palm) {
  .header__nav {
    display: none;
  }

  .github-octo {
    display: none;
  }
}
</style>
