<template lang="pug">
.docs(:class="{'docs--toggle-sidebar': sidebarShow}")
  //- Sidebar
  Sidebar.docs__sidebar
    v-runtime-template(:template="sidebarNav")

  .docs__content
    //- Header
    Header
      v-runtime-template(:template="headerNav")

    router-view

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VRuntimeTemplate from 'v-runtime-template';
import DocsUtil from '@/utils/docs.utils';
import Sidebar from '@/components/Sidebar.component.vue';
import Header from '@/components/Header.component.vue';

export default {
  components: {
    Sidebar,
    Header,
    VRuntimeTemplate,
  },

  computed: {
    ...mapGetters({
      headerNav: 'docsModule/getHeaderLinks',
      sidebarNav: 'docsModule/getSidebarLinks',
      sidebarShow: 'globalModule/getSidebarState',
    }),
  },

  methods: {
    ...mapActions({
      getHeaderNav: 'docsModule/getHeaderNav',
      getSidebarNav: 'docsModule/getSidebarNav',
      getArticle: 'docsModule/getArticle',
    }),
  },

  /**
   * Get links the first time that component is loaded
   */
  async created() {
    const params = DocsUtil.getParams(this.$route.path);

    this.getHeaderNav();
    await this.getSidebarNav(params);
    this.getArticle(params);
  },

  /**
   * Get links only when route update and the section is different
   */
  async beforeRouteUpdate(routeTo, routeFrom, next) {
    const fromParams = DocsUtil.getParams(routeFrom.path);
    const toParams = DocsUtil.getParams(routeTo.path);

    if (fromParams.section !== toParams.section) {
      await this.getSidebarNav(toParams);
    }
    await this.getArticle(toParams);
    next();
  },
};
</script>

<style lang="scss" scoped>
/**
 * Vars
 */
$sidebar-width: 240px;
$sidebar-width-large: 300px;

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
  .docs__sidebar {
    left: -$sidebar-width-large;
  }
  .docs__content {
    padding-left: 0;
  }
}

.docs__sidebar {
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

.docs__content {
  // flex: 1;
  width: 100%;
  height: 100vh;
  padding-left: $sidebar-width;
  overflow-y: scroll;
  transition: 0.5s cubic-bezier(0.91, 0.06, 0.47, 1.05) all;
}

@include media(large) {
  .docs__content {
    padding-left: $sidebar-width-large;
  }
  .docs__sidebar {
    width: $sidebar-width-large;
    padding: $space (1.5 * $space);
  }
}

@include media(portrait) {
  .docs__content {
    padding-left: 0;
  }
  .docs__sidebar {
    left: -$sidebar-width-large;
    width: $sidebar-width-large;
  }

  .docs.docs--toggle-sidebar {
    &::after {
      left: 0;
    }

    .docs__sidebar {
      left: 0;
    }
  }
}
</style>
