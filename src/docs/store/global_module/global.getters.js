const getLanguage = state => state.language;
const getLanguages = state => state.languages;
const getError = state => state.errorCode;
const isCordovaApp = state => state.isCordovaApp;
const isOnline = state => state.isOnline;
const isPause = state => state.isPause;
const getSidebarState = state => state.sidebarState;

export default {
  getLanguage,
  getLanguages,
  getError,
  isCordovaApp,
  isOnline,
  isPause,
  getSidebarState,
};
