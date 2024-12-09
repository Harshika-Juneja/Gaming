import React from 'react';
import { LuCherry } from "react-icons/lu";
import { MdCasino } from "react-icons/md";
import { IoMdJet } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { PiSpinnerBallFill } from "react-icons/pi";
const li = [
  { link: '/', text: 'Slots' ,icon:<LuCherry />},
  { link: '/', text: 'Live Casino' ,icon:<MdCasino />},
  { link: '/', text: 'Instant win', icon:<IoMdJet />},
  { link: '/', text: 'Promotions' ,icon:<FaGift />},
  { link: '/', text: 'BetandPlayer Club', icon:<FaCrown />},
  { link: '/', text: 'Tournaments', icon:<GiTrophy />},
  { link: '/', text: 'Lucky spin' ,icon:< PiSpinnerBallFill />},
  { link: '/', text: 'Payments' ,icon:<MdPayment />}
];

const SideDraw = ({ show, click }) => {
  const drawClasses = show ? 'sidebar active' : 'sidebar';

  return (
    <nav className={drawClasses}>
      <button className="close-btn" onClick={click}>X</button>
      <ul className="sidebar-ul">
        {li.map((objLink, i) => (
          <li className="sidebar-li" key={i}>
            {objLink.icon}
            <a className="sidebar-item"href={objLink.link}>{objLink.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideDraw;
