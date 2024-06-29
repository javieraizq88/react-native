import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import type { ReqResUserListResponse, User } from "../interfaces";


const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        // TODO: el get espera el formato de ReqResUserListResponse y resp los usuarios
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        })
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
};


export const useUsers = () => {


    const [users, setUsers] = useState<User[]>([]);

    const currentPageRef = useRef(1);



    useEffect(() => {
        // TODO muestra en q pagina estas
        loadUsers(currentPageRef.current)
            .then(users => setUsers(users))
        // TODO es lo mismo que lo de arriba
        // loadUsers().then ( setUsers )

    }, [])

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);

        // TODO si la pagina es mayor a 0, muestra los usuarios,  ELSE devuelve el contenido de la pagina anterior 
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const previousPage = async () => {
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    return {
        // properties
        users,

        // method
        nextPage,
        previousPage,
    }


}