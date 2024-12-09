import React from 'react';
import { RiMenu2Line } from "react-icons/ri";
const SideDrawBtn = ({ click }) => (
    <button class="header-sidemenu text-white text-btn" onClick={click}>
     <RiMenu2Line class="menu-icon-left font-icons" />
  </button>
);

export default SideDrawBtn;
