import { FlattenKeys, useTypedTranslation } from '@neiderruiz/translate-files/react';

import i18n from '../locales/i18n';
import es from '../locales/translations/es.json';

type TypeLang = typeof es

export type KeyTranlation = FlattenKeys<TypeLang>

const useTranslation = () => {
    const { t } = useTypedTranslation<TypeLang>();

    return {
        t,
        i18n
    }
}

export default useTranslation