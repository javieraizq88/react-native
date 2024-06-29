import { useState } from "react";

interface Options {
    initialValue?: number;
}

//si el initialValue es opcional en la interface, se le debe dar un valor inicial 
export const useCounter = ( {initialValue = 0}: Options ) => {

    const [ count, setCount ] = useState<number>(initialValue);

    const aumentar = (value: number) => {
        setCount(count + value);
    }

    const disminuir = (value: number) => {
        setCount(count - value);
    }

    const restart = (value: number) => {
        setCount(value = 10)
    }

    return {
        // properties
        count,

        // methods
        aumentar,
        disminuir,
        restart


    }
}