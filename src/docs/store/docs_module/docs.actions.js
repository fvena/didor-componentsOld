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
const getSidebarNav = async ({ commit }, params) => {
  const basePath = params.section ? `./${params.type}/${params.section}` : `./${params.type}`;
  const baseLinkPath = params.section ? `/${params.type}/${params.section}` : `/${params.type}`;

  const sidebarPath = `${basePath}/_sidebar.md`;
  const sidebarLinks = await MarkdownService.getMarkdown(sidebarPath);
  const sidebarParse = DocsUtil.parseLinks(sidebarLinks, baseLinkPath);
  const articleList = await DocsUtil.getListLinks(sidebarLinks);

  commit('SET_SIDEBAR_LINKS', sidebarParse);
  commit('SET_ARTICLES_LIST', articleList);
};

/**
 *
 * @param {*} param0
 */
const getArticle = async ({ commit, state }, params) => {
  const { type, section, article } = params;
  const basePath = section ? `${type}/${section}` : `${type}`;
  let articleIndex = -1;

  // Check if there is articles in this section
  if (state.articleList.length) {
    // Check if article exist
    if (article) {
      articleIndex = state.articleList.findIndex(item => item.path === `/${article}`);
    }

    if (articleIndex < 0) {
      articleIndex = 0;
      router.push(`/${basePath}${state.articleList[articleIndex].path}`);
      return;
    }

    const articlePath = `${basePath}${state.articleList[articleIndex].path}.md`;
    const articleContent = await MarkdownService.getMarkdownArticle(articlePath);
    const component = articleContent.markdown ? `Demo${params.component}` : '';

    commit('SET_ARTICLE', articleContent);
    commit('SET_ARTICLE_INDEX', articleIndex);
    commit('SET_COMPONENT', component);
    commit('SET_PARAMS', params);
  }
};

export default {
  getHeaderNav,
  getSidebarNav,
  getArticle,
};
