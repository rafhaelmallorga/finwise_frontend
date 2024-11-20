import { createContext, useState } from "react";

export const TemporaryContext = createContext([])

export const TemporaryProvider = ({children}) => {
    const [temporary, setTemporary] = useState()

    return (
        <TemporaryContext.Provider value={{temporary, setTemporary}}>
            {children}
        </TemporaryContext.Provider>
    )
}