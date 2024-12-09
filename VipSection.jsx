import React from 'react'
import vipbg from "../../assets/vipimgs/vip-benefit-bg.webp";
import viplevels from "../../assets/vipimgs/vip-program-levels.svg";
import vipcoins from "../../assets/vipimgs/vip-program-coins.svg";
import trophy from "../../assets/vipimgs/trophy.png";
function VipSection() {
  return (
    <>
        <div className='vip-wrapper'>
            <img src={vipbg} className="vip-bg"/>
            <div className='vip-benefits-text'>
                <h3 className='vip-title'>
                    Play for fun - <span>Win In Style</span>
                </h3>
                <p className='vip-desc'>
                  Step into a world of exhilarating games and vibrant entertainment at Betandplay, where every visit is a chance to turn your dreams into reality!
                </p>
                <button className='btn link-btn vip-btn widget-btn'>LET'S PLAY</button>
            </div>
            <div className='vip-benefits-cards'>
             <div className='vip-card vip-card-one'>
                <h4 className='vip-card-title'>Betandplayer's Club</h4>
                <ul className='vip-card-list'>
                    <li className='vip-card-item'>
                        <img src={vipcoins}/>
                        <span>Weekly cashback of up to €2,500 </span>
                    </li>
                    <li className='vip-card-item'>
                        <img src={viplevels}/>
                        <span>The more you play, the more you benefit</span>
                    </li>
                </ul>
             </div>
              <div className='vip-card vip-card-two'>
              <h4 className='vip-card-title'>Thrilling Tournaments</h4>
              <p className='card-desc'>Battle for glory, conquer the competition and win big!</p>
              <img src={trophy} className='trophy'/>
              </div>
            </div>
        </div>
    </>
  )
}

export default VipSection
