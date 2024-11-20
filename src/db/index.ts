const db: DataBase = {
    users: [],
    bank_accounts: [],
    savings: [],
    transactions: []
}

type DataBase = {
    users: Users[],
    bank_accounts: Bank_Accounts[],
    savings: Savings[],
    transactions: Transactions[],
}

type Users = {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}

export type Bank_Accounts = {
    id: string,
    user_id: string,
    name: string,
    amount: number,
}

export type Savings = {
    id: string,
    user_id: string,
    name: string,
    amount: number,
}

export type Transactions = {
    id: string,
    title: string,
    user_id: string,
    type: "income" | "outcome",
    date: string,
    value: number
}

export default db;