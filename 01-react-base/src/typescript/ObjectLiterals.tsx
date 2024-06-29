
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNumb: number;

}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: "Javiera",
        lastName: "Izquierdo",
        age: 35,
        address: {
            country: "Chile",
            houseNumb: 123
        }
    }


    return (
        <>
            <h2>Objetos literales</h2>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>

        </>
    )
}