import {createContext, useState, useContext} from 'react';

// Creamos el contexto.
const TokenContext = createContext(null);

// Hook para poder utilizar el contexto.
export const useToken = ()=>{
    return useContext(TokenContext)
}

// 
export const TokenProvider = ({children})=>{

    const [token, setToken ] = useState(localStorage.getItem('token'));

    // Creo una función que guarda el token en el localstorage
    const setTokenInLocalSorage = (tokenValue)=>{
    localStorage.setItem('token', tokenValue);
    setToken(tokenValue)
}

    return (
        <TokenContext.Provider value={[token,setTokenInLocalSorage]}>
            {children}
        </TokenContext.Provider>)
}

