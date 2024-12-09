import React,{useState} from 'react'
import { BsSuitSpade } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
import Main from "../main/Main";
import Sport from "../main/Sport"
function ToggleNav() {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
  setToggleState(index);
  };


  const getActiveNav = (index, className) =>
  ToggleState === index ? className : "";
  return (
   <>
    <div className='header-switcher min-w-64 mr-8 ml-12 w-full overflow-hidden '>
        <a href="/" className= {` header-switcher-item  ${getActiveNav(1, "switcher-item-active")}`} onClick={() => toggleTab(1)}>
        <BsSuitSpade className="switcher-icon font-icons"  />
        <span class="switcher-item-title">Casino</span>
        </a>
        <a href="/sports"  className={` header-switcher-item ${getActiveNav(2, "switcher-item-active")}`}onClick={() => toggleTab(2)}>
        <RiFootballLine  className="switcher-icon inactive-icon font-icons" />
        <span  class="switcher-item-title">Sports</span>
        </a>
        <div className="content-container">
        <div className={`content ${getActiveNav(1, "active-content")}`}>
         {/* <Main/> */}
        </div>
        <div className={`content ${getActiveNav(2, "active-content")}`}>
         {/* <Sport/> */}
        </div>
        </div>
    </div>
   </>
  )
}

export default ToggleNav
