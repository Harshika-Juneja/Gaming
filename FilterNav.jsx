import React from 'react'
import { TbCategory2 } from "react-icons/tb";
import './Main.css'
import NavCategory from './NavCategory';
import FilterProvider from './FilterProvider';
function FilterNav() {
  return (
    <>
      <div className='filter-nav'>
        <div className='filter-wrapper'>
           <div className='filter-nav-category'>
             <NavCategory/>     
            </div>
            <button className='text-btn providers-btn'>
             <TbCategory2 className='font-icons switcher-icon'/>
            <FilterProvider/>
            </button> 
        </div>
      </div>
    </>
  )
}

export default FilterNav;
