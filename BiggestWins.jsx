import React from 'react'
import winnercard1 from "../../assets/winnercardimgs/winnercard1.webp";
import winnercard2 from "../../assets/winnercardimgs/winnercard2.webp";
import winnercard3 from "../../assets/winnercardimgs/winnercard3.webp";
import winnercard4 from "../../assets/winnercardimgs/winnercard4.webp";
import winnercard5 from "../../assets/winnercardimgs/winnercard5.webp";
import topimg1 from "../../assets/winnercardimgs/topimg1.svg";
import topimg2 from "../../assets/winnercardimgs/topimg2.svg";
import topimg3 from "../../assets/winnercardimgs/topimg3.svg";
function BiggestWins() {
  return (
    <>    
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard1} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>luis</div>
     <div className='winjner-sum'>€ 200,050.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Crazy Time A</a>
    </div>
    <img className='winner-top-img' src={topimg1}/>
    </div>
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard2} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>luis</div>
     <div className='winjner-sum'>€ 200,050.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Crazy Time A</a>
    </div>
    <img className='winner-top-img' src={topimg2}/>
    </div>
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard3} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>luis</div>
     <div className='winjner-sum'>€ 200,050.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Crazy Time A</a>
    </div>
    <img className='winner-top-img' src={topimg3}/>
    </div>
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard4} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>luis</div>
     <div className='winjner-sum'>€ 200,050.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Crazy Time A</a>
    </div>
    </div>
    <div className='winner-card'>
    <a href="/game/crazy-time-a" className='winner-avatar-link'>
    <img src={winnercard5} className="avatar-img"/></a>
    <div className='winner-info'>
     <div className='winner-username'>luis</div>
     <div className='winjner-sum'>€ 200,050.00</div>
     <a className='winner-game-link' href="/game/crazy-time-a">Crazy Time A</a>
    </div>
    </div>
  </>

  )
}

export default BiggestWins
