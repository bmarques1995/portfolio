import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_US from '@/locales/en_us.json';
import pt_BR from '@/locales/pt_br.json';

const resources = {
    en: {
        translation: en_US
    },
    pt: {
        translation: pt_BR
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        debug: true,
        lng: 'en_US', // default language
        fallbackLng: 'en_US', // use en if detected lng is not available
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;