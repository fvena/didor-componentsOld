<template lang="pug">
  div
    v-runtime-template(:template="article")
</template>

<script>
import MarkdownService from '@/services/markdown.service';
import VRuntimeTemplate from 'v-runtime-template';

export default {
  components: {
    VRuntimeTemplate,
  },
  data() {
    return {
      article: '',
    };
  },
  methods: {
    async getArticle(article) {
      const articlePath = `${article}.md`;
      this.article = await MarkdownService.getMarkdown(articlePath);
    },
  },
  created() {
    this.getArticle(this.$route.params.article);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    this.getArticle(routeTo.params.article);
    next();
  },
};
</script>

<style lang="scss" scoped></style>
