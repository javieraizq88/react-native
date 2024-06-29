import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status);
    const user = useAuthStore(state => state.user);

    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, [])

    if (authStatus === 'cheking') {
        return <h3>loading...</h3>
    }


    return (
        <>
            <h2>LoginPage</h2>

            {/* TODO para LogIn
            Muestra loaeding por 1.5 seg y luego muestra si esta o no autenticado */}
            {
                (authStatus === 'authenticated')
                    ? <p> {JSON.stringify(user, null, 2)}  Authenticated </p>
                    : <p> No authenticated </p>
            }

            {/* TODO Para hacer LogOut
            Muestra el boton para hacer logOut si ya ha iniciado sesion o logIn si no  */}
            {
                (authStatus === 'authenticated')
                    ? <button onClick={logout}>LogOut</button>
                    : <button onClick={() => login('javiera@gmail.com', '123')} >LogIn</button>
            }
        </>
    )
}