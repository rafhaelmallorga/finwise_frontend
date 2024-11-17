import { ReactNode } from 'react'
import './index.css'

interface ElementProps {
    placeholder?: string,
    type?: string,
    children?: ReactNode
}

const MainFrame = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='MainFrameDashboard'>
            {children}
        </div>
    )
}

interface OverlayTransactionsProps {
    children?: React.ReactNode;
    overlay: boolean;
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlayTransactions: React.FC<OverlayTransactionsProps>  = ({ overlay, setOverlay}): JSX.Element => {
    return (
        <div className="Overlay">
            <div className='OverlayAreaContent'>
                <div className='OverlayHeader'>
                    <h3>New Transaction</h3>
                    <button className='CloseButton' onClick={() => setOverlay(!overlay)}>X</button>
                </div>
               <form action="" className='OverlayForm'>
                    <input type="text" placeholder='Title' className='Input'/>
                    <select name="type" id="" className='Input'>
                        <option value="" disabled selected></option>
                        <option value="income">Income</option>
                        <option value="outcome">Outcome</option>
                    </select>
                    <input type="number" min={0} placeholder='Value' className='Input'/>
                    <button className='Button'>Create</button>
               </form>
            </div>
        </div>
    )
}



const Header = () => {
    return (
        <header className='Header'>
            <div className='HeaderContent'>
                <div className='LogoSection'>
                    <img src='./src/assets/logo.svg' alt="FinWise Logo" />
                    <span>FinWise</span>
                </div>
                <div className='UserSection'>
                    <a href='/login'>Log Out</a>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b47b6d-EwdrE7plm9telOYTSgUmSdO9BDQ&s' alt='User Profile Photo'/>
                </div>
            </div>
        </header>
    )
}

const ContentFrame = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='BodyContent'>
            {children}
        </div>
    )
}

interface MenuBarProps {
    children?: React.ReactNode;
    overlay: boolean;
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBar: React.FC<MenuBarProps> = ({overlay, setOverlay}) => {   
    return (
        <div className='MenuBar'>
            <div className='ButtonSection'>
                <button className='TransactionButton' onClick={() => setOverlay(!overlay)}>Transactions</button>
            </div>
            <span className='DateSection'>November/2024</span>
        </div>
    )
}

const MainSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='MainSection'>
            {children}
        </div>
    )
}

const LeftColum = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='LeftColum'>
            {children}
        </div>
    )
}

const RightColum = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='RightColum'>
            {children}
        </div>
    )
}

const HistorySection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='HistorySection'>
            <div className='ContentArea'>
                <h3>History</h3>
                <div className='CardArea'>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                </div>
            </div>
        </div>
    )
}

const HistoryCard = (): JSX.Element => {
    return (
        <div className='HistoryCard'>
            <div className='HistoryCardContent'>
                <span className='HistoryCardTittle'>Supermarket Buy</span>
                <span className='HistoryCardValue'>$ 114,90</span>
                <div className='HistoryCardSubSection'>
                    <span>Outcome</span>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

const BalanceSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='BalanceSection'>
            <div className='ContentArea'>
                <h3>Balance</h3>
                <h4>Totals</h4>
                <table>
                    <tr>
                        <td>Cash</td>
                        <td className='Values'>$ 450.00</td>
                    </tr>
                    <tr>
                        <td>Bank Account</td>
                        <td className='Values'>$ 5,020.00</td>
                    </tr>
                    <tr>
                        <td>Savings</td>
                        <td className='Values'>$ 10,020.00</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const AccountsSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='AccountsSection'>
            <div className='ContentArea'>
                <h3>Bank Accounts</h3>
                <div className='AccountCardArea'>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                </div>
            </div>
        </div>
    )
}

const AccountCard = () => {
    return (
        <div className='AccountCard'>
            <div>
                <span>Bank Name</span>
                <div>
                    <button className='CardEditButton'>Edit</button>
                    <button className='CardRemoveButton'>Remove</button>
                </div>
            </div>         
            <span className='AccountCardValue'>Total: <span>$ 2.000,00</span></span>
        </div>
    )
}


const SavingsSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='SavingsSection'>
            <div className='ContentArea'>
                <h3>Savings</h3>
                <div className='SavingsCardArea'>
                    <SavingsCard/>
                    <SavingsCard/>
                    <SavingsCard/>
                </div>
            </div>
        </div>
    )
}

const SavingsCard = () => {
    return (
        <div className='SavingsCard'>
            <div>
                <span>Saving Title</span>
                <div>
                    <button className='CardEditButton'>Edit</button>
                    <button className='CardRemoveButton'>Remove</button>
                </div>
            </div>         
            <span className='SavingsCardValue'>Total: <span>$ 2.000,00</span></span>
        </div>
    )
}

export {MainFrame, Header, ContentFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, SavingsSection, OverlayTransactions}