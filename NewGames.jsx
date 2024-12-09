import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import newgames1 from "../../assets/newgameimgs/newgame1.webp";
import newgames2 from "../../assets/newgameimgs/newgame2.webp";
import newgames3 from "../../assets/newgameimgs/newgame3.webp";
import newgames4 from "../../assets/newgameimgs/newgame4.webp";
import newgames5 from "../../assets/newgameimgs/newgame5.webp";
import newgames6 from "../../assets/newgameimgs/newgames6.webp";
import newgames7 from "../../assets/newgameimgs/newgames7.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css'
function NewGames() {
  const[hover,setHover]=useState(true);
  const settings = {
    dots:false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };
   
  const newgames=[
    {id:1,src:newgames1,title:"Moon Princess",slug:"/game/moon-princess",provider:"Gamomat"},
    {id:2,src:newgames2,title:"Lions Megaways",slug:"/game/lions-megaways",provider:"RubyPlay"},
    {id:3,src:newgames3,title:"Razor Returns",slug:"/game/razor-returns",provider:"Tornadogames"},
    {id:4,src:newgames4,title:"Gods Of War",slug:"/game/gods-of-war",provider:"BGaming"},
    {id:5,src:newgames5,title:"Fire In The Hole",slug:"/game/fire-in-hole",provider:"GameBeat"},
    {id:6,src:newgames6,title:"Mad Hit Bear Haus",slug:"/game/mad-hit-bear-haus",provider:"PushGaming"},
    {id:7,src:newgames7,title:"Monies Blob Buster",slug:"/game/blob-bluster",provider:"RubyPlay"}
  ]
  const handleMouseEnter = (id) => {
    setHover(id);
};
const handleMouseLeave = () => {
  setHover(null);
};
  return (
    <>
      <div className="newgames mb-8">
        <div className="newgames-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">New Games</h3>
            <div className="section-link-btns">
             <button className="btn see-more-btn link-btn btn-outline">See All</button>
             <div className="slide-controls">
              <button className="slide-control-outline">
               {/* <IoIosArrowBack className="arrow-outline"/> */}
              </button>
              <button className="slide-control-outline">
               {/* <IoIosArrowForward  className="arrow-outline"/> */}
              </button>
             </div>
            </div>
          </div>
          <div className="promo-slider newgameslider">
            <div className="slider-container">
              <Slider {...settings}>
                {newgames.map((game)=>(
              // <div>
                <div key={game.id} className="card-item" onMouseEnter={()=>handleMouseEnter(game.id)} onMouseLeave={handleMouseLeave}>
                  <div className="game-card">
                    <img className="game-card-img" src={game.src} />
                    </div>
                    {hover ===game.id && (
                        <div className="game-card-content">
                      {/* <div className="card-top-content"> */}
                        <div className="game-play">
                        <a className="game-play-btn" href={game.slug}><FaPlay className='play-btn'/></a>
                        <div className='game-title'>
                         <a className='title-link' href={game.slug}>{game.title}</a>
                        </div>
                        <div className='game-provider'>{game.provider}</div>
                        </div>
                        <div className='game-demo'>
                          <button className='demo-btn'>Demo</button>
                        </div>
                      
                    </div>
                )}
                    <div className="card-label">
                        <div className="labels">
                          <span className='game-label game-label-new'>New</span>
                          <span className='game-label game-label-exclusive'>Exclusive</span>
                        </div>
                        <div className="promo-card-bonus-code">
                        </div>
                    </div>
                  </div>
                // </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewGames
