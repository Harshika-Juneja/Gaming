import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import topgame1 from "../../assets/topgamesimgs/topgame1.webp";
import topgame2 from "../../assets/topgamesimgs/topgame2.webp";
import topgame3 from "../../assets/topgamesimgs/topgame3.webp";
import topgame4 from "../../assets/topgamesimgs/topgame4.webp";
import topgame5 from "../../assets/topgamesimgs/topgame5.webp";
import topgame6 from "../../assets/topgamesimgs/topgame6.webp";
import topgame7 from "../../assets/topgamesimgs/topgame7.webp";
import topgame8 from "../../assets/topgamesimgs/topgame8.webp";
import topgame9 from "../../assets/topgamesimgs/topgame9.webp";
import topgame10 from "../../assets/topgamesimgs/topgame10.webp";
import topgame11 from "../../assets/topgamesimgs/topgame11.webp";
import topgame12 from "../../assets/topgamesimgs/topgame12.webp";

function TopGames() {
  const settings = {
    className: "center",
    arrows:true,
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  const topgames=[
    {src:topgame1,title:"Slayers Inc",provider:"Gamomat",btn:"Demo"},
    {src:topgame2,title:"Bonanza Billion",provider:"Gamomat",btn:"Demo"},
    {src:topgame3,title:"Lucie's Cats",provider:"Gamomat",btn:"Demo"},
    {src:topgame4,title:"Hands of Anubis",provider:"Gamomat",btn:"Demo"},
    {src:topgame5,title:"Sugar Rush",provider:"Gamomat",btn:"Demo"},
    {src:topgame6,title:"Juicy Fruits",provider:"Gamomat",btn:"Demo"},
    {src:topgame7,title:"Elvis Frog",provider:"Gamomat",btn:"Demo"},
    {src:topgame8,title:"Book of The Fallen",provider:"Gamomat",btn:"Demo"},
    {src:topgame9,title:"Merge Up",provider:"Gamomat",btn:"Demo"},
    {src:topgame10,title:"Gates of Olympus",provider:"Gamomat",btn:"Demo"},
    {src:topgame11,title:"Juicy Do Cluster",provider:"Gamomat",btn:"Demo"},
    {src:topgame12,title:"Dolphins Pearl",provider:"Gamomat",btn:"Demo"}
  ]
  return (
    <>
      <div className="topgames mb-8">
        <div className="topgames-wrapper">
          <div className="section-header">
            <h3 className="section-heading">Top Games</h3>
            <div className="section-link-btns">
              <button className="btn see-more-btn link-btn btn-outline">
                See All
              </button>
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
                {topgames.map((topgame)=>(
                <div className="topgame">
                  <div className="game-img-block">
                  <img className="game-img" src={topgame.src} />
                  </div>
                  <div className="game-action">
                    <div className="game-play">
                      <button className="btn game-play-btn">
                      <FaPlayCircle className="play-icon" />
                      </button>
                      <div className="game-title">
                       <a href="/game/rames-book">{topgame.title}</a> 
                      </div>
                      <div className="game-provider">
                      {topgames.provider}
                      </div>
                    </div>
                    <div className="game-demo">
                      <button className="demo-btn">{topgame.btn}</button>
                    </div>
                  </div>
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

export default TopGames;
