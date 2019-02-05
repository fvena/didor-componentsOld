<template lang="pug">
.docs(:class="{'docs--toggle-sidebar': sidebarShow, 'docs--show-device': deviceShow}")
  .sidebar(ref="sidebarRef")
    Logo(:animate="animateLogo")
    Sidebar(:sidebarData="sectionLinks")

  .content
    .docs__header
      button.sidebar-toggle(@click="toggleSidebar()")
        .sidebar-toggle-button
          span
          span
          span
      Header(:class="{'header-padding-right': github}")
      Github-Octo(v-if="github" :githubUrl="github")

    .docs__section
      .wrapper
        h1 Title
        router-view
        Footer
        Device
</template>

<script>
import Logo from '@/components/Logo.component.vue';
import Sidebar from '@/components/Sidebar.component.vue';
import Header from '@/components/Header.component.vue';
import GithubOcto from '@/components/GithubOcto.component.vue';
import Footer from '@/components/Footer.component.vue';
import Device from '@/components/Device.component.vue';

export default {
  components: {
    Logo,
    Sidebar,
    Header,
    GithubOcto,
    Footer,
    Device,
  },
  props: {
    sectionLinks: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      github: 'https://github.com/fvena/didor-docs',
      sidebarShow: false,
      deviceShow: true,
    };
  },
  computed: {
    animateLogo() {
      return this.sidebarShow;
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebarShow = !this.sidebarShow;
    },
  },
};
</script>

<style lang="scss" scoped>
/**
 * Vars
 */
$header-height: triple($space);
$header-height-media: double($space);
$sidebar-width: 240px;
$sidebar-width-large: 300px;
$wrapper-width: 670px;

.docs {
  &::after {
    position: fixed;
    top: 0;
    left: -100%;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: var(--color-gray8);
    opacity: 0.9;
    transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) all;
  }
}

.docs.docs--toggle-sidebar {
  .sidebar {
    left: -$sidebar-width-large;
  }
  .content {
    padding-left: 0;
  }
  .sidebar-toggle {
    left: 0;
  }
}

.docs.docs--show-device {
  .device {
    position: fixed;
    top: $header-height;
    right: $space;
  }

  .docs__section {
    padding-right: calc(320px + #{double($space)});
  }
}

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $layer-aside-z-index;
  width: $sidebar-width;
  height: 100vh;
  padding: $space;
  overflow-y: auto;
  background: var(--color-gray7);
  border-right: 1px solid var(--color-border);
  transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) all;
}

.content {
  // flex: 1;
  width: 100%;
  height: 100vh;
  padding-left: $sidebar-width;
  overflow-y: scroll;
  transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) all;
}
.docs__header {
  height: $header-height;
}

.docs__section {
  padding: double($space) $space;
}

.wrapper {
  width: 100%;
  max-width: $wrapper-width;
  margin: 0 auto;
}

.header-padding-right {
  padding-right: $header-height;
}

.sidebar-toggle {
  position: fixed;
  top: 0;
  left: $sidebar-width;
  z-index: 10;
  width: double($space);
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0;
  outline: none;
  transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) left;

  &:hover {
    color: var(--color-brand);
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
  background-color: var(--color-brand);
}

@include media(large) {
  .content {
    padding-left: $sidebar-width-large;
  }
  .sidebar {
    width: $sidebar-width-large;
    padding: $space (1.5 * $space);
  }
  .sidebar-toggle {
    left: $sidebar-width-large;
  }

  .docs.docs--show-device {
    .docs__section {
      padding-right: calc(360px + #{double($space)});
    }

    .device {
      right: double($space);
    }
  }
}

@include media(portrait) {
  .content {
    padding-left: 0;
  }
  .sidebar {
    left: -$sidebar-width-large;
    width: $sidebar-width-large;
  }
  .docs__header {
    height: $header-height-media;
  }
  .header-padding-right {
    padding-right: $header-height-media;
  }
  .sidebar-toggle {
    left: 0;
    height: $header-height-media;
    line-height: $header-height-media;
  }

  .docs.docs--toggle-sidebar {
    &::after {
      left: 0;
    }

    .sidebar {
      left: 0;
    }
    .content {
      // padding-left: $sidebar-width-large;
    }
    .sidebar-toggle {
      left: $sidebar-width-large;
    }
  }
}

@include media(palm) {
  .github-octo {
    display: none;
  }
}
</style>
