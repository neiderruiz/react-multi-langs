import { useState } from "react";
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
                    <button
                        onClick={addCount}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center "
                    >
                        Añadir
                    </button>

                    <button
                        onClick={substractCount}
                        className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
                    >
                        Disminuir
                    </button>
                </div>
                <div className="flex justify-center">
                    <span className="font-bold text-2xl">
                        Contando {counter} de {MAX_COUNT}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;