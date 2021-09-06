import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import pt_br from './languages/pt_br.json';

export const changeLanguage = lng => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
};

const getText = key => {
  return i18n.t(key);
};

export const translateWithParams = (obj, optionalKey = undefined) => {
  if (!!optionalKey && (!obj.message || !obj.message.key)) {
    return getText(optionalKey);
  }

  const text = getText(obj.message.key);
  const len =
    !!obj.message && !!obj.message.params ? obj.message.params.length : 0;
  let translatedText = text;

  if (len === 0) {
    return text;
  }
  for (let i = 0; i < len; i++) {
    translatedText = translatedText.replace('%s', obj.message.params[i]);
  }
  return translatedText;
};
window.translateWithParams = translateWithParams;

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  pt_br: {
    translation: pt_br
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') ?? 'pt_br',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
