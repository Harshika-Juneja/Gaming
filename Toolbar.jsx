import React from 'react';
import SideDrawBtn from './SideDrawBtn'; // Adjust the import path if needed
import ToggleNav from '../header/ToggleNav'
import logo from '../../assets/logo.webp'
import { BsSearch } from "react-icons/bs";
import UserAccount from '../header/UserAccount'
import Header from "../header/Header.css"

const Toolbar = ({ drawClickHandler }) => (
    <> 
    <div classname="header left-0 top-0 z-10 w-full fixed">
    <header class="header-wrapper flex items-center justify-between">
     <div className="header-block header-block-left flex items-center">
      <div>
        <SideDrawBtn click={drawClickHandler} />
      </div>
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
  <UserAccount/>
  </header>
  </div>
  </>

);

export default Toolbar;
