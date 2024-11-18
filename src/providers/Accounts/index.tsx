import { createContext, useContext, useState } from "react";
import db from "../../db";

export const AccountsDBContext = createContext([])

export const AccountsDBProvider = ({children}) => {
    const [accountDB, setAccountDB] = useState(db.bank_accounts)

    return (
        <AccountsDBContext.Provider value={{accountDB, setAccountDB}}>
            {children}
        </AccountsDBContext.Provider>
    )
}