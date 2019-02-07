const SET_LANGUAGE = (state, lang) => {
  state.language = lang;
};

const SET_CORDOVA_APP = (state, cordovaApp) => {
  state.isCordovaApp = cordovaApp;
};

const SET_ONLINE = (state, online) => {
  state.isOnline = online;
};

const SET_PAUSE = (state, pause) => {
  state.isPause = pause;
};

const SET_ERROR = (state, errorCode) => {
  state.errorCode = errorCode;
};

const SET_SIDEBAR_STATUS = state => {
  state.sidebarState = !state.sidebarState;
};

export default {
  SET_LANGUAGE,
  SET_CORDOVA_APP,
  SET_ONLINE,
  SET_PAUSE,
  SET_ERROR,
  SET_SIDEBAR_STATUS,
};
