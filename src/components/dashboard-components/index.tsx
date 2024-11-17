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

const MenuBar = () => {
    return (
        <div className='MenuBar'>
            <div className='ButtonSection'>
                <button className='IncomeButton'>+ Income</button>
                <button className='OutcomeButton'>- Outcome</button>
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
                        aaa
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
                        <td>Credit Cards</td>
                        <td className='CreditValues'>$ 1,050.00</td>
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
        <div className='BalanceSection'>
            <div className='ContentArea'>
                <h3>Bank Accounts</h3>
            </div>
        </div>
    )
}

const CreditCardsSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='BalanceSection'>
            <div className='ContentArea'>
                <h3>Credit Cards</h3>
            </div>
        </div>
    )
}

const SavingsSection = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='BalanceSection'>
            <div className='ContentArea'>
                <h3>Savings</h3>
            </div>
        </div>
    )
}

export {MainFrame, Header, ContentFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, CreditCardsSection, SavingsSection}