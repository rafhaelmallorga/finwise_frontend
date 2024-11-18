import { ReactNode } from 'react'
import './index.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import bcrypt, { genSaltSync } from 'bcryptjs';
import { Users } from '../../db'
import db from '../../db'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
interface ElementProps {
    placeholder?: string;
    type?: string;
    id?: string;
    [key: string]: any; // To accept arbitrary props like `register`
}

interface ElementProps {
    placeholder?: string,
    type?: string,
    children?: ReactNode
}

const Input = forwardRef<HTMLInputElement, ElementProps>((props, ref) => {
    return <input ref={ref} {...props} className="Input" />;
});

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
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const logIn = (payload: {email: string, password: string}) => {
        const user = db.users.find(u => u.email === payload.email)
        
        if (!user) {
            reset()
            return toast.error("Incorrect e-mail or password!")
        } else if (!bcrypt.compareSync(payload.password, user.password)) {
            reset()
            return toast.error("Incorrect e-mail or password!")
        }

        localStorage.setItem("isAuthenticated","true")
        localStorage.setItem("user_id", user.id)

        navigate("/")
    }

    return (
        <form action="submit" className='LoginForm' onSubmit={handleSubmit(logIn)}>
        <div className='Spacer'>
            <h1 className='TitleForm'>Login</h1>
            <p>Doesn't have an account yet? <a href="/register">Sign Up</a></p>
        </div>
        

        <Input placeholder="E-mail" {...register("email")}/>
        <Input placeholder="Password" type="password" {...register("password")}/>
        <div className='RememberSection'>
            <span><input type="checkbox"/> Remember me</span>

            <a href="https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/memory-loss/art-20046518" target='_blank'>Forgot Password?</a>
        </div>
        <Button>Login</Button>
        </form>
    )
}

const RegisterForm = (): JSX.Element => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        first_name: yup
            .string()
            .required("Required field!")
            .min(3, "Must have 3 letters at least!")
            .max(20, "Must have less than 20 letters!"),
        last_name: yup
            .string()
            .required("Required field!")
            .min(3, "Must have 3 letters at least!")
            .max(20, "Must have less than 20 letters!"),
        email: yup.string().required("Required field!").email("Invalid e-mail!"),
        password: yup
            .string()
            .required("Required field!")
            .min(8, "Must have 8 characters at least!")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "Must have 1 uppercase, 1 lowercase, 1 number, and 1 special character"
            ),
        password_confirmation: yup
            .string()
            .required("Required field!")
            .oneOf([yup.ref("password")], "Passwords don't match!"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema)});

    const registerNewUser = (user: Users) => {
        if (db.users.find(u => u.email === user.email)) {
            toast.error("Already exists an user with the informed e-mail")
            throw new Error("Already exists an user with the informed e-mail")
        }
        
        db.users.push({
            id: uuidv4(),
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email.toLowerCase(),
            password: bcrypt.hashSync(user.password, genSaltSync())
        })
        navigate("/login") 
    }

    return (
        <form action="submit" className='RegisterForm' onSubmit={handleSubmit(registerNewUser)}>
            <div className='Spacer'>
                <h1 className='TitleForm'>Register</h1>
                <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
            <Input id="first_name" placeholder="First Name" {...register("first_name")}/>
            {errors && (
                <p>
                  {errors.first_name?.message}
                </p>
              )}
            <Input id="last_name" placeholder="Last Name" {...register("last_name")}/>
            {errors && (
                <p>
                  {errors.last_name?.message}
                </p>
              )}
            <Input id="email" placeholder="E-mail" {...register("email")}/>
            {errors && (
                <p>
                  {errors.email?.message}
                </p>
              )}
            <Input id="password" placeholder="Password" type="password" {...register("password")}/>
            {errors && (
                <p>
                  {errors.password?.message}
                </p>
              )}
            <Input id="password_confirmation" placeholder="Confirm Password" type="password" {...register("password_confirmation")}/>
            {errors && (
                <p>
                  {errors.password_confirmation?.message}
                </p>
              )}
            <Button>Register</Button>
        </form>
    )
}


export {Input, Button, MainFrame, FormFrame, FormBox, LoginForm, RegisterForm, LogoFrame}