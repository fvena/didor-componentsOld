/**
 * Gestiona como almacenamos y recuperamos el idioma seleccionado
 */
const LanguageService = {
  /**
   * Return the language code store in local storage
   *
   * @returns {String} Language code
   */
  getLanguage() {
    return localStorage.getItem('language');
  },

  /**
   * Save the language code store in local storage
   *
   * @param {String} lang - Language code
   */
  saveLanguage(lang) {
    localStorage.setItem('language', lang);
  },

  /**
   * Remove the language code store in local storage
   */
  removeLanguage() {
    localStorage.removeItem('language');
  },
};

export { LanguageService }; // eslint-disable-line
