import React from 'react'
import { BsSuitSpade } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
function ToggleNav() {
  return (
   <>
    <div className='header-switcher min-w-64 mr-8 ml-12 w-full overflow-hidden'>
        <a href="/" className="header-switcher-item switcher-item-active">
        <BsSuitSpade className="switcher-icon font-icons" />
        <span class="switcher-item-title">Casino</span>
        </a>
        <a href="/sports"  className="header-switcher-item">
        <RiFootballLine  className="switcher-icon inactive-icon font-icons" />
        <span  class="switcher-item-title">Sports</span>
        </a>
    </div>
   </>
  )
}

export default ToggleNav
