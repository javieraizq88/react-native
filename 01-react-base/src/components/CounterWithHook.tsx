import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {

    const { count, aumentar, disminuir, restart } = useCounter({

        // si el initialValue en la interface es opcional y yo le doy un valor en useCounter, el numero agregado aqui es el que manda 
        initialValue: 5
    })


    return (
        <>
            <h3>Counter
                <small> {count} </small>
            </h3>

            <button className="mx-2" onClick={(e) => aumentar(1)}>+1</button>
            {/* <button onClick={(e) => restart()} >restart</button> */}
            <button onClick={(e) => disminuir(1)} >-1</button>
        </>
    )
}