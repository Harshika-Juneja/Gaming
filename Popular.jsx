import React,{useState} from 'react'
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import popular1 from "../../assets/popularimgs/popular1.webp";
import popular2 from "../../assets/popularimgs/popular2.webp";
import popular3 from "../../assets/popularimgs/popular3.webp";
import popular4 from "../../assets/popularimgs/popular4.webp";
import popular5 from "../../assets/popularimgs/popular5.webp";
import popular6 from "../../assets/popularimgs/popular6.webp";
import popular7 from "../../assets/popularimgs/popular7.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css'
function Popular() {
  const[hover,setHover]=useState(true);
  const settings = {
    dots:false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };

  const popular=[
    {id:1,src:popular1,title:"Cursed Crypt",provider:"Evolution"},
    {id:2,src:popular2,title:"Spinata Grande",provider:"Play'n Go"},
    {id:3,src:popular3,title:"Bigg Bass Splash",provider:"Gamomat"},
    {id:4,src:popular4,title:"King of The God Zeus",provider:"Novomatic"},
    {id:5,src:popular5,title:"Sweet Alchemy",provider:"Push Gaming"},
    {id:6,src:popular6,title:"Mermaids",provider:"Tornado Games"},
    {id:7,src:popular7,title:"Book of Valhalla",provider:"Thunderkick"}
  ]
  const handleMouseEnter = (id) => {
    setHover(id);
};
const handleMouseLeave = () => {
  setHover(null);
};
  return (
    <>
      <div className="new games mb-8">
        <div className="popular-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">Popular</h3>
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
                {popular.map((game)=>(
                <div key={game.id} className="card-item" onMouseEnter={()=>handleMouseEnter(game.id)} onMouseLeave={handleMouseLeave}>
                  <div className="game-card">
                    <img className="game-card-img" src={game.src} />
                    </div>
                    {hover ===game.id && (
                    <div className="game-card-content">
                        <div className="game-play">
                        <a className="game-play-btn" href={game.slug}><FaPlay  className='play-btn' /></a>
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

export default Popular
