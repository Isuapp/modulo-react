import {createContext, useState, useContext} from 'react';

// Creamos el contexto.
const ModalContext = createContext(null);

// Hook para poder utilizar el contexto.
export const useModal = ()=>{
    return useContext(ModalContext);
}

// 
export const ModalProvider = ({children})=>{

    const [modal, setModal ] = useState(null);

    return (
        <ModalContext.Provider value={[modal,setModal]}>
            {children}
        </ModalContext.Provider>)
}

