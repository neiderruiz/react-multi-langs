import { useState } from "react";
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
            </div>
        </div>
    );
};

export default CounterPage;