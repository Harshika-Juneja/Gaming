import React from 'react'
import winnercard7 from "../../assets/winnercardimgs/winnercard7.webp";
import winnercard8 from "../../assets/winnercardimgs/winnercard8.webp";
import winnercard9 from "../../assets/winnercardimgs/winnercard9.webp";
import winnercard10 from "../../assets/winnercardimgs/winnercard10.webp";
import winnercard11 from "../../assets/winnercardimgs/winnercard11.webp";
function LatestWins() {
  return (
    <>
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard7} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>james</div>
     <div className='winjner-sum'>€ 300,500.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Bobs Builder</a>
    </div>
   </div>
   <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard8} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>james</div>
     <div className='winjner-sum'>€ 300,500.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Bobs Builder</a>
    </div>
   </div>
   <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard9} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>james</div>
     <div className='winjner-sum'>€ 300,500.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Bobs Builder</a>
    </div>
   </div>
   <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard10} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>james</div>
     <div className='winjner-sum'>€ 300,500.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Bobs Builder</a>
    </div>
   </div>
   <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard11} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>james</div>
     <div className='winjner-sum'>€ 300,500.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Bobs Builder</a>
    </div>
   </div>
    </>

  )
}

export default LatestWins
