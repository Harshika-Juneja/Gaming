import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import './Main.css'
function HeroSection() {
  let settings = {
   id:"banner",
   className: "banner",
   dots:true,
   arrows: true,
   infinite: true,
   fade: true,
   autoplay: true,
   speed: 1000,
   slidesToShow:4,
   slidesToScroll:1,
 };
 const images=[
  {src: banner1, alt:"Banner1",title:"Welcome Package",heading:"UP TO $100",subheading:"NO SIGN UP FEE!"},
  {src: banner2, alt:"Banner2",title:"Play'n Go Tournament",heading:"THE LEGENDS",subheading:"€75,000 PRIZE POOL"},
  {src: banner3, alt:"Banner3",title:"Lucky Draw",heading:"WIN UP TO",subheading:"$1000"},
]
  return (
    <>
    <div className='imgslide relative'> 
    <Slider {...settings} >
    {images.map((slide)=>(
          <div className='imgslider z-0 h-3/4 relative w-2/3'>
            <div className="banner-content text-white absolute z-10 w-2/4" >
              <p className='slide-title text-4xl mb-6 font-semibold'>{slide.title}</p>
              <h2 className='slide-heading text-6xl font-bold mt-6'>{slide.heading}
                <span className="block mt-1">{slide.subheading}</span></h2>
              <button className="btn link-btn widget-btn">JOIN NOW</button>
            </div>
            <div className='banner-background'>
            <img 
            src={slide.src} 
            alt={slide.alt}
           className="w-full h-3/4 object-contain rounded-xl shadow-2xl"/>
           </div>
          </div>
        ))}
    </Slider> 
    </div>
    </>
  )
}

export default HeroSection
