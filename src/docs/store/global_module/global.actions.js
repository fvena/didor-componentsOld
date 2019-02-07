import i18n from '@/locales/i18n';
import Utils from '@/utils/checks.utils';
import AppError from '@/services/error.service';
import { LanguageService } from '@/services/storage.service';

/**
 * Cambia el idioma de la aplicación
 *
 * Si el idioma es distinto del definido actualmente,
 * y si se encuentra entre los idiomas disponibles:
 *
 * @param Vuex
 * @param {String} lang - Código del idioma seleccionado
 * @throws {AppError} - Language not found in to languages loader
 */
const setLanguage = ({ commit, state }, lang) => {
  if (state.language !== lang) {
    if (state.languages.some(language => language === lang)) {
      i18n.locale = lang;
      LanguageService.saveLanguage(lang);
      commit('SET_LANGUAGE', lang);
      document.querySelector('html').setAttribute('lang', lang);
    } else {
      throw new AppError('languageNotFound', 'Language not found in to languages loader');
    }
  }
};

/**
 * Initialization the apps
 */
const init = ({ commit }) => {
  console.log('Init app...');
  commit('SET_ONLINE', Utils.checkIsConnected());
  commit('SET_PAUSE', false);
};

/**
 * Check if is a cordova app
 */
const checkCordovaApp = ({ commit }) => {
  const isCordovaApp = !!window.cordova;
  console.log('Is it a Cordova app? ', isCordovaApp);
  commit('SET_CORDOVA_APP', isCordovaApp);
};

/**
 * Action when the app recover connection
 *
 * !IMPORTANT!
 * The online event only launch if the previous state of the app is offline
 * if the app start online, the event isn't launched
 * The event is launched when the app is in pause
 */
const onOnline = ({ commit, dispatch, state }) => {
  if (state.isOnline) return;
  if (state.isPause) return;

  console.log('The app has recovered the internet connection.');
  commit('SET_ONLINE', true);
  dispatch('init');
};

/**
 * Action when the app recover connection
 *
 * !IMPORTANT!
 * The online event only launch if the previous state of the app is online
 * if the app start offline, the event isn't launched
 * The event is launched when the app is in pause
 */
const onOffline = ({ commit, state }) => {
  if (!state.isOnline) return;
  if (state.isPause) return;

  console.log('The app has losed the internet connection.');
  commit('SET_ONLINE', false);
};

/**
 * Action when the app is paused (background)
 */
const onPause = ({ commit }) => {
  console.log('The app is paused.');
  commit('SET_PAUSE', true);
};

/**
 * Action when the app comeback from background
 *
 * !IMPORTANT
 * The resume event only launch if the previous state of the app is pause
 * If the app start, the event isn't launched
 */
const onResume = ({ dispatch }) => {
  console.log('The app is resume.');
  dispatch('init');
};

/**
 * Action when we launch a global error
 */
const setError = ({ commit }, error) => {
  console.error(`${error.errorId} - ${error.message}`);
  commit('SET_ERROR', error.errorId);
};

/**
 *
 */
const toggleSidebar = ({ commit }) => {
  commit('SET_SIDEBAR_STATUS');
};

export default {
  setLanguage,
  init,
  checkCordovaApp,
  onOnline,
  onOffline,
  onPause,
  onResume,
  setError,
  toggleSidebar,
};
