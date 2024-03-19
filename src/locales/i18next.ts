import 'dayjs/locale/ja';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import i18next from 'i18next';
import ja from '@/assets/langs/ja';
import en from '@/assets/langs/en';
import { dispatch, store } from '@/redux/store';
import { getLocales } from 'react-native-localize';
import { initReactI18next } from 'react-i18next';
import { setLanguage } from '@/redux/slices/appSlice';
import type { Language } from './react-i18next';

export type Resouce = typeof en & typeof ja;

const defaultLang = 'en';
const langList = ['en', 'ja'];

export function getLanguage() {
  const lang = getLocales();
  try {
    const mainLocale = lang[0];
    let tempLng = mainLocale?.languageCode?.toLowerCase();
    const lng = langList.includes(tempLng) ? tempLng : defaultLang;
    // If you wanna use defaultLang only, comment above line + uncomment below line
    // const lng = defaultLang;

    dispatch(setLanguage(lng));
    return lng;
  } catch {
    return defaultLang;
  }
}

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
  lng: store?.getState()?.app?.lang || getLanguage(),
  fallbackLng: defaultLang,
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
});

export const loadLocale = () => {
  const lng = store?.getState()?.app?.lang || defaultLang;
  dayjs.locale(lng);
  i18next.addResourceBundle(lng, 'translation', lng === 'en' ? en : ja);
  i18next.changeLanguage(lng);
};

export const changeCurrentLocale = (lang: Language) => {
  i18next.changeLanguage(lang, () => {
    dispatch(setLanguage(lang));
  });
};

export default i18next;
