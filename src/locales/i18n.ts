import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import resources from './translations';


export const langs = [
    {
        value: "en",
        label: "English",
        icon: "https://flagcdn.com/60x45/us.png",
    },
    {
        value: "es",
        label: "Español",
        icon: "https://flagcdn.com/60x45/es.png",
    },
    {
        value: "it",
        label: "Italiano",
        icon: "https://flagcdn.com/60x45/it.png",
    }
];


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;