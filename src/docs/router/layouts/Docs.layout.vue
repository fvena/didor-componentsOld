<template lang="pug">
.docs(:class="{'docs--toggle-sidebar': sidebarShow, 'docs--show-device': deviceShow}")
  .sidebar(ref="sidebarRef")
    router-link(:to="{name: 'home'}")
      Logo(:animate="animateLogo")
    Sidebar
      v-runtime-template(:template="listArticlesLinks")
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
        router-view
        Footer(:next="nextArticle" :prev="prevArticle")
        Device
</template>

<script>
import Logo from '@/components/Logo.component.vue';
import Sidebar from '@/components/Sidebar.component.vue';
import Header from '@/components/Header.component.vue';
import GithubOcto from '@/components/GithubOcto.component.vue';
import Footer from '@/components/Footer.component.vue';
import Device from '@/components/Device.component.vue';
import MarkdownService from '@/services/markdown.service';
import VRuntimeTemplate from 'v-runtime-template';

const gitRepoLink = process.env.VUE_APP_GIT_REPO;

export default {
  components: {
    Logo,
    Sidebar,
    Header,
    GithubOcto,
    Footer,
    Device,
    VRuntimeTemplate,
  },

  data() {
    return {
      github: gitRepoLink,
      sidebarShow: false,
      deviceShow: true,
      sectionSelected: '',
      articleSelected: '',
      listArticlesLinks: '',
      listArticles: '',
      nextArticle: null,
      prevArticle: null,
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

    async getSectionNav(section) {
      const sectionPath = `docs/_${section}.md`;
      const regex = /<\s*a href="(.*?)\.md">(.*?)<\s*\/\s*a>/gi;
      const listArticlesLinks = await MarkdownService.getMarkdown(sectionPath);

      return listArticlesLinks.replace(regex, '<router-link to="$1">$2</router-link>');
    },

    getListArticles(section) {
      const links = [];
      const regex = /<\s*router-link to="(.*?)">(.*?)<\s*\/\s*router-link>/gi;

      let matches = regex.exec(section);

      while (matches) {
        links.push({ name: matches[2], link: matches[1] });
        matches = regex.exec(section);
      }

      return links;
    },

    getArticleSelected(articles, section, article) {
      if (article) {
        const index = articles.findIndex(item => item.link === article);
        console.log(articles.length);
        console.log(index);

        if (index >= 0) {
          this.nextArticle = index < articles.length ? articles[index + 1] : null;
          this.prevArticle = index > 0 ? articles[index - 1] : null;
          return index;
        }
      }

      this.$router.push(`/docs/${section}/${this.listArticles[0].link}`);
      return 0;
    },
  },
  /**
   * Get links the first time that component is loaded
   */
  async created() {
    this.sectionSelected = this.$route.params.section;
    this.listArticlesLinks = await this.getSectionNav(this.sectionSelected);
    this.listArticles = await this.getListArticles(this.listArticlesLinks);
    this.articleSelected = this.getArticleSelected(
      this.listArticles,
      this.sectionSelected,
      this.$route.params.article
    );
  },

  /**
   * Get links only when route update and the section is different
   */
  async beforeRouteUpdate(routeTo, routeFrom, next) {
    if (this.sectionSelected !== routeTo.params.section) {
      this.sectionSelected = routeTo.params.section;
      this.listArticlesLinks = await this.getSectionNav(this.sectionSelected);
      this.listArticles = await this.getListArticles(this.listArticlesLinks);
    }
    this.articleSelected = this.getArticleSelected(
      this.listArticles,
      this.sectionSelected,
      routeTo.params.article
    );
    next();
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
