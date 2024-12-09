import React,{useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import ourpick1 from "../../assets/ourpickimgs/ourpick1.webp";
import ourpick2 from "../../assets/ourpickimgs/ourpick2.webp";
import ourpick3 from "../../assets/ourpickimgs/ourpick3.webp";
import ourpick4 from "../../assets/ourpickimgs/ourpick4.webp";
import ourpick5 from "../../assets/ourpickimgs/ourpick5.webp";
import ourpick6 from "../../assets/ourpickimgs/ourpick6.webp";
import ourpick7 from "../../assets/ourpickimgs/ourpick7.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css';

function OurPicks() {
  const[hover,setHover]=useState(true);
  const settings = {
    dots:false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };
  const ourpick=[
    {id:1,src:ourpick1,title:"Golden Dragon",provider:"Gamomat"},
    {id:2,src:ourpick2,title:" Madame Destiny Megaways",provider:"BGaming"},
    {id:3,src:ourpick3,title:"Cherry Pop",provider:"Tornado Games"},
    {id:4,src:ourpick4,title:"Twin Spin",provider:"RubyPlay"},
    {id:5,src:ourpick5,title:"Big Bass Extreme",provider:"PushGaming"},
    {id:6,src:ourpick6,title:"Lightning Storm",provider:"Evolution"},
    {id:7,src:ourpick7,title:"Hellapenos",provider:"Thunderkick"}
  ]
    const handleMouseEnter = (id) => {
      setHover(id);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <>
      <div className="ourpick mb-8">
        <div className="ourpick-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">Our Picks</h3>
            <div className="section-link-btns">
             <button className="btn see-more-btn link-btn btn-outline">See All</button>
             <div className="slide-controls">
              <button className="slide-control-outline">
              </button>
              <button className="slide-control-outline">
              </button>
             </div>
            </div>
          </div>
          <div className="promo-slider">
            <div className="slider-container">
              <Slider {...settings}>
                {ourpick.map((game)=>(
                <div key ={game.id} className="card-item" onMouseEnter={()=>handleMouseEnter(game.id)} onMouseLeave={handleMouseLeave}>
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
                      {/* <div className="card-label">
                        <div className="labels">
                          <span className='game-label game-label-new'>New</span>
                          <span className='game-label game-label-exclusive'>Exclusive</span>
                        </div>
                        <div className="promo-card-bonus-code">
                        </div>
                      </div>
                    </div> */}
      </div>
            
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPicks
