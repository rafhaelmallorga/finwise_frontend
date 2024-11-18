import { createContext, useContext, useState } from "react";
import db from "../../db";

export const SavingsDBContext = createContext([])

export const SavingsDBProvider = ({children}) => {
    const [savingsDB, setSavingsDB] = useState(db.savings)

    return (
        <SavingsDBContext.Provider value={{savingsDB, setSavingsDB}}>
            {children}
        </SavingsDBContext.Provider>
    )
}