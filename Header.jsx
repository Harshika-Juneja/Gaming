import React from 'react'
import Navbar from './Navbar'
import UserAccount from './UserAccount'
import './Header.css';
function Header() {
  return (
    <>
    <div classname="header left-0 top-0 z-10 w-full fixed">
     <header class="header-wrapper flex items-center justify-between">
      <Navbar/>
      <UserAccount/>
     </header>
     </div>
    </>
  )
}

export default Header
