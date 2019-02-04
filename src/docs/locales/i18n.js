import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _ from 'lodash';
import AppError from '@/services/error.service';
import { LanguageService } from '@/services/storage.service';

Vue.use(VueI18n);

/**
 * Generate an object with all locales files from a folder.
 *
 * @return {Object} - Locales by language
 */
function loadLocaleMessages() {
  try {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};

    // prettier-ignore
    locales.keys().forEach((key) => {
      const matched = key.match(/([a-z0-9]+)\./i);

      if (matched && matched.length > 1) {
        const split = matched.input.split('/');
        const locale = split[1];
        const section = matched[1];

        if (!messages[locale]) {
          messages[locale] = {};
        }

        messages[locale][section] = locales(key);
      }
    });

    if (!_.isEmpty(messages)) return messages;

    throw new AppError('loadLocalesEmpty', 'No language has been loaded');
  } catch (error) {
    throw new AppError('loadLocalesError', 'Error loading language files');
  }
}
const localStorageLanguage = LanguageService.getLanguage();
const navigatorLanguage = navigator.language.split('-');
const defaultLanguage = process.env.VUE_APP_I18N_LOCALE;

const locale = localStorageLanguage || navigatorLanguage[0] || defaultLanguage || 'en';
const fallbackLocale = process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en';
const messages = loadLocaleMessages();

export default new VueI18n({
  locale,
  fallbackLocale,
  messages,
});
