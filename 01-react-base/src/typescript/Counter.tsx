import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(10);

const aumentar = ( value: number) => {
    setCount ( count + value );
}

const disminuir = ( value: number) => {
    setCount ( count - value );
}

const restart = (value: number) => {
    setCount (value = 10 )
}

    return (
        <>
            <h3>Counter
                <small> {count} </small>
            </h3>

            <button className="mx-2" onClick={ (e) => aumentar(1)}>+1</button>
            <button onClick={ (e) => restart(10)} >restart</button>
            <button onClick={(e) => disminuir(1)} >-1</button>
        </>
    )
}