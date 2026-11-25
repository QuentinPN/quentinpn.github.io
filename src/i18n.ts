import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

export const LANGUAGES = ['fr', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

function syncDocument(lng: string) {
  const root = document.documentElement;
  root.lang = lng;
  document.title = i18n.t('meta.title');
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', i18n.t('meta.description'));
}

i18n.on('languageChanged', syncDocument);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { fr: { translation: fr }, en: { translation: en } },
    supportedLngs: LANGUAGES,
    fallbackLng: 'fr',
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      // ?lang=en wins, then the remembered choice, then the browser.
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
      convertDetectedLanguage: (lng) => lng.split('-')[0] ?? lng,
    },
  });

export default i18n;
