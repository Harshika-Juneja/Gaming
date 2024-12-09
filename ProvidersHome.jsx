import React, { useState } from 'react'
import { CiPlay1 } from "react-icons/ci";
import Slider from "react-slick";
import provider1 from "../../assets/providerimgs/provider1.svg";
import provider2 from "../../assets/providerimgs/provider2.svg";
import provider3 from "../../assets/providerimgs/provider3.svg";
import provider4 from "../../assets/providerimgs/provider4.svg";
import provider5 from "../../assets/providerimgs/provider5.svg";
import provider6 from "../../assets/providerimgs/provider6.svg";
import provider7 from "../../assets/providerimgs/provider7.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css'
function ProvidersHome() {
  const settings = {
    dots:false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
   };
   
  const providers=[
    {id:1,src:provider1},
    {id:2,src:provider2},
    {id:3,src:provider3},
    {id:4,src:provider4},
    {id:5,src:provider5},
    {id:6,src:provider6},
    {id:7,src:provider7}
  ]

  return (
    <>
      <div className="provider mb-8">
        <div className="provider-wrapper">
          <div className="section-header">
            <h3 className="section-heading promo-heading">Providers</h3>
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
          <div className="promo-slider providerslider">
            <div className="slider-container">
              <Slider {...settings}>
                {providers.map((provider)=>(
              // <div>
                <div key={provider.id} className="card-item" >
                  <div className="provider-card">
                    <a href={provider.slug} className="game-card-link">
                    <img className="game-card-img" src={provider.src} />
                    </a>
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

export default  ProvidersHome
