import i18n from '@/locales/i18n';

const state = {
  language: i18n.locale,
  languages: Object.keys(i18n.messages),
  isCordovaApp: false,
  isOnline: true,
  isPause: false,
  errorCode: '',
  sidebarState: false,
};

export default state;
