import {createContext, useState, useContext} from 'react';

// Creamos el contexto.
const UserContext = createContext(null);

// 
export const UserProvider = ({children})=>{

    const [user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

    // Creo una función que guarda el token en el localstorage
    const setUserInLocalSorage = (userValue)=>{
    if(userValue) localStorage.setItem('user', JSON.stringify(userValue));
    setUser(userValue)
}

    return (
        <UserContext.Provider value={[user,setUserInLocalSorage]}>
            {children}
        </UserContext.Provider>)
}

// Hook para poder utilizar el contexto.
export const useUser = ()=>{
    return useContext(UserContext)
}
