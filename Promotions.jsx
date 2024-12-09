import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Slider from "react-slick";
import promo1 from "../../../assets/promo1.webp";
import promo2 from '../../../assets/promo2.webp';
import promo3 from '../../../assets/promo3.webp';
import promo4 from '../../../assets/promo4.webp';
import promo5 from '../../../assets/promo5.webp';
import promo6 from '../../../assets/promo6.webp';
import './Promotions.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Promotions() {
  const settings = {
    dots:false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
   };

  const promotions=[
    {src:promo1,title:"First Deposit Bonus",text:"25% upto €1,000",addtext:"+ 50 Free Spins "},
    {src:promo2,title:"Second Deposit Bonus",text:"100% UP TO €250",addtext:"+ 100 Free Spins "},
    {src:promo3,title:"Third Deposit Bonus",text:"50% up to €750 ",addtext:"+ 50 Free Spins"},
    {src:promo4,title:"Fourth Deposit Bonus",text:"100% UP TO €500",addtext:"+ 100 Free Spins "},
    {src:promo5,title:"Fifth Deposit Bonus",text:"100% UP TO €500",addtext:"+ 100 Free Spins "},
    {src:promo6,title:"Sixth Deposit Bonus",text:"100% UP TO €500",addtext:"+ 100 Free Spins "}
  ]
  return (
    <>
      <div className="promotions mb-8">
        <div className="promotion-wrapper">
          <div className="promotion-header">
            <h3 className="promo-heading">Promotions</h3>
            <div className="promo-link-btns">
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
                {promotions.map((promo)=>(
              <div>
                <div className="promotions-item">
                  <div className="promotion-card">
                    <img className="promotion-card-img" src={promo.src} />
                    <div className="promotion-card-content">
                      <div className="card-top-content">
                        <h4 className="promo-card-title">
                        {promo.title}
                        </h4>
                        <p className="promo-card-text">
                        {promo.text}
                          <span>{promo.addtext} </span>
                        </p>
                      </div>
                      <div className="card-bottom-content">
                        <div className="promo-card-btns">
                        <a href="/signin" className="btn link-btn promo-card-btn">Sign Up</a>
                        <button className="text-btn">
                          <IoMdInformationCircleOutline />
                        </button>
                        </div>
                        <div className="promo-card-bonus-code">
                        </div>
                      </div>
                    </div>
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

export default Promotions;
