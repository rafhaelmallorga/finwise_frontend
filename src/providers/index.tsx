import { AccountsDBProvider } from "./Accounts";
import { SavingsDBProvider } from "./Savings";
import { TransactionsDBProvider } from "./Transactions";


const Providers = ({ children }) => {
    return (
        <AccountsDBProvider>
            <SavingsDBProvider>
                <TransactionsDBProvider>
                    {children}
                </TransactionsDBProvider>
            </SavingsDBProvider>
        </AccountsDBProvider>
    )
}
export default Providers;