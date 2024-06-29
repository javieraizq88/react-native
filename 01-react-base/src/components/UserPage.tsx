import { useEffect, useState } from "react";
import axios from 'axios';
import { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (): Promise<User[]> => {
    try {
        // TODO: el get espera el formato de ReqResUserListResponse y resp los usuarios
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users')
        // fetch('https://reqres.in/api/users?page=2')
        //     .then(resp => resp.json())
        //     .then(data => console.log(data));
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}


export const UserPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        loadUsers()
            .then(users => setUsers(users))
        // TODO es lo mismo que lo de arriba
        // loadUsers().then ( setUsers )

    }, [])

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

        </>
    )
}



interface Props {
    user: User;
}



export const UserRow = ({ user }: Props) => {

    const { avatar, first_name, last_name, email } = user;

    return (
        <tr>
            <td> <img src={avatar} alt="" /> </td>
            <td> {first_name} {last_name} </td>
            <td> {email} </td>
        </tr>
    )
}
