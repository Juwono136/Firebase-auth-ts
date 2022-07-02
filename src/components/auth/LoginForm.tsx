import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { authLogin } from 'redux/slice/authSlice'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [remember, setRemember] = useState(false)
    
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const user = {email, password, remember}
        dispatch(authLogin(user))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='my-3'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='w-full p-3 border' required
                value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='my-3'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className='w-full p-3 border' required
                value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className='flex items-center justify-between my-2'>
                <div className='flex items-center'>
                    <input type="checkbox" id='rb-me' className='w-4 h-4' 
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <label htmlFor="rb-me" className='block ml-2 text-sm cursor-pointer'>Remember me</label>
                </div>

                <Link to="/forgot_password" className='block ml-2 text-sm text-blue-600 cursor-pointer hover:underline'>
                    Forgot your password?
                </Link>
            </div>

            <button type='submit' className='w-full p-3 my-2 font-semibold tracking-wider uppercase border-2 hover:bg-gray-200'>
                Login
            </button>
        </form>
    )
}

export default LoginForm