import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/button";
const MAX_COUNT = 10;
const MIN_COUNT = 0;

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

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
                    contador
                </h2>
                <div className="flex space-x-2">
                    <Button
                        onClick={addCount}
                        label="Añadir"
                    />

                    <Button
                        onClick={substractCount}
                        label="disminuir"
                        color="red"
                    />

                </div>
                <div className="flex justify-center">
                    <span className="font-bold text-2xl">
                        Contando {counter} de {MAX_COUNT}
                    </span>
                </div>
                <div>
                    <Link to="#" className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bienvenidos a mi canal de youtube soy @neiderruiz</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Desarrollador de software apasionado por la tecnología y el aprendizaje constante. Comparto información y consejos útiles sobre desarrollo.</p>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CounterPage;