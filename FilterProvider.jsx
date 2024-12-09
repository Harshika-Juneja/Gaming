import React, { useState } from 'react'

function FilterProvider() {
    const [isOpen,setIsOpen]=useState(false);
    
    const handleShowModal = () => {
        setIsOpen(true)
        if (typeof window != 'undefined' && window.document) {
          document.body.style.overflow = 'hidden';
      }
      };
      
  return (
    <>
      <span className='switcher-item-title'>Providers</span>
    </>
  )
}

export default FilterProvider
