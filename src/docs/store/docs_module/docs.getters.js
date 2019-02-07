const getHeaderLinks = state => state.headerLinks;
const getSidebarLinks = state => state.sidebarLinks;
const getArticle = state => state.article;
const getNextArticle = state => {
  const { articleIndex } = state;
  const articlesLength = state.articleList.length;

  return articleIndex < articlesLength ? state.articleList[articleIndex + 1] : null;
};
const getPrevArticle = state => {
  const { articleIndex } = state;

  return articleIndex > 0 ? state.articleList[articleIndex - 1] : null;
};

export default {
  getHeaderLinks,
  getSidebarLinks,
  getArticle,
  getNextArticle,
  getPrevArticle,
};
