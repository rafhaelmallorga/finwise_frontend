const db: DataBase = {
    users: [
        {
            id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            first_name: "Rafhael",
            last_name: "Mallorga",
            email: "rafhaelmallorga@gmail.com",
            password: "Rafha@1234",
        }
    ],
    bank_accounts: [
        {
            id: "acd2scab-f1924566837a-ef5173000abc",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "Itau",
            amount: 1000,
        },
        {
            id: "acd27cab-f1924566837a-ef5173000abc",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "NuBank",
            amount: 1500,
        },
        {
            id: "acd2rcab-f1924566837a-ef5173000abc",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "BB",
            amount: 2200,
        }
    ],
    savings: [
        {
            id: "8696f5ee-5a3a-4ef5-b9dc-89375b92b31d",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "Travel",
            amount: 100,
        },
        {
            id: "8696f5ae-5a3a-4ef5-b9dc-89375b92b31d",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "New Car",
            amount: 230,
        },
        {
            id: "86s6f5ae-5a3a-4ef5-b9dc-89375b92b31d",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            name: "New House",
            amount: 2300,
        }
    ],
    transactions: [
        {
            id: "9d0088ab-fba3-4b8b-92d0-71a57b9fc87f",
            title: "Gas",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            type: "outcome",
            date: "",
            value: 200
        },
        {
            id: "9d0088ab-fb33-4b8b-92d0-71a57b9fc87f",
            title: "Card",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            type: "outcome",
            date: "",
            value: 2300
        },
        {
            id: "9d0088ab-fb32-4b8b-92d0-71a57b9fc87f",
            title: "Salary",
            user_id: "5af2c19b-0a8b-47a5-9e7a-4ccb6e89b029",
            type: "income",
            date: "",
            value: 2300
        },
    ]
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