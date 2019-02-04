<template lang="pug">
  nav.sidebar-nav
    ul
      li(v-for="article in articles")
        p(v-if="article.articles")
          | {{ article.title }}
        p(v-else)
          a(@click="$emit('setArticle', article.path)") {{ article.title }}

        ul(v-if="article.articles")
          li(v-for="link in article.articles")
            a(@click="$emit('setArticle', link.path)") {{ link.title }}
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
