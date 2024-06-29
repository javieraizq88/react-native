import { useUsers } from "../hooks/useUser";
import { UserRow } from "./UserRow";


export const UserPage = () => {

    const { users, nextPage, previousPage } = useUsers();

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>

            <button onClick={previousPage} className="btn btn-danger">Prev</button>
            <button onClick={nextPage} className="btn btn-primary">Next</button>

        </>
    )
}
