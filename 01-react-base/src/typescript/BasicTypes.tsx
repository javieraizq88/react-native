export const BasicTypes = () => {

    const name: string = 'Javiera';
    const age: number = 35;
    const isActive: boolean = true;

    return (
        <>
            <h3>Tipos basicos</h3>

            <p> {name} </p>
            <p> {age} </p>
            <p> {isActive ? 'true' : 'false'} </p>
        </>
    )
}