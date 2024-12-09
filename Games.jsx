import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import Slider from "react-slick";
import newgames1 from "../../assets/newgameimgs/newgame1.webp";
import newgames2 from "../../assets/newgameimgs/newgame2.webp";
import newgames3 from "../../assets/newgameimgs/newgame3.webp";
import newgames4 from "../../assets/newgameimgs/newgame4.webp";
import newgames5 from "../../assets/newgameimgs/newgame5.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css'
function NewGames() {
  const settings = {
    dots:false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };

  const newgames=[
    {src:newgames1,title:"Moon Princess",slug:"/game/moon-princess",provider:""},
    {src:newgames2,title:"Lions Megaways",slug:"/game/lions-megaways",provider:""},
    {src:newgames3,title:"Razor Returns",slug:"/game/razor-returns",provider:""},
    {src:newgames4,title:"Gods Of War",slug:"/game/gods-of-war",provider:""},
    {src:newgames5,title:"Fire In The Hole",slug:"/game/fire-in-hole",provider:""}
  ]
  return (
    <>
      <div className="new games mb-8">
        <div className="newgames-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">New Games</h3>
            <div className="section-link-btns">
             <button className="btn see-more-btn link-btn btn-outline">See All</button>
             <div className="slide-controls">
              <button className="slide-control-outline">
               <IoIosArrowBack className="arrow-outline"/>
              </button>
              <button className="slide-control-outline">
               <IoIosArrowForward  className="arrow-outline"/>
              </button>
             </div>
            </div>
          </div>
          <div className="promo-slider">
            <div className="slider-container">
              <Slider {...settings}>
                {newgames.map((game)=>(
              // <div>
                <div className="card-item">
                  <div className="game-card">
                    <img className="game-card-img" src={game.src} />
                    </div>
                    <div className="game-card-content">
                      {/* <div className="card-top-content"> */}
                        <div className="game-play">
                        <a className="game-play-btn" href={game.slug}><CiPlay1 /></a>
                        <div className='game-title'>
                         <a href={game.slug}>{game.title}</a>
                        </div>
                        <div className='game-provider'>{game.provider}</div>
                        </div>
                        <div className='game-demo'>
                          <button className='demo-btn'>Demo</button>
                        </div>
                      
                    </div>
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
