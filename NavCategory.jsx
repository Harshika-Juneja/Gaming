import React from 'react'
import { AiOutlineFire } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
// import { GiArmoredPants } from "react-icons/gi";
import { LuCherry } from "react-icons/lu";
import { IoMdGift } from "react-icons/io";
import { PiTipJar } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";

// import {Category} from '../main/FilterNavCategory';
import './Main.css'
function NavCategory() {
  return (
   <>
     <div className='game-category-select'>
        <div id="category-item" className='category-item'>
            <a className="category-item-link">
            <AiOutlineFire className="switcher-icon font-icons"/><span className="switcher-item-title">Top Games</span>
            </a>
        </div>
        <div id="category-item">
            <a className="category-item-link">
                <BsLightning className="switcher-icon font-icons"/><span className="switcher-item-title">New Games</span>
            </a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><AiOutlineLike className="switcher-icon font-icons"/><span className="switcher-item-title">Our Picks</span></a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><FaArrowUpRightDots className=" switcher-icon font-icons"/><span className="switcher-item-title">Megaways</span></a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><FaHandHoldingUsd className="switcher-icon font-icons"/><span className="switcher-item-title">Hold & Win</span></a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><LuCherry className="switcher-icon font-icons"/><span className="switcher-item-title">Slots</span></a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><IoMdGift className="switcher-icon font-icons"/><span className="switcher-item-title">Bonus Buy</span></a>
        </div>
        <div id="category-item">
            <a className="category-item-link"><PiTipJar className="switcher-icon font-icons"/><span className="switcher-item-title">Jackpot</span></a>
        </div>
     </div>
   </>
  )
}

export default NavCategory
