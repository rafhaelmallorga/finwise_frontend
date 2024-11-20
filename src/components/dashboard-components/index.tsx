import { ReactNode, useEffect, useState } from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Bank_Accounts, Savings, Transactions } from '../../db';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AccountsDBContext } from '../../providers/Accounts';
import { SavingsDBContext } from '../../providers/Savings';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import { TransactionsDBContext } from '../../providers/Transactions';
import { TemporaryContext } from '../../providers/Temporary';


interface ElementProps {
    placeholder?: string,
    type?: string,
    children?: ReactNode
}

const MainFrame = ({children}: ElementProps): JSX.Element => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

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
    const {transactionsDB, setTransactionsDB} = useContext(TransactionsDBContext)

    const schema = yup.object().shape({
        title: yup.string().required("Required field!").min(3, "Minimum length is 3"),
        type: yup.string().required("Required field!"),
        value: yup.number().required("Required field!").min(0)
    })


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema)});

    const createNewTransaction = (transaction: Partial<Transactions>) => {
        
        const user_id = localStorage.getItem("user_id")

        const newTransaction = {
            id: uuidv4(),
            title: transaction.title,
            type: transaction.type,
            date: new Date().toISOString(),
            value: transaction.value,
            user_id: user_id
        }

        setTransactionsDB([newTransaction, ...transactionsDB])

        toast("Transaction created with success!")
        reset()
        setOverlay(!overlay)
    }

    return (
        <div className="Overlay">
            <div className='OverlayAreaContent'>
                <div className='OverlayHeader'>
                    <h3>New Transaction</h3>
                    <button className='CloseButton' onClick={() => setOverlay(!overlay)}>X</button>
                </div>
               <form action="" className='OverlayForm' onSubmit={handleSubmit(createNewTransaction)}>
                    <input type="text" placeholder='Title' className='Input' {...register("title")}/>
                    {errors && (
                        <p>
                        {errors.title?.message}
                        </p>
                    )}
                    <select name="type" id="" className='Input' {...register("type")}>
                        <option value="" disabled selected></option>
                        <option value="income">Income</option>
                        <option value="outcome">Outcome</option>
                    </select>
                    {errors && (
                        <p>
                        {errors.type?.message}
                        </p>
                    )}
                    <input type="number" min={0} placeholder='Value' className='Input' {...register("value")}/>
                    {errors && (
                        <p>
                        {errors.value?.message}
                        </p>
                    )}
                    <button className='Button'>Create</button>
               </form>
            </div>
        </div>
    )
}

interface OverlayEditProps {
    id?: string;
    saving?: Savings;
    children?: React.ReactNode;
    account?: Bank_Accounts,
    edit: boolean;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    createModal: boolean;
    setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlayCreate: React.FC<OverlayEditProps>  = ({ createModal, setCreateModal}): JSX.Element => {
    const {accountDB, setAccountDB} = useContext(AccountsDBContext)
    const {savingsDB, setSavingsDB} = useContext(SavingsDBContext)
    const {temporary, setTemporary} = useContext(TemporaryContext)

    const schema = yup.object().shape({
        name: yup.string().required("Required field!").min(3, "Minimum length is 3"),
        amount: yup.number().required("Required field!").min(0)
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ 
        resolver: yupResolver(schema)
    });

    const create = (form) => {
        const newObj = {
            id: uuidv4(),
            name: form.name,
            amount: form.amount
        }
        switch (temporary.category) {
            case "savings":
                setSavingsDB([...savingsDB, newObj])
                return setCreateModal(!createModal)
            case "bank_account":
                setAccountDB([...accountDB, newObj])
                return setCreateModal(!createModal)
        }
    }

    return (
        <div className="Overlay">
            <div className='OverlayAreaContent'>
                <div className='OverlayHeader'>
                    <h3>Create</h3>
                    <button className='CloseButton' onClick={() => setCreateModal(!createModal)}>X</button>
                </div>
               <form action="" className='OverlayForm' onSubmit={handleSubmit(create)}>
                    <input type="text" placeholder='Title' className='Input' {...register("name")}/>
                    {errors && (
                        <p>
                        {errors.name?.message}
                        </p>
                    )}
                    <input type="number" min={0} placeholder='Value' className='Input' {...register("amount")}/>
                    {errors && (
                        <p>
                        {errors.amount?.message}
                        </p>
                    )}
                    <button className='Button'>Save</button>
               </form>
            </div>
        </div>
    )
}

const OverlayEdit: React.FC<OverlayEditProps>  = ({ edit, setEdit}): JSX.Element => {
    const {temporary, setTemporary} = useContext(TemporaryContext)
    const {accountDB, setAccountDB} = useContext(AccountsDBContext)
    const {savingsDB, setSavingsDB} = useContext(SavingsDBContext)

    const schema = yup.object().shape({
        name: yup.string().required("Required field!").min(3, "Minimum length is 3"),
        amount: yup.number().required("Required field!").min(0)
    })


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ 
        resolver: yupResolver(schema),
        defaultValues: {
            name: temporary.name,
            amount: temporary.amount
        }
    });

    const closeModal = () => {
        setTemporary(undefined)
        setEdit(!edit)
    }

    const updateEntity = (form) => {
        switch (temporary.category) {
            case "savings":
                setSavingsDB(savingsDB.map(saving => {
                    if (saving.id === temporary.id) {
                        saving.name = form.name;
                        saving.amount = form.amount;
                    }
                    return saving
                }))
                toast(form.name + " Saving Updated!")
                return closeModal()
            case "bank_account":
                setAccountDB(accountDB.map(bank => {
                    if (bank.id === temporary.id) {
                        bank.name = form.name;
                        bank.amount = form.amount;
                    }
                    return bank
                }))
                toast(form.name + " Bank Account Updated!")
                return closeModal()
        }
    }

    return (
        <div className="Overlay">
            <div className='OverlayAreaContent'>
                <div className='OverlayHeader'>
                    <h3>Edit</h3>
                    <button className='CloseButton' onClick={closeModal}>X</button>
                </div>
               <form action="" className='OverlayForm' onSubmit={handleSubmit(updateEntity)}>
                    <input type="text" placeholder='Title' className='Input' {...register("name")}/>
                    {errors && (
                        <p>
                        {errors.name?.message}
                        </p>
                    )}
                    <input type="number" min={0} placeholder='Value' className='Input' {...register("amount")}/>
                    {errors && (
                        <p>
                        {errors.amount?.message}
                        </p>
                    )}
                    <button className='Button'>Save</button>
               </form>
            </div>
        </div>
    )
}


const Header = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <header className='Header'>
            <div className='HeaderContent'>
                <div className='LogoSection'>
                    <img src='./src/assets/logo.svg' alt="FinWise Logo" />
                    <span>FinWise</span>
                </div>
                <div className='UserSection'>
                    <button onClick={logOut}>Log Out</button>
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
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ];
      
    const date = new Date()
    return (
        <div className='MenuBar'>
            <div className='ButtonSection'>
                <button className='TransactionButton' onClick={() => setOverlay(!overlay)}>Transactions</button>
            </div>
            <span className='DateSection'>{months[date.getMonth()]}/{date.getFullYear()}</span>
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
    const {transactionsDB} = useContext(TransactionsDBContext)

    return (
        <div className='HistorySection'>
            <div className='ContentArea'>
                <h3>History</h3>
                <div className='CardArea'>
                        { transactionsDB.map(transaction => <HistoryCard id={transaction.id} transaction={transaction}/>)}
                </div>
            </div>
        </div>
    )
}

const HistoryCard = ({transaction}): JSX.Element => {
    const {transactionsDB, setTransactionsDB} = useContext(TransactionsDBContext)

    const removeItem = () => {
        setTransactionsDB(transactionsDB.filter(t=>t.id !== transaction.id))
        toast("Transaction removed with success!")
    }
    const date = new Date(transaction.date)

    return (
        <div className={transaction.type === "income" ? 'HistoryCardGreen' : 'HistoryCardRed'}>
            <div className='HistoryCardContent'>
                <span className='HistoryCardTittle'>{transaction.title}</span>
                <span>{date.getFullYear()}/{date.getMonth()+1}/{date.getDate()} - {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</span>
                <span className='HistoryCardValue'>$ {transaction.value.toFixed(2)}</span>
                <div className='HistoryCardSubSection'>
                    <span>{transaction.type}</span>
                    <button onClick={removeItem}>Remove</button>
                </div>
            </div>
        </div>
    )
}

const BalanceSection = ({children}: ElementProps): JSX.Element => {
    const {accountDB} = useContext(AccountsDBContext)
    const {savingsDB} = useContext(SavingsDBContext)

    const [totalBankAccounts, setTotalBankAccounts] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);

    useEffect(() => {
        const bankTotal = accountDB.reduce((acc, account) => acc + account.amount, 0);
        setTotalBankAccounts(bankTotal);
    
        const savingsTotal = savingsDB.reduce((acc, saving) => acc + saving.amount, 0);
        setTotalSavings(savingsTotal);
      }, [accountDB, savingsDB]); 

    return (
        <div className='BalanceSection'>
            <div className='ContentArea'>
                <h3>Balance</h3>
                <h4>Totals</h4>
                <table>
                    <tr>
                        <td>Bank Account</td>
                        <td className='Values'>$ {totalBankAccounts.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Savings</td>
                        <td className='Values'>$ {totalSavings.toFixed(2)}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const AccountsSection: React.FC<OverlayEditProps> = ({edit, setEdit, createModal, setCreateModal}): JSX.Element => {
    const {accountDB} = useContext(AccountsDBContext)
    const {setTemporary} = useContext(TemporaryContext)

    const openModal = () => {
        setTemporary({category: "bank_account"})
        setCreateModal(!createModal)
    }

    return (
        <div className='AccountsSection'>
            <div className='ContentArea'>
                <div className='AAAA'>
                    <h3>Bank Accounts</h3>
                    <button className='CreateButton' onClick={openModal}>+</button>
                </div>
                <div className='AccountCardArea'>
                    { accountDB.map(account => <AccountCard account={account} edit={edit} setEdit={setEdit}/>)}
                </div>
            </div>
        </div>
    )
}

const AccountCard: React.FC<OverlayEditProps> = ({account, edit, setEdit}) => {
    const {accountDB, setAccountDB} = useContext(AccountsDBContext)
    const {setTemporary} = useContext(TemporaryContext)

    const removeItem = () => {
        setAccountDB(accountDB.filter(a => a.id !== account!.id))
        toast("Bank Account removed with success!")
    }

    const openEditModal = () => {
        setTemporary({category: "bank_account", ...account});
        setEdit(!edit)
    }

    return (
        <div className='AccountCard'>
            <div>
                <span>{account!.name}</span>
                <div>
                    <button className='CardEditButton' onClick={openEditModal}>Edit</button>
                    <button className='CardRemoveButton' onClick={removeItem}>Remove</button>
                </div>
            </div>         
            <span className='AccountCardValue'>Total: <span>$ {account!.amount.toFixed(2)}</span></span>
        </div>
    )
}


const SavingsSection: React.FC<OverlayEditProps> = ({edit, setEdit, createModal, setCreateModal}): JSX.Element => {
    const {savingsDB} = useContext(SavingsDBContext)
    const {setTemporary} = useContext(TemporaryContext)

    const openModal = () => {
        setTemporary({category: "savings"})
        setCreateModal(!createModal)
    }

    return (
        <div className='SavingsSection'>
            <div className='ContentArea'>
                <div className='AAAA'>
                    <h3>Savings</h3>
                    <button className='CreateButton' onClick={openModal}>+</button>
                </div>
                <div className='SavingsCardArea'>
                    { savingsDB.map(saving => <SavingsCard id={saving.id} saving={saving} edit={edit} setEdit={setEdit}/>) }
                </div>
            </div>
        </div>
    )
}

const SavingsCard: React.FC<OverlayEditProps> = ({saving, edit, setEdit}) => {
    const {savingsDB, setSavingsDB} = useContext(SavingsDBContext)
    const {setTemporary} = useContext(TemporaryContext)

    const removeItem = () => {
        setSavingsDB(savingsDB.filter(s => s.id !== saving!.id))
        toast("Saving removed with success!")
    }

    const openEditModal = () => {
        setTemporary({category: "savings", ...saving});
        setEdit(!edit)
    }

    return (
        <div className='SavingsCard'>
            <div>
                <span>{saving?.name}</span>
                <div>
                    <button className='CardEditButton' onClick={()=>openEditModal()}>Edit</button>
                    <button className='CardRemoveButton' onClick={removeItem}>Remove</button>
                </div>
            </div>         
            <span className='SavingsCardValue'>Total: <span>$ {saving?.amount.toFixed(2)}</span></span>
        </div>
    )
}

export {MainFrame, Header, ContentFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, SavingsSection, OverlayTransactions, OverlayEdit, OverlayCreate}