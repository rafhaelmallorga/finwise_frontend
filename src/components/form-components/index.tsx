import { ReactNode } from 'react'
import './index.css'

interface ElementProps {
    placeholder?: string,
    type?: string,
    children?: ReactNode
}

const Input = (props: ElementProps): JSX.Element => {
    return (
        <input {...props} className="Input"/>
    )
}

const Button = ({children, ...props}: ElementProps): JSX.Element => {
    return (
        <button className='Button' {...props}>{children}</button>
    )
}

const MainFrame = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='MainFrame'>
            {children}
        </div>
    )
}

const FormFrame = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='FormFrame'>
            {children}
        </div>
    )
}

const LogoFrame = (): JSX.Element => {
    return (
        <div className='LogoFrame'>
            <img src="./src/assets/logo.svg" alt="FinWise Logo" />
        </div>
    )
}

const FormBox = ({children}: ElementProps): JSX.Element => {
    return (
        <div className='FormBox'>
            {children}
        </div>
    )
}

const LoginForm = (): JSX.Element => {
    return (
        <form action="submit" className='LoginForm'>
        <div className='Spacer'>
            <h1 className='TitleForm'>Login</h1>
            <p>Doesn't have an account yet? <a href="/register">Sign Up</a></p>
        </div>
        

        <Input placeholder="E-mail"/>
        <Input placeholder="Password" type="password"/>
        <div className='RememberSection'>
            <span><input type="checkbox"/> Remember me</span>

            <a href="https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/memory-loss/art-20046518" target='_blank'>Forgot Password?</a>
        </div>
        <Button>Login</Button>
        </form>
    )
}

const RegisterForm = (): JSX.Element => {
    return (
        <form action="submit" className='RegisterForm'>
            <div className='Spacer'>
                <h1 className='TitleForm'>Register</h1>
                <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="E-mail"/>
            <Input placeholder="Password" type="password"/>
            <Input placeholder="Confirm Password" type="password"/>
            <Button>Register</Button>
        </form>
    )
}


export {Input, Button, MainFrame, FormFrame, FormBox, LoginForm, RegisterForm, LogoFrame}