import React, { useState } from 'react';
import SideDraw from './SideDraw'; // Adjust the import path if needed
import BackDrop from './BackDrop'; // Adjust the import path if needed
import Toolbar from './Toolbar'; // Adjust the import path if needed
import './SideMenu.css';
import Main from '../main/Main';
const Menu = () => {
  const [sideDrawOpen, setSideDrawOpen] = useState(false);

  const drawToggleHandler = () => {
    setSideDrawOpen(prevState => !prevState);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  };

  const backDropClickHandler = () => {
    setSideDrawOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawClickHandler={drawToggleHandler} />
      <SideDraw click={backDropClickHandler} show={sideDrawOpen} />
      {sideDrawOpen && <BackDrop click={backDropClickHandler}/>}
      <main>
        <Main/>
      </main>
    </div>
  );
};
 export default Menu;
