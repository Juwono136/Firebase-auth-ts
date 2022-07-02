import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import Nav from './Nav'
import NavAfterLogin from './NavAfterLogin'

const Header = () => {
  const { currentUser } = useAppSelector(state => state.auth)

  return (
    <header className='sticky top-0 z-10 px-32 py-4 min-h-16 bg-gray-100'>
        <div className='flex flex-wrap items-center justify-between max-w-6xl px-4 max-auto'>
            <h1 className='text-2xl font-semibold'>
                <Link to="/">
                  Firebase
                </Link>
            </h1>
            {
              currentUser
              ? <NavAfterLogin />
              : <Nav />
            }
            
        </div>

    </header>
  )
}

export default Header