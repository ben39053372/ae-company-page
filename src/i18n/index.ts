import { createI18n } from 'vue-i18n';
import en from './en.json';
import zh_HK from './zh-HK.json';
import zh_CN from './zh-CN.json';

const messages = {
  en,
  'en-US': en,
  zh: zh_HK,
  'zh-HK': zh_HK,
  'zh-CN': zh_CN,
};

export const i18n = createI18n({
  // legacy: false,
  locale: 'zh-HK',
  messages: messages,
  fallbackLocale: 'zh-HK',
  // silentFallbackWarn: true,
  // silentTranslationWarn: true,
});
