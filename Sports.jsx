import React from 'react'
import { RiFootballLine } from "react-icons/ri";
function Sports() {
  return (
    <>
       <a href="/sports"  className="header-switcher-item">
        <RiFootballLine  className="switcher-icon inactive-icon font-icons" />
        <span  class="switcher-item-title">Sports</span>
        </a>
    </>
  )
}

export default Sports
