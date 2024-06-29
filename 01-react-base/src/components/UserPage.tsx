import { useEffect } from "react";
import axios from 'axios';
import { ReqResUserListResponse } from "../interfaces";

const loadUsers = async () => {
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

    useEffect(() => {
        loadUsers().then(users => console.log(users))
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
                    <tr>
                        <td>avatar</td>
                        <td>nombre</td>
                        <td>email</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}