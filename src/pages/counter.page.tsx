import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/button";
import useTranslation from "../hooks/use-tranlation";

const MAX_COUNT = 10;
const MIN_COUNT = 0;

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    const { t } = useTranslation();

    const addCount = () => {
        if (counter < MAX_COUNT) {
            setCounter(counter + 1);
        }

    }

    const substractCount = () => {
        if (counter > MIN_COUNT) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-1/5 space-y-6">
                <h2 className="text-center text-2xl uppercase font-bold">
                    {t('general.counter')}
                </h2>

                <div className="flex space-x-2">
                    <Button
                        onClick={addCount}
                        label="general.add"
                    />

                    <Button
                        onClick={substractCount}
                        label="general.decrease"
                        color="red"
                    />

                </div>
                <div className="flex justify-center">
                    <span className="font-bold text-2xl">
                        {/* Contando {counter} de {MAX_COUNT} */}
                        {t('test.counting', [counter.toString(), MAX_COUNT.toString()])}
                    </span>
                </div>
                <div>
                    <Link to="#" className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('card.title', ['@neiderruiz'])}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{t('card.message')}</p>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CounterPage;