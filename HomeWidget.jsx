import React from 'react'
import soccer from "../../assets/widget/soccer.svg";
import team1 from "../../assets/widget/team1.png";
import team2 from "../../assets/widget/team2.png";
import team3 from "../../assets/widget/team3.png";
import team4 from "../../assets/widget/team4.png";
import team5 from "../../assets/widget/team5.png";
import team6 from "../../assets/widget/team6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomeWidget() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const widgets = [
    { id: 1, country: "Germany,Bundesliga", teamimg1: team1, teamimg2: team2, date: "Aug 28,01:00", team1: "VfB Stuttgart", team2: "FSV Mainz 05", coeff1: "1.6", coeff2: "4.9", coeffx: "4.1" },
    { id: 2, country: "Germany,Bundesliga", teamimg1: team3, teamimg2: team4, date: "Aug 28,01:00", team1: "VfB Stuttgart", team2: "FSV Mainz 05", coeff1: "1.6", coeff2: "4.9", coeffx: "4.1" },
    { id: 3, country: "Germany,Bundesliga", teamimg1: team5, teamimg2: team6, date: "Aug 28,01:00", team1: "VfB Stuttgart", team2: "FSV Mainz 05", coeff1: "1.6", coeff2: "4.9", coeffx: "4.1" }
  ]
  return (
    <>
      <div className="home-sports-widget">
        <div className='container'>
          {/* <div className='widget-bg-text'>Sport</div> */}
          <div className='widget-content'>
            <h3 className='widget-title'>Top events with top odds.
              <span>Pick your game!</span></h3>
            <a className="btn link-btn widget-btn" href="/sports">Place Bet</a>
          </div>
          <div className='promo-slider widget-slider '>
            <Slider {...settings}>
              {widgets.map((widget) => (
                <div className="card-item">
                  <div key={widget.id} className='widget-slider-card'>
                    <div className='widget-card-header'>
                      <div className='widget-card-details'>
                        <img className='widget-icon-img' src={soccer} />
                        <span className=''>{widget.country}</span>
                      </div>
                      <span className='widget-card-date'>{widget.date}</span>
                    </div>
                    <div className='widget-card-teams'>
                      <div className='team-details'>
                        <div className='team-img-wrapper'>
                          <img src={widget.teamimg1} className='team-img' />
                        </div>
                        <span className='team-title'>{widget.team1}</span>
                      </div>
                      <div className="team-vs">VS</div>
                      <div className='team-details'>
                        <div className='team-img-wrapper'>
                          <img src={widget.teamimg2} className=' team-img' />
                        </div>
                        <span className='team-title'>{widget.team2}</span>
                      </div>
                    </div>
                    <div className='widget-card-bets'>
                      <a className='widget-card-bet-links'>
                        <span>1</span>
                        <span className='card-coefficient'>{widget.coeff1}</span>
                      </a>
                      <a className='widget-card-bet-links'>
                        <span>X</span>
                        <span className='card-coefficient'>{widget.coeffx}</span>
                      </a>
                      <a className='widget-card-bet-links'>
                        <span>2</span>
                        <span className='card-coefficient'>{widget.coeff2}</span>
                      </a>
                    </div>
                  </div>
                </div>


              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeWidget;
