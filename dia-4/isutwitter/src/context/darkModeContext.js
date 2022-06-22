import { createContext, useContext, useState } from "react";

// Creamos el contexto
const DarkModeContext = createContext(false);

// Hook para utilizar el contexto.
export const useDarkModeContext = ()=>{
    return useContext(DarkModeContext);
};

export const DarkModeProvider = ({children})=>{

    const [darkMode, setDarkMode] = useState(false);

    return(
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </DarkModeContext.Provider>
    )
}