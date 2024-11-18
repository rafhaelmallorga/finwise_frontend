import { createContext, useContext, useState } from "react";
import db from "../../db";

export const TransactionsDBContext = createContext([])

export const TransactionsDBProvider = ({children}) => {
    const [transactionsDB, setTransactionsDB] = useState(db.transactions)

    return (
        <TransactionsDBContext.Provider value={{transactionsDB, setTransactionsDB}}>
            {children}
        </TransactionsDBContext.Provider>
    )
}