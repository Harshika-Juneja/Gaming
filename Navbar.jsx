import React from 'react'
import SideNav from './SideNav'
import ToggleNav from './ToggleNav'
import './Header.css'
import { BsSearch } from "react-icons/bs";
import logo from '../../assets/logo.webp';
function Navbar() {
  return (
 <>
 <div className="header-block header-block-left flex items-center">
    <SideNav/>
     <a href="/" className='header-logo'>
        <img className="logo_img" alt="Betting" src={logo}/>
     </a>
     <a href="/" className='mobile-logo-link'>
        <img className="mobile-logo_img " alt="Betting" src=""/>
     </a>
    <ToggleNav/>
    <ul className="header-menu m-0 p-0 list-none gap-6">
        <li className="header-menu-item">
            <a className="header-menu-link"> <span className='header-menu-name'>Slots</span></a>
        </li>
        <li className="header-menu-item">
            <a className="header-menu-link"><span className='header-menu-name'>Live Casino</span></a>
            </li>
        <li className="header-menu-item">
            <a className="header-menu-link"> <span className='header-menu-name'>Promotions</span> </a>
        </li>
    </ul>
    <button className='text-btn header-search-button '>
    <BsSearch className='search-icon' />
    </button>
 </div>
 </>
  )
}

export default Navbar
