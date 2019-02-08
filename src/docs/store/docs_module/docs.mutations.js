const SET_HEADER_LINKS = (state, links) => {
  state.headerLinks = links;
};

const SET_SIDEBAR_LINKS = (state, links) => {
  state.sidebarLinks = links;
};

const SET_ARTICLES_LIST = (state, list) => {
  state.articleList = list;
};

const SET_ARTICLE_INDEX = (state, index) => {
  state.articleIndex = index;
};

const SET_ARTICLE = (state, article) => {
  state.article = article;
};

const SET_COMPONENT = (state, component) => {
  state.component = component;
};

export default {
  SET_HEADER_LINKS,
  SET_SIDEBAR_LINKS,
  SET_ARTICLES_LIST,
  SET_ARTICLE_INDEX,
  SET_ARTICLE,
  SET_COMPONENT,
};
