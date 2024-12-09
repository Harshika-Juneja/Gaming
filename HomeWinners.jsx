import React,{useState} from 'react'
import BiggestWins from './BiggestWins';
import LatestWins from './LatestWins';

function HomeWinners() {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
    };

    const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <>
     <div>
      <ul className="tab-list">
        <li className={` tabs ${getActiveClass(1, "active-tabs")}`}onClick={() => toggleTab(1)}>Biggest wins</li>
        <li className={` tabs ${getActiveClass(2, "active-tabs")}`}onClick={() => toggleTab(2)}>Latest wins</li>
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
         <BiggestWins/>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
         <LatestWins/>
        </div>
        </div>
     </div>
    </>
   
  )
}

export default HomeWinners
