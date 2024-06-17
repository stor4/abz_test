import React from 'react'
import logo from '../assets/logo.svg'
import Button from "../components/Button"

function Header() {
  return (
    <div className='header'>
        <div className="header__container container">
            <a href="#" className="header__logo">
                <img src={logo} alt="logo" />
            </a>
            <nav className='header__nav'>
            <Button>Users</Button>
            <Button>Sign up</Button>
        </nav>
        </div>
    </div>
  )
}

export default Header