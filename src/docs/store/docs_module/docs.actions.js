import MarkdownService from '@/services/markdown.service';
import DocsUtil from '@/utils/docs.utils';
import router from '@/router/router';
import docsConfig from '../../../../docs/docs.config';

/**
 *
 * @param {*} param0
 */
const getHeaderNav = async ({ commit }) => {
  const headerNavPath = docsConfig.loadNavbar;
  const headerNavLinks = await MarkdownService.getMarkdown(headerNavPath);
  const headerNavParse = DocsUtil.parseLinks(headerNavLinks);

  commit('SET_HEADER_LINKS', headerNavParse);
};

/**
 *
 * @param {*} param0
 */
const getSidebarNav = async ({ commit }, section) => {
  const sidebarPath = `${section}/_sidebar.md`;
  const sidebarLinks = await MarkdownService.getMarkdown(sidebarPath);
  const sidebarParse = DocsUtil.parseLinks(sidebarLinks);
  const articleList = DocsUtil.getListLinks(sidebarLinks);

  commit('SET_SIDEBAR_LINKS', sidebarParse);
  commit('SET_ARTICLES_LIST', articleList);
};

/**
 *
 * @param {*} param0
 */
const getArticle = async ({ commit, state }, params) => {
  const { section, article } = params;
  let index = 0;

  // Check if there is articles in this section
  if (state.articleList.length) {
    // Check if article exist
    if (article) {
      const articleIndex = state.articleList.findIndex(
        item => item.path === `${section}/${article}`
      );
      index = articleIndex >= 0 ? articleIndex : 0;
    } else {
      router.push(`${state.articleList[index].path}`);
      return;
    }

    const articlePath = `${state.articleList[index].path}.md`;
    const articleContent = await MarkdownService.getMarkdown(articlePath);
    const articleParse = articleContent ? `<div>${articleContent}</div>` : '';

    commit('SET_ARTICLE', articleParse);
    commit('SET_ARTICLE_INDEX', index);
  }
};

export default {
  getHeaderNav,
  getSidebarNav,
  getArticle,
};
