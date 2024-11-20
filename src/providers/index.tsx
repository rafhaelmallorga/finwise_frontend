import { AccountsDBProvider } from "./Accounts";
import { SavingsDBProvider } from "./Savings";
import { TransactionsDBProvider } from "./Transactions";
import { TemporaryProvider } from "./Temporary";


const Providers = ({ children }) => {
    return (
        <AccountsDBProvider>
            <SavingsDBProvider>
                <TransactionsDBProvider>
                    <TemporaryProvider>
                        {children}
                    </TemporaryProvider>
                </TransactionsDBProvider>
            </SavingsDBProvider>
        </AccountsDBProvider>
    )
}
export default Providers;