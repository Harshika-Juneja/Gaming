import React,{useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import jackpot1 from "../../assets/jackpotimgs/jackpot1.webp";
import jackpot2 from "../../assets/jackpotimgs/jackpot2.webp";
import jackpot3 from "../../assets/jackpotimgs/jackpot3.webp";
import jackpot4 from "../../assets/jackpotimgs/jackpot4.webp";
import jackpot5 from "../../assets/jackpotimgs/jackpot5.webp";
import jackpot6 from "../../assets/jackpotimgs/jackpot6.webp";
import jackpot7 from "../../assets/jackpotimgs/jackpot7.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css'
function Jackpot() {
  const[hover,setHover]=useState(true);
  const settings = {
    dots:false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };

  const jackpots=[
    {id:1,src:jackpot1,title:"Egypt King",slug:"/games/egypt-king",provider:"Evolution"},
    {id:2,src:jackpot2,title:"Mega Don",slug:"/games/mega-don",provider:"Play'n Go"},
    {id:3,src:jackpot3,title:"Book Of Ra",slug:"/games/book-of-ra",provider:"Gamomat"},
    {id:4,src:jackpot4,title:"La Dolce Vita",slug:"/games/la-dolce-vita",provider:"Novomatic"},
    {id:5,src:jackpot5,title:"Bonanza Billion",slug:"/games/bonanza-billion",provider:"Push Gaming"},
    {id:6,src:jackpot6,title:"Octo Attack",slug:"/games/octo-attack",provider:"Tornado Games"},
    {id:7,src:jackpot7,title:"Kawaii Cafe",slug:"/games/kawaii-cafe",provider:"Thunderkick"}
  ]
  const handleMouseEnter = (id) => {
    setHover(id);
};
const handleMouseLeave = () => {
  setHover(null);
};
  return (
    <>
      <div className="jackpot mb-8">
        <div className="jackpot-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">Jackpot</h3>
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
          <div className="promo-slider newgameslider">
            <div className="slider-container">
              <Slider {...settings}>
                {jackpots.map((game)=>(
              // <div>
                <div key={game.id} className="card-item" onMouseEnter={()=>handleMouseEnter(game.id)} onMouseLeave={handleMouseLeave}>
                  <div className="game-card">
                    <img className="game-card-img" src={game.src} />
                    </div>
                    {hover ===game.id && (
                        <div className="game-card-content">
                      {/* <div className="card-top-content"> */}
                        <div className="game-play">
                        <a className="game-play-btn" href={game.slug}><FaPlay  className='play-btn'/></a>
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

export default Jackpot
