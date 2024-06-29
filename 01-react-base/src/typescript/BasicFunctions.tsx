export const BasicFunctions = () => {

const sumar = ( a: number, b: number): string => {
    return (a + b).toString();
}    


        return(
            <>
             <h2>funciones</h2>
             <span>El resultado de sumar: { sumar(2, 3) } </span>
        
            </>
        )
    }