import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    common: require('../public/locales/en/common.json'),
  },
  zh: {
    common: require('../public/locales/zh/common.json'),
  },
  ja: {
    common: require('../public/locales/ja/common.json'),
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
